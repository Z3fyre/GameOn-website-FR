// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalCloseBtn = document.getElementById("modal-close-btn");
const modalForm = document.getElementById("modal-form");
const barIcon = document.getElementById("navbar-icon");
const btnCloseConfirm = document.querySelector(".btn-close-confirmation");
const confirmCloseIcon = document.getElementById("confirmation-close-btn");
const heroModalOpen = document.querySelector(".hero-section");
const footerModalOpen = document.querySelector("footer");
const formBtn = document.querySelector(".btn-submit")

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
  heroModalOpen.style.display = "none";
  footerModalOpen.style.display = "none";
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
    fullFieldsValidation();
  }
}

//confirmation message event

formBtn.addEventListener("click", validateModalForm);

//close confirmation form
function closeModalConfirmation() {
  modalbg.style.display = "none";
  window.location.reload();
}

//close confirmation event

btnCloseConfirm.addEventListener("click", closeModalConfirmation);
confirmCloseIcon.addEventListener("click", closeModalConfirmation);
