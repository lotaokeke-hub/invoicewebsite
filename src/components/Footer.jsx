import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="/companyLogoImage.jpeg" alt="Naira Invoice Logo" className="footer-logo-image" />
          </div>
          <p className="footer-text">© 2024 Naira Invoice. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;