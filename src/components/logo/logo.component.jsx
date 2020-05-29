import React from 'react';
import './logo.styles.scss';
import mySvg from '../../images/xaramba.svg';

const Logo = () => (
    <div className="logo-section">
        <div className="logo-name">
            <span>Xaramba</span>
            <span>pizza!!!</span>
        </div>
        <div className="logo">
            <img src={mySvg} alt="Logo" />
        </div>
    </div>
)

export default Logo;