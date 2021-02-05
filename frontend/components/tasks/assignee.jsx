import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateTask } from "../../actions/task_actions";
import { updateProject } from "../../actions/project_actions";
import UserAvatar from "../main/user_avatar";
import { useClickOutside } from '../../hooks/click_outside';

function Assignee(props) {
    const [showMenu, setShowMenu] = useState(false)
    const menuRef = useClickOutside(() => setShowMenu(false));
     
    function updateAssigneeHandler(newAssigneeId){
        if(props.inputType === "task"){
            props.updateTask({assignee_id: newAssigneeId, id: props.task.id});
        }
        if(props.inputType === "project"){
            props.updateProject({owner_id: newAssigneeId, id: props.project.id});
        }
        setShowMenu(false);
    }
    return (
        <div className="assignee">
            <div onClick={()=>(setShowMenu(!showMenu))}>
            {((Object.keys(props.users).length > 0)) ? 
                (<div className="assignee-current">
                    <UserAvatar user={props.users[props.currentAssigneeId]}/> {props.users[props.currentAssigneeId]?.fullName} 
                </div>)
                : ("click to assign")}
            </div>
            { showMenu &&
                <div className="assignee-menu dropdown-menu" ref={menuRef}>
                    {Object.values(props.users).map(user => (
                        <div 
                            className="menu-item" 
                            key={user.id} 
                            onClick={() => updateAssigneeHandler(user.id)}>
                            <UserAvatar user={user}/> {user.fullName} 
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    task: ownProps.task,
    currentAssigneeId: ownProps.project?.ownerId || ownProps.task.assigneeId,
    project: ownProps.project,
    users: state.entities.users,
    inputType: ownProps.inputType
})

const mapDispatchToProps = (dispatch) => ({
  updateTask: task => dispatch(updateTask(task)),
  updateProject: project => dispatch(updateProject(project)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Assignee);
