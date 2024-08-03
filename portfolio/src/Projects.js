

import React from 'react';
import './Projects.css';
import './scroll';

export default function Projects() {
  return (
    <div className='Project'>
      <div className="custom-shape-divider-top-1718603246">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>
      <h1 className='title'>Projects</h1>
      <div className="cards-container">
        <div className="card" style={{ width: '18rem' }}>
          {/* <img src="/assets/text-editor.png" className="card-img-top" alt="text-editor" /> */}
          <div className="card-img-top-fi"  >
          </div>
          <div className="card-body">
            <h5 className="card-title">Text-editor</h5>
            <p className="card-text">It is a website built for playing with your text. You can count the number of words, change the font, find meanings, etc.</p>
            <a href="https://github.com/Pjdash/text-editor" className="btn btn-primary">Visit Repo</a>
          </div>
        </div>
        <div className="card" style={{ width: '18rem' }}>
          {/* <img src="/assets/netflix-clone.png" className="card-img-top" alt="netflix-clone" /> */}
          <div className="card-img-top"  >
          </div>
          <div className="card-body">
            <h5 className="card-title">Netflix-clone</h5>
            <p className="card-text">It is an end-to-end Netflix clone built using the MERN stack. It contains the full frontend and part of the backend.</p>
            <a href="https://github.com/Pjdash/netflix-clone" className="btn btn-primary">Visit Repo</a>
          </div>
        </div>
        <div className="card" style={{ width: '18rem' }}>
          <div className="card-img-top-se"  >
            </div>
          <div className="card-body">
            <h5 className="card-title">Portfolio</h5>
            <p className="card-text">This is a portfolio project built for the MNNIT tech fest "Aviskar". It is a fully frontend project.</p>
            <a href="https://github.com/himanshi20004/webesters" className="btn btn-primary">Visit Repo</a>
          </div>
        </div>
      </div>
      <div className="custom-shape-divider-bottom-1718603296">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>
    </div>
  );
}

