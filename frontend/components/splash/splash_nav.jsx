import React from 'react';
import { Link } from 'react-router-dom';

export default function SplashNav(props) {
    return (
        <nav className='splash-nav'>
            <Link to='/' className="logo-container">
                <img src={window.allamaLogoImgURL} alt="a llama logo"/>
            </Link>
            {/* <a href="mailto: jpbubar@gmail.com" className="nav-link">Contact Josh</a> */}
            {
                props.currentUser ? (
                    <React.Fragment>
                        <Link to="/home" className="btn-splash btn-nav">Go to Allama</Link> 
                    </React.Fragment>
                ) : (
                <React.Fragment>
                    <Link to="/login" className="nav-link">Log In</Link>
                    <Link to='/signup' className="btn-splash btn-nav">Try for free</Link>
                </React.Fragment>
                )} 

        </nav>
    )
}
