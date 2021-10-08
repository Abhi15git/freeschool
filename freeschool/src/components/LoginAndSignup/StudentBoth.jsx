import { useState } from "react";
import styled from "styled-components";
import StudentLogin from "./StudentLogin";
import StudentSignup from "./StudentSignup";

export default function StudentBoth() {
  const [isLogin, setIslogin] = useState(false);
  return (
    <Div>
      {isLogin ? <StudentLogin /> : <StudentSignup />}
      <p className="loginText" onClick={() => setIslogin((pre) => !pre)}>
        {isLogin ? "Create account |  Singup" : "Already have an account | Login"}
      </p>
    </Div>
  );
}

const Div = styled.div`
  box-sizing: border-box;
  background-color: #cdcdc8;
  height: 300px;
  min-height: 100vh;
  padding: 20px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;

  .loginText {
    color: blue;
    cursor: pointer;
  }
`;
