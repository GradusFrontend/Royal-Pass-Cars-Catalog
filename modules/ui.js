export function CreateHeader() {
    const header = document.createElement('header')
    const left = document.createElement('div')
    const center = document.createElement('div')
    const right = document.createElement('div')
    const burger_menu = document.createElement('div')
    const img_1 = document.createElement('img')
    const main = document.createElement('nav')
    const img_2 = document.createElement('img')
    const a_1 = document.createElement('a')
    const a_2 = document.createElement('a')
    const a_3 = document.createElement('a')
    const a_4 = document.createElement('a')
    const registration = document.createElement('button')
    const img_3 = document.createElement('img')
    const p = document.createElement('p')
    const phone_number = document.createElement('div')
    const languages = document.createElement('div')
    const ru = document.createElement('p')
    const en = document.createElement('p')
    const dialog = document.createElement('dialog')
    // b
    img_1.src = '/public/icons/burger-menu.svg'
    languages.className = 'languages'
    ru.className = 'ru active_language'
    en.className = 'en'
    en.innerHTML = 'EN'
    ru.innerHTML = 'RU'
    left.className = 'left'
    center.className = 'center'
    img_3.src = '/public/icons/phone-call.svg'
    p.innerHTML = '+1 347 828 7777'
    right.className = 'right'
    header.className = 'header'
    phone_number.className = 'phone_number'
    main.classList.add('main')
    img_2.src = '/public/icons/logo.png'
    registration.innerHTML = 'Регистрация'
    registration.classList.add('registration')
    burger_menu.className = 'burger-menu'
    a_1.innerHTML = 'Главная'
    a_1.href = '/'
    a_2.innerHTML = 'Каталог'
    a_2.href = '/pages/search/'
    a_3.innerHTML = 'Контакты'
    a_4.innerHTML = 'Стать партнёром'
    //c
    languages.append(en, ru)
    phone_number.append(img_3, p)
    right.append(phone_number, languages, registration)
    center.append(img_2)
    burger_menu.append(img_1)
    main.append(a_1, a_2, a_3, a_4)
    left.append(burger_menu, main)
    header.append(left, center, right)
    document.body.prepend(header, dialog)
    // d
    dialog.classList.add('regist')
    dialog.innerHTML = `
            <div class="head">
            <div class="round">
                <img src="/public/icons/line.svg" alt="">
            </div>
            <div class="round">
                <img class="cancel" src="/public/icons/cancel.svg" alt="">
            </div>
        </div>
        <h2>
            Регистрация
        </h2>
        <p>
            Войдите с помощью эл.почты либо через 
                                Google или Facebook
        </p>
        <form>
                Электронная почта
            <input placeholder="name@email.com" type="text">
            <button class="get__code">Получить код</button>
        </form>
        <p class="auto">
            Авторизуясь вы соглашаетесь с политикой 
        обработки персональных данных
        </p>
        <hr>
        <div class="apps">
            <div class="app">
                <img src="/public/icons/google.png" alt="">
            </div>
            <div class="app">
                <img src="/public/icons/facebook.png" alt="">
            </div>
        </div>
    `
    registration.onclick = () => {
        dialog.showModal()
    }
    const cancel = document.querySelector('.cancel')
    cancel.parentElement.onclick = () => {
        dialog.close()
    }
}



