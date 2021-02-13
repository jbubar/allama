import React from 'react';
import { connect } from 'react-redux';
import {BsPencil, BsLink45Deg} from 'react-icons/bs';
import { openProjectModal } from "../../../actions/ui_actions";
import {removeProject} from "../../../actions/project_actions";
import {withRouter} from 'react-router-dom';


function ProjectMenu({ projectId, openProjectModal, closeMenu, removeProject, match, history }) {
    return (
        <div>
            <div className="menu-item" onClick={() => {openProjectModal(projectId); closeMenu()}}>
                <span className="menu-sub-icon"><BsPencil/></span>
                <div>Edit Project</div>
            </div>
            <div 
                className="menu-item" 
                onClick={() => {
                    window.navigator.clipboard.writeText(`https://allama.herokuapp.com/projects/${projectId}`)
                    closeMenu()
                }}>
                <span className="menu-sub-icon"><BsLink45Deg/></span>
                <div>Copy Project Link</div>
            </div>
            <div className="dividing-line"></div>
            <div 
                className="menu-item delete-btn" 
                onClick={()=>{
                    removeProject()
                    if(match.params.projectId == projectId){history.push('/home')}
                }}>
                Delete Project
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    projectId: ownProps.projectId
})
const mapDispatchToProps = (dispatch, ownProps) => ({
    openProjectModal: (projectId) => dispatch(openProjectModal(projectId)),
    removeProject: () => dispatch(removeProject(ownProps.projectId)),
    closeMenu: ownProps.closeMenu
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectMenu))