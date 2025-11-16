import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaExternalLinkAlt, FaEye, FaDownload, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaBootstrap, FaNodeJs, FaPython, FaGitAlt, FaDatabase, FaServer, FaChartLine, FaCloud } from 'react-icons/fa';
import { SiExpress, SiFlask, SiMongodb, SiPostgresql, SiMysql, SiFirebase } from 'react-icons/si';
import './SinglePage.css';

const SinglePage = () => {

  // Carousel state for skills section
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [skillDirection, setSkillDirection] = useState(0);

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
    },
    {
      id: 5,
      title: "Mission Employed",
      description: "Full Stack Resume Tool built @ TrentHacks 2025",
      image: "images/MissionEmployedThumbnail.png",
      liveUrl: "https://aware-creation-production.up.railway.app/",
      githubUrl: "https://github.com/emaadqazi/TrentHacks2025",
      technologies: ["Supabase", "NodeJS", "Typescript", "React", "TailwindCSS", "Python"],
      date: "November 8th weekend, 2025",
      badge: null
    },
    {
      id: 6,
      title: "ShopCP340",
      description: "E-commerce site for CP340, E-commerce @ Laurier",
      image: "images/ShopCP340Thumbnail.png",
      liveUrl: "https://emaadqazi.com/CP340_Website/",
      githubUrl: "https://github.com/emaadqazi/CP340_Website?tab=readme-ov-file",
      technologies: ["React", "CSS", "JavaScript", "HTML"],
      date: "Fall 2025",
      badge: null
    },
    {
      id: 7,
      title: "Chess Machine Learning Model",
      description: "Developed Chess Engine @ ChessHacks 2025",
      image: "images/ChessHacksThumbnail.png",
      liveUrl: null,
      githubUrl: "https://github.com/Deeppcodes/chess-bot",
      technologies: ["PyTorch", "TensorFlow", "Modal (Cloud GPU)", "FastAPI", "Python-Chess"],
      date: "November 14th weekend, 2025",
      badge: null
    },
    {
      id: 8,
      title: "Investors Arena",
      description: "Fantasy trading/portfolio platform for CP317, Software Engineering @ Laurier",
      image: "InvestorsArenaThumbnail.jpg",
      liveUrl: "https://emaadqazi.com/InvestorsArena/#/login",
      githubUrl: "https://github.com/emaadqazi/InvestorsArena",
      technologies: ["React", "NodeJS", "Alpha Vintage API", "Firebase", "PostgresSQL"],
      date: "Fall 2025",
      badge: null
    },
    {
      id: 9,
      title: "Laurier Supply Chain Association",
      description: "Built out website for LSCA club @ Laurier",
      image: "LSCA-Thumbnail.png",
      liveUrl: "https://emaadqazi.com/LSCA-Website/",
      githubUrl: "https://github.com/emaadqazi/LSCA-Website",
      technologies: ["TypeScript", "CSS", "HTML", "JavaScript"],
      date: "Fall 2025",
      badge: null
    }
  ];

  // Skills data for carousel
  const skillCategories = [
    {
      id: 'languages',
      title: 'Programming Languages',
      icon: '💻',
      skills: [
        { name: 'Python', icon: <FaPython style={{color: '#3776ab'}} /> },
        { name: 'Java', icon: <FaCode style={{color: '#f89820'}} /> },
        { name: 'JavaScript', icon: <FaJs style={{color: '#f7df1e'}} /> },
        { name: 'TypeScript', icon: <FaCode style={{color: '#3178c6'}} /> },
        { name: 'C', icon: <FaCode style={{color: '#a8b9cc'}} /> },
        { name: 'HTML', icon: <FaHtml5 style={{color: '#e34c26'}} /> },
        { name: 'CSS', icon: <FaCss3Alt style={{color: '#1572b6'}} /> },
        { name: 'SQL', icon: <FaDatabase style={{color: '#4479a1'}} /> },
        { name: 'VBA', icon: <FaChartLine style={{color: '#217346'}} /> },
        { name: 'Swift', icon: <FaCode style={{color: '#f05138'}} /> }
      ]
    },
    {
      id: 'frameworks',
      title: 'Frameworks & Libraries',
      icon: '⚛️',
      skills: [
        { name: 'React', icon: <FaReact style={{color: '#61dafb'}} /> },
        { name: 'Node.js', icon: <FaNodeJs style={{color: '#339933'}} /> },
        { name: 'Express.js', icon: <SiExpress style={{color: '#ffffff'}} /> },
        { name: 'Flask', icon: <SiFlask style={{color: '#ffffff'}} /> },
        { name: 'Bootstrap', icon: <FaBootstrap style={{color: '#7952b3'}} /> }
      ]
    },
    {
      id: 'databases',
      title: 'Databases',
      icon: '🗄️',
      skills: [
        { name: 'MongoDB', icon: <SiMongodb style={{color: '#47a248'}} /> },
        { name: 'PostgreSQL', icon: <SiPostgresql style={{color: '#4169e1'}} /> },
        { name: 'MySQL', icon: <SiMysql style={{color: '#4479a1'}} /> },
        { name: 'Firebase', icon: <SiFirebase style={{color: '#ffca28'}} /> },
        { name: 'Supabase', icon: <FaDatabase style={{color: '#3ecf8e'}} /> }
      ]
    },
    {
      id: 'devops',
      title: 'DevOps & Cloud',
      icon: '☁️',
      skills: [
        { name: 'Git', icon: <FaGitAlt style={{color: '#f05032'}} /> },
        { name: 'GitHub', icon: <FaGithub style={{color: '#ffffff'}} /> },
        { name: 'Railway', icon: <FaServer style={{color: '#a855f7'}} /> },
        { name: 'AWS', icon: <FaCloud style={{color: '#ff9900'}} /> },
        { name: 'Docker', icon: <FaServer style={{color: '#2496ed'}} /> }
      ]
    },
    {
      id: 'tools',
      title: 'Tools & Analytics',
      icon: '🛠️',
      skills: [
        { name: 'Power Query', icon: <FaChartLine style={{color: '#ff6b35'}} /> },
        { name: 'VBA', icon: <FaChartLine style={{color: '#217346'}} /> },
        { name: 'Excel', icon: <FaChartLine style={{color: '#217346'}} /> },
        { name: 'Tableau', icon: <FaChartLine style={{color: '#e97627'}} /> },
        { name: 'Power BI', icon: <FaChartLine style={{color: '#f2c811'}} /> }
      ]
    }
  ];

  // Experience data
  const experiences = [
    {
      id: 1,
      company: "IBM",
      position: "Software Engineer - Data & AI Team",
      duration: "May 2026 - September 2027",
      logo: "images/IBM_logo.png",
      achievements: [
        "Incoming Summer 2026"
      ]
    },
    {
      id: 2,
      company: "Mattamy Homes",
      position: "Data Analytics - IT Enterprise Services",
      duration: "January 2026 - April 2026",
      logo: "images/MH_Logo.jpg",
      achievements: [
        "Incoming Winter 2026"
      ]
    },
    {
      id: 3,
      company: "Samsung",
      position: "Software Analytics - SCM Team",
      duration: "May 2025 - August 2025",
      logo: "images/SamsungLogo.png",
      achievements: [
        "Worked on the Consumer Electronics team to automate supply chain processes, handling data of $400M revenue/month + $150M inventory/month"
      ]
    },
    {
      id: 4,
      company: "Laurier Supply Chain Association",
      position: "VP, Software & Product",
      duration: "May 2025 - Present",
      logo: "images/LSCALogo.jpg",
      achievements: [
        "Leading a team of 3 developers to revamp LSCA's website. Coming soon."
      ]
    },
    {
      id: 5,
      company: "Laurier Computing Society",
      position: "Director, Academics",
      duration: "January 2025 - Present",
      logo: "images/LCS Logo.jpeg",
      achievements: [
        "Led comprehensive exam review sessions for 150+ students across multiple computer science courses (CP220, CP213, CP264, CP363, CP216), covering data structures, algorithms, and programming fundamentals",
        "Designed and delivered technical presentation materials with live coding demonstrations, breaking down complex programming concepts for enhanced student comprehension",
        "Facilitated interactive coding workshops demonstrating real-time problem-solving techniques and best practices in software development"
      ]
    },
    {
      id: 6,
      company: "Apple",
      position: "Software Engineering Co-op",
      duration: "December 2021 - February 2022",
      logo: "images/AppleLogo.jpg",
      achievements: [
        "Completed co-op credit at Apple for my Information Communcation Technology (ICT) Specialized High Skills Major (SHSM) certification",
        "Collaborated with 2 other students to prototype an app using Xcode and Swift, presenting final project to Apple representatives"
      ]
    }
  ];

  // Carousel pagination function
  const paginate = useCallback((newDirection) => {
    setSkillDirection(newDirection);
    setCurrentSkillIndex((prevIndex) => {
      const newIndex = prevIndex + newDirection;
      // Infinite loop logic
      if (newIndex >= skillCategories.length) return 0;
      if (newIndex < 0) return skillCategories.length - 1;
      return newIndex;
    });
  }, [skillCategories.length]);

  // Keyboard navigation for carousel
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') paginate(-1);
      if (e.key === 'ArrowRight') paginate(1);
    };
    
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [paginate]);

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

  // Carousel slide variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeInOut'
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
        ease: 'easeInOut'
      }
    })
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
                3A Double Degree Business Administration (BBA) and Computer Science (BSc) @ Wilfrid Laurier University in Waterloo, Ontario
              </motion.p>
              
              <motion.ui className='about-list' variants={itemVariants}>
                <li>Incoming Data Analytics Co-op @ Mattamy Homes, Winter 2026</li>
                <li>Incoming Software Engineering Intern @ IBM, Summer 2026</li>
                <li>Finished Summer 2025 co-op @ Samsung in Sotware Analytics on the Supply Chain Management team for the Consumer Electronics division</li>
                <li>Previously interned @ Apple as a Software Engineering Intern during my high school ICT SHSM co-op</li>
                <li>Placed 2nd amongst 300+ teams with 1500+ participants @ Spurhacks 2025, winning $2500</li>
                <li>Enjoy attending hackathons and solving complex business problems with software based solutions</li>
              </motion.ui>

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

          <div className="skills-carousel-container">
            {/* Navigation Buttons */}
            <button
              className="carousel-button carousel-button-left"
              onClick={() => paginate(-1)}
              aria-label="Previous category"
            >
              <FaChevronLeft size={32} />
            </button>

            {/* Carousel Content */}
            <div className="carousel-wrapper">
              <AnimatePresence initial={false} custom={skillDirection} mode="wait">
                <motion.div
                  key={currentSkillIndex}
                  custom={skillDirection}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="skill-category-card"
                >
                  <div className="category-header">
                    <div className="category-icon-circle">
                      <span className="category-icon">{skillCategories[currentSkillIndex].icon}</span>
                    </div>
                    <h3 className="category-title">{skillCategories[currentSkillIndex].title}</h3>
                  </div>

                  <div className="skills-grid">
                    {skillCategories[currentSkillIndex].skills.map((skill, idx) => (
                      <motion.div
                        key={idx}
                        className="skill-item"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <span className="skill-icon">{skill.icon}</span>
                        <span className="skill-name">{skill.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              className="carousel-button carousel-button-right"
              onClick={() => paginate(1)}
              aria-label="Next category"
            >
              <FaChevronRight size={32} />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="carousel-dots">
            {skillCategories.map((_, idx) => (
              <button
                key={idx}
                className={`dot ${idx === currentSkillIndex ? 'active' : ''}`}
                onClick={() => {
                  setSkillDirection(idx > currentSkillIndex ? 1 : -1);
                  setCurrentSkillIndex(idx);
                }}
                aria-label={`Go to ${skillCategories[idx].title}`}
              />
            ))}
          </div>
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
                      className={`company-logo ${experience.company === 'Samsung' ? 'samsung-logo' : ''} ${experience.company === 'IBM' ? 'ibm-logo' : ''} ${experience.company === 'Mattamy Homes' ? 'mattamy-logo' : ''}`}
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
                  href="/resume/Resume - Software Engineering, Emaad.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <FaEye />
                  View Resume
                </a>
                <a 
                  href="/resume/Resume - Software Engineering, Emaad.pdf" 
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
                <div className="pdf-preview-wrapper">
                  <iframe
                    src="/resume/Resume - Software Engineering, Emaad.pdf"
                    className="pdf-preview-iframe"
                    title="Resume Preview"
                  />
                  <div className="pdf-overlay">
                    <a 
                      href="/resume/Resume - Software Engineering, Emaad.pdf" 
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
            className="contact-content-centered"
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
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SinglePage;
