import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaEye, FaDownload } from 'react-icons/fa';
import './Resume.css';

const Resume = () => {
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
    <div className="resume-page">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Resume
        </motion.h2>
        
        <motion.div 
          className="resume-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="resume-info"
            variants={itemVariants}
          >
            <h3>Download My Resume</h3>
            <p>Get a detailed view of my experience, skills, and qualifications in PDF format.</p>
            <div className="resume-actions">
              <a 
                href="/assets/resume/Resume - newest SWE.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <FaEye />
                View Resume
              </a>
              <a 
                href="/assets/resume/Resume - newest SWE.pdf" 
                download
                className="btn btn-secondary"
              >
                <FaDownload />
                Download PDF
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="resume-preview"
            variants={itemVariants}
          >
            <div className="pdf-container">
              <iframe 
                src="/assets/resume/Resume - newest SWE.pdf#toolbar=0" 
                width="100%" 
                height="600" 
                frameBorder="0"
                title="Resume Preview"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
