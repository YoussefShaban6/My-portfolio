/* ---------------------------FROM--------------------------- */
const closeBtn = document.querySelector(".close");
const reloadBtn = document.querySelector(".reload");
const chatMe = document.querySelector(".chat-me");
const backdrop = document.querySelector(".overlay");
const form = document.querySelector(".form");
const formInputs = document.querySelectorAll(".form .input");
const submitBtn = document.querySelector(".submit");
const email = document.querySelector("#email");

var formValidate = {
  inputs: [false, false, false, false],
  email: false,
};

const invalidInput = (input, index) => {
  input.style.borderColor = "#fa5252";
  input.previousElementSibling.innerHTML +=
    "<span style='font-size: 1.8rem; right: 1%; position: absolute'>You must fill this field</span>";
  input.previousElementSibling.lastChild.style.color = "#fa5252";
  formValidate.inputs[index] = false;
};

const validInput = (input, index) => {
  input.style.borderColor = "#ccc";
  formValidate.inputs[index] = true;
};

const closeForm = (e) => {
  e.preventDefault();
  form.classList.add("hidden-form");
  backdrop.classList.add("hidden-form");
  formInputs.forEach((input) => {
    input.value = "";
    input.style.borderColor = "#ccc";
    if (input.previousElementSibling.children.length === 1) {
      input.previousElementSibling.removeChild(
        input.previousElementSibling.lastChild
      );
    }
  });
};

const openForm = (e) => {
  e.preventDefault();
  form.classList.remove("hidden-form");
  backdrop.classList.remove("hidden-form");
  document.querySelector(".fields").classList.remove("fields-none");
  document.querySelector(".succeed-message").style.display = "none";
};

closeBtn.addEventListener("click", closeForm);
backdrop.addEventListener("click", closeForm);
document.querySelector(".close-btn").addEventListener("click", closeForm);

chatMe.addEventListener("click", openForm);

reloadBtn.addEventListener("click", () => {
  formInputs.forEach((input) => {
    input.value = "";
    input.style.borderColor = "#ccc";
    if (input.previousElementSibling.children.length === 1) {
      input.previousElementSibling.removeChild(
        input.previousElementSibling.lastChild
      );
    }
  });
});

// validating Form

submitBtn.disabled = true;

var isValid = true;
const checkValidation = () => {
  isValid = true;
  formValidate.inputs.forEach((input) => {
    isValid = isValid && input;
  });
  isValid = isValid && formValidate.email;
  submitBtn.disabled = !isValid ? true : false;
};

formInputs.forEach((input, index) => {
  input.addEventListener("input", (e) => {
    if (e.target.previousElementSibling.children.length === 1) {
      e.target.previousElementSibling.removeChild(
        e.target.previousElementSibling.lastChild
      );
    }
    if (e.target.value.trim().length === 0) {
      invalidInput(e.target, index);
    } else {
      validInput(e.target, index);
    }

    checkValidation();
  });
});

email.addEventListener("input", (e) => {
  if (e.target.value.trim().length > 0) {
    if (e.target.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      if (e.target.previousElementSibling.children.length === 1) {
        e.target.previousElementSibling.removeChild(
          e.target.previousElementSibling.lastChild
        );
      }
      e.target.style.borderColor = "#ccc";
      formValidate.email = true;
    } else {
      e.target.style.borderColor = "#fa5252";
      e.target.previousElementSibling.innerHTML +=
        "<span style='font-size: 1.8rem; right: 1%; position: absolute;'>Invalid Email</span>";
      e.target.previousElementSibling.lastChild.style.color = "#fa5252";
      formValidate.email = false;
    }
  }
});

document.querySelector(".submit").addEventListener("click", (e) => {
  e.preventDefault();

  var params = {
    from_name: formInputs[0].value,
    email_id: formInputs[1].value,
    subject: formInputs[2].value,
    message: formInputs[3].value,
  };

  emailjs.send("service_08tpc6e", "template_pvkuicv", params).then(() => {
    document.querySelector(".fields").classList.add("fields-none");
    document.querySelector(".succeed-message").style.display = "flex";
  });
});
