import { connect } from 'react-redux';
import { selectTeamMembers } from '../../../reducers/selectors';
import SideBarNav from "./side_bar"

const mapStateToProps = state => ({
    team: selectTeamMembers(state),
    userId: state.session.currentUserId
})

export default connect(mapStateToProps)(SideBarNav);