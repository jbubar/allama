import { connect } from 'react-redux';
import { selectTeamMembers, selectProjects } from '../../../reducers/selectors';
import SideBarNav from "./side_bar"

const mapStateToProps = state => ({
    team: selectTeamMembers(state),
    userId: state.session.currentUserId,
    projects: selectProjects(state)
})

export default connect(mapStateToProps)(SideBarNav);