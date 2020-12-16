import React from 'react';
import HomeContainer from '../home/home_container';
import SideBarContainer from './side_bar_container';
import { Link, Switch, Route } from "react-router-dom";
import TopBarContainer from './top_bar_container'

export default function Main() {
    return (
        <div className="main-page-container">
            <SideBarContainer/>
            <div className="main-page">
                <TopBarContainer />
                <Switch>
                    <Route exact path="/home" component={HomeContainer} />
                </Switch>
            </div>
        </div>
    )
}
