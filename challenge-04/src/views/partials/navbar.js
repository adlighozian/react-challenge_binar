import "bootstrap/dist/css/bootstrap.min.css";
import { React, Navbar, NavbarBrand, Container } from "reactstrap";

function Nava() {
  return (
    <>
      <Navbar color="danger" expand="md" light>
        <Container>
          <NavbarBrand href="/">reactstrap</NavbarBrand>
        </Container>
      </Navbar>
    </>
  );
}

export default Nava;
