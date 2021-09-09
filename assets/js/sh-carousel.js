'use strict';

const carouselPadding = 10;

window.onload = () => {
    const carousels = document.getElementsByClassName('sh-carousel__viewport');

    if (carousels.length) {
        const widthItem = carousels[0].getBoundingClientRect().width - 2 * carouselPadding;

        const carouselItems = document.getElementsByClassName('sh-carousel__scroll-item');
        const maxHeight = Math.round(window.innerHeight * 0.375);
        console.log('docment', maxHeight);

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
                    console.log('her');
                    if (media[j].tagName === 'DIV') {
                        const badDivs = media[j].querySelectorAll('.fluid-width-video-wrapper');
                        console.log(badDivs);

                        for (var k = 0; k < badDivs.length; k++) {

                            badDivs[k].style.paddingTop = '0px';
                            badDivs[k].style.height = `${maxHeight}px`;
                            console.log('top', badDivs[k]);
                        }

                        media[j].style.height = `${maxHeight}px`;
                        media[j].style.width = `${maxHeight * 16 / 9}px`;
                        // media[j].style.border = `1px solid red`;
                        // console.log(media[j], media[j].firstChild);
                        // media[j].firstChild.style.paddingTop = '0';
                    }
                }
            }
         }
    }

    window.setInterval(function(){
        const badDivs = document.querySelectorAll('.fluid-width-video-wrapper');
        console.log(badDivs);
        for (var k = 0; k < badDivs.length; k++) {

            badDivs[k].style.paddingTop = '0px';
            console.log('top', badDivs[k]);
        }
      }, 1000);
}

