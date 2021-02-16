import React from 'react'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {SiAngellist, SiGithub} from 'react-icons/si'
import {VscGithub} from 'react-icons/vsc'
export default function DropDown(props) {
    
    return (
        <div className="dropdown-menu personal-menu">
            <a target="_blank" href="https://github.com/jbubar/allama" className="menu-item">
                <span className="menu-sub-icon"><VscGithub/></span> This project's Github
            </a>
            <a target="_blank" href="https://github.com/jbubar" className="menu-item">
                <span className="menu-sub-icon"><VscGithub/></span> Josh Bubar's Github
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/jbubar/" className="menu-item">
                <span className="menu-sub-icon"><AiOutlineLinkedin/></span> Josh Bubar's LinkedIn
            </a>
            <a target="_blank" href="https://angel.co/u/jbubar" className="menu-item">
                <span className="menu-sub-icon"><SiAngellist/></span> Josh Bubar's AngelList
            </a>
        </div>
    )
}
