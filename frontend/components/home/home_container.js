import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Home from "./home";

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
});

export default withRouter(connect(mapStateToProps)(Home));
