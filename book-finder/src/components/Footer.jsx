import React from 'react';
import '../styles/Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <span>© Anitha Guntreddi 2024  | Connect with us:</span>
      <a href=" https://www.linkedin.com/in/anitha-guntreddi-ba595b230/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href=" https://github.com/anithaguntreddi07" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <i className="fab fa-github"></i>
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
        <i className="fab fa-twitter"></i>
      </a>
    </footer>
  );
};

export default Footer;
