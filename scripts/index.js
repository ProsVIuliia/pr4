const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close-button');
const form = document.querySelector('.popup__container');
const editButton = document.querySelector('.profile__button');
const profileName = document.querySelector('.profile__name');
const inputName = document.querySelector('.popup__input_type_name');
const desc = document.querySelector('.profile__description');
const inputDesc = document.querySelector('.popup__input_type_description');

function openPopup() {
  popup.classList.add('popup_visible');
  inputName.value = profileName.textContent;
  inputDesc.value = desc.textContent;
}

editButton.addEventListener('click', openPopup);

function closePopup() {
  popup.classList.remove('popup_visible');
}

popupCloseButton.addEventListener('click', closePopup);

function submitEdit(event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  desc.textContent = inputDesc.value;
  closePopup();
}

form.addEventListener('submit', submitEdit);