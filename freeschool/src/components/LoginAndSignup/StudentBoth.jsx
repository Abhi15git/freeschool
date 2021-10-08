import { useState } from "react";
import styled from "styled-components";
import StudentLogin from "./StudentLogin";
import StudentSignup from "./StudentSignup";

export default function StudentBoth() {
  const [isLogin, setIslogin] = useState(true);
  return <Div>{isLogin ? <StudentLogin /> : <StudentSignup />}</Div>;
}

const Div = styled.div`
  position: relative;
  box-sizing: border-box;
  background-color: #ece5dd;
  height: 100%;
  padding: 20px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;
