import { connect } from "react-redux";
import ProjectPage from "./project_page";
import { logout } from "../../actions/session_actions";
import { selectProjectTasks, selectProjectSections } from "../../reducers/selectors";
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    const projectId = ownProps.match.params.projectId;
    return {
      users: state.entities.users,
      sections: selectProjectSections(state, projectId),
      tasks: selectProjectTasks(state, projectId),
      projectId: projectId,
    }
};
const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectPage));
