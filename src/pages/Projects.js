import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Fitness Tracker",
      description: "Full Stack Fitness Web Application",
      image: "/images/FitnessTrackerProject.png",
      liveUrl: "https://fitness-tracker-emaadqazi.up.railway.app",
      githubUrl: "https://github.com/emaadqazi/Fitness-Tracker",
      technologies: ["Flask", "Supabase", "SQLAlchemy", "Bootstrap 5", "Chart.js"],
      date: "March 2025 - June 2025",
      badge: null
    },
    {
      id: 2,
      title: "FitQuest",
      description: "Full Stack Gen AI Web Application built with MERN @ Spurhacks 2025",
      image: "/images/FitQuestProject.png",
      liveUrl: "https://algorithmathletes-production.up.railway.app/login",
      githubUrl: "https://github.com/AhmadYahya-05/AlgorithmAthletes",
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "Gemini"],
      date: "June 20th Weekend, 2025",
      badge: "2nd Place Hack Track - $2500 (190+ teams)"
    },
    {
      id: 3,
      title: "Notes App",
      description: "Notes App built with MERN & deployed on Render",
      image: "/images/MernNotesProject.png",
      liveUrl: "https://notesmernstack.onrender.com/",
      githubUrl: "https://github.com/emaadqazi/NotesMERNStack",
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "Javascript"],
      date: "June 2025",
      badge: null
    },
    {
      id: 4,
      title: "Mindful Harmony",
      description: "Full Stack Gen AI Mental Health Web Application built @ IgnitionHacks 2025",
      image: "/images/MindfulHarmonyProject.jpeg",
      liveUrl: "https://ignition-hacks-copy-production.up.railway.app/login",
      githubUrl: "https://github.com/sarahhalime/Mindful-Harmony",
      technologies: ["MongoDB", "Python (Flask)", "React", "Node.js", "Gemini"],
      date: "August 15th Weekend, 2025",
      badge: "Contender for Best Pitch"
    }
  ];

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
    <div className="projects-page">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>
        
        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              className="project-card"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaExternalLinkAlt />
                    </a>
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                {project.badge && (
                  <div className="project-badge">
                    <span className="badge">{project.badge}</span>
                  </div>
                )}
                
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <span className="project-date">{project.date}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
