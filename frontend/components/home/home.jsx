import React from 'react';

const Home = (props) => {
    return (
        <div>
            <h1>HOME PAGE!!</h1>
            <h3>Welcome {props.currentUser}</h3>
        </div>
    )
}

export default Home;