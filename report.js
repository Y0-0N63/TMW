document.addEventListener("DOMContentLoaded", function() {
    const reportForm = document.getElementById('report-form');

    reportForm.addEventListener('submit', function(event) {
        event.preventDefault(); // 기본 제출 동작 방지

        // 입력된 데이터 가져오기
        const reportType = document.getElementById('reportType').value;
        const description = document.getElementById('description').value;

        // 데이터 처리 (예: 서버에 전송, 알림 등)
        console.log('제목:', reportType);
        console.log('상세 내용:', description);

        // 제출 후 입력 필드 초기화
        reportForm.reset();
        alert("제출되었습니다!");
    });
});
