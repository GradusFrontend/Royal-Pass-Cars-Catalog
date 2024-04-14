import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { CreateHeader, reloadCarCards } from '../../modules/ui';
import { getData } from '../../modules/http';

CreateHeader()
const swiper = new Swiper('.main-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

const carId = location.search.split('=').at(-1)
let carType = ''
const car_title = document.querySelector('.car_title')
const car_name = document.querySelector('.car_name')
const car_type_text = document.querySelector('.car_type_text')
const oil_text = document.querySelector('.oil_text')
const car_speed = document.querySelector('.car_speed')
const car_desc = document.querySelector('.car_desc')
const car_price_text = document.querySelector('.car_price_text')
const swiper_wrapper = document.querySelector('.swiper-wrapper')
const offer_cars = document.querySelector('.offer_cars')


getData(`/cars/${carId}`)
  .then(res => {
      car_title.innerHTML = res.data.data.model
      car_name.innerHTML = res.data.data.model
      car_type_text.innerHTML = res.data.data.category.title
      oil_text.innerHTML = res.data.data.gas + ' топливо'
      car_speed.innerHTML = res.data.data.speed + ' км/час'
      car_desc.innerHTML = res.data.data.description
      car_price_text.innerHTML = (res.data.data.price / 31).toFixed(2) + '$/месяц'
      carType = res.data.data.categoryId
      console.log(carType);
      swiper_wrapper.innerHTML = ''

      for(let item of res.data.data.images) {
        swiper_wrapper.innerHTML += `
        <div class="swiper-slide main-slide"> <img src="${item.url}" alt=""></div>
        `
      }
  })

  getData(`/cars`)
    .then(res => {
      reloadCarCards(res.data.data.slice(0, 36), offer_cars)
      let cardSwiper = new Swiper('.card_swiper', {
        direction: 'horizontal',
        loop: true,
        autoplay: {
            delay: 3000
        },
    });
    })

  


