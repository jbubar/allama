import React from 'react'
import { connect } from 'react-redux';
import { AiOutlineCheckCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { COLORS } from "../../util/nav";
import MutationObserver from 'react-mutation-observer';
import { createTask, updateTask, removeTask } from "../../actions/task_actions";
import TaskDate from "./date";



function UserTasks(props) {
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
        <div>
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
                            <Link 
                                to={`/projects/${task.projectId}`} 
                                title={props.projects[task.projectId]?.name} 
                                className={`task-project ${COLORS[(task.projectId + 10) % 20]}`}
                            >
                                {props.projects[task.projectId]?.name.toString()}
                            </Link>
                        </span>
                        <span className="column"><TaskDate task={task}/></span>
                    </div>
                })) : (
                    <p>No tasks yet!</p>
                )}
            </div>
                    </div>
            </div>
        </div>
            
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.entities.users,
    projects: state.entities.projects,
    tasks: ownProps.tasks,
  };
};
const mapDispatchToProps = (dispatch) => ({
  createTask: (task) => dispatch(createTask(task)),
  updateTask: (task) => dispatch(updateTask(task)),
  removeTask: (taskId) => dispatch(removeTask(taskId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserTasks);