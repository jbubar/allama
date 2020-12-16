import React from 'react';
import { COLORS, getInitials } from '../../util/nav';

function openSideNav(e){
    const sidebar = document.querySelector('.sidebar-container')
    sidebar.classList.remove("hide");
    e.target.setAttribute('hidden', null);
}

export default function TopBar() {
    return (
        <nav>
            <div onClick={openSideNav} className="ham-nav-icon" hidden>menu&gt;</div>
        </nav>
    )
}
