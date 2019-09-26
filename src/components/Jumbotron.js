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
    height: 150px;
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
            <span className="text">Claire Danielle Cassidy</span>
            <span className="gradient"></span>
            <span className="spotlight"></span>
          </div>
          <h2>Fullstack Software Developer</h2>
          <p>Hello! She/Her. Compulsive maker. Will talk Javascript, 
            LEDs, lasercutting, open source, and feelings all day. 
            Learning Python and Node Red. </p>
        </Container>
      </Jumbo>
    </Styles>

   );
  }
   
  export default Jumbotron;