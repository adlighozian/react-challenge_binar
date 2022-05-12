import React from "react";

import NavigationBar from "../components/Navbar";
import { Button } from "reactstrap";

function Login() {
  return (
    <div className="App">
      <Button color="primary">Click Me</Button>
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Login;
