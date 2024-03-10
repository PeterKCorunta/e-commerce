import React from 'react'

const Footer = () => {
    return (
      <footer className='footer'>
        <div className="footer-container">
          <div className="footer-section">
            <h3>About Us</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc cursus felis vel enim ullamcorper, vitae ullamcorper arcu cursus.</p>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Email: info@example.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-icons">
            🛒 🛒 🛒 🛒
              {/* Add your social media icons here */}
              {/* <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a> */}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Your E-Commerce. All rights reserved.</p>
        </div>
      </footer>
    );
  }

export default Footer