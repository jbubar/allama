import React from 'react'

export default function Search() {
    return (
        <div>
             <div className="search">
                <input 
                    type="text" 
                    placeholder="Search" 
                    className="nav-circle-item"
                />
                <span style={{fontFamily: "Arial, FontAwesome"}}>&#xF002;</span>
            </div>
        </div>
    )
}
