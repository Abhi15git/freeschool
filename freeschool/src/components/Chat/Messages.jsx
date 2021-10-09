import styled from "styled-components";

export default function Messages({ data, currentUser }) {
  return (
    <Div currentUser={currentUser}>
      <div className={currentUser ? "right" : "left"}>{data.text}</div>
    </Div>
  );
}

const Div = styled.div`
  /* height: 43px; */
  width: 100%;
  padding: 7px 24px;
  display: flex;
  padding: 7px 24px;
  justify-content: ${(props) => (props.currentUser ? "right" : "left")};
  & > div {
    padding: 4px 10px;
    padding-bottom: 6px;
    max-width: 80%;
    border-radius: 13px;
  }
  .left {
    background: #bfbcb9;
    color: #202020;
  }
  .right {
    background: #56a6e1;
    color: #202020;
  }
`;
