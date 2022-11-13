import React from 'react';
import './ProgressBar.scss';

const ProgressBar = () => {
    return (
        <div className="container">
            <div className="progressbar-container">
                <div className="progressbar-complete" style={{width: `${60}%`}}>
                    <div className="progressbar-liquid"></div>
                </div>
                <span className="progress">{60}%</span>
            </div>
        </div>
    );
};

export default ProgressBar;
