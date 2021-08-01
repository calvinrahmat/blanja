let lc = document.getElementById('login-customer');
let ls = document.getElementById('login-seller');
let btn = document.getElementById('button');
let btnCustColor = document.getElementById('tog-cust');
let btnSellerColor = document.getElementById('tog-seller');

function loginSeller() {
	lc.style.left = '-400px';
	ls.style.left = '50px';
	btn.style.left = '110px';
	btnCustColor.style.color = '#9b9b9b';
	btnSellerColor.style.color = 'white';
}
function loginCustomer() {
	lc.style.left = '50px';
	ls.style.left = '450px';
	btn.style.left = '0px';
	btnCustColor.style.color = 'white';
	btnSellerColor.style.color = '#9b9b9b';
}

const burgerButton = document.getElementsByClassName('burger-container')[0];
const navbarMobile = document.getElementsByClassName('navbar-mobile')[0];
