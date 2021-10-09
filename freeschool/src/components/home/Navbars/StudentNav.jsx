import { Button } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "../../css/Home.module.css";
import { useHistory } from "react-router";
import { Api } from "../../context/ContextApi";
import BasicModal from "../NotificationModel/BasicModal";

const StudentNav = () => {
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
          <Link to="/"><div className={styles.logo}>
              <span>free</span>
              <span>S</span>
              <span>chool</span>
            </div></Link>
        </div>

        <div className={styles.links}>
          <Link to="/studentdashboard/liveclasses">Live Classes</Link>
          <Link to="/studentdashboard/tutorslist">Tutors List</Link>
          <a ><BasicModal/> </a>
          <Link to="/studentdashboard/contactus">Contact Us</Link>
          <Link to="/studentdashboard/profile">Profile</Link>
          
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

export default StudentNav;
