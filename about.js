// ABOUT_ME SECTION

// RUN APP
const openBtn = document.querySelectorAll('.icon');
const closeBtn = document.querySelectorAll('.close');
const appTitles = document.querySelectorAll('.titleBar');

openBtn.forEach((item) => {
	item.addEventListener('click', function() {
		document.querySelector(`.${this.attributes.id.value}`).classList.add('show');
	});
});

closeBtn.forEach((item) => {
	item.addEventListener('click', function() {
		document.querySelector(`.${this.attributes.id.value}`).classList.remove('show');

		if (this.attributes.id.value === 'aboutMe') {
			id.forEach((i) => {
				if (i) {
					clearInterval(i);
				}
			});
			beforePar.textContent = '';
			innerPar.textContent = '';
			afterPar.textContent = '';
			intrestsPar.textContent = '';
			document.querySelectorAll('.paragraph').forEach((item) => {
				item.classList.remove('printed');
			});

			for (let i = 0; i < isPrinted.length; i++) {
				isPrinted[i] = false;
			}
		}
	});
});
const scroll = window.scrollY;
const aboutOffsetTop = document.querySelector('.about').offsetTop;

appTitles.forEach((item) => {
	item.addEventListener('mousedown', function(e) {
		const arr = [...appTitles];
		const index = arr.findIndex((element) => element.attributes.id != item.attributes.id);
		const sib = arr[index].parentElement.parentElement;
		const app = item.parentElement.parentElement;
		sib.style.zIndex = 0;
		app.style.zIndex = 1;

		let appX;
		let appY;
		const insertX = e.offsetX;
		const insertY = e.offsetY;
		const scroll = window.scrollY;
		const aboutOffsetTop = document.querySelector('.about').offsetTop;

		const curtain = document.createElement('div');
		curtain.style.position = 'absolute';
		curtain.style.backgroundColor = 'transparent';
		curtain.style.top = `${-60}px`;
		curtain.style.left = 0;

		item.appendChild(curtain);
		curtain.style.width = `${app.offsetWidth}px`;
		curtain.style.height = `${app.offsetHeight + 60}px`;

		curtain.addEventListener('mousemove', (e) => {
			if (window.innerWidth > 1680) {
				const wrapper = document.querySelector('.wrapper');
				appX = e.clientX - (window.innerWidth - wrapper.offsetWidth) / 2 - insertX;
			} else {
				appX = e.clientX - insertX;
			}

			if (scroll <= aboutOffsetTop) {
				let diff = aboutOffsetTop - scroll;
				appY = e.clientY - insertY - diff;
			} else {
				let diff = scroll - aboutOffsetTop;
				appY = e.clientY - insertY + diff;
			}

			app.style.left = `${appX}px`;
			app.style.top = `${appY}px`;
		});
		curtain.addEventListener('mouseout', () => {
			curtain.remove();
		});
		curtain.addEventListener('mouseup', () => {
			curtain.remove();
		});
	});
});

// INNER APPs FUNCTIONS
const goToBtn = document.querySelectorAll('.btn');
const beforePar = document.querySelector('.beforePar');
const innerPar = document.querySelector('.innerPar');
const afterPar = document.querySelector('.afterPar');
const intrestsPar = document.querySelector('.interstsPar');
const cursor = document.querySelectorAll('.cursor');

const cursorFlash = () => {
	cursor.forEach((cursor) => cursor.classList.toggle('active'));
};

setInterval(cursorFlash, 400);

const text = [
	[
		'Witaj, Nazywam się',
		' Łukasz Paszko. ',
		'Z wykształcenia jesten inżynierem i od ponad czterech lat zawodowo związany jestem z branżą budowlaną. Programowaniem, tworzeniem stron i aplikacji webowych interesuję się już od dłuższego czasu. Praktycznie każdy wolny czas poświęcam na rozwój w tym kierunku. W przyszłości chciałbym swoje zainteresowania przekuć w mój nowy zawód.'
	],
	['Piwowarstwo domowe, Formuła 1, Programowanie oraz wiele innych...']
];
const spans = [[beforePar, innerPar, afterPar], [intrestsPar]];
const isPrinted = [false, false];
let id = [null, null];

const addText = (a) => {
	isPrinted[a] = !isPrinted[a];
	let letterIndex = 0;
	let textIndex = 0;

	const print = (a) => {
		spans[a][textIndex].textContent += text[a][textIndex][letterIndex];
		letterIndex++;
		if (letterIndex >= text[a][textIndex].length) {
			letterIndex = 0;
			textIndex++;
		}

		textIndex > text[a].length - 1 ? clearInterval(id[a]) : null;
	};

	id[a] = setInterval(print, 50, a);
};

goToBtn.forEach((btn) => {
	btn.addEventListener('click', () => {
		let a = null;

		switch (btn.id) {
			case 'aboutParagraph':
				a = 0;
				break;
			case 'intrestsParagraph':
				a = 1;
				break;
			default:
				a = null;
				break;
		}
		if (!isPrinted[a] && a !== null) {
			setTimeout(addText, 1200, a);
		}
		document.querySelector(`.${btn.id}`).classList.toggle('printed');
	});
});
