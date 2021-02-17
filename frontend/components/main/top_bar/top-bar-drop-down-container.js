import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import DropDown from "./top_bar_drop_down";
import { logout } from "../../../actions/session_actions";
import { openSettingsModal } from "../../../actions/ui_actions";

const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.currentUserId],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: () => dispatch(logout()),
  openSettingsModal: () => dispatch(openSettingsModal()),
  close: ownProps.close
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DropDown)
);
