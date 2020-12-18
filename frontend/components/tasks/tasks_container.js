import { connect } from "react-redux";
import Tasks from "./tasks";
import { createTask, updateTask, removeTask } from "../../actions/task_actions";
import { selectUsersTasks } from "../../reducers/selectors";
import { withRouter } from "react-router-dom";

const mapStateToProps = state => {
  return {
    currentUserId: state.session.currentUserId,
    users: state.entities.users,
    projects: state.entities.projects,
    tasks: selectUsersTasks(state)
  };
};
const mapDispatchToProps = (dispatch) => ({
  createTask: (task) => dispatch(createTask(task)),
  updateTask: (task) => dispatch(updateTask(task)),
  removeTask: (taskId) => dispatch(removeTask(taskId)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Tasks)
);
