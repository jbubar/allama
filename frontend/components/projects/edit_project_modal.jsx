import React from 'react';
import {connect} from 'react-redux';
import { GrClose } from 'react-icons/gr';
import { useClickOutside } from '../../hooks/click_outside';

function EditProjectModal(props) {
    const ref = useClickOutside(props.closeProjectModal)
    console.log(props)
    return (
        <div className="modal-background">
            <div className="modal-container" ref={ref}>
                <header className="modal-header">
                    <h1>Project details</h1>
                    <div className="nav-icon exit">
                        <GrClose className="close" />
                    </div>
                </header>
                <form action="">
                    <input type="text" name="" id=""/>
                </form>
            </div>
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
