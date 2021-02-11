import React from 'react'

export default function SectionMenu({ rename, closeMenu, deleteSection }) {
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
            <div 
                className="menu-item"
                onClick={()=>{
                    deleteSection();
                }}
            >
                Delete section
            </div>
        </div>
    )
}
