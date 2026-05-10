import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <p className="contact-description">
              I'm always interested in new opportunities and collaborations.
              Let's discuss how we can work together!
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>laredaniel12@email.com</span>
              </div>
              <div className="contact-item">
                <i className="fab fa-linkedin"></i>
                <span>linkedin.com/in/daniel-adejumo</span>
              </div>
              <div className="contact-item">
                <i className="fab fa-github"></i>
                <span>github.com/daniel-adejumo</span>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <form>
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;