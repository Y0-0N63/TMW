import React, { useState } from 'react';
import './ForgotPassword.css'; 

function ForgotPassword() {
 
  const [formData, setFormData] = useState({
    name: '',
    phonenumber: ''
  });

  // 입력 값과 변경 사항을 처리하는 함수
  const handleChange = (e) => {
    setFormData({
      ...formData, //데이터 유지함
      [e.target.name]: e.target.value // 변경된 필드의 값을 업데이트함.
    });
  };

  // 폼 제출을 처리할 떄
  const handleSubmit = (e) => {
    e.preventDefault(); //페이지 새로 고침 방지
    console.log('Form submitted:', formData); 
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-form">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">성명</label>
            <input
              type="text"
              id="name"
              name="name" 
              placeholder="성명을 입력해주세요."
              value={formData.name} // 입력 값을 설정
              onChange={handleChange} // 입력 값이 변경될 때마다 상태를 업데이트함.
              required // 필수 입력 설정
            />
          </div>
          <div className="input-group">
            {/* 전화번호 입력*/}
            <label htmlFor="phonenumber">전화번호</label>
            <input
              type="text"
              id="phonenumber"
              name="phonenumber" 
              placeholder="전화번호를 입력해주세요."
              value={formData.phonenumber} // 입력 설정하면 
              onChange={handleChange} // 값이 변경될 때마다 상태를 업데이트함.
              required 
            />
          </div>
         
          <button type="submit">임시 비밀번호 전송</button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
