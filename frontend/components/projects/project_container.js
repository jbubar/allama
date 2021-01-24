import { connect } from "react-redux";
import Project from "./project";
import { getProject } from "../../actions/project_actions";
// import { selectUsersTasks, selectProjects } from "../../reducers/selectors";
import { withRouter } from "react-router-dom";

// const mapStateToProps = (state) => ({
//   currentUser: state.entities.users[state.session.currentUserId],
//   tasks: selectUsersTasks(state, state.session.currentUserId),
//   projects: state.entities.projects,
// });
const mapDispatchToProps = dispatch => ({
  getProject: (projectId) => dispatch(getProject(projectId))
});

export default withRouter(connect(null, mapDispatchToProps)(Project));
