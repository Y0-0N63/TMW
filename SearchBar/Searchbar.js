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

// 검색 기능
function performSearch() {
    // 입력된 검색어 가져오기
    const searchText = document.getElementById('text_find').value;

    // 검색어가 비어있는 경우 경고 메시지
    if (!searchText) {
        alert('검색어를 입력해주세요');
        return;
    }

    // 검색어를 포함한 상단바 업데이트
    const searchHeader = document.getElementById('searchHeader');
    searchHeader.innerText = `'${searchText}'에 대한 검색 결과`;

    // 검색 결과를 표시할 container 선택
    const resultContainer = document.getElementById('result_container');

    // 검색 결과 표시 
    resultContainer.innerHTML = `<h2>검색 결과</h2><p>${searchText}에 대한 검색 결과가 없습니다.</p>`;
}

// 검색 버튼 기능 수행
document.getElementById('findtextBtn').addEventListener('click', performSearch);

// Enter 키를 눌렀을 때 검색 기능 수행
document.getElementById('text_find').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // 기본 Enter 키 동작 방지 (예: 폼 제출)
        performSearch(); // 검색 수행
    }
});

document.getElementById("menu").addEventListener("click", function() {
    window.location.href = '메인페이지링크'; // **나중에 메인페이지 링크 추가 예정**
});
