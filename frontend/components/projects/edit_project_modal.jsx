import React from 'react';
import {connect} from 'react-redux';
import { GrClose } from 'react-icons/gr';
import { useClickOutside } from '../../hooks/click_outside';

function EditProjectModal(props) {
    const ref = useClickOutside(props.closeProjectModal)
    console.log(props)
    return (
        <div className="modal-background">
            <div className="modal-top-buffer"></div>
            <div className="modal-container" ref={ref}>
                <header className="modal-header">
                    <h2>Project details</h2>
                    <div className="nav-icon exit" onClick={props.closeProjectModal}>
                        <GrClose className="close" />
                    </div>
                </header>
                <form action="">
                    <label><p>Name</p>
                        <input type="text" title="Project name" value={props.project.name}/>
                    </label>
                    <div className="bottom">
                        <div className="project-owner"></div>
                        <input type="date" className="date" />
                    </div>
                </form>
            </div>
            <div className="modal-bottom-buffer"></div>
        </div>
    )
}
const mapStateToProps = (state, ownProps) => ({
    project: state.entities.projects[ownProps.projectId]
})
const mapDispatchToProps = (dispatch) => ({
    closeProjectModal: () => dispatch(closeProjectModal()),
})
export default connect(mapStateToProps, mapDispatchToProps)(EditProjectModal)
