const userstorege = JSON.parse(localStorage.getItem("user"));

const regForm = document.querySelector("#regForm");

const nameId = document.querySelector("#nameId");
const emainId = document.querySelector("#emainId");
const passwordId = document.querySelector("#passwordId");

regForm.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(nameId.value);
  console.log(emainId.value);
  console.log(passwordId.value);

  const user = {
    fullname: nameId.value,
    email: emainId.value,
    password: passwordId.value,
  };

  window.location = "login.html";
  localStorage.setItem("user", JSON.stringify(user));
});
