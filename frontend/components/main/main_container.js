import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Main from "./main";
import { logout } from "../../actions/session_actions";
import { getTeam } from "../../actions/team_actions";

const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.currentUserId],
});
const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  getTeam: () => dispatch(getTeam(window.currentUser.teamId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
