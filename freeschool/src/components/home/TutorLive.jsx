import React, { useContext, useEffect, useState } from "react";
import { Api } from "../context/ContextApi";
import styles from "../css/Lecture.module.css";
import Footer from "./Footer";

const TutorLive = () => {

  const { user, handleMySession } = useContext(Api);
  const [sessions, setSessions] = useState([]);
  
  

//   const handleLiveSession = (link) => {
//     window.location.assign(link);
//   };
  useEffect(() => {
    if (!sessions.length) handleMySession(user._id, setSessions);
  }, []);

  return (
    <div className={styles.classContainer}>
      <h2>Live Lectures</h2>
      {sessions.map((data) => {
        return (
          <div className={styles.classDetails}>
            <div>
              <p>Teacher name</p>
              <h4>{data.user.name}</h4>
            </div>
            <div>
              <p>Title</p>
              <h4>{data.title} class</h4>
            </div>
            <div>
              <p>Class</p>
              <h4>{data.class} class</h4>
            </div>
            <div>
              <p>Subject</p>
              <h4>{data.subject}</h4>
            </div>
            <div>
              <p>Time</p>
              <h4>{data.time}</h4>
            </div>
            <button >
                <a href={data.meetLink} target="_blank" rel="noreferrer noopener">Start Session</a>
              
            </button>
          </div>
        );
      })}
      <br />
      <br />
      <Footer/>
    </div>
  );
};

export default TutorLive;
