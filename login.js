const storedUser = JSON.parse(localStorage.getItem("user"));

const logform = document.querySelector("#logform");
const logemail = document.querySelector("#logemail");
const logpassword = document.querySelector("#logpassword");

logform.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(logemail.value);
  console.log(logpassword.value);
  if (logemail.value === "" && logpassword.value === "") {
    window.location = "regester.html";
  } else {
    window.location = "dashBoard.html";
  }
});
