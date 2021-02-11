import React, {useState} from 'react';
import {connect} from 'react-redux';
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BiDotsHorizontalRounded, BiCaretDown } from "react-icons/bi";
import MutationObserver from 'react-mutation-observer';
import TaskDate from "../tasks/date";
import TaskAssignee from "../tasks/assignee";
import SectionMenu from './section_menu';
import { useClickOutside } from '../../hooks/click_outside';
import { createTask, updateTask, removeTask } from "../../actions/task_actions";
import { selectProjectTasks } from "../../reducers/selectors";
import { updateSection, removeSection } from "../../actions/section_actions";


function Section(props) {
    const [editable, setEditable] = useState(false);
    const [sectionMenu, setSectionMenu] = useState(false);
    const ref = useClickOutside(() => setSectionMenu(false));

    function addTaskClickHandler(e){
        const el = $(e.currentTarget)
        $("<div class='task-legend new-task'><span class='task-title column task'><span class='input new-input' role='textbox' contenteditable></span></span><span class='column'></span><span class='column'></span></div>")
        .insertBefore(el)

        const newInput = document.querySelector('.new-input')
        const newTask = document.querySelector('.new-task')
        const page = document.querySelector('.main-page-container')
        const focusOnInput = (e) => {
            e.stopPropagation();
            newInput.focus();
        }
        const onPressEnter = (e) => {
            if (e.keyCode === 13) {
                createTask();
            }
        }
        const createTask = (e) => {
            if (newInput.innerHTML.length > 0){
                props.createTask({
                    title: newInput.innerHTML, 
                    assignee_id: props.currentUserId, 
                    section_id: el.attr('id')
                })
            }
            newInput.removeEventListener('keydown', onPressEnter)
            newTask.removeEventListener('click', focusOnInput)
            page.removeEventListener('click', createTask)
            newTask.remove()
        }
        newInput.focus();
        newInput.addEventListener('keydown', onPressEnter)
        newTask.addEventListener('click', focusOnInput)
        page.addEventListener('click', createTask)
    }
    function updateTaskTitle(e){
        const input = e.target.parentElement
        const onEnterKey = (e) => {
            if (e.keyCode === 13) {
                props.updateTask({title:input.innerHTML, id:input.dataset.taskid});

                input.removeEventListener('keydown', onEnterKey)
                input.blur();
            }
        }
        input.addEventListener('keydown', onEnterKey)
    }
    return (
        <div key={props.section.id}>
            <div className="section-header">
                <div className="btn btn-sml"><BiCaretDown/></div>
                { editable ? (
                    <input 
                        type="text"
                        className="input section-name-input edit-section"
                        value={props.section.name}
                        onBlur={()=>setEditable(false)}
                    />
                ) : (
                    <h4 
                        className="section-name"
                        onClick={()=>{
                            setEditable(true)
                            setTimeout(()=>{
                                document.querySelector('input.edit-section').focus();
                            }, 0)
                        }}
                    >
                        {props.section.name}
                    </h4>
                )
                }
                <div className="relative">
                    <div className="btn btn-sml" onClick={()=>setSectionMenu(true)}>
                        <BiDotsHorizontalRounded className="dotdotdot"/>
                    </div>
                    {sectionMenu && 
                        <div className="dropdown-menu section-menu" ref={ref}>
                            <SectionMenu/>
                        </div>
                    }
                </div>
            </div>
            <div>
                { props.tasks ? ( props.tasks.filter(task => task.sectionId === props.section.id).map(task => {
                    if (task) return <div key={task.id} className="task-legend">
                        
                        <span className="task-title column task">
                            <AiOutlineCheckCircle className='check-icon' onClick={() => props.removeTask(task.id)}/>
                            <MutationObserver onContentChange={updateTaskTitle}>
                                <span
                                    data-taskid={task.id}
                                    className="input" 
                                    role="textbox" 
                                    contentEditable
                                >{task.title}</span>
                            </MutationObserver>
                        </span>
                        <span className="column">
                            <TaskAssignee task={task} inputType="task"/>
                        </span>
                        <span className="column">
                            <TaskDate task={task}/>
                        </span>
                    </div>
                })) : (
                    <p>No tasks have been made for this project yet!</p>
                )}
                <div className="add-task" onClick={addTaskClickHandler} id={props.section.id}>Add task...</div>
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    currentUserId: state.session.currentUserId,
    section: ownProps.section,
    tasks: selectProjectTasks(state, ownProps.section.projectId)
});
const mapDispatchToProps = (dispatch) => ({
  createTask: (task) => dispatch(createTask(task)),
  updateTask: (task) => dispatch(updateTask(task)),
  removeTask: (taskId) => dispatch(removeTask(taskId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Section);