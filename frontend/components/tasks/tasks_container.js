import { connect } from "react-redux";
import Tasks from "./tasks";
import { selectUsersTasks } from "../../reducers/selectors";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, ownProps) => {

  return {
    user: state.entities.users[ownProps.match.params.userId],
    tasks: selectUsersTasks(state, ownProps.match.params.userId),
  };
};
const mapDispatchToProps = (dispatch) => ({

});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Tasks)
);
