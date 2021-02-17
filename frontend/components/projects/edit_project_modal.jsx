import React, {useRef, useState, useEffect} from 'react';
import {connect} from 'react-redux';
import { GrClose } from 'react-icons/gr';
import { useClickOutside } from '../../hooks/click_outside';
import { updateProject } from "../../actions/project_actions";
import UserAvatar from "../main/user_avatar";


function EditProjectModal(props) {
    const ref = useClickOutside(props.closeProjectModal)
    const [inputVal, setInputVal] = useState(props.project.name)
    const [dateInputVal, setDateInputVal] = useState(props.project.dueDate)
    const [showOwnerMenu, setShowOwnerMenu] = useState(false)
    const ownerMenuRef = useClickOutside(() => setShowOwnerMenu(false));
    let nameValue = useRef(props.project.name);
    let dateValue = useRef(props.project.dueDate);
    useEffect(() => {
        return () => {
            if(props.project.name != nameValue.current || props.project.dueDate != dateValue.current){
                props.updateProject({id: props.project.id, name: nameValue.current, due_date: dateValue.current})
            }
        }
    }, [])
    const updateProject = (type, val) => (e) => {
        e?.preventDefault();
        props.updateProject({id: props.project.id, [type]: val})
    }
    return (
        <div className="modal-background">
            <div className="modal-top-buffer"></div>
            <div className="outer-modal-container relative" ref={ref}>
                <div className="modal-container" >
                    <header className="modal-header">
                        <h2>Project details</h2>
                        <div className="btn exit" onClick={props.closeProjectModal}>
                            <GrClose className="close" />
                        </div>
                    </header>
                    <form onSubmit={(e)=>{e.preventDefault()}}>
                        <label><p>Name</p>
                            <input
                                type="text" 
                                title="Project name" 
                                value={inputVal}
                                onChange={ e => {
                                    setInputVal(e.target.value)
                                    nameValue.current = e.target.value
                                }}
                                onBlur={updateProject('name', nameValue.current)}
                            />
                        </label>
                        <div className="bottom">
                            <div onClick={()=>{
                                setShowOwnerMenu(true)
                                }}
                                className="user-current"
                            >
                                <UserAvatar user={props.users[props.project.ownerId]}/> {props.users[props.project.ownerId]?.fullName} 
                            </div>
                            <div>
                                <input 
                                    type="date" 
                                    className="date" 
                                    value={dateInputVal}
                                    onChange={(e)=>{
                                        setDateInputVal(e.target.value)
                                        dateValue.current = e.target.value
                                    }}
                                    onBlur={updateProject('due_date', dateValue.current)}
                                />
                            </div>
                        </div>
                    </form>
                </div>
                { showOwnerMenu &&
                    <div 
                        ref={ownerMenuRef}
                        className="assignee-menu dropdown-menu project-owner-menu" 
                    >
                        {Object.values(props.users).map(user => (
                            <div 
                                className="menu-item" 
                                key={user.id} 
                                onClick={updateProject('owner_id', user.id)}>
                                <UserAvatar user={user}/> {user.fullName} 
                            </div>
                        ))}
                    </div>
                }
            </div>
            <div className="modal-bottom-buffer"></div>
            
        </div>
    )
}
const mapStateToProps = (state, ownProps) => ({
    project: state.entities.projects[ownProps.projectId],
    users: state.entities.users
})
const mapDispatchToProps = (dispatch) => ({
    closeProjectModal: () => dispatch(closeProjectModal()),
    updateProject: project => dispatch(updateProject(project)),
})
export default connect(mapStateToProps, mapDispatchToProps)(EditProjectModal)
