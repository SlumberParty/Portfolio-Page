import React from 'react';
import './Home.css';

const Home = () => {
  return ( 
    <div className="paragraph">
      <p style={{ textAlign: 'center', color: 'white' }}>A few projects:</p>
      <div className="images">
        <a href="https://optimistic-panini-e9191b.netlify.com/auth.html">
          <img src="../resources/sauceboss.png" alt="alchemybot thumbnail"/>
        </a>
        <a href="https://twitter.com/AlchemyPDXBot">
          <img src="../resources/alchemybot.png" alt="alchemybot thumbnail"/>
        </a>
        <a href="http://star-bbs.github.io">
          <img src="../resources/starnation.png" alt="alchemybot thumbnail"/>
        </a>
      </div>
    </div>
   );
}
 
export default Home;

