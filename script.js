const getStarted = document.querySelector("#getStarted");
const userstorege = JSON.parse(localStorage.getItem("user"));
const user = userstorege ? userstorege : {};

getStarted.addEventListener("click", function () {
  console.log(user);
  if (user.email) {
    window.location = "login.html";
  } else {
    window.location = "regester.html";
  }
});
