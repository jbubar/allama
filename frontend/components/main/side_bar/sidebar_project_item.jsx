import React, { useState }  from 'react'
import { COLORS } from "../../../util/nav";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import ProjectMenu from "./side_bar_project_menu";
import { useClickOutside } from '../../../hooks/click_outside';
import { Link } from 'react-router-dom';


export default function SidebarProjectItem({project}) {
    const [showMenu, setShowMenu] = useState(false);
    const ref = useClickOutside(() => setShowMenu(false));
    return (
        <div className="sidebar-proj-item-container">
            <Link to={`/projects/${project.id}`} className="sidebar-nav-item sidebar-proj-item">
                <div>
                    <div className={`proj-color-box-sml ${COLORS[(project.id + 10) % 20]}`}></div>
                    <div className="proj-text">{project.name}</div>
                </div>
                <BiDotsHorizontalRounded onClick={(e)=>{e.preventDefault(); setShowMenu(true);}}/>
            </Link>
            {showMenu && 
                <div
                        className="dropdown-menu sidebar-proj-menu" 
                        ref={ref}    
                    >
                    <ProjectMenu/>
                </div>
            }
        </div>
    )
}
