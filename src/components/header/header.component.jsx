import React from 'react';
import './header.styles.scss';

import Menu from '../menu-list/menu-list.component';
import Logo from '../logo/logo.component';

const Header = ({handleClick}) => (
    <div className="header-section">
          <Logo />
          <Menu handleClick={handleClick} />
    </div>
)

export default Header;