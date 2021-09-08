'use strict';

const carouselPadding = 10;

window.onload = () => {
    const carousels = document.getElementsByClassName('sh-carousel__viewport');

    if (carousels.length) {
        const widthItem = carousels[0].getBoundingClientRect().width - 2 * carouselPadding;

        const carouselItems = document.getElementsByClassName('sh-carousel__scroll-item');
        const maxHeight = window.innerHeight * 0.375;
        console.log('docment', maxHeight);

        for (var i = 0; i < carouselItems.length; i++) {
            const e = carouselItems[i];
            const imgs = e.querySelectorAll('img');
            if (imgs.length) {
                const img = imgs[0];

                carouselItems[i].style.width = `${widthItem}px`;

                if (img.getBoundingClientRect().height > maxHeight) {
                    carouselItems[i].style.height = `${maxHeight}px`;
                }
            }
         }
    }
    // console.log(carousels);
}

