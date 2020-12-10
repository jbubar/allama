import React from 'react';
import { withRouter } from 'react-router-dom';
import SplashNav from './splash_nav';
import { Link } from 'react-router-dom';

const Splash  = () => {
    return (
        <div>
            <SplashNav/>
            <div className='splash-page'>
                <section className='splash-top-content'>
                    <div>
                        <h1>Work on big ideas, without the busywork.</h1>
                        <p>
                            From the small stuff to the big picture, 
                            Allama organizes work so teams are clear what to do, why it matters, 
                            and how to get it done.
                        </p>
                        <Link to="/signup" className="btn-splash">Try for free</Link>
                    </div>
                    <img src={window.bigIdeasImgURL} alt="Team with big ideas"/>
                </section>
                <footer className="splash-footer">
                    <h1>See everything the team's working on in one place.</h1>
                    <Link to="/signup">Try for free</Link>
                </footer>
            </div>
        </div>
    )
}

export default withRouter(Splash);