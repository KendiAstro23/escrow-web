import React from 'react';
import { motion } from "framer-motion";
import star1 from "./Animate/star-1.svg";
import star2 from "./Animate/star-2.svg";
import star3 from "./Animate/star-3.svg";
import star4 from "./Animate/star-4.svg";
import './Homeback.css';

function Homeback() {
  return (
    <div>
 
 {/* Home Section */}
<div className="home-section">
 <div className="home-content">
 <div className='hero-container'>
   <motion.img 
     src={star1}
     animate={{ scale: 1.5 }}
     transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
     className="star-1 star"
     alt="star 1"
   />
   <motion.img 
     src={star2}
     animate={{ scale: 1.5 }}
     transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
     className="star-2 star"
     alt="star 2"
   />
   <motion.img 
     src={star3}
     animate={{ scale: 1.5 }}
     transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
     className="star-3 star"
     alt="star 3"
   />
  <motion.img 
     src={star4}
     animate={{ scale: 1.5 }}
     transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
     className="star-4 star"
     alt="star 4"
   />
 <motion.h1
   initial={{ opacity: 0}}
   animate={{ opacity: 1 }}
   transition={{ duration: 2, ease: "easeInOut" }}
 >
  <div className="home-text"> Welcome to Our Escrow Service
   <br></br>
   We ensure safe and secure transactions for our clients. </div>
   </motion.h1>
 </div>
     <div className="button-container">
       <button className="cta-button">Get Started</button>
       <button className="login-button">Login</button>
     </div>
   </div>
 </div>
 </div>
  )
}

export default Homeback;
