import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMugHot } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import '../styles.css';



const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-text">
        Made with <FontAwesomeIcon icon={ faMugHot } size="lg" color='black' /> by Veeti @ 2023 · 
        <a href='https://github.com/vehkoi/website' className='footer-link' target="_blank" rel="noopener noreferrer"> Source code </a>
      </div>
      <div className="footer-icons">
        <a className="devicon-twitter-original colored" href='https://twitter.com/veetikoivuniem' target="_blank" rel="noopener noreferrer"> </a>
        <a className="devicon-linkedin-plain colored" href='https://www.linkedin.com/in/veeti-koivuniemi-0b8940206/' target="_blank" rel="noopener noreferrer"> </a>
        <a className="devicon-github-original colored" href='https://github.com/vehkoi/website' target="_blank" rel="noopener noreferrer"> </a>
      </div>
    </footer>
  );
}

export default Footer;