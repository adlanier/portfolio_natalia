
import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram, FaFile } from '../../node_modules/react-icons/fa'; // FaUser and FaGithub from Font Awesome via react-icons
import profilePic from '../assets/pfp.jpg'; // Ensure the path to the image is correct
import '../styles/Profile.css' // Import the CSS file
import resume from '../assets/Adrian-Lanier-Resume.pdf';
const Profile = () => {
  return (
    <div className="profile-background">
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
        <p> <a href={resume} download="Adrian-Lanier-Resume.pdf" className="icon"><FaFile icon={FaFile} style={{ color: 'gray' }}/> </a></ p>
          <p><a href="mailto:adrianlanier33@gmail.com" className="icon"><FaEnvelope icon={FaEnvelope} style={{ color: 'gray' }} /></a> </p>
          <p><a href="https://www.linkedin.com/in/adrianlanier" target="_blank" rel="noopener noreferrer" className="icon">
            <FaLinkedin icon={FaLinkedin} style={{ color: '#0077B5' }} />
          </a> </p>
          <p> <a href="https://github.com/adlanier" target="_blank" rel="noopener noreferrer" className="icon">
            <FaGithub icon={FaGithub} style={{ color: '#24292e' }}/>
          </a></p>
          <p> <a href="https://www.instagram.com/adrianllanier/" target="_blank" rel="noopener noreferrer" className="icon">
            <FaInstagram icon={FaInstagram} style={{ color: '#ff8900' }}/>
          </a></p>
          
      
      </div>

      </div>
    </div>
    </div>
  );
};

export default Profile;
