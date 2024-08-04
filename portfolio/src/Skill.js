import React from 'react';
import './Skill.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faReact, faNodeJs, faJs, faPython, faNode, faJsSquare } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

export default function Skill() {
  return (
    <div className="skills">
      <h2>My Skills</h2>
      <ul>
        <li>
          <h4>Front-end</h4>
          <ul>
            <li><FontAwesomeIcon icon={faHtml5} /> HTML</li>
            <li><FontAwesomeIcon icon={faCss3Alt} /> CSS</li>
            <li><FontAwesomeIcon icon={faReact} /> React JS</li>
            <li><FontAwesomeIcon icon={faJsSquare} /> JavaScript</li>
          </ul>
        </li>
        <li>
          <h4>Back-end</h4>
          <ul>
            <li><FontAwesomeIcon icon={faNodeJs} /> Express JS</li>
            <li><FontAwesomeIcon icon={faPython} /> Python</li>
            <li><FontAwesomeIcon icon={faPython} /> Django</li>
            <li><FontAwesomeIcon icon={faNode} /> Node JS</li>
            <li><FontAwesomeIcon icon={faDatabase} /> MongoDB</li>
            <li><FontAwesomeIcon icon={faDatabase} /> Firebase</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
