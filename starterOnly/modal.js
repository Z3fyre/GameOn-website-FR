// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalCloseBtn = document.getElementById("modal-close-btn");
const modalForm = document.getElementById("modal-form");
const barIcon = document.getElementById("navbar-icon");
const btnCloseConfirm = document.querySelector(".btn-close-confirmation");
const confirmCloseIcon = document.getElementById("confirmation-close-btn");

// edit nav form
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//edit nav event

barIcon.addEventListener("click", editNav);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// close modal event
modalCloseBtn.addEventListener("click", closeModal);

//confirmation message form

function validateModalForm(event) {
  event.preventDefault();

  const successMsg = document.getElementById("confirmation-msg");

  if (formValidation() == true) {
    modalForm.reset();
    closeModal();
    successMsg.style.display = "flex";
  } else {
    forAllFieldsValidation();
  }
}

//confirmation message event

modalForm.addEventListener("submit", validateModalForm);

//close confirmation form
function closeModalConfirmation() {
  modalbg.style.display = "none";
  window.location.reload();
}

//close confirmation event

btnCloseConfirm.addEventListener("click", closeModalConfirmation);
confirmCloseIcon.addEventListener("click", closeModalConfirmation);

// DOM ELEMENTS FORM FIELDS VALIDATION
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const quantity = document.getElementById("quantity");
const birthdate = document.getElementById("birthdate");
const allLocations = document.getElementById("allLocations");
const locations = document.querySelectorAll("#allLocations .checkbox-input");
const terms = document.getElementById("terms");
const input = document.getElementsByClassName("text-control");
const form = document.getElementById("form");

// ------ FORM FIELDS VALIDATION ------ //
// NAMES CHECK (FIRST NAME AND LAST NAME)
function checkFirstName() {
  let regexFirstLast = new RegExp("^[a-zA-Z-éè ]+$");
  if (
    firstName.value.trim().length < 2 ||
    first.value.trim() === "" ||
    !firstName.value.match(regexFirstLast)
  ) {
    firstName.parentElement.setAttribute("data-error-visible", "true");
    firstName.style.border = "2px solid #e54858";
    return false;
  }
  first.parentElement.setAttribute("data-error-visible", "false");
  first.style.border = "solid #279e7a 0.19rem";
  return true;
}

function checkLastName() {
  let regexFirstLast = new RegExp("^[a-zA-Z-éè ]+$");
  if (
    lastName.value.trim().length < 2 ||
    last.value.trim() === "" ||
    !lastName.value.match(regexFirstLast)
  ) {
    lastName.parentElement.setAttribute("data-error-visible", "true");
    lastName.style.border = "2px solid #e54858";
    return false;
  }
  last.parentElement.setAttribute("data-error-visible", "false");
  last.style.border = "solid #279e7a 0.19rem";
  return true;
}

// EMAIL CHECK
function checkEmail() {
  let regexEmail = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+");
  if (email.value.trim().match(regexEmail)) {
    email.parentElement.setAttribute("data-error-visible", "false");
    email.style.border = "solid #279e7a 0.19rem";
    return true;
  }
  email.parentElement.setAttribute("data-error-visible", "true");
  email.style.border = "2px solid #e54858";
  return false;
}

// BIRTHDATE CHECK
function checkBirthdate() {
  if (birthdate.value.trim().length !== 10) {
    birthdate.parentElement.setAttribute("data-error-visible", "true");
    birthdate.style.border = "2px solid #e54858";
    return false;
  }
  birthdate.parentElement.setAttribute("data-error-visible", "false");
  birthdate.style.border = "solid #279e7a 0.19rem";
  return true;
}

// NUMBER OF TOURNAMENTS CHECK
function checkTournamentsQuantity() {
  if (
    quantity.value.trim().length === 0 ||
    isNaN(quantity.value.trim()) === true ||
    quantity.value.trim() < 0
  ) {
    quantity.parentElement.setAttribute("data-error-visible", "true");
    quantity.style.border = "2px solid #e54858";
    return false;
  }
  quantity.parentElement.setAttribute("data-error-visible", "false");
  quantity.style.border = "solid #279e7a 0.19rem";
  return true;
}

// LOCATIONS CHECK
function checkLocations() {
  allLocations.setAttribute("data-error-visible", "true");
  for (let i = 0; i < locations.length; i++) {
    if (locations[i].checked) {
      allLocations.setAttribute("data-error-visible", "false");
      return true;
    }
  }
  return false;
}

// TERMS OF USE CHECK CHECK
function checkCheckBox() {
  if (terms.checked === false) {
    terms.parentElement.setAttribute("data-error-visible", "true");
    return false;
  }
  terms.parentElement.setAttribute("data-error-visible", "false");
  return true;
}

// FORM FIELDS EVENTS
function formFieldsValidation(element, method, event) {
  element.addEventListener(event, method);
}
formFieldsValidation(firstName, checkFirstName, "focusout");
formFieldsValidation(lastName, checkLastName, "focusout");
formFieldsValidation(email, checkEmail, "focusout");
formFieldsValidation(birthdate, checkBirthdate, "focusout");
formFieldsValidation(quantity, checkTournamentsQuantity, "focusout");
formFieldsValidation(allLocations, checkLocations, "change");
formFieldsValidation(terms, checkCheckBox, "change");

// FOR ALL FIELDS VALIDATION
function forAllFieldsValidation() {
  checkFirstName();
  checkLastName();
  checkEmail();
  checkBirthdate();
  checkTournamentsQuantity();
  checkLocations();
  checkCheckBox();
}

function formValidation() {
  if (
    checkFirstName() === true &&
    checkLastName() === true &&
    checkEmail() === true &&
    checkBirthdate() === true &&
    checkTournamentsQuantity() === true &&
    checkLocations() === true &&
    checkCheckBox() === true
  ) {
    return true;
  }
  return false;
}
