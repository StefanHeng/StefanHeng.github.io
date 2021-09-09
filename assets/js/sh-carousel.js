'use strict';

const carouselPadding = 10;

window.onload = () => {
    const maxHeight = Math.round(window.innerHeight * 0.375);

    const carousels = document.getElementsByClassName('sh-carousel__viewport');

    if (carousels.length) {
        const widthItem = carousels[0].getBoundingClientRect().width - 2 * carouselPadding;

        const carouselItems = document.getElementsByClassName('sh-carousel__scroll-item');

        for (var i = 0; i < carouselItems.length; i++) {
            const e = carouselItems[i];
            console.log('item', e);
            const media = e.querySelectorAll('img, .video__container');
            if (media.length) {
                const img = media[0];

                carouselItems[i].style.width = `${widthItem}px`;

                if (img.getBoundingClientRect().height > maxHeight) {
                    carouselItems[i].style.height = `${maxHeight}px`;
                }

                for (var j = 0; j < media.length; j++) {
                    if (media[j].tagName === 'DIV') {
                        media[j].style.height = `${maxHeight}px`;
                        media[j].style.width = `${maxHeight * 16 / 9}px`;
                    }
                }
            }
         }
    }

    window.setInterval(function(){
        const badDivs = document.querySelectorAll('.fluid-width-video-wrapper');
        for (var k = 0; k < badDivs.length; k++) {
            badDivs[k].style.height = `${maxHeight}px`;
            badDivs[k].style.paddingTop = '0px';
        }
      }, 1000);
}
