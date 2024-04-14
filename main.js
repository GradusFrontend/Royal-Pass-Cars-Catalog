import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

new Swiper('.swiper_main', {

    direction: 'horizontal',
    loop: true,
    // autoplay: {
    //     delay: 4000
    // },

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

let cardSwiper = new Swiper('.card_swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 3000
    },
});
