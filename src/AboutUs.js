import React, { useState } from 'react';
import './AboutUs.css'; // Ensure to create this CSS file for styling

const AboutUs = () => {
  const images = [
    { src: '/About1.jpg', desc: 'Description of image 1' },
    { src: '/About2.jpg', desc: 'Description of image 2' },
    { src: '/About3.jpg', desc: 'Description of image 3' },
    { src: '/About4.jpg', desc: 'Description of image 4' },
    { src: '/About5.jpg', desc: 'Description of image 5' },
    { src: '/About6.jpg', desc: 'Description of image 6' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImages = () => {
    if (currentIndex < images.length - 3) {
      setCurrentIndex(currentIndex + 3);
    }
  };

  const previousImages = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 3);
    }
  };

  return (
    <section id="about" className="about-section">
      <h2>About Us</h2>
      <div className="image-navigation">
        <button className="nav-button" onClick={previousImages} disabled={currentIndex === 0}>
          &lt; {/* This represents the <> symbols */}
        </button>
        <div className="image-container">
          {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
            <div key={index} className="image-card">
              <img src={image.src} alt={`About us ${index}`} />
              <p>{image.desc}</p>
              <button className="view-more-button">View More</button>
            </div>
          ))}
        </div>
        <button className="nav-button" onClick={nextImages} disabled={currentIndex >= images.length - 3}>
          &gt; {/* This represents the <> symbols */}
        </button>
      </div>
    </section>
  );
};

export default AboutUs;