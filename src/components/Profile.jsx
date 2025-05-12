
import { FaEnvelope, FaLinkedin, FaFile } from 'react-icons/fa';
import profilePic from '../assets/pfp.jpg'; // Ensure the path to the image is correct
import '../styles/Profile.css' // Import the CSS file
import resume from '/Users/adrianlanier/portfolio_natalia/src/assets/Lanier_Natalia.pdf';
const Profile = () => {
  return (
    <div className="profile-background">
    <div className="profile-section">
      <img src={profilePic} alt="Profile" className="profile-pic" />
      <h1 className="profile-name" style={{ fontWeight: "bold"}}>Natalia Lanier</h1>
      <p className="about-me">
      Clinical Specialist @ BIOTRONIK
      </p>
      <p className="about-me">
        📍 Orlando, FL
      </p>
     
      <div className="contact-section">
        <div className="contact-top">
        <p> <a href={resume} download="Lanier_Natalia.pdf" className="icon"><FaFile icon={FaFile} style={{ color: 'gray' }}/> </a></ p>
          <p><a href="mailto:laniernatalia36@gmail.com" className="icon"><FaEnvelope icon={FaEnvelope} style={{ color: 'gray' }} /></a> </p>
          <p><a href="https://www.linkedin.com/in/natalialanier/" target="_blank" rel="noopener noreferrer" className="icon">
            <FaLinkedin icon={FaLinkedin} style={{ color: '#0077B5' }} />
          </a> </p>
          

          
      
      </div>

      </div>
    </div>
    </div>
  );
};

export default Profile;
