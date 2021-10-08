import styled from "styled-components";
import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default function StudentSignup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    name: false,
    email: false,
    password: false,
  });

  const onEnter = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handelSubmit = (e) => {
    console.log("1");
  };

  return (
    <Sin>
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
  width: 50%;
  height: 100%;
  box-sizing: border-box;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072),
    0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12);
`;
