import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateTask } from "../../actions/task_actions";
import UserAvatar from "../main/user_avatar";
import { useClickOutside } from '../../hooks/click_outside';

function Assignee({ task, updateTask, users }) {
    const [showMenu, setShowMenu] = useState(false)
    const menuRef = useClickOutside(() => setShowMenu(false));
     


    function updateTaskHandler(assigneeId, taskId){
        updateTask({assignee_id: assigneeId, id: taskId});
        setShowMenu(false);
    }
    return (
        <div className="assignee">
            <div onClick={()=>(setShowMenu(!showMenu))}>
            {((Object.keys(users).length > 0) && task.assigneeId) ? 
                (<div>
                    <UserAvatar user={users[task.assigneeId]}/> {users[task.assigneeId].fullName} 
                </div>)
                : ("click to assign")}
            </div>
            { showMenu &&
                <div className="assignee-menu dropdown-menu" ref={menuRef}>
                    {Object.values(users).map(user => (
                        <div 
                            className="assignee-choices" 
                            key={user.id} 
                            onClick={() => updateTaskHandler(user.id, task.id)}>
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
    users: state.entities.users
})

const mapDispatchToProps = (dispatch) => ({
  updateTask: task => dispatch(updateTask(task)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Assignee);
