import React, {useEffect} from 'react';
import HomeContainer from '../home/home_container';
import SideBarContainer from './side_bar/side_bar_container';
import { Link, Switch, Route } from "react-router-dom";
import TopBarContainer from './top_bar/top_bar_container';
import ProjectContainer from '../projects/project_container';
import TasksContainer from '../tasks/tasks_container';
import ErrorPage from '../error-page';
import { RiWindowLine } from 'react-icons/ri';



export default function Main(props) {
    useEffect(() => {
        //query the database for
        let teamId;
        if (props.currentUser){
            teamId = props.currentUser.teamId;
        } else{
            teamId = window.currentUser.teamId;
        }
        props.getTeam(teamId)
    }, [SideBarContainer])
    return (
        <div className="main-page-container">
            <SideBarContainer/>
            <div className="main-page">
                <TopBarContainer />
                <Switch>
                    <Route path="/home" component={HomeContainer} />
                    <Route path="/projects/:projectId" component={ProjectContainer} />
                    <Route path="/tasks" component={TasksContainer} />

                    {/* <Route component={ErrorPage} /> */}
                </Switch>
            </div>
        </div>
    )
}
