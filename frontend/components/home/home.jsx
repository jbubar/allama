import React from 'react';
import { Link } from "react-router-dom";

const Home = (props) => {
    return (
        <div>
            <h1>HOME PAGE!!</h1>
            {
                props.currentUser ? <h3>Welcome {props.currentUser.full_name}</h3> :
                <div>
                    <Link to="/signup">Sign up</Link>
                    <Link to="/login">Login</Link>
                    {/* <Link>Demo User</Link> */}
                </div>
            } 
        </div>
    )
}

export default Home;