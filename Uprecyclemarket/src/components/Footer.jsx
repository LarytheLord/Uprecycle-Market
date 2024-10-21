import React from 'react';
import './tooltip.css'; // Ensure this path is correct

const Footer = () => {
  return (
    <footer>
      <ul className="wrapper">
        <li className="icon facebook">
          <span className="tooltip">Facebook</span>
          <span><i className="fa fa-facebook"></i></span> {/* Corrected to span */}
        </li>
        <li className="icon twitter">
          <span className="tooltip">Twitter</span>
          <span><i className="fa fa-twitter"></i></span> {/* Corrected to span */}
        </li>
        <li className="icon instagram">
          <span className="tooltip">Instagram</span>
          <span><i className="fa fa-instagram"></i></span> {/* Corrected to span */}
        </li>
        <li className="icon github">
          <span className="tooltip">Github</span>
          <span><i className="fa fa-github"></i></span> {/* Corrected to span */}
        </li>
        <li className="icon youtube">
          <span className="tooltip">Youtube</span>
          <span><i className="fa fa-youtube"></i></span> {/* Corrected to span */}
        </li>
      </ul>
    </footer>
  );
};

export default Footer;