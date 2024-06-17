import React from 'react'
import './About.css'

export default function About() {
  return (
    <div className='about'>
         <h1> About </h1>
        <div className='block'>
          <h2> Description</h2>
        <span><p> Hello! I am Palak Jain, a first-year Mechanical Engineering student at MNNIT Allahabad with a strong passion for coding and technology. I have successfully completed my training in MERN stack web development and am currently expanding my expertise in Machine Learning. Additionally, I have a keen interest in the Internet of Things (IoT).

        </p><p>Through my academic journey and hands-on projects, I have developed a solid foundation in both software and hardware domains.  exploring opportunities in the fields of web development, machine learning, and IoT. </p></span>
        <div className='nav'>
            <ul>
                <li><a href="#">experience</a></li>
                <li><a href="#"> skills</a></li>
                <li><a href="#">education</a></li>
            </ul>
        </div>
        </div>
    </div>
  )
}
