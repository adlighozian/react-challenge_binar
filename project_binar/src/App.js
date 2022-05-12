import logo from "./logo.svg";
import "./App.css";
import { GoogleLogin } from "react-google-login";

function App() {
  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        <GoogleLogin
          clientId="850619162333-qdecu4e48nqqs4f4kim3a06mig0a27jo.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </header>
    </div>
  );
}

export default App;
