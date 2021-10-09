import { Button } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "../../css/Home.module.css";
import { useHistory } from "react-router";
import { Api } from "../../context/ContextApi";

const TutorNav = () => {
  const { setAuth, setUser } = useContext(Api);
  const history = useHistory();
  const handleLogOut = () => {
    localStorage.removeItem("sessionData");
    setAuth(false);
    setUser(false);
    history.push("/");
  };
  return (
    <div className={styles.tutorNavContainer}>
      <div className={styles.nav}>
        <div className={styles.logo}>
          <Link to="/">ele School</Link>
        </div>

        <div className={styles.links}>
          <Link to="/">Live Sessions</Link>
          <Link to="/createsession">Create Session</Link>
          <Link to="/">Contact Us</Link>
          <Link to="/">Profile</Link>
          
            <Button
              variant="outlined"
              size="small"
              color="inherit"
              onClick={() => handleLogOut()}
            >
              Log out
            </Button>
        </div>
      </div>
    </div>
  );
};

export default TutorNav;
