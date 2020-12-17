import { connect } from 'react-redux';
import { selectTeamMembers } from '../../../reducers/selectors';
import { withRouter } from "react-router-dom";
import SideBarNav from "./side_bar"

const mapStateToProps = state => ({
    team: selectTeamMembers(state)
})

// const mapDispatchToProps = dispatch => ({

// })

export default withRouter(connect(mapStateToProps)(SideBarNav));