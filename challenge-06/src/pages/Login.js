import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthProvider";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { GoogleLogin } from "react-google-login";
import { Link } from "react-router-dom";

import contoh from "../assets/img/login_image1.png";
import "../assets/css/Login.css";

function Login() {
  const responseGoogle = (response) => {
    console.log(response);
  };

  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.prevenDefault();
    console.log(user, pwd);
    setUser("");
    setPwd("");
    setSuccess(true);
  };

  return (
    <>
      {success ? (
        <section>
          <h1>kamu login</h1>
          <br />
          <p>
            <a href="#">home</a>
          </p>
        </section>
      ) : (
        <section>
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
                <p
                  ref={errRef}
                  className={errMsg ? "errmsg" : "offscreen"}
                  aria-live="assertive"
                >
                  {errMsg}
                </p>
                <form
                  action="/dashboard"
                  className="d-flex flex-column justify-content-between mt-3 mb-2"
                  onSubmit={handleSubmit}
                >
                  <div>
                    <label for="exampleInputEmail1" className="form-label">
                      Email address
                    </label>
                    <InputGroup className="mb-3">
                      <FormControl
                        type="text"
                        placeholder="Email"
                        id="username"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setUser(e.target.value)}
                        value={user}
                        required
                      />
                    </InputGroup>
                  </div>
                  <div>
                    <label for="exampleInputPassword1" className="form-label">
                      Password
                    </label>
                    <InputGroup className="mb-3">
                      <FormControl
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
                        required
                      />
                    </InputGroup>
                  </div>
                  <Button id="btn" type="submit">
                    Sign In
                  </Button>
                </form>
                <span className="d-flex align-item-center justify-content-center mb-2">
                  or
                </span>
                <GoogleLogin
                  clientId="850619162333-qdecu4e48nqqs4f4kim3a06mig0a27jo.apps.googleusercontent.com"
                  buttonText="Login"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={"single_host_origin"}
                />
                <Link to="/register" className="mt-3">
                  <Button id="btn1" variant="success">
                    Register
                  </Button>
                </Link>
              </div>
              {/* FORM END */}
            </div>
            {/* RIGHT_SIDE END */}
          </div>
        </section>
      )}
    </>
  );
}
export default Login;
