import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import contoh from "../assets/img/login_image1.png";
import "../assets/css/Register.css";

function Login() {
  return (
    <>
      <div className="login d-flex flex-row justify-content-center align-items-center overflow-hidden">
        {/* LEFT_SIDE START */}
        <div className="left_side">
          <img src={contoh} alt="" />
        </div>
        {/* LEFT_SIDE END */}
        {/* RIGHT_SIDE START */}
        <div className="right_side d-flex align-items-center justify-content-center">
          {/* FORM START */}
          <div className="form d-flex align-item-center justify-content-between flex-column">
            <div className="logo"></div>
            <p>Welcome, Admin</p>
            <form
              action="/login"
              className="d-flex flex-column justify-content-between mt-3 mb-2"
            >
              <div>
                <label for="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Email"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
              </div>
              <div>
                <label for="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Password"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
              </div>
              <Button id="btn1" variant="success" type="submit">
                Register
              </Button>
            </form>
            <span className="d-flex align-item-center justify-content-center mb-2">
              or
            </span>
            <Link to="/login" className="mt-3">
              <Button id="btn">Sign in</Button>
            </Link>
          </div>
          {/* FORM END */}
        </div>
        {/* RIGHT_SIDE END */}
      </div>
    </>
  );
}
export default Login;
