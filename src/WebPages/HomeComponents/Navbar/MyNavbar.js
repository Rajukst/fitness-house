import React from 'react';
import {Link} from "react-router-dom";
import {Navbar, Container, Nav} from "react-bootstrap"
import "./MyNavbar.css"
const MyNavbar = () => {
    return (
        <Navbar bg="dark" expand="lg" variant='dark'>
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           <div className="myLinks">
           <Link to="classes">Classes</Link>
            <Link to="classes">Classes</Link>
           </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default MyNavbar;