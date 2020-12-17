import SplashNav from "./splash_nav";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.currentUserId],
});

export default withRouter(connect(mapStateToProps)(SplashNav));
