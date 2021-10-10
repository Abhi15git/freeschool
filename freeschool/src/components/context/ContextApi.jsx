import React, { createContext, useState } from "react";
import axios from "axios";

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
        user,
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
        handleCreateClass,
        handleMySession,
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
        auth: "teacher",
        user: res.data.user,
      };
      localStorage.setItem("sessionData", JSON.stringify(user));
      setAuth("teacher");
      setUser(res.data.user);
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
        auth: res.data.user.role,
        user: res.data.user,
      };
      localStorage.setItem("sessionData", JSON.stringify(user));
      setAuth(res.data.user.role);
      setUser(res.data.user);
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
        user: res.data.user,
      };
      localStorage.setItem("sessionData", JSON.stringify(user));
      setAuth("student");
      setUser(res.data.user);
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
        user: res.data.user,
      };
      localStorage.setItem("sessionData", JSON.stringify(user));
      setAuth("student");
      setUser(res.data.user);
      history.replace("/");
    })
    .catch((err) => console.log(err));
};

//get teachers

const handleGetTeachers = (setTeachers, setLoading) => {
  axios
    .get(`${process.env.REACT_APP_API_KEY}users/teachers`)
    .then((res) => setTeachers(res.data.teachers))
    .catch((err) => console.log(err));
};

//get live classes

const handleGetClasses = (setClasses) => {
  axios
    .get(`${process.env.REACT_APP_API_KEY}classes`)
    .then((res) => setClasses(res.data.classes))
    .catch((err) => console.log(err));
};

//create live class

const handleCreateClass = (payload) => {
  axios
    .post(`${process.env.REACT_APP_API_KEY}classes`, payload)
    .then((res) => alert("Lecture created successfully"))
    .catch((err) => console.log(err));
};

//get live session list by id

const handleMySession = (id, setLectures) => {
  axios
    .get(`${process.env.REACT_APP_API_KEY}classes/user/${id}`)
    .then((res) => setLectures(res.data.classes))
    .catch((err) => console.log(err));
};
