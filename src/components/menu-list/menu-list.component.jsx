import React from 'react';
import './menu-list.styles.scss';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const MenuList = ({handleClick}) => (
  <div className="menu-section">
    <Navbar variant="light">
      <Nav className="mr-auto">
        <Nav.Link onClick={handleClick} href="#info" className="active">Informações</Nav.Link>
        <Nav.Link onClick={handleClick} href="#photos">Fotos</Nav.Link>
        <Nav.Link onClick={handleClick} href="#menus">Menus</Nav.Link>
      </Nav>
    </Navbar>
  </div>
)

export default MenuList;