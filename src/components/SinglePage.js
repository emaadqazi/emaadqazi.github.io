import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaExternalLinkAlt, FaEye, FaDownload, FaPaperPlane, FaFilePdf } from 'react-icons/fa';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaBootstrap, FaNodeJs, FaPython, FaGitAlt, FaDatabase, FaServer, FaChartLine, FaCloud } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiFlask } from 'react-icons/si';
import './SinglePage.css';

const SinglePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Projects data
  const projects = [
    {
      id: 1,
      title: "Fitness Tracker",
      description: "Full Stack Fitness Web Application",
      image: "images/FitnessTrackerProject.png",
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
      image: "images/FitQuestProject.png",
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
      image: "images/MernNotesProject.png",
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
      image: "images/MindfulHarmonyProject.jpeg",
      liveUrl: "https://ignition-hacks-copy-production.up.railway.app/login",
      githubUrl: "https://github.com/sarahhalime/Mindful-Harmony",
      technologies: ["MongoDB", "Python (Flask)", "React", "Node.js", "Gemini"],
      date: "August 15th Weekend, 2025",
      badge: "Contender for Best Pitch"
    }
  ];

  // Skills data
  const skillsData = [
    {
      category: "Frontend",
      icon: <FaReact />,
      skills: [
        { name: "React", icon: <FaReact style={{color: '#61dafb'}} /> },
        { name: "JavaScript", icon: <FaJs style={{color: '#f7df1e'}} /> },
        { name: "HTML5", icon: <FaHtml5 style={{color: '#e34c26'}} /> },
        { name: "CSS3", icon: <FaCss3Alt style={{color: '#1572b6'}} /> },
        { name: "Bootstrap", icon: <FaBootstrap style={{color: '#7952b3'}} /> }
      ]
    },
    {
      category: "Backend",
      icon: <FaServer />,
      skills: [
        { name: "Node.js", icon: <FaNodeJs style={{color: '#339933'}} /> },
        { name: "Python", icon: <FaPython style={{color: '#3776ab'}} /> },
        { name: "MongoDB", icon: <FaDatabase style={{color: '#4db33d'}} /> },
        { name: "Express.js", icon: <SiExpress style={{color: '#000000'}} /> },
        { name: "Flask", icon: <SiFlask style={{color: '#000000'}} /> }
      ]
    },
    {
      category: "Tools & Platforms",
      icon: <FaCode />,
      skills: [
        { name: "Git", icon: <FaGitAlt style={{color: '#f05032'}} /> },
        { name: "GitHub", icon: <FaGithub style={{color: '#333'}} /> },
        { name: "Railway", icon: <FaCloud style={{color: '#007acc'}} /> },
        { name: "VBA", icon: <FaCode style={{color: '#e34c26'}} /> },
        { name: "Power Query", icon: <FaChartLine style={{color: '#ff6b35'}} /> }
      ]
    }
  ];

  // Experience data
  const experiences = [
    {
      id: 1,
      company: "Samsung Electronics Canada",
      position: "SCM Operations Co-op - CE Division",
      duration: "May 2025 - Present",
      logo: "images/SamsungLogo.png",
      achievements: [
        "Managed daily data pipeline operations through SQL table refreshes and Power Query automation, providing essential reporting to 200+ stakeholders across a $350M+ monthly business division",
        "Developed and implemented VBA automation script for cross-shipping operations between East/West warehouses, reducing manual processing time by 200+ hours monthly in HE division",
        "Built automated KPI dashboard using VBA and Power Query for DA Sales KAM team, improving forecast accuracy by 27% through real-time data integration"
      ]
    },
    {
      id: 2,
      company: "Laurier Supply Chain Association",
      position: "VP of Software Development",
      duration: "May 2025 - Present",
      logo: "images/LSCALogo.jpg",
      achievements: [
        "Revamping the new LSCA website, coming October 2025"
      ]
    },
    {
      id: 3,
      company: "Laurier Computing Society",
      position: "Academics, Content Writer",
      duration: "January 2025 - Present",
      logo: "images/LCSLogo.jpg",
      achievements: [
        "Led comprehensive exam review sessions for 150+ students across multiple computer science courses (CP220, CP213, CP264, CP363, CP216), covering data structures, algorithms, and programming fundamentals",
        "Designed and delivered technical presentation materials with live coding demonstrations, breaking down complex programming concepts for enhanced student comprehension",
        "Facilitated interactive coding workshops demonstrating real-time problem-solving techniques and best practices in software development"
      ]
    },
    {
      id: 4,
      company: "Apple Canada",
      position: "Application Developer Co-op",
      duration: "December 2021 - February 2022",
      logo: "images/AppleLogo.jpg",
      achievements: [
        "Completed intensive mobile development co-op obtained through Halton Industry Education Council (HIEC) as part of my ICT SHSM certification, gaining hands-on experience in iOS development and industry best practices",
        "Developed LiftEats, a comprehensive fitness tracking mobile application using Swift and Xcode, featuring real-time Apple Watch integration for activity monitoring with 95% data accuracy",
        "Presented LiftEats to Apple Canada executives and 500+ industry professionals in a high-stakes 8-minute pitch session, earning recognition from judges and securing mentorship opportunities"
      ]
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
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
    <div className="single-page">
      {/* Home Section */}
      <section id="home" className="section home-section">
        <div className="container">
          <motion.div 
            className="hero-content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="hero-text">
              <motion.h1 
                className="hero-title"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <motion.span 
                  className="greeting"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  Hello, I'm
                </motion.span>
                <motion.span 
                  className="name"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                >
                  Emaad Qazi
                </motion.span>
                <motion.span 
                  className="title"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  FULLSTACK DEVELOPER
                </motion.span>
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
                  src="images/LinkedInPicture.jpg" 
                  alt="Emaad Qazi" 
                  className="profile-image"
                />
                <div className="image-glow"></div>
              </div>
            </motion.div>
          </motion.div>
          
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          
          <motion.div 
            className="about-content"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
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
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects-section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
          
          <motion.div 
            className="projects-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
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
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills-section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Skills & Technologies
          </motion.h2>
          
          <motion.div 
            className="skills-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skillsData.map((category, categoryIndex) => (
              <motion.div 
                key={category.category}
                className="skills-category"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="category-header">
                  <div className="category-icon">
                    {category.icon}
                  </div>
                  <h3 className="category-title">{category.category}</h3>
                </div>
                
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div 
                      key={skill.name}
                      className="skill-item"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: categoryIndex * 0.2 + skillIndex * 0.1 
                      }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, x: 5 }}
                    >
                      <div className="skill-icon">
                        {skill.icon}
                      </div>
                      <span className="skill-name">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section experience-section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Experience
          </motion.h2>
          
          <motion.div 
            className="timeline"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {experiences.map((experience, index) => (
              <motion.div 
                key={experience.id}
                className="timeline-item"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="experience-header">
                    <img 
                      src={experience.logo} 
                      alt={experience.company} 
                      className="company-logo"
                    />
                    <div className="experience-info">
                      <h3 className="company-name">{experience.company}</h3>
                      <h4 className="job-title">{experience.position}</h4>
                      <span className="job-date">{experience.duration}</span>
                    </div>
                  </div>
                  <ul className="job-description">
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="section resume-section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Resume
          </motion.h2>
          
          <motion.div 
            className="resume-content"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className="resume-info"
              variants={itemVariants}
            >
              <h3>Download My Resume</h3>
              <p>Get a detailed view of my experience, skills, and qualifications in PDF format.</p>
              <div className="resume-actions">
                <a 
                  href="assets/resume/Resume - Software Engineering, Emaad.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <FaEye />
                  View Resume
                </a>
                <a 
                  href="assets/resume/Resume - Software Engineering, Emaad.pdf" 
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
                <div className="resume-preview-content">
                  <div className="resume-preview-header">
                    <div className="resume-preview-title">
                      <h4>Resume Preview</h4>
                      <span className="resume-preview-subtitle">Click below to view full PDF</span>
                    </div>
                  </div>
                  
                  <div className="resume-preview-body">
                    <div className="resume-thumbnail">
                      <div className="resume-page">
                        <div className="resume-header-preview">
                          <div className="resume-name-preview">Emaad Qazi</div>
                          <div className="resume-title-preview">Fullstack Developer</div>
                          <div className="resume-contact-preview">
                            <span>emaadqazi.dev@gmail.com</span>
                            <span>github.com/emaadqazi</span>
                          </div>
                        </div>
                        <div className="resume-content-preview">
                          <div className="resume-section">
                            <h5>Experience</h5>
                            <p>Software Engineering roles at Samsung, LCS, and Apple...</p>
                          </div>
                          <div className="resume-section">
                            <h5>Skills</h5>
                            <p>React, Node.js, Python, MongoDB, AWS...</p>
                          </div>
                          <div className="resume-section">
                            <h5>Education</h5>
                            <p>Computer Science background with strong technical foundation...</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="resume-preview-footer">
                    <a 
                      href="assets/resume/Resume - Software Engineering, Emaad.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-primary pdf-view-btn"
                    >
                      <FaEye />
                      View Full Resume
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.h2>
          
          <motion.div 
            className="contact-content"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
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
      </section>
    </div>
  );
};

export default SinglePage;
