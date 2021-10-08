import styled from "styled-components";
import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

export default function Login() {
  const [type, setType] = useState();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    email: false,
    password: false,
  });

  const onEnter = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      setError({ ...error, email: false });
    }
    if (name === "password") {
      setError({ ...error, password: false });
    }
    if (name === "type") {
      setType(value);
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const validateForm = () => {
    if (form?.email === "" && form?.password === "")
      setError({ email: "Email is required", password: "Password is required" });
    else if (form?.email === "") setError({ error, email: "Email is required" });
    else if (form?.password === "") setError({ error, password: "Password is required" });
  };

  const handelSubmit = (e) => {
    validateForm();
    if (error.email === false && error.password === false) {
      console.log(form, type);
    }
  };
  return (
    <Sin>
      <h3>Login</h3>

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
      <div>
        <Select
          className="select"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          name="type"
          onChange={onEnter}
        >
          <MenuItem value="student">Student</MenuItem>
          <MenuItem value="tutor">Tutor</MenuItem>
        </Select>
      </div>
      <div className="signSubmit">
        <Button variant="contained" color="primary" onClick={handelSubmit}>
          Login
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
  .select {
    width: 90%;
  }
`;
