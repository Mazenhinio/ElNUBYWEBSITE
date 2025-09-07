import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDarkMode } from '../contexts/DarkModeContext';
import { FaMapMarkerAlt, FaBuilding, FaGraduationCap, FaCheckCircle, FaRocket, FaUsers, FaLightbulb, FaTrophy, FaHardHat, FaCogs, FaChartLine, FaShieldAlt, FaHeart, FaGift, FaClock, FaPlane, FaUserTie, FaTools, FaDesktop, FaClipboardCheck, FaAward, FaGlobe } from 'react-icons/fa';

const Careers = () => {
  const { isDarkMode } = useDarkMode();
  const [activeTab, setActiveTab] = useState('openings');

  const jobCategories = [
    {
      category: "Engineering",
      icon: FaCogs,
      color: "blue",
      jobs: [
        {
          id: 1,
          title: "Senior Civil Engineer - Infrastructure",
          location: "Cairo, Egypt",
          type: "Full-time",
          experience: "8+ years",
          salary: "EGP 25,000 - 35,000",
          description: "Lead the design and implementation of major infrastructure projects including roads, bridges, and transportation networks.",
          requirements: [
            "Bachelor's degree in Civil Engineering",
            "8+ years in infrastructure projects",
            "Experience with road and bridge construction",
            "AutoCAD, SAP2000, and Civil 3D proficiency",
            "Professional Engineer license preferred"
          ]
        },
        {
          id: 2,
          title: "Electrical Systems Engineer",
          location: "New Administrative Capital, Egypt",
          type: "Full-time",
          experience: "5+ years",
          salary: "EGP 18,000 - 28,000",
          description: "Design and oversee electrical systems for hospitals, government buildings, and large-scale facilities.",
          requirements: [
            "Bachelor's degree in Electrical Engineering",
            "5+ years in building electrical systems",
            "Knowledge of Egyptian electrical codes",
            "Experience with hospital electrical systems preferred"
          ]
        },
        {
          id: 3,
          title: "Mechanical Engineer - HVAC",
          location: "Luxor, Egypt",
          type: "Full-time",
          experience: "4+ years",
          salary: "EGP 15,000 - 22,000",
          description: "Design HVAC systems for healthcare facilities and government buildings in Upper Egypt region.",
          requirements: [
            "Bachelor's degree in Mechanical Engineering",
            "4+ years HVAC design experience",
            "Healthcare facility experience preferred",
            "Energy efficiency knowledge"
          ]
        }
      ]
    },
    {
      category: "Project Management",
      icon: FaUserTie,
      color: "green",
      jobs: [
        {
          id: 4,
          title: "Senior Project Manager - Healthcare",
          location: "Aswan, Egypt",
          type: "Full-time",
          experience: "10+ years",
          salary: "EGP 30,000 - 45,000",
          description: "Manage complex hospital construction projects from planning to delivery, ensuring quality healthcare infrastructure.",
          requirements: [
            "Bachelor's degree in Engineering or Construction Management",
            "10+ years healthcare construction experience",
            "PMP certification required",
            "Experience with medical equipment installation"
          ]
        },
        {
          id: 5,
          title: "Infrastructure Project Manager",
          location: "Toshka, Egypt",
          type: "Full-time",
          experience: "7+ years",
          salary: "EGP 25,000 - 38,000",
          description: "Lead major road and infrastructure development projects in desert regions and new cities.",
          requirements: [
            "Engineering degree with project management focus",
            "7+ years in infrastructure projects",
            "Desert construction experience preferred",
            "Ability to work in remote locations"
          ]
        }
      ]
    },
    {
      category: "Construction Operations",
      icon: FaHardHat,
      color: "orange",
      jobs: [
        {
          id: 6,
          title: "Site Supervisor - Hospital Construction",
          location: "Sohag, Egypt",
          type: "Full-time",
          experience: "5+ years",
          salary: "EGP 12,000 - 18,000",
          description: "Supervise daily construction activities for university hospital project, ensuring safety and quality standards.",
          requirements: [
            "Construction technology degree or equivalent",
            "5+ years construction supervision",
            "OSHA safety certification",
            "Experience with medical facility construction"
          ]
        },
        {
          id: 7,
          title: "Quality Control Inspector",
          location: "Port Said, Egypt",
          type: "Full-time",
          experience: "4+ years",
          salary: "EGP 10,000 - 15,000",
          description: "Ensure construction quality meets specifications for marine and coastal infrastructure projects.",
          requirements: [
            "Engineering background in construction",
            "4+ years quality control experience",
            "Knowledge of marine construction",
            "Testing and inspection certifications"
          ]
        }
      ]
    },
    {
      category: "Safety & Compliance",
      icon: FaShieldAlt,
      color: "red",
      jobs: [
        {
          id: 8,
          title: "HSE Manager",
          location: "Cairo, Egypt",
          type: "Full-time",
          experience: "8+ years",
          salary: "EGP 22,000 - 32,000",
          description: "Develop and implement safety protocols across all company projects, ensuring zero-accident workplace.",
          requirements: [
            "Bachelor's degree in Safety Engineering or related",
            "8+ years HSE management experience",
            "NEBOSH certification required",
            "Experience with large construction projects"
          ]
        }
      ]
    },
    {
      category: "Technology & Innovation",
      icon: FaDesktop,
      color: "purple",
      jobs: [
        {
          id: 9,
          title: "BIM Specialist",
          location: "New Administrative Capital, Egypt",
          type: "Full-time",
          experience: "3+ years",
          salary: "EGP 15,000 - 25,000",
          description: "Implement Building Information Modeling for complex construction projects, improving efficiency and coordination.",
          requirements: [
            "Engineering degree with BIM specialization",
            "3+ years BIM experience",
            "Revit, Navisworks, and AutoCAD expertise",
            "Construction project experience"
          ]
        }
      ]
    }
  ];

  const benefits = [
    { icon: FaHeart, title: "Healthcare Coverage", description: "Comprehensive medical, dental, and vision insurance for you and your family" },
    { icon: FaGift, title: "Annual Bonus", description: "Performance-based bonuses up to 3 months salary plus project completion bonuses" },
    { icon: FaClock, title: "Flexible Hours", description: "Flexible working hours and remote work options for eligible positions" },
    { icon: FaPlane, title: "Travel Allowances", description: "Full travel and accommodation expenses for project assignments" },
    { icon: FaGraduationCap, title: "Professional Development", description: "Sponsored training, certifications, and advanced degree programs" },
    { icon: FaUsers, title: "Team Building", description: "Regular team events, company retreats, and family gathering programs" },
    { icon: FaShieldAlt, title: "Life Insurance", description: "Comprehensive life and disability insurance coverage" },
    { icon: FaTrophy, title: "Recognition Programs", description: "Employee of the month, innovation awards, and long-service recognition" },
    { icon: FaTools, title: "Equipment Provision", description: "Company-provided tools, safety equipment, and work vehicles" },
    { icon: FaChartLine, title: "Career Advancement", description: "Clear promotion pathways and leadership development programs" }
  ];

  const careerPaths = [
    {
      title: "Engineering Track",
      icon: FaCogs,
      levels: ["Junior Engineer", "Engineer", "Senior Engineer", "Lead Engineer", "Engineering Manager", "VP Engineering"]
    },
    {
      title: "Project Management Track",
      icon: FaUserTie,
      levels: ["Assistant PM", "Project Coordinator", "Project Manager", "Senior PM", "Program Manager", "VP Projects"]
    },
    {
      title: "Operations Track",
      icon: FaHardHat,
      levels: ["Site Assistant", "Site Supervisor", "Site Manager", "Area Manager", "Operations Manager", "VP Operations"]
    },
    {
      title: "Technical Specialist Track",
      icon: FaTools,
      levels: ["Technician", "Senior Technician", "Technical Specialist", "Lead Specialist", "Principal Specialist", "Chief Technical Officer"]
    }
  ];

  const companyStats = [
    { number: "2000+", label: "Employees", icon: FaUsers },
    { number: "500+", label: "Projects Completed", icon: FaBuilding },
    { number: "15", label: "Countries", icon: FaGlobe },
    { number: "25+", label: "Years Experience", icon: FaAward }
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-dark-950 text-white' : 'bg-white text-slate-900'}`}>
      {/* Hero Section */}
      <section className={`relative py-20 px-6 lg:px-8 overflow-hidden ${
        isDarkMode ? 'bg-dark-900' : 'bg-gradient-to-br from-slate-50 to-slate-100'
      }`}>
        <div className="relative w-full max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-5xl lg:text-6xl font-black leading-tight font-cairo mb-6 ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            Join Our Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className={`text-xl lg:text-2xl max-w-3xl mx-auto ${
              isDarkMode ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            Build your career with a company that's building the future. Discover opportunities that match your skills and ambitions.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className={`py-20 px-6 lg:px-8 ${
        isDarkMode ? 'bg-dark-950' : 'bg-white'
      }`}>
        <div className="relative w-full max-w-7xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className={`flex rounded-2xl p-2 ${
              isDarkMode ? 'bg-dark-800' : 'bg-slate-100'
            }`}>
              {[
                { id: 'openings', label: 'Job Openings', icon: FaBuilding },
                { id: 'benefits', label: 'Benefits', icon: FaCheckCircle },
                { id: 'culture', label: 'Culture', icon: FaUsers },
                { id: 'development', label: 'Career Development', icon: FaRocket }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-primary-500 text-white shadow-lg'
                      : isDarkMode
                        ? 'text-slate-300 hover:text-white'
                        : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            {activeTab === 'openings' && (
              <motion.div
                key="openings"
                initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="space-y-12">
                  {jobCategories.map((category, categoryIndex) => (
                    <motion.div
                      key={category.category}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="space-y-6"
                    >
                      <div className="flex items-center space-x-4 mb-6">
                        <div className={`p-3 rounded-xl ${
                          category.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                          category.color === 'green' ? 'bg-green-100 text-green-600' :
                          category.color === 'orange' ? 'bg-orange-100 text-orange-600' :
                          category.color === 'red' ? 'bg-red-100 text-red-600' :
                          'bg-purple-100 text-purple-600'
                        }`}>
                          <category.icon className="w-6 h-6" />
                        </div>
                        <h3 className={`text-2xl font-bold font-cairo ${
                          isDarkMode ? 'text-white' : 'text-slate-900'
                        }`}>
                          {category.category}
                        </h3>
                      </div>
                      
                      <div className="grid gap-6">
                        {category.jobs.map((job) => (
                          <motion.div
                            key={job.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className={`p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg cursor-pointer group ${
                              isDarkMode 
                                ? 'bg-dark-800 border-dark-700 hover:border-primary-500/50' 
                                : 'bg-white border-slate-200 hover:border-primary-500/50'
                            }`}
                            onClick={() => console.log('Apply for:', job.title)}
                          >
                            <div className="flex justify-between items-start mb-4">
                              <div className="flex-1">
                                <h4 className={`text-xl font-bold mb-2 group-hover:text-primary-500 transition-colors ${
                                  isDarkMode ? 'text-white' : 'text-slate-900'
                                }`}>
                                  {job.title}
                                </h4>
                                <div className={`flex items-center space-x-4 text-sm mb-2 ${
                                  isDarkMode ? 'text-slate-400' : 'text-slate-600'
                                }`}>
                                  <span className="flex items-center space-x-1">
                                    <FaMapMarkerAlt className="w-3 h-3" />
                                    <span>{job.location}</span>
                                  </span>
                                  <span>{job.experience}</span>
                                  {job.salary && (
                                    <span className="font-semibold text-primary-500">{job.salary}</span>
                                  )}
                                </div>
                              </div>
                              <div className="text-right">
                                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                  job.type === 'Full-time' 
                                    ? 'bg-green-100 text-green-800' 
                                    : 'bg-blue-100 text-blue-800'
                                }`}>
                                  {job.type}
                                </span>
                              </div>
                            </div>
                            <p className={`mb-4 leading-relaxed ${
                              isDarkMode ? 'text-slate-300' : 'text-slate-600'
                            }`}>
                              {job.description}
                            </p>
                            <div className="flex items-center justify-between">
                              <div className="flex-1">
                                <div className={`text-xs mb-2 ${
                                  isDarkMode ? 'text-slate-400' : 'text-slate-500'
                                }`}>
                                  Key Requirements:
                                </div>
                                <div className="flex flex-wrap gap-2">
                                  {job.requirements.slice(0, 2).map((req, index) => (
                                    <span key={index} className={`px-2 py-1 rounded text-xs ${
                                      isDarkMode ? 'bg-dark-700 text-slate-300' : 'bg-slate-100 text-slate-700'
                                    }`}>
                                      {req}
                                    </span>
                                  ))}
                                  {job.requirements.length > 2 && (
                                    <span className={`px-2 py-1 rounded text-xs ${
                                      isDarkMode ? 'bg-primary-500/20 text-primary-400' : 'bg-primary-100 text-primary-700'
                                    }`}>
                                      +{job.requirements.length - 2} more
                                    </span>
                                  )}
                                </div>
                              </div>
                              <button className={`ml-4 px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                                isDarkMode
                                  ? 'bg-primary-500 hover:bg-primary-600 text-white'
                                  : 'bg-primary-500 hover:bg-primary-600 text-white'
                              }`}>
                                Apply Now
                              </button>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'benefits' && (
              <motion.div
                key="benefits"
                initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div className="text-center mb-12">
                  <h3 className={`text-3xl font-bold mb-6 font-cairo ${
                    isDarkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    Why Work With El Nuby Group?
                  </h3>
                  <p className={`text-lg max-w-3xl mx-auto ${
                    isDarkMode ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    We invest in our people because they are the foundation of our success. Join a company that values your growth and contribution.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className={`p-6 rounded-2xl transition-all duration-300 hover:scale-105 group ${
                        isDarkMode 
                          ? 'bg-dark-800 border border-dark-700 hover:border-primary-500/50' 
                          : 'bg-white border border-slate-200 hover:border-primary-500/50'
                      }`}
                    >
                      <div className={`w-12 h-12 mb-4 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform ${
                        isDarkMode ? 'bg-primary-500/20' : 'bg-primary-100'
                      }`}>
                        <benefit.icon className={`w-6 h-6 ${
                          isDarkMode ? 'text-primary-400' : 'text-primary-600'
                        }`} />
                      </div>
                      <h3 className={`text-lg font-bold mb-3 group-hover:text-primary-500 transition-colors ${
                        isDarkMode ? 'text-white' : 'text-slate-900'
                      }`}>
                        {benefit.title}
                      </h3>
                      <p className={`text-sm leading-relaxed ${
                        isDarkMode ? 'text-slate-300' : 'text-slate-600'
                      }`}>
                        {benefit.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
                
                <div className={`mt-16 p-8 rounded-2xl ${
                  isDarkMode ? 'bg-gradient-to-r from-dark-800 to-dark-700' : 'bg-gradient-to-r from-primary-50 to-orange-50'
                }`}>
                  <h3 className={`text-2xl font-bold mb-6 text-center font-cairo ${
                    isDarkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    Company Impact
                  </h3>
                  <div className="grid md:grid-cols-4 gap-6">
                    {companyStats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                          isDarkMode ? 'bg-primary-500/20' : 'bg-primary-100'
                        }`}>
                          <stat.icon className={`w-8 h-8 ${
                            isDarkMode ? 'text-primary-400' : 'text-primary-600'
                          }`} />
                        </div>
                        <div className={`text-3xl font-bold mb-2 ${
                          isDarkMode ? 'text-white' : 'text-slate-900'
                        }`}>
                          {stat.number}
                        </div>
                        <div className={`text-sm ${
                          isDarkMode ? 'text-slate-400' : 'text-slate-600'
                        }`}>
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'culture' && (
              <motion.div
                key="culture"
                initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="text-center space-y-8"
              >
                <div className="max-w-4xl mx-auto">
                  <h3 className={`text-3xl font-bold mb-6 ${
                    isDarkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    Our Culture
                  </h3>
                  <p className={`text-lg leading-relaxed mb-8 ${
                    isDarkMode ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    At El Nuby Group, we foster a culture of innovation, collaboration, and continuous improvement. 
                    We believe in empowering our employees to reach their full potential while contributing to meaningful projects.
                  </p>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                      { 
                        title: "Safety First Culture", 
                        description: "Zero-accident workplace with comprehensive safety training and protocols",
                        icon: FaShieldAlt
                      },
                      { 
                        title: "Innovation & Technology", 
                        description: "Using cutting-edge construction technology and sustainable building practices",
                        icon: FaLightbulb
                      },
                      { 
                        title: "Excellence in Delivery", 
                        description: "Committed to delivering projects on time, within budget, and exceeding quality standards",
                        icon: FaTrophy
                      },
                      { 
                        title: "Diverse & Inclusive", 
                        description: "Welcoming team members from all backgrounds with equal opportunities for growth",
                        icon: FaUsers
                      },
                      { 
                        title: "Community Impact", 
                        description: "Building infrastructure that improves lives and strengthens communities",
                        icon: FaHeart
                      },
                      { 
                        title: "Continuous Learning", 
                        description: "Investing in employee development through training, certifications, and education",
                        icon: FaGraduationCap
                      }
                    ].map((value, index) => (
                      <motion.div 
                        key={index} 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`p-6 rounded-xl text-center group hover:scale-105 transition-all duration-300 ${
                          isDarkMode ? 'bg-dark-800 hover:bg-dark-700' : 'bg-slate-50 hover:bg-slate-100'
                        }`}
                      >
                        <div className={`w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform ${
                          isDarkMode ? 'bg-primary-500/20' : 'bg-primary-100'
                        }`}>
                          <value.icon className={`w-6 h-6 ${
                            isDarkMode ? 'text-primary-400' : 'text-primary-600'
                          }`} />
                        </div>
                        <h4 className={`font-bold mb-3 group-hover:text-primary-500 transition-colors ${
                          isDarkMode ? 'text-white' : 'text-slate-900'
                        }`}>
                          {value.title}
                        </h4>
                        <p className={`text-sm leading-relaxed ${
                          isDarkMode ? 'text-slate-400' : 'text-slate-600'
                        }`}>
                          {value.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
            
            {activeTab === 'development' && (
              <motion.div
                key="development"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-12"
              >
                <div className="text-center mb-12">
                  <h3 className={`text-3xl font-bold mb-6 font-cairo ${
                    isDarkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    Your Career Journey
                  </h3>
                  <p className={`text-lg max-w-3xl mx-auto ${
                    isDarkMode ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    We believe in promoting from within and providing clear pathways for career advancement. Here are the typical career progression paths at El Nuby Group.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {careerPaths.map((path, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`p-6 rounded-2xl ${
                        isDarkMode 
                          ? 'bg-dark-800 border border-dark-700' 
                          : 'bg-white border border-slate-200'
                      }`}
                    >
                      <div className="flex items-center space-x-4 mb-6">
                        <div className={`p-3 rounded-xl ${
                          isDarkMode ? 'bg-primary-500/20' : 'bg-primary-100'
                        }`}>
                          <path.icon className={`w-6 h-6 ${
                            isDarkMode ? 'text-primary-400' : 'text-primary-600'
                          }`} />
                        </div>
                        <h4 className={`text-xl font-bold font-cairo ${
                          isDarkMode ? 'text-white' : 'text-slate-900'
                        }`}>
                          {path.title}
                        </h4>
                      </div>
                      
                      <div className="space-y-3">
                        {path.levels.map((level, levelIndex) => (
                          <div key={levelIndex} className="flex items-center space-x-3">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                              levelIndex === 0 ? 'bg-green-100 text-green-600' :
                              levelIndex === path.levels.length - 1 ? 'bg-yellow-100 text-yellow-600' :
                              'bg-blue-100 text-blue-600'
                            }`}>
                              {levelIndex + 1}
                            </div>
                            <span className={`${
                              isDarkMode ? 'text-slate-300' : 'text-slate-600'
                            }`}>
                              {level}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className={`mt-12 p-8 rounded-2xl text-center ${
                  isDarkMode ? 'bg-gradient-to-r from-primary-500/20 to-orange-500/20' : 'bg-gradient-to-r from-primary-50 to-orange-50'
                }`}>
                  <h4 className={`text-2xl font-bold mb-4 font-cairo ${
                    isDarkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    Professional Development Programs
                  </h4>
                  <div className="grid md:grid-cols-3 gap-6 mt-8">
                    {[
                      {
                        title: "Technical Certifications",
                        description: "PMP, NEBOSH, AutoCAD, Revit, and other industry certifications",
                        icon: FaClipboardCheck
                      },
                      {
                        title: "Leadership Development",
                        description: "Management training, communication skills, and executive coaching",
                        icon: FaUserTie
                      },
                      {
                        title: "Advanced Education",
                        description: "MBA sponsorship, engineering masters, and specialized diplomas",
                        icon: FaGraduationCap
                      }
                    ].map((program, programIndex) => (
                      <div key={programIndex} className="text-center">
                        <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                          isDarkMode ? 'bg-primary-500/20' : 'bg-primary-100'
                        }`}>
                          <program.icon className={`w-8 h-8 ${
                            isDarkMode ? 'text-primary-400' : 'text-primary-600'
                          }`} />
                        </div>
                        <h5 className={`font-bold mb-2 ${
                          isDarkMode ? 'text-white' : 'text-slate-900'
                        }`}>
                          {program.title}
                        </h5>
                        <p className={`text-sm ${
                          isDarkMode ? 'text-slate-300' : 'text-slate-600'
                        }`}>
                          {program.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 px-6 lg:px-8 ${
        isDarkMode ? 'bg-dark-900' : 'bg-slate-50'
      }`}>
        <div className="relative w-full max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className={`text-4xl lg:text-5xl font-bold font-cairo ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Ready to Join Us?
            </h2>
            <p className={`text-xl ${
              isDarkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              Don't see a position that fits? Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                isDarkMode
                  ? 'bg-primary-500 hover:bg-primary-600 text-white'
                  : 'bg-primary-500 hover:bg-primary-600 text-white'
              }`}>
                Upload Resume
              </button>
              <button className={`px-8 py-4 rounded-xl font-semibold text-lg border-2 transition-all duration-300 ${
                isDarkMode
                  ? 'border-primary-500 text-primary-400 hover:bg-primary-500 hover:text-white'
                  : 'border-primary-500 text-primary-600 hover:bg-primary-500 hover:text-white'
              }`}>
                Contact HR
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers; 