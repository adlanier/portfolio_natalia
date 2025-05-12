// src/components/Experience.jsx
import React from 'react';
import '../styles/More.css' // Import the CSS file
import prosthetic from '../assets/prosthetic.jpg'; // Ensure the path to the image is correct
import image2 from '../assets/image2.JPG'; // Ensure the path to the image is correct
import image3 from '../assets/image3.JPG'; // Ensure the path to the image is correct


const More = () => (
  <div>
    <h2>See My Work 🦿🦾 </h2>
    <img src={prosthetic} className="image" />
    <img src={image2} className="image" />
    <img src={image3} className="image" />
  </div>
);

export default More;
