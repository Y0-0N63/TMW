let ifSuccessLogin = document.querySelector("#a_login");
let signupP = document.querySelector("#a_signUp");
let beforeLoginDiv = document.querySelector("#beforeLogin");
let afterLoginDiv = document.querySelector("#afterLogin");

ifSuccessLogin.addEventListener("click", function success() {
	console.log("cl");
  beforeLoginDiv.style.display = "none"; // "block"을 문자열로 처리
  afterLoginDiv.style.display = "block"; // "block"을 문자열로 처리
  signupP.style.display = "none";
});
