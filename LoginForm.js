document.addEventListener('DOMContentLoaded', function() {
  let phoneNumber = '';
  let userPwd = '';

  // 전화번호 입력 처리
  const setPhoneNumber = (value) => {
    phoneNumber = value;
  };

  // 비밀번호 입력 처리
  const setUserPwd = (value) => {
    userPwd = value;
  };

  // 로그인 처리 함수
  const handleLogin = (event) => {
    event.preventDefault();
    
    // 여기서 서버로 데이터 전송하거나 검증 로직을 추가할 수 있음
    console.log('전화번호:', phoneNumber);
    console.log('비밀번호:', userPwd);

    if (phoneNumber && userPwd) {
      alert('로그인 성공');
    } else {
      alert('로그인 정보를 확인하세요.');
    }
  };

  // 폼 제출 시 처리
  const loginForm = document.getElementById('loginForm');
  loginForm.addEventListener('submit', handleLogin);

  // 입력 필드 값 변경 시 처리
  const phoneInput = document.getElementById('phonenumber');
  phoneInput.addEventListener('input', (e) => setPhoneNumber(e.target.value));

  const pwdInput = document.getElementById('userpwd');
  pwdInput.addEventListener('input', (e) => setUserPwd(e.target.value));
});
