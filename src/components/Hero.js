import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Daniel Adejumo</span>
          </h1>
          <h2 className="hero-subtitle">Cloud & DevOps Engineer</h2>
          <p className="hero-description">
            I build cloud, automation, and engineering solutions using AWS, Docker, Linux, React, Python, and CI/CD pipelines.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-placeholder">
            <div className="hero-icon">🚀</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;