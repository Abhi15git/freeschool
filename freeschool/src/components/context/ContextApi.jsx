import React, { createContext, useState } from "react";
import axios from "axios";
import { stepClasses } from "@mui/material";

export const Api = createContext();
const ContextApi = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState(false);
  const [teachers, setTeachers] = useState([]);
  const [classes, setClasses] = useState([]);

  if (!auth) {
    let data = localStorage.getItem("sessionData");
    if (data) {
      setAuth(JSON.parse(data).auth);
      setUser(JSON.parse(data).user);
    }
  }

  return (
    <Api.Provider
      value={{
        auth,
        teachers,
        classes,
        setClasses,
        setTeachers,
        setAuth,
        setUser,
        handleTutorRegister,
        handleTutorLogin,
        handleStudentRegister,
        handleStudentLogin,
        handleGetTeachers,
        handleGetClasses,
      }}
    >
      {children}
    </Api.Provider>
  );
};

export default ContextApi;

//tutor register

const handleTutorRegister = (payload, history, setAuth, setUser) => {
  axios
    .post(`${process.env.REACT_APP_API_KEY}register`, payload)
    .then((res) => {
      let user = {
        auth: "tutor",
        user: res.data.teacher,
      };
      localStorage.setItem("sessionData", JSON.stringify(user));
      setAuth("tutor");
      setUser(res.data.teacher);
      history.replace("/");
    })
    .catch((err) => console.log(err));
};

//tutor login
const handleTutorLogin = (payload, history, setAuth, setUser) => {
  axios
    .post(`${process.env.REACT_APP_API_KEY}login`, payload)
    .then((res) => {
      let user = {
        auth: "tutor",
        user: res.data.teacher,
      };
      localStorage.setItem("sessionData", JSON.stringify(user));
      setAuth("tutor");
      setUser(res.data.teacher);
      history.replace("/");
    })
    .catch((err) => console.log(err));
};

//student register

const handleStudentRegister = (payload, history, setAuth, setUser) => {
  axios
    .post(`${process.env.REACT_APP_API_KEY}register`, payload)
    .then((res) => {
      let user = {
        auth: "student",
        user: res.data.teacher,
      };
      localStorage.setItem("sessionData", JSON.stringify(user));
      setAuth("student");
      setUser(res.data.student);
      history.replace("/");
    })
    .catch((err) => console.log(err));
};

//student login
const handleStudentLogin = (payload, history, setAuth, setUser) => {
  axios
    .post(`${process.env.REACT_APP_API_KEY}login`, payload)
    .then((res) => {
      let user = {
        auth: "student",
        user: res.data.teacher,
      };
      localStorage.setItem("sessionData", JSON.stringify(user));
      setAuth("student");
      setUser(res.data.teacher);
      history.replace("/");
    })
    .catch((err) => console.log(err));
};

//get teachers

const handleGetTeachers = (setTeachers) => {
  axios
    .get(`${process.env.REACT_APP_API_KEY}users/teachers`)
    .then((res) => setTeachers(res.data.teachers))
    .catch((err) => console.log(err));
};

//get live classes

const handleGetClasses = (setClasses) => {
  axios
    .get(`${process.env.REACT_APP_API_KEY}classes`)
    .then((res) => console.log(res.data.classes))
    .catch((err) => console.log(err));
};
