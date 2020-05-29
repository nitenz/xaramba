import React from 'react';
import './content.styles.scss';

import Home from '../../pages/home/home.component';
import Info from '../../pages/info/info.component';
import Photos from '../../pages/photos/photos.component';

const Content = ({activeMenuOption}) => (
    <div className="content-section">
        {
            activeMenuOption === 'home' ? <Home /> : activeMenuOption === 'info' ? <Info /> :  <Photos />
        }
        
       
    </div>
)

export default Content;