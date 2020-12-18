import React, {useEffect} from 'react';
import HomeContainer from '../home/home_container';
import SideBarContainer from './side_bar/side_bar_container';
import { Link, Switch, Route } from "react-router-dom";
import TopBarContainer from './top_bar/top_bar_container';
import ProjectContainer from '../projects/project_container';
import ErrorPage from '../error-page';



export default function Main(props) {
    useEffect(() => {
        //query the database for
        props.getTeam()
    }, [SideBarContainer])
    return (
        <div className="main-page-container">
            <SideBarContainer/>
            <div className="main-page">
                <TopBarContainer />
                <Switch>
                    <Route path="/0/home" component={HomeContainer} />
                    <Route path="/0/projects/:projectId" component={ProjectContainer} />
                    {/* <Route component={ErrorPage} /> */}
                </Switch>
            </div>
        </div>
    )
}
