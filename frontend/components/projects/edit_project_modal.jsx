import React, {useRef, useState, useEffect} from 'react';
import {connect} from 'react-redux';
import { GrClose } from 'react-icons/gr';
import { useClickOutside } from '../../hooks/click_outside';
import Assignee from '../tasks/assignee';
import { updateProject } from "../../actions/project_actions";

function EditProjectModal(props) {
    const ref = useClickOutside(props.closeProjectModal)
    const [inputVal, setInputVal] = useState(props.project.name)
    let value = useRef(props.project.name);
    useEffect(() => {
        return () => {
            console.log("in the use effect", value.current)
            props.updateProject({id: props.project.id, name: value.current})
        }
    }, [])
    const updateProjectName = (e) => {
        e.preventDefault();
        props.updateProject({id: props.project.id, name: e.target.value})
    }
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
                <form onSubmit={updateProjectName}>
                    <label><p>Name</p>
                        <input
                            type="text" 
                            title="Project name" 
                            value={inputVal}
                            onChange={ e => {
                                setInputVal(e.target.value)
                                value.current = e.target.value
                            }}
                            onBlur={updateProjectName}
                        />
                    </label>
                    <div className="bottom">
                        <div>
                            <Assignee 
                                className="project-owner"
                                project={props.project} 
                                inputType="project"
                            />
                        </div>
                        <div>
                            <input type="date" className="date" />
                        </div>
                    </div>
                </form>
            </div>
            <div className="modal-bottom-buffer"></div>
        </div>
    )
}
const mapStateToProps = (state, ownProps) => ({
    project: state.entities.projects[ownProps.projectId],
})
const mapDispatchToProps = (dispatch) => ({
    closeProjectModal: () => dispatch(closeProjectModal()),
    updateProject: project => dispatch(updateProject(project)),
})
export default connect(mapStateToProps, mapDispatchToProps)(EditProjectModal)
