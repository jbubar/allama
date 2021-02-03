import React from 'react';
import {BsPencil, BsLink45Deg} from 'react-icons/bs';


export default function ProjectMenu({ project, openModal }) {
    return (
        <div>
            <div className="menu-item">
                <span className="menu-sub-icon"><BsPencil/></span>
                <div>Edit Project</div>
            </div>
            <div className="menu-item">
                <span className="menu-sub-icon"><BsLink45Deg/></span>
                <div>Copy Project Link</div>
            </div>
            <div className="dividing-line"></div>
            <div className="menu-item delete-btn">
                Delete Project
            </div>
        </div>
    )
}
