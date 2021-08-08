import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className="container lp-page center">
            <div className="section">
                <h1>Create a resume that stands out</h1>
                <p>Create a Resume that perfectally describes your skils and match job profile.</p>
                <br></br>
                <div>
                    <NavLink to="/main" className="btn hvr-float-shadow"><span>Get Started for Free</span>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;