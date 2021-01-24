import React from 'react';
import { Link } from "react-router-dom";
import { COLORS } from "../../util/nav";
import Icon from "./icon.jsx" 
import UserTasks from '../tasks/user_tasks';

const Home = (props) => {
    return (
        <div className="home-inner">
            <section className="tasks home-section">
                <h4 className="section-header">My Tasks</h4>
                <UserTasks tasks={props.tasks}/>
            </section>
            <section className="home-projects home-section">
                <h4 className="section-header">Projects</h4>
                <div>
                    { props.projects ? (
                        Object.values(props.projects).map(project => {
                            if (project) return (
                                <Link key={project.id} className="project-btn" to={`/projects/${project.id}`}>
                                    <div className={`project-tile ${COLORS[(project.id + 10) % 20]}`}>
                                        <Icon/>
                                    </div>
                                    <span className="project-name">{project.name}</span>
                                </Link>
                            )
                        })
                    ) : (
                        <p>No projects have been created yet</p>
                    )}
                </div>
            </section>
        </div>
    )
}

export default Home;