import React from 'react';
import './Resume.css';

import resume from '../src/resources/Claire Cassidy Resume Fall 2024.png'

const Resume = () => {
    return <div class="resume-page">
        {/* <a href="https://drive.google.com/file/d/18kQ1e_GKnSzObzFR2yLho2fEfg2fFSAc/view?usp=drive_link">
            <p>Click here to view my resume with clickable links!</p>
          </a> */}
        <img src={resume} alt="claire cassidy's fall 2024 resume"/>;
    </div>
}

export default Resume;
