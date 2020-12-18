import React from 'react';
import { AiOutlineCheckCircle } from "react-icons/ai";
import MutationObserver from 'react-mutation-observer';

export default function ProjectPage(props) {
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
    
    function updateTaskHandler(e){
        const input = e.target.parentElement
        console.log(e)
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
                                        {console.log(task)}
                                        {((Object.keys(props.users).length > 0) && task.assigneeId) ? 
                                            props.users[task.assigneeId].fullName : null}
                                    </span>
                                    <span className="column">{task.dueDate}</span>
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
                <div className="add-section"><span>+</span> Add section</div>
            </div>
        </div>
    )
}
