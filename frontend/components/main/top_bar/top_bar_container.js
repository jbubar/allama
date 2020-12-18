import { connect } from "react-redux";
import { selectTeamMembers } from "../../../reducers/selectors";
import { withRouter } from "react-router-dom";
import TopBarNav from "./top_bar";

const mapStateToProps = (state) => ({
  users: selectTeamMembers(state),
  currentUser: state.entities.users[state.session.currentUserId],
  projects: state.entities.projects
});

// const mapDispatchToProps = dispatch => ({

// })

export default withRouter(connect(mapStateToProps)(TopBarNav));