function reloadImgs(arr2) {
    let resultImgs = ``
    for (let img of arr2) {
        resultImgs += `
            <div class="swiper-slide card_slider">
               <img src="${img.url}" alt="">
            </div>
            `
    }

    return resultImgs
}
export function reloadCarCards(arr, place) {
    
    
    place.innerHTML = ''
    
    for (let item of arr) {
        place.innerHTML += `
        <div class="car_card">
        <div class="swiper card_swiper">
            <div class="swiper-wrapper">
                ${reloadImgs(item.images)}
            </div>
        </div>

        <div class="gas_info">
            <div class="expenses">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_80_246)">
                        <path
                            d="M8 2C8.13261 2 8.25979 2.05268 8.35355 2.14645C8.44732 2.24021 8.5 2.36739 8.5 2.5V4C8.5 4.13261 8.44732 4.25979 8.35355 4.35355C8.25979 4.44732 8.13261 4.5 8 4.5C7.86739 4.5 7.74021 4.44732 7.64645 4.35355C7.55268 4.25979 7.5 4.13261 7.5 4V2.5C7.5 2.36739 7.55268 2.24021 7.64645 2.14645C7.74021 2.05268 7.86739 2 8 2ZM3.732 3.732C3.82576 3.63826 3.95292 3.58561 4.0855 3.58561C4.21808 3.58561 4.34524 3.63826 4.439 3.732L5.354 4.646C5.44789 4.73989 5.50063 4.86722 5.50063 5C5.50063 5.13278 5.44789 5.26011 5.354 5.354C5.26011 5.44789 5.13278 5.50063 5 5.50063C4.86722 5.50063 4.73989 5.44789 4.646 5.354L3.732 4.439C3.63826 4.34524 3.58561 4.21808 3.58561 4.0855C3.58561 3.95292 3.63826 3.82576 3.732 3.732ZM2 8C2 7.86739 2.05268 7.74021 2.14645 7.64645C2.24021 7.55268 2.36739 7.5 2.5 7.5H4.086C4.21861 7.5 4.34579 7.55268 4.43955 7.64645C4.53332 7.74021 4.586 7.86739 4.586 8C4.586 8.13261 4.53332 8.25979 4.43955 8.35355C4.34579 8.44732 4.21861 8.5 4.086 8.5H2.5C2.36739 8.5 2.24021 8.44732 2.14645 8.35355C2.05268 8.25979 2 8.13261 2 8ZM11.5 8C11.5 7.86739 11.5527 7.74021 11.6464 7.64645C11.7402 7.55268 11.8674 7.5 12 7.5H13.5C13.6326 7.5 13.7598 7.55268 13.8536 7.64645C13.9473 7.74021 14 7.86739 14 8C14 8.13261 13.9473 8.25979 13.8536 8.35355C13.7598 8.44732 13.6326 8.5 13.5 8.5H12C11.8674 8.5 11.7402 8.44732 11.6464 8.35355C11.5527 8.25979 11.5 8.13261 11.5 8ZM12.254 3.754C12.1846 3.6853 12.092 3.64512 11.9944 3.64142C11.8968 3.63772 11.8014 3.67075 11.727 3.734L7.547 7.31C7.45072 7.39243 7.37272 7.49406 7.318 7.60838C7.26328 7.72271 7.23304 7.8472 7.22923 7.97389C7.22542 8.10058 7.24811 8.22667 7.29585 8.34407C7.3436 8.46148 7.41535 8.56762 7.50649 8.65569C7.59764 8.74376 7.70618 8.81182 7.82516 8.8555C7.94414 8.89919 8.07093 8.91754 8.19741 8.90938C8.3239 8.90122 8.44728 8.86673 8.55966 8.80811C8.67203 8.7495 8.77093 8.66805 8.85 8.569L12.284 4.272C12.3435 4.19713 12.3735 4.10299 12.3681 4.00748C12.3628 3.91197 12.3225 3.82176 12.255 3.754H12.254Z"
                            fill="#474747" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M6.6639 15.8889C5.62784 15.7135 4.63647 15.3357 3.74642 14.7771C2.85636 14.2185 2.08503 13.4901 1.47649 12.6334C0.247466 10.9033 -0.243929 8.75584 0.1104 6.66341C0.464729 4.57099 1.63576 2.70502 3.36588 1.476C5.09599 0.246978 7.24347 -0.244418 9.3359 0.109911C11.4285 0.464241 13.2946 1.63532 14.5237 3.36553C15.7528 5.09574 16.2442 7.24335 15.8899 9.33591C15.5356 11.4285 14.3645 13.2946 12.6343 14.5237C10.9041 15.7528 8.75646 16.2442 6.6639 15.8899V15.8889ZM1.9989 11.6059C3.82268 10.5509 5.89297 9.99686 7.9999 9.99991C10.1859 9.99991 12.2359 10.5849 14.0009 11.6059C14.6388 10.5438 14.9833 9.33132 14.9993 8.09244C15.0153 6.85357 14.7022 5.63264 14.092 4.55436C13.4818 3.47608 12.5963 2.57908 11.526 1.95497C10.4557 1.33087 9.23888 1.00202 7.9999 1.00202C6.76092 1.00202 5.54414 1.33087 4.47383 1.95497C3.40352 2.57908 2.51803 3.47608 1.90781 4.55436C1.29758 5.63264 0.98448 6.85357 1.00048 8.09244C1.01649 9.33132 1.36102 10.5438 1.9989 11.6059Z"
                            fill="#474747" />
                    </g>
                    <defs>
                        <clipPath id="clip0_80_246">
                            <rect width="16" height="16" fill="white" />
                        </clipPath>
                    </defs>
                </svg>

                <h4>${item.speed} км/ч</h4>
            </div>

            <div class="acceleration">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_80_247)">
                        <path
                            d="M1 2C1 1.46957 1.21071 0.960859 1.58579 0.585786C1.96086 0.210714 2.46957 0 3 0H9C9.53043 0 10.0391 0.210714 10.4142 0.585786C10.7893 0.960859 11 1.46957 11 2V10C11.5304 10 12.0391 10.2107 12.4142 10.5858C12.7893 10.9609 13 11.4696 13 12V12.5C13 12.6326 13.0527 12.7598 13.1464 12.8536C13.2402 12.9473 13.3674 13 13.5 13C13.6326 13 13.7598 12.9473 13.8536 12.8536C13.9473 12.7598 14 12.6326 14 12.5V8H13.5C13.3674 8 13.2402 7.94732 13.1464 7.85355C13.0527 7.75979 13 7.63261 13 7.5V4.375C13 4.24239 13.0527 4.11522 13.1464 4.02145C13.2402 3.92768 13.3674 3.875 13.5 3.875H14.995C14.984 3.399 14.942 2.981 14.794 2.653C14.7148 2.46228 14.5767 2.30183 14.4 2.195C14.216 2.085 13.936 2 13.5 2C13.3674 2 13.2402 1.94732 13.1464 1.85355C13.0527 1.75979 13 1.63261 13 1.5C13 1.36739 13.0527 1.24021 13.1464 1.14645C13.2402 1.05268 13.3674 1 13.5 1C14.064 0.998667 14.5347 1.11067 14.912 1.336C15.295 1.564 15.546 1.887 15.706 2.243C16.001 2.898 16 3.708 16 4.324V7.5C16 7.63261 15.9473 7.75979 15.8536 7.85355C15.7598 7.94732 15.6326 8 15.5 8H15V12.5C15 12.8978 14.842 13.2794 14.5607 13.5607C14.2794 13.842 13.8978 14 13.5 14C13.1022 14 12.7206 13.842 12.4393 13.5607C12.158 13.2794 12 12.8978 12 12.5V12C12 11.7348 11.8946 11.4804 11.7071 11.2929C11.5196 11.1054 11.2652 11 11 11V15H11.5C11.6326 15 11.7598 15.0527 11.8536 15.1464C11.9473 15.2402 12 15.3674 12 15.5C12 15.6326 11.9473 15.7598 11.8536 15.8536C11.7598 15.9473 11.6326 16 11.5 16H0.5C0.367392 16 0.240215 15.9473 0.146447 15.8536C0.0526784 15.7598 0 15.6326 0 15.5C0 15.3674 0.0526784 15.2402 0.146447 15.1464C0.240215 15.0527 0.367392 15 0.5 15H1V2ZM3.5 2C3.36739 2 3.24022 2.05268 3.14645 2.14645C3.05268 2.24022 3 2.36739 3 2.5V7.5C3 7.63261 3.05268 7.75979 3.14645 7.85355C3.24022 7.94732 3.36739 8 3.5 8H8.5C8.63261 8 8.75979 7.94732 8.85355 7.85355C8.94732 7.75979 9 7.63261 9 7.5V2.5C9 2.36739 8.94732 2.24022 8.85355 2.14645C8.75979 2.05268 8.63261 2 8.5 2H3.5Z"
                            fill="#474747" />
                    </g>
                    <defs>
                        <clipPath id="clip0_80_247">
                            <rect width="16" height="16" fill="white" />
                        </clipPath>
                    </defs>
                </svg>

                <h4>${item.gas} gas</h4>
            </div>
        </div>

        <h2 class="car_card_name">${item.model}</h2>
        <h4 class="car_card_type">${item.category.title}</h4>
        <h3 class="car_card_price_month">${(item.price / 31).toFixed(2)}</h3>

        <div class="car_card_btns">
            <button class="rent_btn">Арендовать</button>
            <a href="/pages/car/?id=${item.id}">
                <button class="car_card_show_more">Подробнее</button>
            </a>
        </div>
    </div>
        `
    }
}
