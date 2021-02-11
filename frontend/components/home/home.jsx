import React from 'react';
import { Link } from "react-router-dom";
import { COLORS } from "../../util/nav";
import Icon from "./icon.jsx" 
import UserTasks from '../tasks/user_tasks';
import { AiOutlineCheckCircle } from "react-icons/ai";
import TaskDate from "../tasks/date";
import { BsPlus } from 'react-icons/bs';



const Home = (props) => {
    return (
        <div className="home-inner">
            <section className="tasks home-section">
                <h4 className="section-header">My Tasks</h4>
                <div className="home-task-list">
                    { props.tasks ? ( props.tasks.map(task => {
                        if (task) return <div key={task.id} className="home-task">
                            <AiOutlineCheckCircle/>
                            <span className="task-title">{task.title}</span>
                            <Link 
                                to={`/projects/${task.projectId}`} 
                                title={props.projects[task.projectId]?.name} 
                                className={`task-project ${COLORS[(task.projectId + 10) % 20]}`}
                            >
                                {props.projects[task.projectId] ? props.projects[task.projectId].name : null}
                            </Link>
                            <TaskDate task={task}/>
                        </div>
                    })) : (
                        <p>No tasks assigned to me at the moment</p>
                    )}
                </div>
            </section>
            <section className="home-projects home-section">
                <h4 className="section-header">Projects</h4>
                <div>
                    { 
                        Object.values(props.projects)?.map(project => {
                            if (project) return (
                                <Link key={project.id} className="project-btn" to={`/projects/${project.id}`}>
                                    <div className={`project-tile ${COLORS[(project.id + 10) % 20]}`}>
                                        <Icon/>
                                    </div>
                                    <span className="project-name">{project.name}</span>
                                </Link>
                            )
                        })
                    }
                    <Link className="project-btn" to={`/home`}>
                        <div className={`project-tile`}>
                            <div className="new-proj-square">
                                <BsPlus/>
                            </div>
                        </div>
                        <span className="project-name">New Project</span>
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default Home;