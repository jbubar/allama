import React from 'react';
import { Link } from 'react-router-dom';

export default function SplashNav() {
    return (
        <nav className='splash-nav'>
            <Link to='/' className="logo-container">
                <img src={window.allamaLogoImgURL} alt="a llama logo"/>
                {/* <h2 className="logo-text">allama</h2> */}
            </Link>
            <a href="mailto: jpbubar@gmail.com" className="nav-link">Contact Josh</a>
            <Link to="/login" className="nav-link">Log In</Link>
            <Link to='/signup' className="btn-splash btn-nav">Try for free</Link>
        </nav>
    )
}
