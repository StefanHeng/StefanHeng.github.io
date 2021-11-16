"""
Upload a file to Google Drive & get publically sharable URL
"""

from icecream import ic


# def upload():
#     file_metadata = {'name': 'photo.jpg'}
#     media = MediaFileUpload('files/photo.jpg', mimetype='image/jpeg')
#     file = drive_service.files().create(body=file_metadata,
#                                     media_body=media,
#                                     fields='id').execute()
#     print 'File ID: %s' % file.get('id')


if __name__ == '__main__':
    from google_service import Create_Service

    CLIENT_SECRET_FILE = 'scripts/client-secret.json'
    API_NAME = 'drive'
    API_VERSION = 'v3'
    SCOPES = ['https://www.googleapis.com/auth/drive']

    service = Create_Service(CLIENT_SECRET_FILE, API_NAME, API_VERSION, SCOPES)
    ic(dir(service))

    results = service.files().list(
        q="mimeType = 'application/vnd.google-apps.folder'",
        spaces='drive',
        fields="nextPageToken, files(id, name)",
        pageToken=None).execute()
    items = results.get('files', [])

    for item in items:
        # print(u'{0} ({1})'.format(item['name'], item['id']))
        ic(item['name'], item['id'])

    # from google.auth import load_credentials_from_file

    # ic(load_credentials_from_file('scripts/oauth-client.json'))

    # from oauth2client.service_account import ServiceAccountCredentials
    # from apiclient.discovery import build
    # from apiclient.http import MediaFileUpload

    # #Set up a credentials object I think
    # creds = ServiceAccountCredentials.from_json_keyfile_name('oauth-client.json', ['https://www.googleapis.com/auth/drive'])

    # #Now build our api object, thing
    # drive_api = build('drive', 'v3', credentials=creds)

    # file_name = "test"
    # print "Uploading file " + file_name + "..."

    # #We have to make a request hash to tell the google API what we're giving it
    # body = {'name': file_name, 'mimeType': 'application/vnd.google-apps.document'}

    # #Now create the media file upload object and tell it what file to upload,
    # #in this case 'test.html'
    # media = MediaFileUpload('test.html', mimetype = 'text/html')

    # #Now we're doing the actual post, creating a new file of the uploaded type
    # fiahl = drive_api.files().create(body=body, media_body=media).execute()

    # #Because verbosity is nice
    # print "Created file '%s' id '%s'." % (fiahl.get('name'), fiahl.get('id'))
