import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

function Navv() {
  return (
    <>
      <Navbar expand="lg" className='nav' >
      <Container>
        <Navbar.Brand style={{fontSize:"30px"}} className='navBrand text-white' href="/">TO-DO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" nav-items">
            <NavLink className='nav-link custom-navlink' to='/'><span>Home</span></NavLink>
            <NavLink className='nav-link  custom-navlink' to="/addtask"><span>Add Task</span></NavLink>
            <NavDropdown to="/login" className='custom-link custom-dropdown'  title={<span style={{color:"white"}}><i class="fa-solid fa-circle-user"></i></span>} id="basic-nav-dropdown">
              <NavDropdown.Item style={{background:"#101f3f"}}  ><NavLink style={{color:"#7795c6", 'margin-left':0}} className="nav-link" to="/login">Login</NavLink></NavDropdown.Item>
              <NavDropdown.Item style={{background:"#101f3f"}}  ><NavLink style={{color:"#7795c6", 'margin-left':0}} className="nav-link" to="/signup">Sign-up</NavLink></NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </>
  )
}

export default Navv