// src/components/Projects.jsx
import React from 'react';
import '../styles/Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';



const Projects = () => (
  <div className="projects-content">
    <h2>My Projects 💻📊</h2>

    <div className="project-entry">
      <h3 className="project-header">Statify:</h3>
      <p>
        <a href="https://www.statify.lol" target="_blank" rel="noopener noreferrer">Statify</a> is an interactive web application that challenges users to guess whether the amount of monthly listeners of a randomly selected Spotify artist is higher or lower than another randomly selected Spotify artist. 
      </p>
      <p>
      Built with Beautiful Soup, React, Flask, Axios, Spotify API, JavaScript, HTML, CSS.
      </p>
    </div>

    <div className="project-entry">
      <h3 className="project-header">CS Experience Labs Coworking Webpage:        <a href="https://www.youtube.com/watch?v=zPVB2ZGEAJQ&ab_channel=TraceGlasby" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faVideo} size=".5x" style={{ color: 'gray' }} /></a></h3>
      <p>
        Worked with a small team of programmers to enhance UNC’s <a href="https://csxl-team-c6-comp590-24s.apps.unc.edu/about" target="_blank" rel="noopener noreferrer">CSXL Webpage</a> with a robust member management system that enables organizations to list members by term, manage requests, and offer open membership. We facilitated the ability to create exclusive events and improved the overall website functionality for student organizers to better foster community engagement.
      </p>
      <p>
      Built with Angular, FastAPI, Docker, Kubernetes, TypeScript, Python, PostgreSQL.
      </p>
    </div>
  </div>
);

export default Projects;

