import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <footer>
        <div className="footer-container">
          <div>
            <a className='footer-link' href="https://github.com/19tylermalone94">GitHub</a>
          </div>
          <div>
            <a className='footer-link' href="https://www.linkedin.com/in/tyler-malone-186a4721a/">LinkedIn</a>
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