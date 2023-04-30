import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./nav.css";
function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="">
          {" "}
          <img
            className="header-logo dark"
            src="https://firebasestorage.googleapis.com/v0/b/alexasanguinetti-27213.appspot.com/o/WhatsApp%20Image%202023-04-21%20at%203.39.28%20PM.jpeg?alt=media&token=60fe657a-4c61-4b7c-92b0-d117714e979d"
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
