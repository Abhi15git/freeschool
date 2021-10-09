import React from "react";
import styles from "../css/Home.module.css";
import Button from "@mui/material/Button";
import { useHistory } from "react-router";

const Home = () => {
  const history = useHistory();

  const handleTutorLogin = ()=>{
    history.push('/tutorsignin')
  }
  const handleStudentLogin = ()=>{
    history.push('/studentsignin')
  }
  return (
      <div>
    <div className={styles.homeContainer}>
      <div className={styles.topHead}>
        <h1>You can master anything. Where do you want to start?</h1>
      </div>
      <div className={styles.homeQuestion}>
        <div>
          <h2>Are You a Tutor?</h2>
          <Button variant="contained" color="primary" onClick={handleTutorLogin}>
            Tutor Login
          </Button>
        </div>
        <div>
          <h2>Or a Student?</h2>
          <Button variant="contained" color="primary" onClick={handleStudentLogin}>
            Student Login
          </Button>
        </div>
      </div>
    </div>



    </div>
  );
};

export default Home;
