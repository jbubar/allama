import React, {useState} from 'react';
import {connect} from 'react-redux';
import { GrClose } from 'react-icons/gr';
import {BiArrowBack} from 'react-icons/bi';
import {withRouter} from 'react-router-dom';
import { createProject } from "../../actions/project_actions";

function NewProjectPage(props) {
    const [projectName, setProjectName] = useState("");
    function handleSubmit(e){
        e.preventDefault();
        props.createProject({
            name: projectName,
            team_id: props.teamId,
            owner_id: props.currentUserId,
        }).then(res => {
            props.history.push(`/projects/${res.project.id}`)
        })
    }
    return (
        <div>
            <header className="new-proj relative">
                <div className="new-proj header-left">
                    {console.log(props)}
                    <div className="btn btn-sml" onClick={props.history.goBack}><BiArrowBack/></div>
                </div>
                <div className="blue-background hide-in-mobile" onClick={props.history.goBack}>
                    <div className="btn btn-sml dark-bgd"><GrClose/></div>
                </div>
            </header>
            <div className="new-proj-page-contain">
                <form onSubmit={handleSubmit}
                >
                    <h2 className="new-proj">New project</h2>
                    <label><p>Project name</p>
                        <input
                            className="new-proj"
                            type="text" 
                            title="Project name" 
                            onChange={ e => {
                                setProjectName(e.target.value)
                            }}
                        />
                        <input 
                            type="submit" 
                            value="Create project"
                            className="new-proj-btn btn"
                            disabled={projectName.length > 0 ? false : true}
                        />
                    </label>
                </form>
                <div className="example-proj-img hide-in-mobile">
                    <img src="https://d3ki9tyy5l5ruj.cloudfront.net/obj/af880b868a1eb8fec49c716be7524f25f0199ba4/list_view.svg" alt="Example project page"/>
                    <h5 className="project-name-preview">{projectName}</h5>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => ({
    currentUserId: state.session.currentUserId,
    teamId: state.entities.team.id
})

const mapDispatchToProps = (dispatch) => ({
    createProject: project => dispatch(createProject(project)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewProjectPage))