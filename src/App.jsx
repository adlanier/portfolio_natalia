// src/App.jsx
import React, { useState } from 'react';
import Home from './components/Home';
import Projects from './components/Projects';
import Profile from './components/Profile';
import Education from './components/Education';
import Experience from './components/Experience';
import './styles/main.css';

const App = () => {
  const [page, setPage] = useState('home'); // State to keep track of the current page


  // Function to render the appropriate page component
  const renderPage = () => {
    switch (page) {
      case 'home':
        return <Home />;
      case 'projects':
        return <Projects />;
      case 'educ':
        return <Education />
      case 'exp':
        return <Experience />
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <header className="header">
        <nav className="nav">
          <button onPointerUp={() => setPage('home')}>Home</button>
          <button onPointerUp={() => setPage('projects')}>Projects</button>
          <button onPointerUp={() => setPage('educ')}>Education</button>
          <button onPointerUp={() => setPage('exp')}>Experience</button>
        </nav>
      </header>
      <Profile />
      <div className="content">
        {renderPage()} {/* Render the appropriate page based on state */}
      </div>
    </div>
  );
};

export default App;

