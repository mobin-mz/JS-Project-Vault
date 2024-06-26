// Select in to html
const email = document.querySelector("#email"),
  subject = document.querySelector("#subject"),
  message = document.querySelector("#message"),
  resetBtn = document.querySelector("#resetBtn"),
  sendBtn = document.querySelector("#sendBtn"),
  success = document.querySelector(".success"),
  form = document.querySelector("form"),
  error = document.querySelectorAll(".error"),
  spinner = document.querySelector("#spinner"),
  loaders = document.querySelector("#loaders")
  ;

// this function just for events
function eventListener() {
  document.addEventListener("DOMContentLoaded", appInit)
  email.addEventListener("blur", checkInput)
  subject.addEventListener("blur", checkInput)
  message.addEventListener("blur", checkInput)
  resetBtn.addEventListener("click", resetForm)
  // form.addEventListener("submit", submitForm)
  form.addEventListener("click", submitForm)


}
eventListener()


// For project settings, we can put some other things in it
function settings() {
  sendBtn.disabled = true;
  resetBtn.disabled = true

}

// 
function nemidonam() {
  checkInputsValue(this)
  // activeResetBtn(this)

  if (this.type === "email") {
    checkInputEmail(this);
  }
  // console.log("mmmm");
  // activeSendBtn()
}

// To check whether the inputs are empty or not
function checkInputsValue(inputs) {
  if (inputs.value.length > 0) {
    inputs.style.borderBottomColor = "green";
    inputs.classList.add("success")
    activeResetBtn()
  }
  else {
    inputs.style.borderBottomColor = "red";
    inputs.classList.remove("error")
    activeResetBtn()

  }
  // activeSendBtn()/
}

// To check whether the email input has "@" or not
function checkInputEmail(inputs) {
  if (inputs.value.includes("@")) {
    inputs.style.borderBottomColor = "green";
    inputs.classList.add("success")
    activeSendBtn()
    // console.log("object");
    // sendBtn.disabled = false

  } else {
    inputs.style.borderBottomColor = "red";
    inputs.classList.remove("error")
    // sendBtn.disabled = true
    activeSendBtn()
    // console.log("object");
  }
  // console.log(error);
}
// Activate send button
function activeSendBtn() {

  if (email.value.includes("@")) {
    sendBtn.disabled = false;
  }

  else {
    sendBtn.disabled = true
  }
  console.log("error");
}

// Activating the resetBtn and resetting the form
function activeResetBtn() {
  if (message.value !== "" || subject.value !== "" || email.value !== "") {
    if (error.length === 0) {
      resetBtn.disabled = false;
    }
  }

  else {
    resetBtn.disabled = true
  }










  e.preventDefault()
  form.reset()
}

// This function is for submitting the form, that is, after clicking the send button, a gif will be displayed and sent
function submitForm() {
  spinner.style.display = "block";
  sendEmailImg.src = "img/mail.gif";
  sendEmailImg.style.display = "block";

  setTimeout(() => {
    spinner.style.display = "none";
    loaders.appendChild(sendEmailImg);
    setTimeout(() => {
      sendEmailImg.remove();
      sendEmailImg.style.display = "none"
    }, 3000);
  }, 3000);
}