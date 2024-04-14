import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { CreateHeader, reloadCarCards } from './modules/ui';
import { getData } from './modules/http';
const BASE_URL = import.meta.env.VITE_BASE_URL

CreateHeader()
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


let type = 'all'

document.querySelectorAll(".accordion-item").forEach((item) => {
    item.querySelector(".accordion-item-header").addEventListener("click", () => {
        item.classList.toggle("open");
    });
});

const car_type_tabs = document.querySelectorAll('.car_type_tab')

car_type_tabs.forEach((item, idx) => {
    item.onclick = () => {
        car_type_tabs.forEach((tab, indx) => {
            tab.classList.remove('active_car_tab')
        })
        
        item.classList.add('active_car_tab')
        type = item.dataset.type
    }
})

const spec_offer = document.querySelector('.spec_offer')

getData('/cars')
.then(res =>{
    reloadCarCards(res.data.data.slice(1, 15), spec_offer)
    console.log(res.data.data.slice(1, 15));
    let cardSwiper = new Swiper('.card_swiper', {
        direction: 'horizontal',
        loop: true,
        autoplay: {
            delay: 3000
        },
    });
})

const car_query_inp = document.querySelector('#car_query_inp')
const car_query_btn = document.querySelector('.car_query_btn')

car_query_btn.onclick = () => {
    if(car_query_inp.value !== '') {
        localStorage.setItem('query', car_query_inp.value)
        location.assign('/pages/search/')
    }
}
