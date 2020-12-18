import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Home from "./home";
import { logout } from "../../actions/session_actions"
import { selectUsersTasks, selectProjects } from "../../reducers/selectors";


const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.currentUserId],
    tasks: selectUsersTasks(state),
    projects: state.entities.projects
});
const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
