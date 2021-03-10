const mapLink = document.querySelector('.mini-map');
const mapPopup = document.querySelector('.modal-map');
const mapClose = mapPopup.querySelector('.modal-close');

mapLink.addEventListener('click', function (evt) {
	evt.preventDefault();
	mapPopup.classList.add('modal-show');
});

mapClose.addEventListener('click', function (evt) {
	evt.preventDefault();
	mapPopup.classList.remove('modal-show');
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		if (mapPopup.classList.contains("modal-show")) {
			evt.preventDefault();
			mapPopup.classList.remove("modal-show");
		}
	}
});


const messageLink = document.querySelector('.button-message');
const messagePopup = document.querySelector('.modal-form');
const messageClose = messagePopup.querySelector('.modal-close');
const messageLogin = messagePopup.querySelector('.modal-input');
const messageEmail = messagePopup.querySelector('.modal-email');
const messageForm = messagePopup.querySelector('.form-grid');

let isStorageSupport = true;
let storage = '';

try {
	storage = localStorage.getItem('message');
} catch (err) {
	isStorageSupport = false;
}


messageLink.addEventListener('click', function (evt) {
	evt.preventDefault();
	messagePopup.classList.add('modal-show');

	if (storage) {
		messageLogin.value = storage;
		messageEmail.focus();
	} else {
		messageLogin.focus();
	}
});

messageClose.addEventListener('click', function (evt) {
	evt.preventDefault();
	messagePopup.classList.remove('modal-show');
	messagePopup.classList.remove('modal-error');
});

messageForm.addEventListener('submit', function (evt) {
	if (!messageLogin.value || !messageEmail.value) {

		evt.preventDefault();
		messagePopup.classList.remove('modal-error');
		messagePopup.offsetWidth = messagePopup.offsetWidth;
		messagePopup.classList.add('modal-error');
	} else {
		if (isStorageSupport) {
			localStorage.setItem('message', messageLogin.value);
		}
	}
});

window.addEventListener('keydown', function (evt) {
	if (evt.keyCode === 27) {
		if (messagePopup.classList.contains('modal-show')) {
			evt.preventDefault();
			messagePopup.classList.remove('modal-show');
			messagePopup.classList.remove('modal-error');
		}
	}
});