import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import Contactus from './Contactus';
import Footer from './Footer';
import Skill from './Skill';

export default function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<>
          <Header />
          
          <section id="about"><About /></section>
          
          <section id="skills"><Skill /></section>

          <section id="projects"><Projects /></section>

          <section id="contact"><Contactus /></section>

          <Footer />
        </>} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/skill" element={<Skill />} />

      </Routes>
    </Router>
  );
}
