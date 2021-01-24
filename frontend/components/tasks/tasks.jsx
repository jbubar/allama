import React from 'react';
import UserTasks from '../tasks/user_tasks';


export default function Tasks(props) {
    
    

    return (
        <div>
            <UserTasks tasks={props.tasks}/>
        </div>
    )
}
