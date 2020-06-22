import React, { useState } from 'react';
import SideMenu from './SideMenu';
import '../../styles/SideBar/SideBar.scss';

function SideBar() {
    const [showSideMenu, setShowSideMenu] = useState(false);
    const hideSideMenu = () => {
        setShowSideMenu(false);
    }
    return (
        <div className="sidebar">
            <button className="menu" onClick={() => setShowSideMenu(true)}>☰</button>
            <SideMenu showSideMenu={showSideMenu} hideSideMenu={hideSideMenu} />
        </div>
    )
}

export default SideBar;
