let ifSuccessLogin = document.querySelector("#a_login");
let signupP = document.querySelector("#a_signUp");
let beforeLoginDiv = document.querySelector("#beforeLogin");
let afterLoginDiv = document.querySelector("#afterLogin");

ifSuccessLogin.addEventListener("click", function success() {
	console.log("cl");
  beforeLoginDiv.style.display = "none"; // "block"을 문자열로 처리
  afterLoginDiv.style.display = "block"; // "block"을 문자열로 처리
  signupP.style.display = "none";

  
  // 회원 정보 받아옴
  const userData = {
    name: "홍길동",
    phone: "010-1234-5678",
    address: "서울특별시 강남구",
    career: "카페 - 3년",
    healthState: "양호",
    wishList: "운동 프로그램",
    points: 1200,
  };

  // 상단 로그인 정보와 회원정보 영역에 이름을 설정
  document.getElementById("TopUserName").textContent = userData.name;
});

