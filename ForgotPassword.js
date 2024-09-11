document.addEventListener('DOMContentLoaded', function() {
    // 폼과 입력 필드를 선택합니다.
    const form = document.getElementById('forgotPasswordForm');
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phonenumber');
  
    // 폼 제출 이벤트 핸들러
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // 폼이 제출되는 기본 동작을 막습니다.
  
      // 입력된 데이터 수집
      const formData = {
        name: nameInput.value,
        phonenumber: phoneInput.value,
      };
  
      console.log('Form submitted:', formData); // 제출된 데이터를 콘솔에 출력
  
      // 데이터가 유효한지 확인 후 알림 창을 띄웁니다.
      if (formData.name && formData.phonenumber) {
        alert('임시 비밀번호가 전송되었습니다.');
      } else {
        alert('모든 필드를 입력해주세요.');
      }
    });
  });
  