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
    height: 140px;
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
          <div className="neon">
            <span className="name">Claire Danielle Cassidy</span>
            <span className="gradient"></span>
            <span className="spotlight"></span>
          </div>
          <h2>Full stack software developer</h2>
          <div className="stack-images"> 
            <img className="stack-icon" src="../resources/mongodb.png" alt="mongodb icon"/>
            <img className="stack-icon" src="../resources/express.png" alt="expressjs icon"/>
            <img className="stack-icon" src="../resources/react.png" alt="react icon"/>
            <img className="stack-icon" src="../resources/nodejs.jpg" alt="nodejs icon"/>
          </div>
          <p className="intro">Hello! She/Her. Compulsive maker. Will talk javascript, 
            LEDs, lasercutting, open source and feelings all day. 
            Learning python and node red. </p>
          </Container>
      </Jumbo>
    </Styles>

);
}
   
  export default Jumbotron;