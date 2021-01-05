const menuToggle = document.querySelector('.toggle')
const showcase = document.querySelector('.showcase')
const home = document.querySelector('.home')
const aboutMe = document.querySelector('.about')
const contacts = document.querySelector('.contacts')
const projects = document.querySelector('.projects')


menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active')
    showcase.classList.toggle('active')
})

home.addEventListener('click', () => {
    menuToggle.classList.toggle('active')
    showcase.classList.toggle('active')
    window.location.href = 'index.html';
})

aboutMe.addEventListener('click', () => {
    menuToggle.classList.toggle('active')
    showcase.classList.toggle('active')
    window.location.href = 'about.html';
})

contacts.addEventListener('click', () => {
    menuToggle.classList.toggle('active')
    showcase.classList.toggle('active')
    window.location.href = 'contacts.html';
})

projects.addEventListener('click', () => {
    menuToggle.classList.toggle('active')
    showcase.classList.toggle('active')
    window.location.href = 'projects.html';
})