const burgerButton = document.getElementsByClassName('burger-container')[0];
const navbarMobile = document.getElementsByClassName('navbar-mobile')[0];

burgerButton.addEventListener('click', () => {
	navbarMobile.classList.toggle('active');
});
