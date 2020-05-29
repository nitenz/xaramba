import React from 'react';
import './menu-list.styles.scss';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const MenuList = ({handleClick}) => (
  <div className="menu-section">
    <Navbar variant="light">
      <Nav className="mr-auto">
        <Nav.Link onClick={handleClick} href="#home">Home</Nav.Link>
        <Nav.Link onClick={handleClick} href="#info">Info</Nav.Link>
        <Nav.Link onClick={handleClick} href="#photos">Photos</Nav.Link>
      </Nav>
    </Navbar>
  </div>
)

export default MenuList;