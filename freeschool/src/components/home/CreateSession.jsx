import { Button, TextField } from "@mui/material";
import React, { useContext, useState, useEffect, useRef } from "react";
import { Redirect, useHistory } from "react-router";
import { Api } from "../context/ContextApi";
import styles from "../css/Lecture.module.css";
import Footer from "./Footer";
import { io } from "socket.io-client";

const CreateSession = () => {
  const { auth, user, handleCreateClass } = useContext(Api);
  const history = useHistory();
  const [lectureDetail, setLectureDetail] = useState({
    title: "",
    class: "",
    user: "",
    subject: "",
    time: "",
    meetLink: "",
  });

  const handleLectureDetail = (e) => {
    const { name, value } = e.target;
    setLectureDetail({ ...lectureDetail, [name]: value });
  };

  const handleCreate = () => {
    let payload = {
      ...lectureDetail,
      user: user._id,
    };
    console.log(payload);
    handleCreateClass(payload);
    socket.current.emit("class", { text: "class is created", senderId: user?._id, lectureDetail });
  };
  const socket = useRef();
  
  useEffect(() => {
    socket.current = io("https://schoolfree.herokuapp.com");
    socket.current.on("welcome", (data) => {
      //console.log(data);
    });
    socket.current.emit("addedUser", user._id);
  }, [user]);

  if (!auth) return <Redirect to="/" />;

  return (
    <div className={styles.createClassContainer}>
      <h2>Create Lectures</h2>
      <table className={styles.createClass}>
        <tbody>
          <tr>
            <th>
              <h3>Topic</h3>
            </th>
            <td>
              <TextField
                size="small"
                id="outlined-basic"
                label="Topic"
                variant="outlined"
                onKeyUp={handleLectureDetail}
                name="title"
                required
              />
            </td>
          </tr>
          <tr>
            <th>
              <h3>Class</h3>
            </th>
            <td>
              {" "}
              <select name="class" onChange={handleLectureDetail} id="">
                <option value="">Select</option>
                <option value="6">Class 6</option>
                <option value="7">Class 7</option>
                <option value="8">Class 8</option>
                <option value="9">Class 9</option>
                <option value="10">Class 10</option>
                <option value="11">Class 11</option>
                <option value="12">Class 12</option>
              </select>
            </td>
          </tr>
          <tr>
            <th>
              <h3>Subject</h3>
            </th>
            <td>
              <select name="subject" onChange={handleLectureDetail} id="">
                <option value="">Select</option>
                <option value="maths">Maths</option>
                <option value="hindi">Hindi</option>
                <option value="science">Science</option>
                <option value="social">Social</option>
              </select>
            </td>
          </tr>
          <tr>
            <th>
              <h3>Time</h3>
            </th>
            <td>
              <select name="time" onChange={handleLectureDetail} id="">
                <option value="">Select</option>
                <option value="5:00">5:00</option>
                <option value="6:00">6:00</option>
                <option value="7:00">7:00</option>
                <option value="8:00">8:00</option>
              </select>
            </td>
          </tr>

          <tr>
            <th>
              <h3>Hosted Zoom Link</h3>
            </th>
            <td>
              <TextField
                size="small"
                id="outlined-basic"
                label="Link"
                variant="outlined"
                onKeyUp={handleLectureDetail}
                name="meetLink"
                required
              />
            </td>
          </tr>
          <tr>
            <th></th>
            <td>
              <p style={{ fontSize: "small" }}>
                Don't have a zoom account?{" "}
                <a
                  style={{ textDecoration: "none" }}
                  href="https://zoom.us/signin"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  create one.
                </a>
              </p>
            </td>
          </tr>
          <br />
          <tr>
            <td></td>
            <td>
              <Button variant="contained" color="primary" onClick={handleCreate}>
                Create
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default CreateSession;
