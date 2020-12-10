import React from 'react';
import { Link } from 'react-router-dom';

export default function SplashNav() {
    return (
        <nav>
            <Link to='/' className="logo-container">
                <img src={window.logoImgURL} alt="a llama logo"/>
                <h2 className="logo-text">allama</h2>
            </Link>
            <Link to="/login" className="nav-login-btn">Log In</Link>
            <Link to='/signup' className="btn-splash btn-nav">Try for free</Link>
        </nav>
    )
}
