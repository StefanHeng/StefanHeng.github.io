import os
from google_service import create_service
from googleapiclient.http import MediaFileUpload
import magic
from icecream import ic


def get_mime_type(fl_nm):
    """
    :param fl_nm: Path to a file
    """
    return magic.Magic(mime=True).from_file(fl_nm)


class GoogleDriveUploader:
    """
    Upload a file to Google Drive & get publicly sharable URL
    """

    CLIENT_SECRET_FILE = 'scripts/client-secret.json'
    API_NAME = 'drive'
    API_VERSION = 'v3'
    SCOPE = 'https://www.googleapis.com/auth/drive'

    def __init__(self):
        self.service = create_service(
            self.CLIENT_SECRET_FILE, self.API_NAME, self.API_VERSION, [self.SCOPE])
        # ic(dir(self.service))
        self.folders = self.get_folders()

    def get_folders(self):
        res = self.service.files().list(
            q="mimeType = 'application/vnd.google-apps.folder'",
            spaces='drive',
            fields='nextPageToken, files(id, name)',
            pageToken=None
        ).execute()
        return res.get('files', [])

    def get_folder_id(self, fd_nm):
        return next(filter(lambda x: x['name'] == fd_nm, self.folders))['id']

    def upload_files(self, fl_nms, fd_nm):
        """
        :param fl_nms: List of local file paths to upload
        :param fd_nm: The folder name in Google Drive to upload to
        :return: List of uploaded file ids
        """
        fd_id = self.get_folder_id(fd_nm)

        def upload_n_get_id(fl_nm):
            fl_nm_ = os.path.basename(fl_nm)
            res = self.service.files().create(
                body=dict(
                    name=fl_nm_,
                    parents=[fd_id]
                ),
                media_body=MediaFileUpload(fl_nm, mimetype=get_mime_type(fl_nm)),
                fields='id'
            ).execute()
            return res['id']
        return list(map(upload_n_get_id, fl_nms))

    def get_shareable_url(self, fl_ids, verbose=False):
        """
        :param fl_ids: List of file ids
        :param verbose: Print status
        :return: List of urls

        .. note:: File permissions are set to public
        """
        def _get(fl_id):
            res = self.service.permissions().create(
                fileId=fl_id,
                body=dict(
                    role='reader',
                    type='anyone'
                )
            ).execute()

            k = 'webViewLink'
            res = self.service.files().get(
                fileId=fl_id,
                fields=k
            ).execute()

            if verbose:
                ic('Changed file permission for', res)
            return res[k]
        return list(map(_get, fl_ids))


if __name__ == '__main__':
    os.chdir('..')
    fdnm = 'StefanHeng.github.io'

    gdu = GoogleDriveUploader()
    ic(gdu.folders[:5])
    ic(gdu.get_folder_id(fdnm))

    ids = gdu.upload_files(['upload-resources/CV 2.0, Stefan Heng, 11.16.21.pdf'], fdnm)
    ic(gdu.get_shareable_url(ids, verbose=True))
