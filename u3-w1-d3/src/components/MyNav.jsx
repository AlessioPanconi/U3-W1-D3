import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function MyNav(props) {
  return (
    <Navbar expand="lg" className="bg-success foot ">
      <Container>
        <Navbar.Brand href="#home">U3-W1-D2</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">{props.homeLink}</Nav.Link>
            <Nav.Link href="#">{props.aboutLink}</Nav.Link>
            <Nav.Link href="#">{props.browseLink}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;
