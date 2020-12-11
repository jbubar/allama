import React from 'react';
import { withRouter } from 'react-router-dom';
import SplashNavContainer from './splash_nav_container';
import { Link } from 'react-router-dom';

const Splash  = () => {
    return (
        <div>
            <SplashNavContainer/>
            <div className='splash-page'>
                <section className='splash-top-content'>
                    <div className='top-written-content'>
                        <h1>Work on big ideas, without the busywork.</h1>
                        <p>
                            From the small stuff to the big picture, 
                            Allama organizes work so teams are clear what to do, why it matters, 
                            and how to get it done.
                        </p>
                        <Link to="/signup" className="btn-splash">Try for free</Link>
                    </div>
                    <div className="img-container">
                        <img src={window.bigIdeasImgURL} alt="Team with big ideas"/>
                    </div>
                </section>
                <footer className="splash-footer">
                    <h1>See everything the team's working on in one place.</h1>
                    <Link to="/signup" className='btn-splash'>Try for free</Link>
                </footer>
            </div>
        </div>
    )
}

export default withRouter(Splash);