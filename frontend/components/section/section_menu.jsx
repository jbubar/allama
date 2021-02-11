import React from 'react'

export default function SectionMenu({ rename, closeMenu }) {
    return (
        <div>
            <div 
                className="menu-item" 
                onClick={()=>{
                    rename(true);
                    setTimeout(()=>{
                        document.querySelector('input.edit-section').focus();
                    }, 0);
                    closeMenu();
                }}
            >
                Rename section
            </div>
            <div className="menu-item">
                Delete section
            </div>
        </div>
    )
}
