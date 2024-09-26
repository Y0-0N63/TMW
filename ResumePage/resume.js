const saveButton = document.querySelector("#saveForm");
const modifyButton = document.querySelector("#modifyForm");
const deleteButton = document.querySelector("#deleteForm");
// const outputDiv = document.querySelector("#output");
const resumeName = document.querySelector("#resume-name");
const resumeGender = document.querySelectorAll('input[name="gender"]');
const resumeAge = document.querySelector("#resume-age");
const resumeAddress = document.querySelector("#resume-address");
const resumePhoneNum = document.querySelector("#resume-phoneNum");
const resumeIntro = document.querySelector("#resume-intro");

const usersData = {
  name: "홍길동",
  phone: "010-1234-5678",
  address: "서울특별시 강남구",
  career: "카페 - 3년",
  healthState: "양호",
  wishList: "운동 프로그램",
  points: 1200,
};

// 상단 로그인 정보와 회원정보 영역에 이름을 설정
document.getElementById("TopUserName").textContent = usersData.name;

let userData = [{}];
// 이력서 저장
function saveForm() {
  alert("이력서가 저장되었습니다.");

  userData = [{}];
}

// 이력서 수정
function modifyForm() {
  alert("이력서 수정 후 이력서저장 버튼을 눌러주세요.");
  resumeName.focus();
}

// 이력서 초기화
deleteButton.addEventListener("click", function () {
  if (confirm("내용을 모두 삭제합니다")) {
    resumeName.value = '';
    resumeAge.value = '';
    resumeAddress.value = '';
    resumePhoneNum.value = '';
		resumeIntro.value = '';

		resumeGender.forEach((radio) => {
      radio.checked = false;
    });
  }
});

