import React from 'react';
import { AiOutlineCheckCircle } from "react-icons/ai";


export default function ProjectPage(props) {
    return (
        <div>
            {console.log("in project page!!!", props)}
            <div className="projects-page-inner">
                { console.log(props)}
                { props.sections ? props.sections.map(section => (
                    <div key={section.id}>
                        <h4 className="section-header">{section.name}</h4>
                        <div>
                            { props.tasks ? ( props.tasks.filter(task => task.projectId === section.projectId).map(task => {
                                if (task) return <div key={task.id} className="task-legend">
                                    
                                    <span className="task-title column task">
                                        <AiOutlineCheckCircle className='check-icon'/>
                                        <span
                                            className="input" 
                                            role="textbox" 
                                            contentEditable
                                        >{task.title}</span>
                                    </span>
                                    <span className="column">
                                        {console.log(task)}
                                        {((Object.keys(props.users).length > 0) && task.assigneeId) ? 
                                        console.log(props.users[task.assigneeId]): null}
                                    </span>
                                    <span className="column">{task.dueDate}</span>
                                </div>
                            })) : (
                                <p>No tasks have been made for this project yet!</p>
                            )}
                            <div className="add-task">Add task...</div>
                        </div>
                    </div>
                )) : (
                    <p>No tasks have been made for this project yet!</p>
                )
                }
                <div className="add-section"><span>+</span> Add section</div>
            </div>
        </div>
    )
}
