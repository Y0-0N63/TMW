const userData = {
    name: "홍길동",
    phone: "010-1234-5678",
    address: "서울특별시 강남구",
    career: "카페 - 3년",
    healthState: "양호",
    wishList: "운동 프로그램",
    points: 1200
};

// 상단 로그인 정보와 회원정보 영역에 이름을 설정
document.getElementById("TopUserName").textContent = userData.name;
document.getElementById("MainUserName").textContent = userData.name;
document.getElementById("UserName").textContent = userData.name;
document.getElementById("UserPhone").textContent = userData.phone;
document.getElementById("UserAddress").textContent = userData.address;
document.getElementById("Career").textContent = userData.career;
document.getElementById("HealthState").textContent = userData.healthState;
document.getElementById("WishList").textContent = userData.wishList;
document.getElementById("Point").textContent = userData.points;

document.getElementById("DeletedButton").addEventListener("click", function() {
    if (document.getElementById("DeletedCheck").checked) {
        alert("회원탈퇴가 완료되었습니다. 그동안 내일을 이용해 주셔서 감사합니다.");
    } else {
        alert("안내사항을 확인해주세요.");
    }
});
