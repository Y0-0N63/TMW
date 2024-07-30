import React, { useState } from 'react'; 
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; 
import './App.css'; 
import LoginForm from './LoginForm'; 
import SignupForm from './SignupForm'; 
import ForgotPassword from './ForgotPassword';
 
function App() {
  // 전화번호와 비밀번호를 상태로 관리
  const [phoneNumber, setPhoneNumber] = useState('');
  const [userPwd, setUserPwd] = useState('');

  // 로그인 폼 제출을 처리하는 함수
  const handleLogin = (e) => {
    e.preventDefault(); // 폼 제출 시 페이지 방지
    console.log('Login form submitted:', { phoneNumber, userPwd }); 
  };

  return (
    <Router> {/* 라우팅 기능을 제공하는 Router 컴포넌트로 애플리케이션을 감쌈 */}
      <div className="App">
        <div className="container"> {/* 전체 */}
          <div className="logo">
            <img src="./logo_rmv.png" alt="로고" /> 
          </div>
          <div className="login-form"> {/* 로그인 폼 감싸는 컨테이너 */}
            <Routes> 
              <Route
                path="/"//기본 경로임 
                element={<LoginForm
                  phoneNumber={phoneNumber} // LoginForm에 phoneNumber 상태와 업데이트 함수 전달
                  setPhoneNumber={setPhoneNumber}
                  userPwd={userPwd} // LoginForm에 userPwd 상태와 업데이트 함수 전달
                  setUserPwd={setUserPwd}
                  handleLogin={handleLogin} // LoginForm에 로그인 핸들러 함수 전달
                />}
              />
              <Route path="/signup" element={<SignupForm />} /> {/* "/signup" 경로에 SignupForm 컴포넌트 렌더링 */}
              <Route path="/forgot-password" element={<ForgotPassword />} /> {/* "/forgot-password" 경로에 ForgotPassword 컴포넌트 렌더링?? 뭐야이거 */}
            </Routes>
            <p>
              아직 회원이 아니신가요? <Link to="/signup">회원가입</Link> 
              <Link to="/forgot-password">비밀번호 찾기</Link> 
            </p>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App; 
