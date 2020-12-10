import React from 'react';
import { Link } from "react-router-dom";

const Home = (props) => {
    return (
        <div>
            <h1>HOME PAGE!!</h1>
            <h3>Welcome {props.currentUser.full_name}</h3> 
            <button onClick={props.logout}>Log Out</button>
        </div>
    )
}

export default Home;