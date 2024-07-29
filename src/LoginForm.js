import React from 'react';

function LoginForm({ phoneNumber, setPhoneNumber, userPwd, setUserPwd, handleLogin }) {
  return (
    <form id="loginForm" onSubmit={handleLogin}>
      <div className="input-group">
        <label htmlFor="phonenumber">전화번호</label>
        <input
          type="text"
          id="phonenumber"
          name="phonenumber"
          placeholder="전화번호를 입력하세요."
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)} //변경할 때마다 업데이트 ㅇㅇ
          required // 필수 입력 설정
          />
      
      </div>
      <div className="input-group">
        <label htmlFor="userpwd">비밀번호</label>
        <input
          type="password"
          id="userpwd"
          name="userpwd"
          placeholder="비밀번호 6자리를 입력하세요."
          value={userPwd}
          onChange={(e) => setUserPwd(e.target.value)}
          required
        />
      </div>
      <button type="submit">로그인</button>
    </form>
  );
}

export default LoginForm;
