import React from 'react';
import './App.css';
import AboutUs from './AboutUs'; // Ensure the path and casing are correct
import Services from './Services'; // Importing the Services component

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
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
      
      {/* Home Section */}
      <section id="home" className="home-section">
        <div className="home-content">
          <div className="home-text">
            <h2>Welcome to Our Escrow Service</h2>
            <p>We ensure safe and secure transactions for our clients.</p>
            <div className="button-container">
              <button className="cta-button">Get Started</button>
              <button className="login-button">Login</button>
            </div>
          </div>
          <div className="home-image">
            <img src="/ESC2.png"   alt="Escrow service illustration" />
          </div>
        </div>
      </section>

      {/* Remaining sections */}
      {/*<section id="about">
        <h2>About Us</h2>
        <p>Information about the company.</p>
      </section>*/}
      <AboutUs /> {/* Add the About Us section here */}

      <Services /> {/* Add the Services section here */}

      <section id="testimonials">
        <h2>Testimonials</h2>
        <p>What our customers say about us.</p>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>Contact form or information.</p>
      </section>

      <footer>
        <p>&copy; 2024 Escrow Website. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
