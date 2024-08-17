import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';

import keyframes from 'styled-components';

const Rainbow = keyframes.div`
.rainbow-text{
	position: relative;
	color: #000;
	background: #fff;
	mix-blend-mode: multiply;
  overflow: hidden;
  
  text-shadow: 0 2px 4px rgba(0,0,0,0.5);
  padding: 2px 4px 6px;
  margin: -2px -4px -6px;
}
.rainbow-text::before{
	content: "";
	position: absolute;
	top:0;right:0;bottom:0;left:-100%;
	background: white repeating-linear-gradient(90deg, #14ffe9 0%, #ffc800 16.66666%, #ff00e0 33.33333%, #14ffe9 50.0%);
	mix-blend-mode: screen;
	pointer-events: none;
  animation: move 1s linear infinite;
}

@keyframes move{
  0%{transform: translateX(0);}
  100%{transform: translateX(50%);}
}

@supports not (mix-blend-mode: multiply) {
	.rainbow-text{
	-webkit-text-fill-color: transparent;
	background-clip: text !important;
	background: white repeating-linear-gradient(90deg, #14ffe9, #ffc800, #ff00e0, #14ffe9);
    text-shadow: none;
	}
	.rainbow-text::before{ content: none; }
}


.container{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #eee url(http://api.thumbr.it/whitenoise-300x300.png?background=eeeeeeff&noise=000000&density=15&opacity=10) center;
}
body{
  font-size: 6em;
  font-family: 'Pacifico', sans-serif;
  margin: 0;
  overflow: hidden;
}


`

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
    <div>
    <h1 class="rainbow">Rainbow</h1>
    <Styles>
      <div class="container">
        <span class="rainbow-text">Swag</span>
      </div>
      <h1 class="rainbow">Rainbow</h1>
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
    </div>

  );
}

export default Jumbotron;