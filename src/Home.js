import React from 'react';
import './Home.css';

const Home = () => {
  return ( 
    <div className="home">
      <div className="project-images">
        <p className="home-sections">A Few Personal Projects:</p>
        <a href="https://thereuglow.club/">
          <img className="project-icon" src="../resources/thereuglow thumb.png" alt="there u glow thumbnail"/>
        </a>
        <a href="https://docs.google.com/document/d/180WD4LogMjx8FmKcFc0dmlTEKJ1Xa7dIHlEhSLMOAxA">
          <img className="project-icon" src="../resources/LED guide thumb.png" alt="led guide thumbnail"/>
        </a>
        <a href="http://www.disruptivelyuseful.org/">
          <img className="project-icon" src="../resources/lightprojector.png" alt="light projector tutorial thumbnail"/>
        </a>
      </div>
      <div className="stack-images"> 
            <img className="stack-icon" src="../resources/pythonicon.png" alt="python icon"/>
            <img className="stack-icon" src="../resources/express.png" alt="expressjs icon"/>
            <img className="stack-icon" src="../resources/react.png" alt="react icon"/>
            <img className="stack-icon" src="../resources/nodejs.jpg" alt="nodejs icon"/>
          </div>
          <p>I am also a practicing, aspiring software developer!</p>
      <p>Contact:</p>
      <div className="icons">
        <a href="mailto:clacassidy@gmail.com?Subject=Hello%20Claire!%20We%20would%20love%20to%20hire%20you!" target="_top">
           <img className="home-contact-icon" src="../resources/gmail.png" alt="gmail icon"/>
        </a>
        <a href="https://github.com/SlumberParty">
           <img className="home-contact-icon" src="../resources/github.png" alt="github icon"/>
        </a>
        <a href="https://www.linkedin.com/in/clairedaniellecassidy/">
          <img className="home-contact-icon" src="../resources/linkedin.png" alt="linkedin icon"/>
        </a>
        <a href="https://twitter.com/LaserMistress">
          <img className="home-contact-icon" src="../resources/twitter.png" alt="twitter icon"/>
        </a>
      </div>
    </div>
   );
}
 
export default Home;

