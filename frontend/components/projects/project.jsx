import React, { useEffect } from 'react'
import ProjectPageContainer from './project_page_container'

export default function project(props) {
    useEffect(() => {
        props.getProject(props.match.params.projectId)
    }, [props.match.params.projectId])
    return (
        <div className="project-page-container">
            <div className="task-legend">
                <span className="column task-title">Task name</span>
                <span className="column">Assignee</span>
                <span className="column">Due date</span>
            </div>
            <ProjectPageContainer/>
        </div>
    )
}
