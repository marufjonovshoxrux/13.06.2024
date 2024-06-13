const btns = document.querySelectorAll('[data-modal]')
const modal = document.querySelector('.modal')
const close = document.querySelector('[data-close]')

btns.forEach(btn => {
    btn.onclick = () => {
        modal.classList.add('show')
    }
});
close.onclick = () => {
    modal.classList.remove('show')
}



const slides = document.querySelectorAll('.offer__slide')
const prev = document.querySelector('.offer__slider-prev')
const next = document.querySelector('.offer__slider-next')
const current = document.querySelector('#current')
let total = document.querySelector('#total')
let slideIndex = 0




function slidesShow(n) {
    if (n > slides.length - 1) {
        slideIndex = 0

    }

    if (n < 0) {
        slideIndex = slides.length - 1
    }

    slides.forEach((slide) => {
        slide.classList.add('hide')
    })
    slides[slideIndex].classList.remove('hide')


}

slidesShow()

next.onclick = () => {
    slideIndex++
    current.innerHTML = '0' + slideIndex
    slidesShow(slideIndex)

}

prev.onclick = () => {
    slideIndex--
    current.innerHTML = slideIndex
    slidesShow(slideIndex)



}





const tabs = document.querySelectorAll('.tabcontent')
const tabs_btn = document.querySelectorAll('.tabheader__item')



function tabShow(idx) {
    tabs.forEach((tab) => tab.classList.add('hide', 'fade'))
    tabs[idx].classList.remove('hide')
}

tabShow(0)

tabs_btn.forEach((btn, idx) => {
    btn.onclick = () => {
        tabShow(idx)
        document.querySelector('.tabheader__item_active').classList.remove('tabheader__item_active')
        btn.classList.add('tabheader__item_active')
    }

})



let deadline = '2024-06-16 00:00'
let deadlineNewYear = '2024-12-31 23:59'

const canvas = document.querySelector('#confetti')



const jsConfetti = new JSConfetti()


function getRemainigTime(endTime) {
    const t = Date.parse(endTime) - Date.now(),
        days = Math.floor((t / 1000) / 60 / 60 / 24),
        hours = Math.floor((t / 1000) / 60 / 60 % 24),
        minutes = Math.floor((t / 1000) / 60 % 60),
        seconds = Math.floor((t / 1000) % 60);

    return {
        t,
        days,
        hours,
        minutes,
        seconds
    }


}




function setTimer(endTime, selector) {
    const t = document.querySelector(selector),
        days = t.querySelector('#days'),
        hours = t.querySelector('#hours'),
        minutes = t.querySelector('#minutes'),
        seconds = t.querySelector('#seconds'),
        interval = setInterval(updateTimer, 1000)


    function updateTimer() {
        const t = getRemainigTime(endTime)

        if (t.t <= 0) {
            clearInterval(interval)
            days.innerHTML = '0'
            hours.innerHTML = '0'
            minutes.innerHTML = '0'
            seconds.innerHTML = '0'
            jsConfetti.addConfetti().then(() => jsConfetti.addConfetti())
            return
        }

        days.innerHTML = t.days
        hours.innerHTML = t.hours
        minutes.innerHTML = t.minutes
        seconds.innerHTML = t.seconds



    }


}


setTimer(deadline, '.timer.one')
setTimer(deadlineNewYear, '.timer.two')