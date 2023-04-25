const profileImg = document.querySelector('.profile-card img')
const menuBtn = document.querySelector('.menu-btn')
const more = document.querySelector('.more')
const overlay = document.querySelector('.overlay')

menuBtn.addEventListener('click', () =>{
    profileImg.classList.toggle('img-expand')
    menuBtn.firstElementChild.classList.toggle('fa-times')
    menuBtn.firstElementChild.classList.toggle('menu-btn-opened')
    overlay.classList.toggle('overlay-opened')
    more.classList.toggle('more-opened')
})