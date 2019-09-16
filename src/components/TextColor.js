import React, { Component } from 'react';
import './TextColor.css';

class TextColor extends Component {
  // state = {  }
  render() { 
    return (
      <div className="neon">
        <span className="text" data-text="Claire Danielle Cassidy">Claire Danielle Cassidy</span>
        <span className="gradient"></span>
        <span className="spotlight"></span>
      </div>
    )
    // <h1 className="Text-color">Claire Danielle Cassidy</h1>;
  }
}
 
export default TextColor;