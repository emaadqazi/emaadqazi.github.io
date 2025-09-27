import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
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
    <div className="about-page">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        
        <motion.div 
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="about-image"
            variants={itemVariants}
          >
            <div className="image-container">
              <img 
                src="images/GithubPFP.png" 
                alt="Emaad Qazi" 
                className="about-img"
              />
              <div className="image-border"></div>
            </div>
          </motion.div>
          
          <motion.div 
            className="about-text"
            variants={itemVariants}
          >
            <motion.p 
              className="about-bio"
              variants={itemVariants}
            >
              Hey! My name is Emaad and I am a 3A Double Degree student in Business Administration and Computer Science @ Wilfrid Laurier University, planning to specialize in Finance and Machine Learning/AI. Currently seeking Winter 2026 positions.
            </motion.p>
            
            <motion.p 
              className="about-bio"
              variants={itemVariants}
            >
              I just finished my co-op term at Samsung working in Supply Chain Analytics for the Consumer Electronics Division, and I've interned at Apple Canada in the past during my Information Communication Technology SHSM during high school.
            </motion.p>
            
            <motion.p 
              className="about-bio"
              variants={itemVariants}
            >
              Most recently, my team was able to place 2nd amongst 190+ other teams at Spurhacks 2025 in Waterloo, Ontario. I also attended IgnitionHacks at TMU, and I'm getting ready for Hack The Valley in October.
            </motion.p>
            
            <motion.p 
              className="about-bio contact-info"
              variants={itemVariants}
            >
              Please feel free to reach out and connect: 
              <a href="mailto:emaadqazi.dev@gmail.com" className="email-link">
                emaadqazi.dev@gmail.com
              </a>
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
