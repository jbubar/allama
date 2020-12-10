import React from 'react';
import { Link } from 'react-router-dom';

export default function ErrorPage() {
    return (
        <div>
            <header className='error-page-hero'>
                <h1>This page is lost in space!</h1>
                <h3>We can't find what you're looking for, but the links below may help.</h3>
                <img src={window.errorImgURL} alt="two people scrathing their heads around a broken computer"/>
            </header>
            <div className="error-page-links">
                <div className="error-page-link-container">
                    <p>Your team's tasks and conversations</p>
                    <Link to='/login'>Go to Allama</Link>
                </div>
                <div className="error-page-link-container">
                    <p>Just getting started?</p>
                    <Link to='/signup'>Sign Up!</Link>
                </div>
            </div>
        </div>
    )
}
