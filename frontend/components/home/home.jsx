import React from 'react';
import { Link } from "react-router-dom";
import { COLORS } from "../../util/nav";
import { AiOutlineCheckCircle } from "react-icons/ai";
import Icon from "./icon.jsx" 

const Home = (props) => {
    return (
        <div className="home-inner">
            <section className="tasks home-section">
                <h4 className="section-header">My Tasks</h4>
                <div>
                    { props.tasks ? ( props.tasks.map(task => {
                        if (task) return <div key={task.id} className="home-task">
                            <AiOutlineCheckCircle/>
                            <span className="task-title">{task.title}</span>
                            <Link to={`/projects/${task.projectId}`}className={`task-project ${COLORS[task.projectId % 20]}`}>
                                {props.projects[task.projectId] ? props.projects[task.projectId].name : null}
                            </Link>
                            <p>{task.dueDate}</p>
                        </div>
                    })) : (
                        <p>No tasks assigned to me at the moment</p>
                    )}
                </div>
            </section>
            <section className="home-projects home-section">
                <h4 className="section-header">Projects</h4>
                <div>
                    {console.log(props.projects)}
                    { props.projects ? (
                        Object.values(props.projects).map(project => {
                            if (project) return (
                                <Link key={project.id} className="project-btn" to={`/projects/${project.id}`}>
                                    <div className={`project-tile ${COLORS[project.id % 20]}`}>
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