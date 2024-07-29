import React, { useState } from 'react';
import './SignupForm.css';

function SignupForm() { //이 부분 정의 반환?? ㅇㅇ '' 쨋든 저장 ㅇㅇ
  const [formData, setFormData] = useState({
    username: '',
    phonenumber: '',
    userpwd: '',
    userpwdConfirm: ''
  }); 

  // 입력 필드의 변화가 있을 때 호출
  const handleChange = (e) => {
    // 입력 필드의 값을 현재 입력 값으로 설정
    setFormData({
      ...formData, // 현재 상태의 기존 데이터를 유지
      [e.target.name]: e.target.value //입력 값을 값으로 설정합니다.
    });
  };

  // 폼 제출 시 호출
  const handleSubmit = (e) => {
    e.preventDefault(); //페이지 새로고침 방지하기
    console.log('Form submitted:', formData); 
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">이름</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="이름을 입력해주세요."
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="phonenumber">전화번호</label>
            <input
              type="text"
              id="phonenumber"
              name="phonenumber"
              placeholder="전화번호를 입력해주세요."
              value={formData.phonenumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="userpwd">비밀번호</label>
            <input
              type="password"
              id="userpwd"
              name="userpwd"
              placeholder="숫자, 특수문자, 기호 상관없이 6자를 입력해주세요."
              value={formData.userpwd}
              onChange={handleChange} //변경될 떄마다 업데이트
              required //필수 입력 설정
            />
          </div>
          <div className="input-group">
            <label htmlFor="userpwdConfirm">비밀번호 확인</label>
            <input
              type="password"
              id="userpwdConfirm"
              name="userpwdConfirm"
              placeholder="비밀번호 확인"
              value={formData.userpwdConfirm}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">회원가입</button>
        </form>
        <p>
          이미 회원이신가요? <a href="/">로그인</a>
        </p>
      </div>
    </div>
  );
}

export default SignupForm;
