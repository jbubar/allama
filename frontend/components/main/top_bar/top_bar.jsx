import React, { useState } from 'react';
import { COLORS, getInitials } from '../../../util/nav';
import { RiMenuLine } from 'react-icons/ri';
import { BsQuestion, BsPlus} from 'react-icons/bs';
import DropDown from './top-bar-drop-down-container';
import { useClickOutside } from '../../../hooks/click_outside';
import Icon from "../../home/icon.jsx" 


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
            return (<div>
                <div className={`project-tile tile-small ${COLORS[(props.match.params.projectId + 10) % 20]}`}>
                    <Icon/>
                </div>
                <div className="project-name">
                    { Object.keys(props.projects).length > 0 ?
                        props.projects[props.match.params.projectId].name : null
                    }
                </div>
                </div>)
        case "/tasks/:userId":
            if(props.match.params.userId == props.currentUser?.id){
                return (
                    <div>My Tasks</div>
                )
            }
            return(<div>{props.users[props.match.params.userId]?.fullName}'s Tasks</div>)
            // console.log('props.users[props.match.params.userId]:', props.users[props.match.params.userId]?.fullName)

            // return (<div>tasks!</div>)
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
            <div  onClick={openSideNav} className="ham-nav-icon" hidden>
                <RiMenuLine/>
            </div>
            <div><h1 className="top-nav-title">{headerTitle(props)}</h1></div>
            <div className="search">
                <input 
                    type="text" 
                    placeholder="Search" 
                    className="nav-circle-item"
                />
                <span style={{fontFamily: "Arial, FontAwesome"}}>&#xF002;</span>
                </div>
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
