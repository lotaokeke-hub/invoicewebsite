import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu on route change
  useEffect(() => {
    closeMobileMenu();
  }, [location]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const mobileMenu = document.getElementById('mobileMenu');
      const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
      
      if (mobileMenu && mobileMenuBtn && 
          !mobileMenu.contains(event.target) && 
          !mobileMenuBtn.contains(event.target)) {
        closeMobileMenu();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        closeMobileMenu();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-content">
          {/* Logo */}
          <Link to="/" className="logo">
            <img src="/companyLogoImage.jpeg" alt="Naira Invoice Logo" className="logo-image" />
          </Link>

          {/* Desktop Navigation */}
          <div className="nav-links">
            <Link to="/api-documentation" className="nav-link">Documentation</Link>
            <Link to="/quickstart" className="nav-link">Quickstart</Link>
            <a href="#api-reference" className="nav-link">API Reference</a>
            <a href="#support" className="nav-link">Support</a>
            <a href="#" className="nav-link">Blog</a>
          </div>

          {/* Auth Buttons */}
          <div className="auth-buttons">
            <button className="btn-login">Log in</button>
            <button className="btn-signup">Get API Key</button>
          </div>

          {/* Mobile Menu Button */}
          <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`} id="mobileMenu">
        <div className="mobile-menu-content">
          <Link to="/api-documentation" className="mobile-nav-link" onClick={closeMobileMenu}>
            Documentation
          </Link>
          <Link to="/quickstart" className="mobile-nav-link" onClick={closeMobileMenu}>
            Quickstart
          </Link>
          <a href="#api-reference" className="mobile-nav-link" onClick={closeMobileMenu}>
            API Reference
          </a>
          <a href="#support" className="mobile-nav-link" onClick={closeMobileMenu}>
            Support
          </a>
          <a href="#" className="mobile-nav-link" onClick={closeMobileMenu}>
            Blog
          </a>
          <div className="mobile-auth-buttons">
            <button className="btn-login">Log in</button>
            <button className="btn-signup">Get API Key</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;