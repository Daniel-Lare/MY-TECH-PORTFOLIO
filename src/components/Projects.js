import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Belt Alignment Tool App',
      description: 'Engineering alignment calculation application for precision machinery setup and maintenance.',
      technologies: ['Python', 'Tkinter', 'Engineering'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Water Distribution Network Software',
      description: 'Hydraulic simulation software using Hardy Cross method for water network analysis and optimization.',
      technologies: ['Python', 'NumPy', 'Hydraulics'],
      github: '#',
      demo: '#'
    },
    {
      title: 'CI/CD Portfolio Deployment',
      description: 'Automated deployment pipeline using GitHub Actions and AWS EC2 for continuous integration and delivery.',
      technologies: ['GitHub Actions', 'AWS', 'Docker'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Cloud Infrastructure Automation',
      description: 'Infrastructure as Code using Terraform and Ansible for scalable cloud deployments.',
      technologies: ['Terraform', 'Ansible', 'AWS'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Monitoring & Logging Stack',
      description: 'Comprehensive monitoring solution with ELK stack and Prometheus for system observability.',
      technologies: ['ELK', 'Prometheus', 'Grafana'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Microservices Architecture',
      description: 'Containerized microservices deployment with Kubernetes orchestration and service mesh.',
      technologies: ['Kubernetes', 'Docker', 'Istio'],
      github: '#',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="project-links">
                <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i> Code
                </a>
                <a href={project.demo} className="project-link" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-external-link-alt"></i> Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;