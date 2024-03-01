burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')

burger.addEventListener('click', () =>{
    rightNav.classList.toggle('visibility-resp')
    navList.classList.toggle('visibility-resp')
    navbar.classList.toggle('nav-height-resp')
})