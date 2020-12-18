import React from 'react'

export default function DropDown(props) {
    
    return (
        <div className="dropdown-menu">
            <div>My Profile Settings...</div>
            <div onClick={props.logout}>Log Out</div>
        </div>
    )
}
