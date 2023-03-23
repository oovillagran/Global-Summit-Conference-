// hamburguer menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navBarMenu = document.querySelector('.navbar-menu');
const logo = document.querySelector('.logo');
const main = document.querySelector('.main');
const footer = document.querySelector('.footer-about');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  navBarMenu.classList.add('display');
  logo.classList.add('hidden');
  main.classList.toggle('active');
  footer.classList.toggle('active');
});

document.querySelectorAll('.link-menu').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  main.classList.remove('active');
  footer.classList.remove('active');
}));
