import React from 'react';
import { connect } from 'react-redux';
import {BsPencil, BsLink45Deg} from 'react-icons/bs';
import { openProjectModal } from "../../../actions/ui_actions.js"

function ProjectMenu({ projectId }) {
    return (
        <div>
            <div className="menu-item" onClick={() => openProjectModal(projectId)}>
                <span className="menu-sub-icon"><BsPencil/></span>
                <div>Edit Project</div>
            </div>
            <div className="menu-item">
                <span className="menu-sub-icon"><BsLink45Deg/></span>
                <div>Copy Project Link</div>
            </div>
            <div className="dividing-line"></div>
            <div className="menu-item delete-btn">
                Delete Project
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    projectId: ownProps.projectId
})
const mapDispatchToProps = (dispatch) => ({
    openProjectModal: (projectId) => dispatch(openProjectModal(projectId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectMenu)