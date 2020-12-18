import React from 'react';
import { Link } from "react-router-dom";
import { COLORS } from "../../util/nav";
import { AiOutlineCheckCircle } from "react-icons/ai";

const Home = (props) => {
    return (
        <div className="home-inner">
            <section className="tasks home-section">
                <h4 className="home-section-header">My Tasks</h4>
                <div>
                    { props.tasks ? ( props.tasks.map(task => {
                        if (task) return <div key={task.id} className="home-task">
                            <AiOutlineCheckCircle/>
                            <span className="task-title">{task.title}</span>
                            <span className={`task-project ${COLORS[task.projectId % 20]}`}>
                                {props.projects[task.projectId] ? props.projects[task.projectId].name : null}
                            </span>
                            <p>{task.dueDate}</p>
                        </div>
                    })) : (
                        <p>No tasks assigned to me at the moment</p>
                    )}
                </div>
            </section>
            <section className="home-projects home-section">
                <h4 className="home-section-header">Projects</h4>
                <div>
                    {console.log(props.projects)}
                    { props.projects ? (
                        Object.values(props.projects).map(project => {
                            if (project) return (
                                <div key={project.id} className="project-btn">
                                    <div className={`project-tile ${COLORS[project.id % 20]}`}></div>
                                    <span className="project-name">{project.name}</span>
                                </div>
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