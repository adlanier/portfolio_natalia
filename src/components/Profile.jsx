import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'; 
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import profilePic from '../assets/pfp.jpg'; // Ensure the path to the image is correct
import '/Users/adrianlanier/portfolio/src/styles/Profile.css' // Import the CSS file
import resume from '/Users/adrianlanier/portfolio/src/assets/Adrian Lanier Resume.pdf';
const Profile = () => {
  return (
    <div className="profile-section">
      <img src={profilePic} alt="Profile" className="profile-pic" />
      <h1 className="profile-name" style={{ fontWeight: "bold"}}>Adrian Lanier</h1>
      <p className="about-me">
        Pursuing a B.S in Computer Science from the University of North Carolina - Chapel Hill
      </p>
      <p className="about-me">
        📍 Jensen Beach, FL 🔄 Chapel Hill, NC 
      </p>
     
      <div className="contact-section">
        <div className="contact-top">
          <p><a href="mailto:adrianlanier33@gmail.com"><FontAwesomeIcon icon={faEnvelope} size="2x" style={{ color: 'gray' }} /></a> </p>
          <p><a href="https://www.linkedin.com/in/adrianlanier" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" style={{ color: '#0077B5' }} />
          </a> </p>
          <p> <a href="https://github.com/adlanier" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: '#24292e' }}/>
          </a></p>
          <p> <a href="https://www.instagram.com/adrianllanier/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: '#ff8900' }}/>
          </a></p>
          <p><a href={resume} download="Adrian Lanier Resume.pdf" className="resume-download">My Resume</a></p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
