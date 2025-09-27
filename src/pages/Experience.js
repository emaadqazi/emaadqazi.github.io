import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const Experience = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const experiences = [
    {
      id: 1,
      company: "Samsung Electronics Canada",
      position: "SCM Operations Co-op - CE Division",
      duration: "May 2025 - Present",
      logo: "/images/SamsungLogo.png",
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
      logo: "/images/LSCALogo.jpg",
      achievements: [
        "Revamping the new LSCA website, coming October 2025"
      ]
    },
    {
      id: 3,
      company: "Laurier Computing Society",
      position: "Academics, Content Writer",
      duration: "January 2025 - Present",
      logo: "/images/LCSLogo.jpg",
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
      logo: "/images/AppleLogo.jpg",
      achievements: [
        "Completed intensive mobile development co-op obtained through Halton Industry Education Council (HIEC) as part of my ICT SHSM certification, gaining hands-on experience in iOS development and industry best practices",
        "Developed LiftEats, a comprehensive fitness tracking mobile application using Swift and Xcode, featuring real-time Apple Watch integration for activity monitoring with 95% data accuracy",
        "Presented LiftEats to Apple Canada executives and 500+ industry professionals in a high-stakes 8-minute pitch session, earning recognition from judges and securing mentorship opportunities"
      ]
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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="experience-page">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>
        
        <motion.div 
          className="timeline"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
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
    </div>
  );
};

export default Experience;
