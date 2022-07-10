import React from "react";
import { useState } from "react";
import axios from "axios";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const backendUrl = "http://localhost:9000/api/signup";
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(name, email, password, confirmPassword);
    if (password !== confirmPassword) {
      setError("Password and Confirm Password do not match");
    } else {
      axios
        .post(backendUrl, {
          name: name,
          email: email,
          password: password,
        },{
          withCredentials: true,
        })
        .then((res) => {
          alert("SignUp Successful");
        }
        )
        .catch((err) => {
          alert(err.response.data.message+"\nPlease Login or Sign Up With Another Email");;
          console.log(err.response.data);
        }
        );
    }
  }
  return (
    <div className="signup">
      <form className="form" onSubmit={submitHandler}>
        <div className="box">
          <label>Name</label>
          <input
            onChange={(event) => setName(event.target.value)}
            value={name}
            type="text"
          ></input>
        </div>
        <div className="box">
          <label>Email</label>
          <input
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            type="text"
          ></input>
        </div>
        <div className="box">
          <label>Password</label>
          <input
            onChange={(event) => setPassword(event.target.value)}
            value={password}
            type="password"
          ></input>
        </div>
        <div className="box">
          <label>Confirm Password</label>
          <input
            onChange={(event) => setConfirmPassword(event.target.value)}
            value={confirmPassword}
            type="password"
          ></input>
        </div>
        <button>SUBMIT</button>
      </form>
      <p>{error}</p>
    </div>
  );
}
export default Signup;
 