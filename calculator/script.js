const display = document.querySelector('.output');
const acBtn = document.querySelector('.AC');
const numBtns = [...document.querySelectorAll('.num')];
const perBtn = document.querySelector('.percentage');
const sqrtBtn = document.querySelector('.sqrt');
const plusBtn = document.querySelector('.plus');
const minusBtn = document.querySelector('.minus');
const timesBtn = document.querySelector('.times');
const divideBtn = document.querySelector('.divide');
const equalsBtn = document.querySelector('.equals');
const negativeBtn = document.querySelector('.negative');
// Potrzebne zmienne
let a = null; //liczba 1
let b = null; //liczba 2
let c = null; //działanie
let d = false; // czy wykonała się funkcja "equals" ?
let res = null; // wynik działania
let f = false; // zadane zostało działanie?
let negative = false;
let percent = false;
let sqr = false;
// Obsługa przycisków cyfr
const addVal = (e) => {
	if (a !== null && f) {
		f = false;
		display.textContent = '';
	}

	if (d) {
		d = false;
		res = null;
		display.textContent = '';
	}

	if (negative) {
		if (display.textContent) {
			negative = false;
		} else {
			display.textContent += `-${e.target.textContent}`;
			negative = false;
		}
	} else {
		display.textContent += e.target.textContent;
	}

	percent = false;
	modeSwitch();
	console.log(a, b, c, d, res, f, negative, percent, sqr);
};
// Obsługa przycisków "+","-","*","/"
const neg = () => {
	if (negative === false) {
		negative = true;
	} else {
		negative = false;
	}
	modeSwitch();
};
const per = () => {
	if (Number(display.textContent) < 0) {
		return;
	} else if (a && c !== null) {
		percent = true;
	}
	modeSwitch();
};
const sqrt = () => {
	sqr = true;
	modeSwitch();
};
const ac = () => {
	a = null;
	b = null;
	c = null;
	d = false;
	res = null;
	f = false;
	negative = false;
	percent = false;
	display.textContent = '';
	modeSwitch();
};
const plus = () => {
	c = '+';
	if (f) {
		c = '+';
		return;
	}
	if (a) {
		equals();
	}
	if (d === true) {
		a = res;
		d = false;
		res = null;
	} else if (sqr) {
		a = Math.sqrt(display.textContent);
		sqr = false;
		modeSwitch();
	} else {
		a = display.textContent;
	}
	f = true;
};
const minus = () => {
	c = '-';
	if (f) {
		c = '-';
		return;
	}
	if (a) {
		equals();
	}
	if (d === true) {
		a = res;
		d = false;
		res = null;
	} else if (sqr) {
		a = Math.sqrt(display.textContent);
		sqr = false;
		modeSwitch();
	} else {
		a = display.textContent;
	}
	f = true;
};
const multiplication = () => {
	c = '*';
	if (f) {
		c = '*';
		return;
	}
	if (a) {
		equals();
	}
	if (d === true) {
		a = res;
		d = false;
		res = null;
	} else if (sqr) {
		a = Math.sqrt(display.textContent);
		sqr = false;
		modeSwitch();
	} else {
		a = display.textContent;
	}
	f = true;
};
const division = () => {
	c = '/';
	if (f) {
		c = '/';
		return;
	}
	if (a) {
		equals();
	}
	if (d === true) {
		a = res;
		d = false;
		res = null;
	} else if (sqr) {
		a = Math.sqrt(display.textContent);
		sqr = false;
		modeSwitch();
	} else {
		a = display.textContent;
	}
	f = true;
};
// Obiekt komputer
const comp = {
	addition: () => {
		if (sqr & percent) {
			b = Number(a) * Math.sqrt(Number(display.textContent) / 100);
			sqr = false;
		} else if (sqr) {
			b = Math.sqrt(display.textContent);
			sqr = false;
		} else if (percent) {
			b = Number(a) * Number(display.textContent) / 100;
			percent = false;
		} else {
			b = display.textContent;
		}
		res = Number(a) + Number(b);
		display.textContent = res;
		a = null;
		b = null;
	},
	subtraction: () => {
		if (sqr & percent) {
			b = Number(a) * Math.sqrt(Number(display.textContent) / 100);
			sqr = false;
		} else if (sqr) {
			b = Math.sqrt(display.textContent);
			sqr = false;
		} else if (percent) {
			b = Number(a) * Number(display.textContent) / 100;
			percent = false;
		} else {
			b = display.textContent;
		}
		res = Number(a) - Number(b);
		display.textContent = res;
		a = null;
		b = null;
	},
	multiplication: () => {
		if (sqr & percent) {
			b = Number(a) * Math.sqrt(Number(display.textContent) / 100);
			sqr = false;
		} else if (sqr) {
			b = Math.sqrt(display.textContent);
			sqr = false;
		} else if (percent) {
			b = Number(a) * Number(display.textContent) / 100;
			percent = false;
		} else {
			b = display.textContent;
		}
		res = Number(a) * Number(b);
		display.textContent = res;
		a = null;
		b = null;
	},
	division: () => {
		if (sqr & percent) {
			b = Number(a) * Math.sqrt(Number(display.textContent) / 100);
			sqr = false;
		} else if (sqr) {
			b = Math.sqrt(display.textContent);
			sqr = false;
		} else if (percent) {
			b = Number(a) * Number(display.textContent) / 100;
			percent = false;
		} else {
			b = display.textContent;
		}

		res = Number(a) / Number(b);
		display.textContent = res;
		a = null;
		b = null;
	}
};
// Obsługa przycisku "="
const equals = () => {
	d = true;
	if (a === null) {
		if (sqr) {
			sqr = false;
			res = Math.sqrt(display.textContent);
			display.textContent = res;
		}
		res = display.textContent;
		display.textContent = res;
	} else if (a !== null && c === '+') {
		comp.addition();
	} else if (a !== null && c === '-') {
		comp.subtraction();
	} else if (a !== null && c === '*') {
		comp.multiplication();
	} else if (a !== null && c === '/') {
		comp.division();
	}
	modeSwitch();
};
const modeSwitch = () => {
	if (negative) {
		document.querySelector('.mode span:nth-child(1)').classList.remove('active');
		document.querySelector('.mode span:nth-child(2)').classList.add('active');
	} else {
		document.querySelector('.mode span:nth-child(1)').classList.add('active');
		document.querySelector('.mode span:nth-child(2)').classList.remove('active');
	}

	if (percent) {
		document.querySelector('.mode span:nth-child(4)').classList.add('active');
	} else {
		document.querySelector('.mode span:nth-child(4)').classList.remove('active');
	}

	if (sqr) {
		document.querySelector('.mode span:nth-child(3)').classList.add('active');
	} else {
		document.querySelector('.mode span:nth-child(3)').classList.remove('active');
	}
};
//Przyciski z cyframi
numBtns.forEach((item) => {
	item.addEventListener('click', addVal);
});
//Przyciski działań
negativeBtn.addEventListener('click', neg);
perBtn.addEventListener('click', per);
sqrtBtn.addEventListener('click', sqrt);
acBtn.addEventListener('click', ac);
plusBtn.addEventListener('click', plus);
minusBtn.addEventListener('click', minus);
timesBtn.addEventListener('click', multiplication);
divideBtn.addEventListener('click', division);
equalsBtn.addEventListener('click', equals);
//Pamięć
const mPlusBtn = document.querySelector('.mPlus');
const mMinusBtn = document.querySelector('.mMinus');
const mrBtn = document.querySelector('.mr');
const mcBtn = document.querySelector('.mc');
const memory = document.querySelector('.memory span');
mPlusBtn.addEventListener('click', () => {
	memory.textContent = Number(memory.textContent) + Number(display.textContent);
});
mMinusBtn.addEventListener('click', () => {
	memory.textContent = Number(memory.textContent) - Number(display.textContent);
});
mrBtn.addEventListener('click', () => {
	display.textContent = memory.textContent;
	f = false;
	d = false;
});
mcBtn.addEventListener('click', () => {
	memory.textContent = '';
});
