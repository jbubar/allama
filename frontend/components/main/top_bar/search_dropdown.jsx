import React from 'react';
import { Link } from 'react-router-dom';
import UserAvatar from "../user_avatar";
import Icon from "../../home/icon.jsx";
import { COLORS } from "../../../util/nav";



export default function SearchDropDown({ searchData }) {
    function displayUsers(users = null){
      if(users){
        return(
          <div>
            {Object.values(users).map(user => (
              <Link to={`/tasks/${user.id}`}>
                <div className="assignee">
                      <UserAvatar user={user}/> {user.fullName} 
                </div>
              </Link>
            ))}
          </div>
        )
      }
    }
    function displayProjects(projects = null){
      if(projects){
        return(
          <div>
            {Object.values(projects).map(project => (
              <Link to={`/projects/${project.id}`}>
                <div className={`project-tile tile-inline ${COLORS[(project.id + 10) % 20]}`}>
                    <Icon/>
                </div>
                <div className="project-name">
                    {project.name}
                </div>
              </Link>
            ))}
          </div>
        )
      }
    }
    return (
      <div>
        {displayUsers(searchData.users)}
        {displayProjects(searchData.projects)}
      </div>
    );
}
