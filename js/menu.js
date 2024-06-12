const open = document.querySelector('#open')
const close = document.querySelector('#close')
const nav = document.querySelector('nav')
const scroll = document.querySelector('#scrollUp')
const cerrarNav = document.querySelector('ul')



scroll.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
    })
})

open.addEventListener('click', () => {
    nav.classList.add('visible')
})

close.addEventListener('click', () => {
    nav.classList.remove('visible')
})
cerrarNav.addEventListener('click', () => {
    nav.classList.remove('visible')
})