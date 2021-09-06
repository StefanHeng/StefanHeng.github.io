'use strict';

const carouselPadding = 10;

window.onload = () => {
    const carousels = document.getElementsByClassName('sh-carousel__viewport');
    console.log()

    if (carousels.length) {
        const widthItem = carousels[0].getBoundingClientRect().width - 2 * carouselPadding;

        const carouselItems = document.getElementsByClassName('sh-carousel__scroll-item');
        console.log(carouselItems);
        console.log(widthItem);

        for (var i = 0; i < carouselItems.length; i++) {
            carouselItems[i].style.width = `${widthItem}px`;
            console.log(carouselItems[i].style.width, 'width');
         }
    }
    console.log(carousels);
}

