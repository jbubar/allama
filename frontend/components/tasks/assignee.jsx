import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateTask } from "../../actions/task_actions";
import UserAvatar from "../main/user_avatar";
import { useClickOutside } from '../../hooks/click_outside';

function Assignee(props) {
    const [showMenu, setShowMenu] = useState(false)
    const menuRef = useClickOutside(() => setShowMenu(false));
     
    function updateAssigneeHandler(assigneeId){
        if(props.inputType === "task"){
            props.updateTask({assignee_id: assigneeId, id: props.task.id});
        }
        setShowMenu(false);
    }
    return (
        <div className="assignee">
            <div onClick={()=>(setShowMenu(!showMenu))}>
            {((Object.keys(props.users).length > 0) && props.task.assigneeId) ? 
                (<div className="assignee-current">
                    <UserAvatar user={props.users[props.task.assigneeId]}/> {props.users[props.task.assigneeId].fullName} 
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
    project: ownProps.project,
    users: state.entities.users,
    inputType: ownProps.inputType
})

const mapDispatchToProps = (dispatch) => ({
  updateTask: task => dispatch(updateTask(task)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Assignee);
