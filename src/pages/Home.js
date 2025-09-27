import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <motion.div 
      className="home-page"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <motion.h1 
                className="hero-title"
                variants={itemVariants}
              >
                <span className="greeting">Hello, I'm</span>
                <span className="name">Emaad Qazi</span>
                <span className="title">Fullstack Developer</span>
              </motion.h1>
              
              <motion.p 
                className="hero-description"
                variants={itemVariants}
              >
                Bridging technology and business strategy to create impactful solutions
              </motion.p>
              
              <motion.div 
                className="hero-buttons"
                variants={itemVariants}
              >
                <a href="#projects" className="btn btn-primary">
                  View My Work
                </a>
                <a href="#contact" className="btn btn-secondary">
                  Get In Touch
                </a>
              </motion.div>
            </div>
            
            <motion.div 
              className="hero-image"
              variants={itemVariants}
            >
              <div className="image-container">
                <img 
                  src="/images/LinkedInPicture.jpg" 
                  alt="Emaad Qazi" 
                  className="profile-image"
                />
                <div className="image-glow"></div>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="hero-social"
            variants={itemVariants}
          >
            <a href="mailto:emaadqazi.dev@gmail.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaEnvelope />
            </a>
            <a href="https://github.com/emaadqazi" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/emaadqazi" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaLinkedin />
            </a>
            <a href="https://devpost.com/qaziemaad" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaCode />
            </a>
          </motion.div>
        </div>
        
        <motion.div 
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="scroll-arrow"></div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
