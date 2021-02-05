import React, { useState } from 'react';
import { COLORS, getInitials } from '../../../util/nav';
import { RiMenuLine } from 'react-icons/ri';
import { BsQuestion, BsPlus, BsChevronDown} from 'react-icons/bs';
import DropDown from './top-bar-drop-down-container';
import Search from './search'
import { useClickOutside } from '../../../hooks/click_outside';
import Icon from "../../home/icon.jsx" 
import ProjectMenu from "../side_bar/side_bar_project_menu";



function openSideNav(e){
    const sidebar = document.querySelector('.sidebar-container')
    sidebar.classList.remove("hide");
    e.currentTarget.setAttribute('hidden', null);
}
function headerTitle(props){
    switch(props.match.path){
        case "/home":
            return(<div>Home</div>)
        case "/projects/:projectId":
            const [showProjMenu, setShowProjMenu] = useState(false);
            const projMenuRef = useClickOutside(() => setShowProjMenu(false));
            return (
                <div className="proj-title-wrapper">
                    <div className={`project-tile tile-small ${COLORS[(parseInt(props.match.params.projectId) + 10) % 20]}`}>
                        <Icon/>
                    </div>
                    <div className="project-name">
                        {props.projects[props.match.params.projectId]?.name}
                    </div>
                    <div className="nav-icon down-caret-icon" onClick={()=>{setShowProjMenu(true)}}>
                        <BsChevronDown/>
                    </div>
                    {showProjMenu && 
                        <div ref={projMenuRef} className="dropdown-menu proj-dropdown">
                            <ProjectMenu projectId={props.match.params.projectId} closeMenu={()=>setShowProjMenu(false)}/>
                        </div>
                    }
                </div>
            )
        case "/tasks/:userId":
            if(props.match.params.userId == props.currentUser?.id){
                return (
                    <div>My Tasks</div>
                )
            }
            return(<div>{props.users[props.match.params.userId]?.fullName}'s Tasks</div>)
        default:
            return (<div>Allama made a mistake... oops.</div>)
    }
}

export default function TopBar(props) {
    const [visible, setVisible] = useState(false);
    const ref = useClickOutside(() => setVisible(false));
    const openDropDown = () => setVisible(!visible);
    return (
        <nav className="topbar-container">
            <div  onClick={openSideNav} className="ham-icon nav-icon" hidden>
                <RiMenuLine/>
            </div>
            <h1 className="top-nav-title">{headerTitle(props)}</h1>
            <Search/>
            <div className="plus nav-circle-item omni-btn"><BsPlus/></div>
            <div className="question-mark nav-circle-item omni-btn"><BsQuestion/></div>
            {props.currentUser ? (
                <div 
                    className={`nav-circle-item avatar ${COLORS[props.currentUser.id % 20]}`}
                    onClick={openDropDown}
                >
                    {getInitials(props.currentUser)}
                    <div className="tool-tip">{props.currentUser.fullName}</div>
                </div>
            ) : null }
            {visible && 
                <div ref={ref}>
                    <DropDown/>
                </div>
            }
        </nav>
    )
}
