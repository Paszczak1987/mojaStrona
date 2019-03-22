const form = document.querySelector('#contactForm');
const inputs = form.querySelectorAll('input[required], textarea[required], input[name="honey"]');

//wyłączamy domyślną walidację
form.setAttribute('novalidate', true);

const displayFieldError = function(elem) {
	const fieldRow = elem.closest('.form-row');
	const fieldError = fieldRow.querySelector('.field-error');
	if (fieldError === null) {
		const errorText = elem.dataset.error;
		const divError = document.createElement('div');
		divError.classList.add('field-error');
		divError.innerText = errorText;
		fieldRow.appendChild(divError);
	}
};

const hideFieldError = function(elem) {
	const fieldRow = elem.closest('.form-row');
	const fieldError = fieldRow.querySelector('.field-error');
	if (fieldError !== null) {
		fieldError.remove();
	}
};

[...inputs].forEach((elem) => {
	elem.addEventListener('input', function() {
		if (!this.checkValidity()) {
			this.classList.add('error');
		} else {
			this.classList.remove('error');
			hideFieldError(this);
		}
	});

	if (elem.type === 'checkbox') {
		elem.addEventListener('click', function() {
			if (this.checked) {
				this.classList.remove('error');
				hideFieldError(this);
			} else {
				this.classList.add('error');
			}
		});
	}
});

const checkFieldsErrors = function(elements) {
	//ustawiamy zmienną na true. Następnie robimy pętlę po wszystkich polach
	//jeżeli któreś z pól jest błędne, przełączamy zmienną na false.
	let fieldsAreValid = true;

	[...elements].forEach((elem) => {
		if (elem.checkValidity()) {
			hideFieldError(elem);
			elem.classList.remove('error');
		} else {
			displayFieldError(elem);
			elem.classList.add('error');
			fieldsAreValid = false;
		}
	});

	return fieldsAreValid;
};

form.addEventListener('submit', function(e) {
	e.preventDefault();

	//jeżeli wszystkie pola są poprawne...
	if (checkFieldsErrors(inputs)) {
		const elements = inputs;
		console.log(elements);
		const dataToSend = new FormData();
		[...elements].forEach((el) => dataToSend.append(el.name, el.value));

		const url = form.getAttribute('action');
		const method = form.getAttribute('method').toUpperCase();

		const submit = form.querySelector('[type="submit"]');
		submit.disabled = true;
		submit.classList.add('element-is-busy');

		fetch(url, {
			method: method,
			body: dataToSend
		})
			.then((ret) => ret.json())
			.then((ret) => {
				submit.disabled = false;
				submit.classList.remove('element-is-busy');

				if (ret.errors) {
					ret.errors.map(function(el) {
						return '[name="' + el + '"]';
					});
					const selector = form.querySelectorAll(ret.errors.join(','));
					checkFieldsErrors(selector);
				} else {
					if (ret.status === 'ok') {
						//wyświetlamy komunikat powodzenia, cieszymy sie
						const div = document.createElement('div');
						div.classList.add('form-send-success');
						div.innerHTML = '<p>Dziękuję. Wiadomość została wysłana.</p>';
						form.parentElement.insertBefore(div, form);
						form.remove();
					}

					if (ret.status === 'error') {
						//komunikat błędu, niepowodzenia
						const errorSpan = document.querySelector('.send-error');
						errorSpan.classList.add('active');
					}
				}
			})
			.catch((_) => {
				submit.disabled = false;
				submit.classList.remove('element-is-busy');
			});
	}
});
