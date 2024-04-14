import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { getData } from "/modules/http";
import { CreateHeader, reloadCarCards } from "../../modules/ui";
CreateHeader()

const amount = document.querySelector('.amount')
const cost = document.querySelector('.num')
const range = document.querySelector('.range')
const cardPlace = document.querySelector('.body_of_site .right')
range.oninput = () => {
    cost.innerHTML = range.value
}

const form = document.forms.namedItem('form')
const search = document.querySelector('.search')
let query = localStorage.getItem('query')

if(!query) {
    getData('/cars')
    .then(res =>{
        reloadCarCards(res.data.data, cardPlace)
        let cardSwiper = new Swiper('.card_swiper', {
            direction: 'horizontal',
            loop: true,
            autoplay: {
                delay: 3000
            },
        });
    })
}

getData('/cars')
    .then(res => {
        let filtered = []
        res.data.data.filter(item => {
            if (item.model.toLowerCase().includes(query.toLowerCase())) {
                filtered.push(item)
            }
        })

        reloadCarCards(filtered, cardPlace)
        let cardSwiper = new Swiper('.card_swiper', {
            direction: 'horizontal',
            loop: true,
            autoplay: {
                delay: 3000
            },
        });
    })

form.onsubmit = (e) => {
    e.preventDefault()
    let fm = new FormData(e.target)
    let obj = {}
    fm.forEach((val, key) => obj[key] = val)
    const { mark, date, spent, run, spent_for_100 } = obj
    if (mark && date && spent && run && spent_for_100) {
        getData('/cars')
            .then(res => {
                let filtered = []
                res.data.data.filter(item => {
                    if ((item.price / 30) <= range.value || item.mark.toLowerCase().includes(mark.toLowerCase()) && item.mileage <= +spent && item.gas <= +spent_for_100 && item.speed <= +run) {
                        filtered.push(item)
                    }
                })

                reloadCarCards(filtered, cardPlace)
                let cardSwiper = new Swiper('.card_swiper', {
                    direction: 'horizontal',
                    loop: true,
                    autoplay: {
                        delay: 3000
                    },
                });
            })
    }
}


search.onblur = () => {
    const value = search.value
    if (value) {
        getData('/cars')
            .then(res => {
                let filtered = []
                res.data.data.filter(item => {
                    if (item.model.toLowerCase().includes(value.toLowerCase())) {
                        filtered.push(item)
                    }
                })

                reloadCarCards(filtered, cardPlace)
                let cardSwiper = new Swiper('.card_swiper', {
                    direction: 'horizontal',
                    loop: true,
                    autoplay: {
                        delay: 3000
                    },
                });

            })
    }
}

