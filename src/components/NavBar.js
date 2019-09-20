import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color: #000;
  }

  a, .navbar-brand, .navbar-nav .nav-link {
    color: purple;

    &:hover {
      color: white;
    }
  }
`;

const NavBar = () => {
  return ( 
    <Styles>
    <Navbar expand="lg" variant="dark">
      <Navbar.Brand href="/"></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav as="span" className="ml-auto">
          <Nav.Item>
            <Nav.Link as="span">
              <Link to="/">Home</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as="span">
              <Link to="/resume">Resume</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as="span">
              <Link to="/contact">Contact</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles >

   );
}
 
export default NavBar;