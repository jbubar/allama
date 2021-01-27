import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import TopBarNav from "./top_bar";

const mapStateToProps = (state) => ({
  users: state.entities.users,
  currentUser: state.entities.users[state.session.currentUserId],
  projects: state.entities.projects
});

export default withRouter(connect(mapStateToProps)(TopBarNav));
