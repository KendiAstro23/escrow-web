import React from 'react';
import './App.css';
import AboutUs from './AboutUs'; // Ensure the path and casing are correct
import Services from './Services'; // Importing the Services component
import Homeback from './Homeback';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Baaki Pay</h1>
        <p>Your trusted partner for secure transactions</p> {/* Website description */}
        <div className="nav-section">
          <nav>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#resources">FAQ</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <Homeback /> {/* Add the home section here */}

      {/* Remaining sections */}
      {/*<section id="about">
        <h2>About Us</h2>
        <p>Information about the company.</p>
      </section>*/}
      <AboutUs /> {/* Add the About Us section here */}

      <Services /> {/* Add the Services section here */}
  <><section id="pricing">
    <div className="pricing-section">
      <h2>Pricing</h2>
      <p className="pricing-description">
        We offer competitive and customizable pricing options to suit your needs.
        Contact us to find the best package for you.
      </p>
      <button className="get-in-touch">Get in Touch</button>
    </div>

    <div className="contact-us-section">
      <div className="contact-image-container">
        <img src="pricing.jpg" alt="Contact" className="contact-image" />
        <h3 className="vertical-heading">Contact Us</h3>
        <div className="contact-details">
          <p>Phone: +123 456 7890</p>
          <p>Email: example@gmail.com</p>
        </div>
      </div>
      <div className='contact-pic-container'>
        <img src="pricing2.jpg" alt="Secure" className="contact-pic" />
      </div>
    </div>
  </section><section id="resources">
      <div className="resource-section">
        <h2>Resources</h2>
        {/* Link Buttons */}
        <div className="resource-links">
          <a href="#baakipay-policy" className="resource-link">BaakiPay Policy</a>
          <a href="#faq" className="resource-link">FAQ</a>
          <a href="#terms-conditions" className="resource-link">Terms & Conditions</a>
        </div>
        {/* Social Media Icons */}
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </section><footer>
      <p>&copy; 2024 Escrow Website. All Rights Reserved.</p>
    </footer></>
    </div>
  );
}

export default App;
