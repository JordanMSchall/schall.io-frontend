import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import './../css/navibar.css';

class NaviBar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <Navbar bg="light" expand="lg" variant="light">
          <Navbar.Brand href="#home">SCHALL.io</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Game</Nav.Link>
              <NavDropdown title="Social Media" id="basic-nav-dropdown">
                <NavDropdown.Item href="https://www.linkedin.com/in/jordan-schall" target="_blank">Linkedin</NavDropdown.Item>
                <NavDropdown.Item href="https://medium.com/@jordan.m.schall" target="_blank">Medium</NavDropdown.Item>
                <NavDropdown.Item href="https://www.facebook.com/profile.php?id=100022276723485" target="_blank">Facebook</NavDropdown.Item>
                <NavDropdown.Item href="https://www.instagram.com/schall.io/" target="_blank">Instagram</NavDropdown.Item>
                <NavDropdown.Item href="https://twitter.com/phuzzii" target="_blank">Twitter</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="API's">
                <NavDropdown.Item href="#action/3.4">phuzzii-API</NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
            </Nav>
            {/* <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form> */}
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NaviBar;