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
