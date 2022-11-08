import { MDBBtn } from "mdb-react-ui-kit";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo1 from "../../../assets/food-bar.png";

const Header = () => {
  const menuItems = (
    <>
      <Link className=" fw-semibold text-decoration-none text-dark" to="/">
        Home
      </Link>
    </>
  );

  return (
    <Navbar collapseOnSelect expand="lg" bg="white" variant="white">
      <Container>
        <Navbar.Brand href="#home">
          <Link to="/" className="text-decoration-none text-dark">
            <div className="d-flex">
              <img style={{ width: "50px" }} src={logo1} alt="" />
              <p className="d-flex align-items-center ps-2 mb-0">Cloud Food</p>
            </div>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">{menuItems}</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
          <MDBBtn outline color="success">
            Success
          </MDBBtn>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
