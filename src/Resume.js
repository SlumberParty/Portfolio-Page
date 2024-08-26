import React from 'react';
import './Resume.css';

import resume from '../src/resources/Claire Cassidy Resume Spring 2024.png'

const Resume = () => {
    return <div class="resume-page">
        <img src={resume} alt="resume" height={800} width={600} />;
    </div>
}

export default Resume;
