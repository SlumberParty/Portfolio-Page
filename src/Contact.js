import React from 'react';
import './Contact.css'

const Contact = () => {
  return (
    <>
    <div className="contact-icons">
          <p className="contact-section">Clicky clicky:</p>
          <a href="mailto:clacassidy@gmail.com?Subject=Hello%20Claire!%20We%20would%20love%20to%20hire%20you!" target="_top">
            <img className="contact-icon" src="../resources/gmail.png" alt="gmail icon"/>
          </a>
          <a href="https://github.com/SlumberParty">
            <img className="contact-icon" src="../resources/github.png" alt="github icon"/>
          </a>
          <a href="https://www.linkedin.com/in/clairedaniellecassidy/">
            <img className="contact-icon" src="../resources/linkedin.png" alt="linkedin icon"/>
          </a>
          <a href="https://twitter.com/LaserMistress">
            <img className="contact-icon" src="../resources/twitter.png" alt="twitter icon"/>
          </a>
    </div>
    <div className="names">
      <p>gmail</p>
      <p>github</p>
      <p>linkenIn</p>
      <p>blog</p>
      <p>twitter</p>
    </div>
    </>
   );
}
 
export default Contact;
