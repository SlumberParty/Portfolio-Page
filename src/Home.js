import React from 'react';
import './Home.css';

const Home = () => {
  return ( 
    <div className="home">
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
          <a href="http://withfeeling.blog/">
            <img className="home-contact-icon" src="../resources/blog.png" alt="blog icon"/>
          </a>
          <a href="https://twitter.com/LaserMistress">
            <img className="home-contact-icon" src="../resources/twitter.png" alt="twitter icon"/>
          </a>
      </div>
      {/* <div className="names">
        <p>Projects:</p>
        <p>gmail</p>
        <p>github</p>
        <p>linkedIn</p>
        <p>blog</p>
        <p>twitter</p>
      </div> */}
      <div className="project-images">
        <p className="home-sections">Projects:</p>
        <a href="https://optimistic-panini-e9191b.netlify.com/auth.html">
          <img className="project-icon" src="../resources/sauceboss.png" alt="alchemybot thumbnail"/>
        </a>
        <a href="https://twitter.com/AlchemyPDXBot">
          <img className="project-icon" src="../resources/alchemybot.png" alt="alchemybot thumbnail"/>
        </a>
        <a href="http://star-bbs.github.io">
          <img className="project-icon" src="../resources/starnation.png" alt="alchemybot thumbnail"/>
        </a>
      </div>
    </div>
   );
}
 
export default Home;

