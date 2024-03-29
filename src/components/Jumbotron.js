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
    margin-bottom: 0px;
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
        <h3>Open Source Hardware ★ Project Manager ★ LEDs, Lasercutting, Electronics & Solar ★ Creator ★ Organizer ★ Experience</h3>
        <p className="intro">She/Her. Open source electronic hardware project manager with 10+ years experience as an
          independent artist, designer, and small business owner. Apiring python developer and embedded engineer. Fascinated by
          open source philosophy and technology that is indistinguishable from magic.</p>
      </Container>
    </Styles>

  );
}

export default Jumbotron;