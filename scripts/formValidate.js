// Fields validation DOM elements

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

// Form fields validation

// Names validation
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

// email validation
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

// Birthdate validation
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

// quantity validation
function checkQuantity() {
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

// locations valisation
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

// terms validation
function checkTermsCheckBox() {
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
formFieldsValidation(quantity, checkQuantity, "focusout");
formFieldsValidation(allLocations, checkLocations, "change");
formFieldsValidation(terms, checkTermsCheckBox, "change");

// FOR ALL FIELDS VALIDATION
function fullFieldsValidation() {
  checkFirstName();
  checkLastName();
  checkEmail();
  checkBirthdate();
  checkQuantity();
  checkLocations();
  checkTermsCheckBox();
}

function formValidation() {
  if (
    checkFirstName() === true &&
    checkLastName() === true &&
    checkEmail() === true &&
    checkBirthdate() === true &&
    checkQuantity() === true &&
    checkLocations() === true &&
    checkTermsCheckBox() === true
  ) {
    return true;
  }
  return false;
}