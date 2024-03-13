import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <footer>
        <div className="footer-container">
          <div className="social-links">
            <a className='footer-link' href="https://github.com/19tylermalone94">
              <img src="github_icon.png" alt="GitHub" className="footer-icon" />
            </a>
            <span className="separator">|</span>
            <a className='footer-link' href="https://www.linkedin.com/in/tyler-malone-186a4721a/">
              <img src="linkedin_icon.png" alt="LinkedIn" className="footer-icon" />
            </a>
          </div>
          <div className="footer-info">
            <p>&copy; {new Date().getFullYear()} Website. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
