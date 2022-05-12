import React from "react";
import { Container, Navbar, Nav } from "reactstrap";

import "../assets/css/Navbar.css";

class NavigationBar extends React.Component {
  render() {
    return (
      <div>
        <Navbar bg="dark">
          <Container>
            <Navbar.Brand>Adli Films</Navbar.Brand>
            <Nav>
              <Nav.Link>TRENDING</Nav.Link>
              <Nav.Link>SUPERHERO</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default NavigationBar;
