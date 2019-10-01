import React from 'react';
import './Home.css';

const Home = () => {
  return ( 
    <div className="paragraph">
      <p>Projects I've gone done and did:</p>
      <div className="images">
        <a href="https://optimistic-panini-e9191b.netlify.com/auth.html">
          <img className="project-link" src="../resources/sauceboss.png" alt="alchemybot thumbnail"/>
        </a>
        <a href="https://twitter.com/AlchemyPDXBot">
          <img className="project-link" src="../resources/alchemybot.png" alt="alchemybot thumbnail"/>
        </a>
        <a href="http://star-bbs.github.io">
          <img className="project-link" src="../resources/starnation.png" alt="alchemybot thumbnail"/>
        </a>
      </div>
    </div>
   );
}
 
export default Home;

