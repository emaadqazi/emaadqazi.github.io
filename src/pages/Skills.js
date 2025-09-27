import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaBootstrap, FaNodeJs, FaPython, FaGitAlt, FaGithub, FaCloud } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiFlask } from 'react-icons/si';
import { FaDatabase, FaServer, FaCode, FaChartLine } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    <div className="skills-page">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Skills & Technologies
        </motion.h2>
        
        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
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
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1 
                    }}
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
    </div>
  );
};

export default Skills;
