import React from 'react';
import './Resume.css';

import resume from '../src/resources/Claire Cassidy Resume Fall 2024.png'

const Resume = () => {
    return <div>
        <img class="resume-page" src={resume} alt="claire cassidy's fall 2024 resume" />;
        <div class="resume-link-container">
            <a href="https://drive.google.com/file/d/18kQ1e_GKnSzObzFR2yLho2fEfg2fFSAc/view?usp=drive_link" class="resume-link">Click here to view my resume with clickable links!</a>
        </div>
    </div>
}

export default Resume;
