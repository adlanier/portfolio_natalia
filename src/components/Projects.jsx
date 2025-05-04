// src/components/Projects.jsx
import React from 'react';
import '../styles/Projects.css';

const Projects = () => (
  <div>
    <h2>My Projects 💻📊</h2>
  
    <div className="project-entry">
      <h3 className="project-header">Bug2 Controller on LEGO EV3 Robot:</h3> 
      <p>
      Worked with a team of three to design and implement a Bug2 navigation controller on a LEGO Mindstorms EV3 robot. We integrated an ultrasonic sensor, touch sensor, and gyroscope for basic obstacle detection and wall following. We implemented a proportional (P) controller to manage wall-following behavior and applied differential drive kinematics to estimate the robot's position. We tested the robot in both Webots simulation and on physical hardware, iterating on our approach to improve navigation and handling of obstacles.
      </p>
      <p>
      Programmed the LEGO Mindstorms EV3 robot using Python and the Pybricks MicroPython API. 
      </p>

    </div>

 <div className="project-entry">
      <h3 className="project-header">Statify Mobile: <a href="https://www.youtube.com/watch?v=JC9rCsiIEI0" target="_blank" rel="noopener noreferrer">🎥</a></h3> 
      <p>
        <a href="https://github.com/adlanier/statifyMobile" target="_blank" rel="noopener noreferrer">Statify Mobile</a> is an interactive mobile application that challenges users to guess whether the monthly listeners of a randomly selected Spotify artist are higher or lower than another randomly selected Spotify artist.
      </p>
      <p>
      Built with React Native, Expo, Axios, Spotify API, Flask, Beautiful Soup. 
      </p>
    </div>

    <div className="project-entry">
      <h3 className="project-header">Statify:</h3>
      <p>
        <a href="https://www.statify.lol" target="_blank" rel="noopener noreferrer">Statify</a> is an interactive web application that challenges users to guess whether the amount of monthly listeners of a randomly selected Spotify artist is higher or lower than another randomly selected Spotify artist. 
      </p>
      <p>
      Built with React, Flask, Axios, Spotify API, Beautiful Soup.
      </p>
    </div>

    <div className="project-entry">
      <h3 className="project-header">CS Experience Labs Coworking Webpage:        <a href="https://www.youtube.com/watch?v=zPVB2ZGEAJQ&ab_channel=TraceGlasby" target="_blank" rel="noopener noreferrer">🎥</a></h3>
      <p>
        Worked with a small team of programmers to enhance UNC’s <a href="https://www.youtube.com/watch?v=zPVB2ZGEAJQ&ab_channel=TraceGlasby" target="_blank" rel="noopener noreferrer">CSXL Webpage</a> with a robust member management system that enables organizations to list members by term, manage requests, and offer open membership. We facilitated the ability to create exclusive events and improved the overall website functionality for student organizers to better foster community engagement.
      </p>
      <p>
      Built with Angular, FastAPI, Docker, Kubernetes, TypeScript, Python, PostgreSQL.
      </p>
    </div>
    </div>
  
);

export default Projects;

