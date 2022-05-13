let navbar = document.querySelector('.nav-bar')

document.querySelector('#menu-btn').addEventListener('click', toggleMenu)

function toggleMenu () {
    navbar.classList.toggle('active')
    cartContainer.classList.remove('active')
    searchForm.classList.remove('active')
}

let cartContainer = document.querySelector('.cart-container')

document.querySelector('#cart-btn').addEventListener('click', toggleCart)

function toggleCart () {
    cartContainer.classList.toggle('active')
    navbar.classList.remove('active')
    searchForm.classList.remove('active')
}

let searchForm = document.querySelector('.search-form')

document.querySelector('#search-btn').addEventListener('click', toggleForm)

function toggleForm () {
    searchForm.classList.toggle('active')
    navbar.classList.remove('active')
    cartContainer.classList.remove('active')
}

window.onscroll = () => {
    navbar.classList.remove('active')
    cartContainer.classList.remove('active')
    searchForm.classList.remove('active')
}