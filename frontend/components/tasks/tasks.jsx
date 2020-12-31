import React from 'react';
import { AiOutlineCheckCircle } from "react-icons/ai";
import MutationObserver from 'react-mutation-observer';
import { COLORS } from "../../util/nav";
import { Link } from 'react-router-dom'

export default function Tasks(props) {
    
    function updateTaskHandler(e){
        const input = e.target.parentElement
        const onEnterKey = (e) => {
            if (e.keyCode === 13) {
                props.updateTask({title:input.innerHTML, id:input.id});

                input.removeEventListener('click', onEnterKey)
                input.blur();
            }
        }
        input.addEventListener('keydown', onEnterKey)
    }

    return (
        <div className="project-page-container">
            <div className="task-legend">
                <span className="column task-title">Task name</span>
                <span className="column">Project</span>
                <span className="column">Due date</span>
            </div>
            <div className="projects-page-inner">
                    <div>
                        <div>
                            { props.tasks ? ( props.tasks.map(task => {
                                if (task) return <div key={task.id} className="task-legend">
                                    
                                    <span className="task-title column task">
                                        <AiOutlineCheckCircle className='check-icon' onClick={() => props.removeTask(task.id)}/>
                                        <MutationObserver onContentChange={updateTaskHandler}>
                                            <span
                                                id={task.id}
                                                className="input" 
                                                role="textbox" 
                                                contentEditable
                                            >{task.title}</span>
                                        </MutationObserver>
                                    </span>
                                    <span className="column">
                                        <Link to={`/projects/${task.projectId}`} className={`task-project ${COLORS[(task.projectId + 10) % 20]}`}>
                                            {props.projects[task.projectId] ? props.projects[task.projectId].name : null}
                                        </Link>
                                    </span>
                                    <span className="column">{task.dueDate}</span>
                                </div>
                            })) : (
                                <p>No tasks yet!</p>
                            )}
                        </div>
                    </div>
            </div>
        </div>
    )
}
