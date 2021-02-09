import React, {useState} from 'react';
import { AiOutlineCheckCircle } from "react-icons/ai";
import MutationObserver from 'react-mutation-observer';
import TaskDate from "../tasks/date";
import TaskAssignee from "../tasks/assignee";
import { useClickOutside } from '../../hooks/click_outside';

export default function ProjectPage(props) {
    const [newSection, setNewSection] = useState(false);
    const newSectionRef = useClickOutside(()=>{
        setTimeout(()=>setNewSection(false), 0);
    })
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

                input.removeEventListener('click', onEnterKey)
                input.blur();
            }
        }
        input.addEventListener('keydown', onEnterKey)
    }

    return (
        <div>
            <div className="projects-page-inner">
                { props.sections ? props.sections.map(section => (
                    <div key={section.id}>
                        <h4 className="section-header">{section.name}</h4>
                        <div>
                            { props.tasks ? ( props.tasks.filter(task => task.sectionId === section.id).map(task => {
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
                            <div className="add-task" onClick={addTaskClickHandler} id={section.id}>Add task...</div>
                        </div>
                    </div>
                )) : (
                    <p>No tasks have been made for this project yet!</p>
                )
                }
                {newSection && 
                    <input 
                        ref={newSectionRef}
                        type="text"
                        className="input new-section-input"
                        onBlur={(e)=>{
                            props.createSection({name: e.target.value, project_id: props.projectId})
                        }}
                    />
                }
                <div 
                    className="add-section"
                    onClick={()=>{
                        setNewSection(true);
                        setTimeout(()=>{
                            document.querySelector('.new-section-input').focus();
                        }, 0)
                    }}
                >
                    <span>+</span> Add section
                </div>
            </div>
        </div>
    )
}
