// navToggler
const navToggler = document.querySelector('.navToggler');
navToggler.addEventListener('click', () => {
	navToggler.classList.toggle('fa-times');
	navToggler.classList.toggle('fa-bars');
	document.querySelector('ul').classList.toggle('active');
});

//Scrollowanie strony
function $scroll() {
	const goTo = $(this).attr('id');
	$('body, html').animate(
		{
			scrollTop: $(`.${goTo}`).offset().top
		},
		600
	);
}
$('.navBtn').on('click', $scroll);

//Scroll zmieniający kolor przycisków
document.addEventListener('scroll', () => {
	const scroll = window.scrollY + 3;
	const sections = [
		document.querySelector('.portfolio').offsetTop,
		document.querySelector('.about').offsetTop,
		document.querySelector('.skills').offsetTop,
		document.querySelector('.contact').offsetTop
	];
	const btnArr = [
		document.querySelector('#portfolio'),
		document.querySelector('#about'),
		document.querySelector('#skills'),
		document.querySelector('#contact')
	];
	for (i = 0; i < sections.length; i++) {
		if (scroll > sections[i]) {
			if (i === 0) {
				btnArr[i].classList.add('marked');
			} else if (i > 0) {
				btnArr[i].classList.add('marked');
				btnArr[i - 1].classList.remove('marked');
			}
		} else {
			btnArr[i].classList.remove('marked');
		}
	}
});

// navBar przyklejający się do "sufitu" i dodający przycisk home
const navBar = document.querySelector('nav');
const navBarOffTop = navBar.offsetTop;
let isNavBarActive = false;
const liChild = document.createElement('li');
liChild.setAttribute('id', 'welcome');
liChild.classList.add('navBtn');
liChild.innerHTML = '<i class="fas fa-home"></i>';
$(liChild).on('click', $scroll);
window.addEventListener('scroll', () => {
	const scroll = window.scrollY;
	if (scroll >= navBarOffTop) {
		if (isNavBarActive === false) {
			navBar.classList.add('active');
			document.querySelector('ul').prepend(liChild);
			isNavBarActive = true;
		}
	} else {
		navBar.classList.remove('active');
		if (isNavBarActive) {
			document.querySelector('ul').removeChild(liChild);
		}
		isNavBarActive = false;
	}
});
