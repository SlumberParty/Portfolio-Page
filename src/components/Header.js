import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  // state = {  }
  render() { 
    return (
      <>
      <div className="neon">
        <span className="text" data-text="Claire Danielle Cassidy">Claire Danielle Cassidy</span>
        <span className="gradient"></span>
        <span className="spotlight"></span>
      </div>
      <h3>
       Fullstack Software Developer
      </h3>
     </>
    )
  }
}
 
export default Header;