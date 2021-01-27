import React from 'react'

export default function DropDown(props) {
    
    return (
        <div className="dropdown-menu personal-menu">
            <div className="menu-item">My Profile Settings...</div>
            <div className="menu-item" onClick={props.logout}>Log Out</div>
        </div>
    )
}
