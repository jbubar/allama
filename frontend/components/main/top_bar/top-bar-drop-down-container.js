import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import DropDown from "./top_bar_drop_down";
import { logout } from "../../../actions/session_actions";

const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.currentUserId],
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
})

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(DropDown)
    );
