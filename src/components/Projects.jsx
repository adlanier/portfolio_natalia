// src/components/Projects.jsx
import React from 'react';
import '../styles/Projects.css';

const Projects = () => (
  <div>
    <h2>Certifications and Publications 📃🏅</h2>
  
    <div className="project-entry">
      <h3 className="project-header">Co-Author, European Journal of Applied Physiology (2024):</h3> 
      <p>
      Co-authored <em>"The Reliability of Functional and Systemic Markers of Muscle Damage in Response to a Flywheel Squat Protocol"</em>, published in the European Journal of Applied Physiology in 2024.
      </p>

    </div>

    <div className="project-entry">
      <h3 className="project-header">NASM Certified Personal Trainer:</h3> 
      <p>
      Certified by the National Academy of Sports Medicine (NASM) as a Personal Trainer.
      </p>

    </div>

    <div className="project-entry">
      <h3 className="project-header">CPR and First Aid Certification:</h3> 
      <p>
      Certified in CPR and First Aid by the American Red Cross.
      </p>

    </div>
    </div>
  
);

export default Projects;

