import React from 'react';
import { Link } from 'react-router-dom';
import UserAvatar from "../user_avatar";
import Icon from "../../home/icon.jsx";
import { COLORS } from "../../../util/nav";



export default function SearchDropDown({ searchData }) {
    function displayUsers(users = null){
      if(users){
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
    return (
      <>
        {displayUsers(searchData.users)}
        {displayProjects(searchData.projects)}
      </>
    );
}
