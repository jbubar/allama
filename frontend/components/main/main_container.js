import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Main from "./main";
import { logout } from "../../actions/session_actions";

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
});
const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
