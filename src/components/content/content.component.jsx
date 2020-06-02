import React from 'react';
import './content.styles.scss';

import Menus from '../../pages/menus/menus.component';
import Info from '../../pages/info/info.component';
import Photos from '../../pages/photos/photos.component';

const Content = ({activeMenuOption}) => (
    <div className="content-section">
        {
            activeMenuOption === 'menus' ? <Menus /> : activeMenuOption === 'info' ? <Info /> :  <Photos />
        }
        
       
    </div>
)

export default Content;