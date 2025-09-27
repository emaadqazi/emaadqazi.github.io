import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    alert('Message sent successfully!');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="contact-page">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>
        
        <motion.div 
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="contact-info"
            variants={itemVariants}
          >
            <h3>Let's Connect</h3>
            <p>I'm always interested in new opportunities and collaborations. Feel free to reach out!</p>
            
            <div className="contact-links">
              <a 
                href="mailto:emaadqazi.dev@gmail.com" 
                className="contact-link"
              >
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div className="contact-details">
                  <span className="contact-label">Email</span>
                  <span className="contact-value">emaadqazi.dev@gmail.com</span>
                </div>
              </a>
              
              <a 
                href="https://github.com/emaadqazi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-link"
              >
                <div className="contact-icon">
                  <FaGithub />
                </div>
                <div className="contact-details">
                  <span className="contact-label">GitHub</span>
                  <span className="contact-value">github.com/emaadqazi</span>
                </div>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/emaadqazi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-link"
              >
                <div className="contact-icon">
                  <FaLinkedin />
                </div>
                <div className="contact-details">
                  <span className="contact-label">LinkedIn</span>
                  <span className="contact-value">linkedin.com/in/emaadqazi</span>
                </div>
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="contact-form"
            variants={itemVariants}
          >
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <button type="submit" className="btn btn-primary submit-btn">
                <FaPaperPlane />
                Send Message
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
