import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateTask } from "../../actions/task_actions";

function Date({ task, updateTask }) {
    const [date, setDate] = useState(task.dueDate)
    function updateTaskHandler(e){
        let newDate = e.target.value

        updateTask({due_date: newDate, id: e.target.dataset.taskid});
    }
    return (
        <div>
            <input 
                data-taskid={task.id}
                type="date" 
                value={date}
                onChange={(e) => setDate(e.target.value)}
                onBlur={updateTaskHandler}
            >
            </input>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    task: ownProps.task,
})

const mapDispatchToProps = (dispatch) => ({
  updateTask: (task) => dispatch(updateTask(task)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Date);
