import "bootstrap/dist/css/bootstrap.min.css";
import { React, Navbar, Button } from "reactstrap";
import "./navbar.css";

function Nava() {
  return (
    <div>
      {/* <div className="test"></div> */}
      <Navbar>
        <div className="profile"></div>
        <div className="right">
          <ul>
            <li>Our Service</li>
            <li>Why Us</li>
            <li>Testimonial</li>
            <li>FAQ</li>
            <li>
              <Button color="success">Register</Button>
            </li>
          </ul>
        </div>
      </Navbar>
    </div>
  );
}

export default Nava;
