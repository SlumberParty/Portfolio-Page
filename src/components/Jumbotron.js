import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import './jumbotron.css';

const Styles = styled.div`
  .jumbo {
    background-color: #222;
    background-size: cover;
    padding-top: 0px;
    padding-bottom: 0px;
    text-align: center;
    color: #efefef;
    height: 8em;
    position: relative;
    z-index: -2;
  }
  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

const Jumbotron = () => {
  return ( 
    <Styles>
      <Jumbo fluid className="jumbo">
        <div className="overlay"></div>
        <Container>
          <div className="neon bigscreen-only">
            <span className="name">Claire Danielle Cassidy</span>
            <span className="gradient"></span>
            <span className="spotlight"></span>
          </div>
          <div className="smallscreen-only">
            <h1 className="small-name">Claire Danielle Cassidy</h1>
          </div>
          <h2>Open source hardware wizard ★ Artist ★ Maker of cool stuff ★ Cartoon watcher ★ Experience</h2>
          <div className="stack-images"> 
            <img className="stack-icon" src="../resources/mongodb.png" alt="mongodb icon"/>
            <img className="stack-icon" src="../resources/express.png" alt="expressjs icon"/>
            <img className="stack-icon" src="../resources/react.png" alt="react icon"/>
            <img className="stack-icon" src="../resources/nodejs.jpg" alt="nodejs icon"/>
          </div>
          <p className="intro">She/Her. Open source electronic hardware project manager with 10+ years experience 
          as an independent artist, designer, and small business owner. Full stack web developer.<br>

I have a passion for problem solving and innovation. I work well in diverse, inclusive, emotionally healthy 
environments. I believe in human-centered open source. My dream job would foster a learning environment, and 
provide the opportunity to teach to a diverse range of people about technology I believe makes a positive impact. 
I also love engaging at events be it networking, speaking or exhibiting.<br>

I fully embrace the ever changing, ever growing environment that is learning software, hardware and systems, 
and I learn quickly. I hope to contribute in ways that shift the industry to be ever more inclusive, empowering 
and sustainable.<br>

Currently project managing at Crowd Supply in Portland, OR, guiding dozens of creators and their 
innovative open source hardware concepts through an extremely hands-on pipeline of community building - 
funding - manufacturing - fulfillment - distribution.</p>
            <p>ClaCassidy@gmail.com</p>
          </Container>
      </Jumbo>
    </Styles>

);
}
   
  export default Jumbotron;