import React from 'react';
import { Link } from 'react-router-dom';
import { COLORS, getInitials } from '../../../util/nav';
import { RiMenuFoldLine } from 'react-icons/ri';

function closeNav(e){
    if (e.target.id === "close-sidebar") {
        e.currentTarget.classList.add("hide");
        document.querySelector(".ham-nav-icon").removeAttribute("hidden");
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
                <Link to="/home">
                    <span className="sidebar-icon"></span>
                    <span className="sidebar-nav-item" title="Home">Home</span>
                </Link>
                <Link to="/">
                    <span className="sidebar-icon"></span>
                    <span className="sidebar-nav-item" title="My Tasks">My Tasks</span>
                </Link>
            </section>
            <section className="sidebar-team-list">
                {   props.team ? (
                    props.team.map((member) => {
                        return(
                            <div key={member.id} className={`nav-circle-item ${COLORS[member.id % 20]}`}>
                                {getInitials(member)}
                            </div>
                        )
                    }) 
                ) : ( null )
                }
            </section>
        </nav>
    )
}
