import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let navigate = useNavigate();
  let onClick = (e) => {
    e.preventDefault();
    axios
      .post(
        `http://localhost:8080/users/verifyByemail?email=${email}&password=${password}`
      )
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data.data));
        console.log(response.data.data);
        alert(response.data.message);
        navigate("/userhome");
      })
      .catch(() => {
        alert("Invalid email id or password");
        navigate("/");
      });
  };
  let onClickSign = (e) => {
    e.preventDefault();
    axios
      .post(
        `http://localhost:8080/users`
      )
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data.data));
        console.log(response.data.data);
        alert(response.data.message);
        navigate("/signup");
      })
      .catch(() => {
        navigate("/");
      });
  };
  return (
    <div>
      <form>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <button onClick={onClick}>SignIn</button>
        <br />
        <button onClick={onClickSign}>SignUp</button>
      </form>
    </div>
  );
}
