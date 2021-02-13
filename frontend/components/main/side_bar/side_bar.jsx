import React from 'react';
import { Link } from 'react-router-dom';
import { RiMenuFoldLine } from 'react-icons/ri';
import UserAvatar from "../user_avatar";
import SidebarProjectItem from "./sidebar_project_item";



function closeNav(e){
    if (e.target.id === "close-sidebar") {
        e.currentTarget.classList.add("hide");
        document.querySelector(".ham-icon").removeAttribute("hidden");
    }
}

export default function SideBarNav(props) {

    return (
        <nav className="sidebar-container" onClick={closeNav}>
            <section className="sidebar-top">
                <Link className="logo-link" to="/home"><img src={window.allamaLogoWhiteImgURL} alt="a llama logo"/></Link>
                <RiMenuFoldLine className="sidebar-burger" id="close-sidebar"/>
            </section>
            <section className="sidebar-nav">
                <Link to="/home" className="sidebar-nav-item">
                    <span className="sidebar-icon"></span>
                    <span className="sidebar-nav-item-text" title="Home">Home</span>
                </Link>
                <Link to={`/tasks/${props.userId}`} className="sidebar-nav-item">
                    <span className="sidebar-icon"></span>
                    <span className="sidebar-nav-item-text" title="My Tasks">My Tasks</span>
                </Link>
            </section>
            <section className="sidebar-team-list">
                {
                    props.team?.map((member) => {
                        return(
                            <UserAvatar key={member.id} user={member} />
                        )
                    }) 
                }
            </section>
            <section className="sidebar-project-list">
                {
                    props.projects?.map((project) => {
                        return(
                            <SidebarProjectItem key={project.id} project={project} />
                        )
                    }) 
                }
            </section>
            <section className="links">
                <a href="https://github.com/jbubar" target="_blank">
                    <img src={window.githubURL} alt="Github icon that links to josh bubar's github profile"/>
                </a>
                <a href="https://www.linkedin.com/in/jbubar/" target="_blank">
                    <img src={window.linkedinImgURL} alt="Linked In icon linking to Josh Bubar's linked in"/>
                </a>
                <a href="https://angel.co/u/jbubar" target="_blank">
                    <img src={window.angellistURL} alt="Angel List icon linking to Josh Bubar's Angel List"/>
                </a>
            </section>
        </nav>
    )
}
