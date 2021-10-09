import styled from "styled-components";
import { useContext, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Api } from "../context/ContextApi";
import { useHistory } from "react-router";

export default function StudentSignup() {
  const { handleStudentRegister, setAuth, setUser } = useContext(Api);
  const history = useHistory();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
  });
  const [error, setError] = useState({
    name: false,
    email: false,
    password: false,
  });

  const onEnter = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setError({ ...error, name: false });
    }
    if (name === "email") {
      setError({ ...error, email: false });
    }
    if (name === "password") {
      setError({ ...error, password: false });
    }
    setForm({ ...form, [name]: value });
  };

  const validateForm = () => {
    if (form?.email === "" && form?.password === "" && form.name === "")
      setError({ email: "Email is required", password: "Password is required" });
    else if (form?.name === "") setError({ error, name: "Name is required" });
    else if (form?.email === "") setError({ error, email: "Email is required" });
    else if (form?.password === "") setError({ error, password: "Password is required" });
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form?.email))
      setError({ error, email: "Invalid email" });
    else if (form?.password.length < 8)
      setError({ ...error, password: "Password must be atleast 8 characters long" });
  };

  const handelSubmit = (e) => {
    validateForm();
    if (error.email === false && error.password === false && error.name === false) {
      handleStudentRegister(form, history, setAuth, setUser);
    }
  };

  return (
    <Sin>
      <h3>Student Signup</h3>
      <div>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          onKeyUp={onEnter}
          name="name"
          required
          error={error.name}
          helperText={error.name}
        />
      </div>
      <div>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          onKeyUp={onEnter}
          name="email"
          required
          error={error.email}
          helperText={error.email}
        />
      </div>
      <div>
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          onKeyUp={onEnter}
          name="password"
          required
          error={error.password}
          helperText={error.password}
        />
      </div>
      <div className="signSubmit">
        <Button variant="contained" color="primary" onClick={handelSubmit}>
          Signup
        </Button>
      </div>
    </Sin>
  );
}

const Sin = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  padding: 20px;
  width: 40%;
  min-width: 350px;
  height: max-content;
  margin-top: 90px;
  box-sizing: border-box;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072),
    0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12);
  & > div {
    margin-top: 40px;
    position: relative;
  }
  & .MuiFormControl-root {
    width: 100%;
    /* min-width: 300px; */
  }
  & .MuiOutlinedInput-root {
    border-radius: 50px;
  }

  & .MuiFormHelperText-contained {
    position: absolute;
    bottom: -20px;
  }
  .signSubmit {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  }
  .signSubmit .MuiButton-containedPrimary {
    border-radius: 50px;
    background-color: #ff5476;
  }
`;
