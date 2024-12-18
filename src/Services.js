import React from 'react';
import './Services.css'; // Ensure you have this CSS file

const Services = () => {
  return (
    <section id="services" className="services-section">
      <h1>Our Offers</h1>
      <div className="services-content">
        <div className="services-image">
          <img src="/ESC3.png" alt="Services" />
        </div>
        <div className="services-buttons">
          <div className="button-cont">
            <button className="service-button">Payment Link</button>
            <button className="service-button">Invoice</button>
          </div>
          <div className="services-description">
            <h2>HOW CAN WE HELP?</h2>
            <p>Description for Invoice service, explaining what it entails.</p>
            <p>Description for Payment service, detailing the process and benefits.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
