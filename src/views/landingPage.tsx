// A typical landing page in react

import './landingPage.css';
// import React from 'react';


const LandingPage = () => {

    return (
        <>
            <div className="landing-page">
                <div>
                    <h1><span className="special-letter">Arti</span>ficial intelligence <span className="special-letter">Tech</span>
                        <span>nologies</span>
                    </h1>
                </div>
                <div className="gif-container"><video controls={true} src="https://wixplosives.github.io/codux-assets-storage/add-panel/video-placeholder.mp4" />
                </div>
                <div className="lp-title">
                    <h2>Dare to Dream: Where Ideas Flourish, Blogs Ignite!</h2>
                </div></div>
        </>
    );
}

export default LandingPage;
