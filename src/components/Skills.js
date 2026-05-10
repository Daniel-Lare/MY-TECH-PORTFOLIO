import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    {
      icon: '☁️',
      title: 'Cloud Computing',
      description: 'AWS, Azure, GCP - Infrastructure as Code, Serverless, Containers'
    },
    {
      icon: '🐳',
      title: 'Containerization',
      description: 'Docker, Kubernetes, Container Orchestration, Microservices'
    },
    {
      icon: '🐧',
      title: 'Linux Systems',
      description: 'System Administration, Shell Scripting, Security, Monitoring'
    },
    {
      icon: '⚙️',
      title: 'CI/CD',
      description: 'GitHub Actions, Jenkins, GitLab CI, Pipeline Automation'
    },
    {
      icon: '🐍',
      title: 'Programming',
      description: 'Python, JavaScript, React, Node.js, API Development'
    },
    {
      icon: '🔧',
      title: 'DevOps Tools',
      description: 'Terraform, Ansible, Monitoring, Logging, Security'
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <h3 className="skill-title">{skill.title}</h3>
              <p className="skill-description">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;