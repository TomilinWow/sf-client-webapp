import React from 'react';
import './ProgressBar.scss';

const ProgressBar = () => {
    return (
        <div className="container">
            <div className="progressbar-container">
                <div className="progressbar-complete" style={{width: `${80}%`}}>
                    <div className="progressbar-liquid"></div>
                </div>
                <span className="progress">{80} lvl</span>
            </div>
        </div>
    );
};

export default ProgressBar;
