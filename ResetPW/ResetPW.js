document.addEventListener("DOMContentLoaded", function() {
    // 예시 데이터 (서버에서 받아올 데이터로 대체해야 함)
    const userData = {
        name: "홍길동",
        phone: "010-1234-5678",
        address: "서울특별시 강남구",
        career: "5년",
        healthState: "양호",
        wishList: "운동 프로그램",
        points: 1200
    };

    // 상단 로그인 정보와 회원정보 영역에 이름을 설정
    document.getElementById("TopUserName").textContent = userData.name;

    // 버튼 클릭 이벤트 리스너
    document.getElementById("reset-button").addEventListener("click", function() {
        const currentPassword = document.getElementById("current-password").value;
        const newPassword = document.getElementById("new-password").value;
        const confirmPassword = document.getElementById("confirm-password").value;

        if (newPassword === confirmPassword) {
            alert("비밀번호가 변경되었습니다.");
        } else {
            alert("비밀번호가 일치하지 않습니다. 제대로 입력했는지 확인하세요.");
        }
    });
});
