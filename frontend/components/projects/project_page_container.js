import { connect } from "react-redux";
import ProjectPage from "./project_page";
import { createTask, updateTask, removeTask } from "../../actions/task_actions";
import { selectProjectTasks, selectProjectSections } from "../../reducers/selectors";
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    const projectId = ownProps.match.params.projectId;
    return {
      currentUserId: state.session.currentUserId,
      users: state.entities.users,
      sections: selectProjectSections(state, projectId),
      tasks: selectProjectTasks(state, projectId),
      projectId: projectId,
    }
};
const mapDispatchToProps = (dispatch) => ({
  createTask: (task) => dispatch(createTask(task)),
  updateTask: (task) => dispatch(updateTask(task)),
  removeTask: (taskId) => dispatch(removeTask(taskId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectPage));
