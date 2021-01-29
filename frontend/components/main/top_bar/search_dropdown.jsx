import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UserAvatar from "../user_avatar";
import Icon from "../../home/icon.jsx";
import { COLORS } from "../../../util/nav";
import { AiOutlineCheckCircle } from "react-icons/ai";




export default function SearchDropDown({ searchData }) {
    let emptySearch = true
    function displayUsers(users = null){
      if(users){
        emptySearch = false;
        return(
          <>
            {Object.values(users).map(user => (
              <Link to={`/tasks/${user.id}`} className="menu-item">
                <div className="assignee">
                      <UserAvatar user={user}/> {user.fullName} 
                </div>
              </Link>
            ))}
          </>
        )
      }
    }
    function displayProjects(projects = null){
      if(projects){
        emptySearch = false;
        return(
          <>
            {Object.values(projects).map(project => (
              <Link to={`/projects/${project.id}`} className="menu-item project-menu-item">
                <div className={`project-tile tile-inline ${COLORS[(project.id + 10) % 20]}`}>
                    <Icon/>
                </div>
                <div className="project-name">
                    {project.name}
                </div>
              </Link>
            ))}
          </>
        )
      }
    }
    function displayTasks(tasks = null){
      if(tasks){
        emptySearch = false;
        return(
          <>
            {Object.values(tasks).map(task => (
              <Link to={`/projects/${task.projectId}`} className="menu-item task-menu-item">
                <AiOutlineCheckCircle className='check-icon' onClick={() => props.removeTask(task.id)}/>
                <div className="task-title">{task.title}</div>
              </Link>
            ))}
          </>
        )
      }
    }
    return (
      <>
        {displayProjects(searchData.projects)}
        {displayUsers(searchData.users)}
        {displayTasks(searchData.tasks)}
        {emptySearch && <div className="empty-results">No search results...</div>}
      </>
    );
}
