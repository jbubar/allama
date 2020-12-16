import { connect } from "react-redux";
import { selectTeamMembers } from "../../reducers/selectors";
import { withRouter } from "react-router-dom";
import TopBarNav from "./top_bar";

const mapStateToProps = (state) => ({
  team: selectTeamMembers(state),
});

// const mapDispatchToProps = dispatch => ({

// })

export default withRouter(connect(mapStateToProps)(TopBarNav));
