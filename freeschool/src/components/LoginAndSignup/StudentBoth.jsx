import { useState } from "react";
import styled from "styled-components";
import Login from "./Login";
import StudentSignup from "./StudentSignup";

export default function StudentBoth() {
  const [isLogin, setIslogin] = useState(false);
  return (
    <Div>
      {isLogin ? <Login /> : <StudentSignup />}
      <p className="loginText" onClick={() => setIslogin((pre) => !pre)}>
        {isLogin ? "Create account |  Singup" : "Already have an account | Login"}
      </p>
      <div className="darkback"></div>
      <div className="image"></div>
    </Div>
  );
}

const Div = styled.div`
  text-align: center;
  height: 300px;
  min-height: 100vh;
  padding: 20px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  position: relative;
  .loginText {
    color: white;
    cursor: pointer;
  }
  .image {
    background-image: url("https://www.savethechildren.org.nz/assets/the-issues/education/hero-cta-education__FocusFillWzc1MCwzNTAsInkiLDM1XQ.jpg");
    box-sizing: border-box;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    z-index: -2;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .darkback {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.2);
    z-index: -1;
  }
`;
