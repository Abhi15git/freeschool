import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Avatar from "@material-ui/core/Avatar";

function AllChatMember({ data, currentUser }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const friendsId = data.members.find((a) => a !== currentUser._id);
    getUser(friendsId);
  }, []);

  async function getUser(friendsId) {
    const res = await axios.get(`https://reddit-new.herokuapp.com/users/${friendsId}`);
    setUser(res.data.user);
  }

  return (
    <User>
      <div>
        {user?.profile_url ? (
          <img src={user?.profile_url} alt="" />
        ) : (
          <Avatar alt="Remy Sharp" src="/broken-image.jpg">
            {user?.name?.charAt(0)}
          </Avatar>
        )}
      </div>
      <div>{user?.name}</div>
    </User>
  );
}

const User = styled.div`
  cursor: pointer;
  padding: 5px;
  margin: 9px 0px;
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  &:hover {
    background: rgba(82 75 75 / 10%);
  }
  & > div {
    margin: 5px;
  }
  & > div:nth-child(1) {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 5px;
    img {
      width: 100%;
      height: 100%;
    }
    .MuiAvatar-root {
      width: 23px;
      height: 22px;
      font-size: 15px;
    }
  }
`;
export { AllChatMember };
