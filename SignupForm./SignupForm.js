document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signupForm');
    const usernameInput = document.getElementById('username');
    const phoneInput = document.getElementById('phonenumber');
    const userpwdInput = document.getElementById('userpwd');
    const userpwdConfirmInput = document.getElementById('userpwdConfirm');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const formData = {
        username: usernameInput.value,
        phonenumber: phoneInput.value,
        userpwd: userpwdInput.value,
        userpwdConfirm: userpwdConfirmInput.value,
      };
  
      console.log('Form submitted:', formData);
  
      if (formData.userpwd === formData.userpwdConfirm) {
        alert('회원가입 성공');
      } else {
        alert('비밀번호가 일치하지 않습니다.');
      }
    });
  });
  
