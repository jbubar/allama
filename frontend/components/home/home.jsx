import React from 'react';
import { Link } from "react-router-dom";

const Home = (props) => {
    return (
        <div>
            <section className="tasks home-section">
                <h4>My Tasks</h4>
                <div>
                    { props.tasks ? ( props.tasks.map(task => (
                        <div key={task.id}>
                            <span>{task.title}</span>
                            <p>{task.dueDate}</p>
                        </div>
                    ))) : (
                        <p>No tasks assigned to me at the moment</p>
                    )}
                </div>
            </section>
            <section className="home-projects home-section">
                <h4>Projects</h4>
                <div>
                    { props.projects ? ( props.projects.map(project => (
                        <div key={project.id} className="project-btn">
                            <div className="project-icon"></div>
                            <span>{project.name}</span>
                        </div>
                    ))) : (
                        <p>No projects have been created yet</p>
                    )}
                </div>
            </section>
           
            
            <button onClick={props.logout}>Log Out</button>
        </div>
    )
}

export default Home;