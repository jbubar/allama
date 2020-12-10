import React from 'react';
import { Link } from 'react-router-dom';

export default function SplashNav() {
    return (
        <nav>
            <Link to='/' className="logo-container">
                {/* <img className="logo-img" src="llama.svg" alt="llama logo"/> */}
                <h2 className="logo-text">allama</h2>
            </Link>
            <Link to="/login" className="nav-login-btn">Log In</Link>
            <Link to='/signup' className="nav-signup-btn">Try for free</Link>
        </nav>
    )
}
