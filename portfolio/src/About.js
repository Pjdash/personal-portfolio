
import React, { useState } from 'react';
import './About.css';

export default function About() {
  const [activeTab, setActiveTab] = useState('skills');

  const renderContent = () => {
    switch (activeTab) {
      // case 'skills':
      //   return (
      //     <ul className='content-list'>
      //       <li>
      //         <h4>Front-end</h4>
      //         <ul>
      //           <li>HTML</li>
      //           <li>CSS</li>
      //           <li>React JS</li>
      //           <li>Node JS</li>
      //           <li>JavaScript</li>
      //         </ul>
      //       </li>
      //       <li>
      //         <h4>Back-end</h4>
      //         <ul>
      //           <li>Express JS</li>
      //           <li>Python</li>
      //           <li>Django</li>
      //           <li>Node JS</li>
      //           <li>MongoDB</li>
      //           <li>Firebase</li>
      //         </ul>
      //       </li>
      //     </ul>
      //   );
      case 'experience':
        return (
          <ul className='content-list'>
            <li>Worked on various projects listed in the project section</li>
            <li>Made open source contributions</li>
            <li>Participated in tech competitions</li>
          </ul>
        );
      case 'education':
        return (
          <ul className='content-list'>
            <li>
              <h4>High School</h4>
              Nalanda Public School<br />
              Grade: A+<br />
              Percentage: 91%
            </li>
            <li>
              <h4>Undergraduate</h4>
              MNNIT Allahabad<br />
              CGPA: 8.75
            </li>
          </ul>
        );
      default:
        return null;
    }
  };

  const handleTabClick = (e, tabName) => {
    e.preventDefault();
    setActiveTab(tabName);
  };

  return (
    <div className='about'>
      <h1>About</h1>
      <div className='block'>
        <h2>Description</h2>
        <span>
          <p>
            Hello! I am Palak Jain, a first-year Mechanical Engineering student at MNNIT Allahabad with a strong passion for coding and technology. I have successfully completed my training in MERN stack web development and am currently expanding my expertise in Machine Learning. Additionally, I have a keen interest in the Internet of Things (IoT).
          </p>
          <p>
            Through my academic journey and hands-on projects, I have developed a solid foundation in both software and hardware domains, exploring opportunities in the fields of web development, machine learning, and IoT.
          </p>
        </span>
        <div className='nav'>
          <ul>
            {/* <li><a href="#" onClick={(e) => handleTabClick(e, 'skills')}>Skills</a></li> */}
            <li><a href="#" onClick={(e) => handleTabClick(e, 'experience')}>Experience</a></li>
            <li><a href="#" onClick={(e) => handleTabClick(e, 'education')}>Education</a></li>
          </ul>
        </div>
        <div className='content'>
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

