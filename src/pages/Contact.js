import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useDarkMode } from '../contexts/DarkModeContext';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaLinkedinIn, FaYoutube, FaFacebookF, FaBuilding, FaUser, FaIndustry, FaFileAlt, FaExternalLinkAlt } from 'react-icons/fa';

const Contact = () => {
  const { isDarkMode } = useDarkMode();
  const [activeTab, setActiveTab] = useState('general');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    projectType: '',
    budget: '',
    timeline: '',
    location: '',
    message: '',
    // Supplier form fields
    companyName: '',
    website: '',
    servicesOffered: '',
    yearsExperience: '',
    previousClients: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const offices = [
    {
      city: "Cairo",
      address: "123 Hassan El-Maamoun St, Nasr City, Cairo",
      phone: "+20 2 23546465",
      mobile: "+20 115 3494444",
      email: "info@elnuby-group.com",
      isHeadquarters: true,
      departments: ["Administration", "Project Management", "Engineering", "Finance", "Operations", "Business Development"]
    }
  ];

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: "Headquarters",
      details: "123 Hassan El-Maamoun St, Nasr City, Cairo",
      description: "Main office and administrative center"
    },
    {
      icon: FaPhone,
      title: "Phone",
      details: "+20 2 23546465",
      description: "Available Sat-Thu, 8AM-5PM"
    },
    {
      icon: FaEnvelope,
      title: "Email",
      details: "info@elnuby-group.com",
      description: "We'll respond within 24 hours"
    },
    {
      icon: FaClock,
      title: "Business Hours",
      details: "Sat-Thu: 8AM-5PM",
      description: "Friday: Closed"
    }
  ];

  const projectTypes = [
    "Infrastructure Development",
    "Healthcare Facilities",
    "Educational Buildings",
    "Government Buildings",
    "Roads & Transportation",
    "Residential Projects",
    "Commercial Buildings",
    "Industrial Facilities"
  ];

  const budgetRanges = [
    "Under EGP 1M",
    "EGP 1M - 5M",
    "EGP 5M - 20M",
    "EGP 20M - 50M",
    "EGP 50M - 100M",
    "Over EGP 100M"
  ];

  const timelines = [
    "Urgent (Within 1 month)",
    "Short-term (1-3 months)",
    "Medium-term (3-6 months)",
    "Long-term (6+ months)",
    "Planning phase"
  ];

  const socialLinks = [
    { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
    { icon: FaYoutube, href: "#", label: "YouTube" },
    { icon: FaFacebookF, href: "#", label: "Facebook" }
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
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className={`text-xl lg:text-2xl max-w-3xl mx-auto ${
              isDarkMode ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            Ready to start your next project? Let's discuss how we can help bring your vision to life.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className={`py-20 px-6 lg:px-8 ${
        isDarkMode ? 'bg-dark-950' : 'bg-white'
      }`}>
        <div className="relative w-full max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Forms */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className={`text-3xl font-bold mb-4 font-cairo ${
                  isDarkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  Get In Touch
                </h2>
                <p className={`text-lg ${
                  isDarkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  Choose the appropriate form based on your inquiry type.
                </p>
              </div>

              {/* Tab Navigation */}
              <div className={`flex rounded-2xl p-2 ${
                isDarkMode ? 'bg-dark-800' : 'bg-slate-100'
              }`}>
                {[
                  { id: 'general', label: 'Project Inquiry', icon: FaBuilding },
                  { id: 'supplier', label: 'Supplier Registration', icon: FaIndustry },
                  { id: 'career', label: 'Career Inquiry', icon: FaUser }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-4 py-3 rounded-xl font-semibold transition-all duration-300 flex-1 justify-center ${
                      activeTab === tab.id
                        ? 'bg-primary-500 text-white shadow-lg'
                        : isDarkMode
                          ? 'text-slate-200 hover:text-white bg-transparent hover:bg-dark-700'
                          : 'text-slate-800 hover:text-slate-900 bg-transparent hover:bg-slate-200'
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{tab.label}</span>
                  </button>
                ))}
              </div>

              {/* Project Inquiry Form */}
              {activeTab === 'general' && (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className={`block text-sm font-semibold mb-2 ${
                        isDarkMode ? 'text-slate-300' : 'text-slate-700'
                      }`}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                          isDarkMode
                            ? 'bg-dark-800 border-dark-600 text-white placeholder-slate-400'
                            : 'bg-white border-slate-300 text-slate-900 placeholder-slate-500'
                        }`}
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label className={`block text-sm font-semibold mb-2 ${
                        isDarkMode ? 'text-slate-300' : 'text-slate-700'
                      }`}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                          isDarkMode
                            ? 'bg-dark-800 border-dark-600 text-white placeholder-slate-400'
                            : 'bg-white border-slate-300 text-slate-900 placeholder-slate-500'
                        }`}
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className={`block text-sm font-semibold mb-2 ${
                        isDarkMode ? 'text-slate-300' : 'text-slate-700'
                      }`}>
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                          isDarkMode
                            ? 'bg-dark-800 border-dark-600 text-white placeholder-slate-400'
                            : 'bg-white border-slate-300 text-slate-900 placeholder-slate-500'
                        }`}
                        placeholder="+20 10 XXXX XXXX"
                      />
                    </div>

                    <div>
                      <label className={`block text-sm font-semibold mb-2 ${
                        isDarkMode ? 'text-slate-300' : 'text-slate-700'
                      }`}>
                        Company/Organization
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                          isDarkMode
                            ? 'bg-dark-800 border-dark-600 text-white placeholder-slate-400'
                            : 'bg-white border-slate-300 text-slate-900 placeholder-slate-500'
                        }`}
                        placeholder="Enter your company name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className={`block text-sm font-semibold mb-2 ${
                        isDarkMode ? 'text-slate-300' : 'text-slate-700'
                      }`}>
                        Project Type *
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                          isDarkMode
                            ? 'bg-dark-800 border-dark-600 text-white'
                            : 'bg-white border-slate-300 text-slate-900'
                        }`}
                      >
                        <option value="">Select project type</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className={`block text-sm font-semibold mb-2 ${
                        isDarkMode ? 'text-slate-300' : 'text-slate-700'
                      }`}>
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                          isDarkMode
                            ? 'bg-dark-800 border-dark-600 text-white'
                            : 'bg-white border-slate-300 text-slate-900'
                        }`}
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className={`block text-sm font-semibold mb-2 ${
                        isDarkMode ? 'text-slate-300' : 'text-slate-700'
                      }`}>
                        Timeline
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                          isDarkMode
                            ? 'bg-dark-800 border-dark-600 text-white'
                            : 'bg-white border-slate-300 text-slate-900'
                        }`}
                      >
                        <option value="">Select timeline</option>
                        {timelines.map((time) => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className={`block text-sm font-semibold mb-2 ${
                        isDarkMode ? 'text-slate-300' : 'text-slate-700'
                      }`}>
                        Project Location
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                          isDarkMode
                            ? 'bg-dark-800 border-dark-600 text-white placeholder-slate-400'
                            : 'bg-white border-slate-300 text-slate-900 placeholder-slate-500'
                        }`}
                        placeholder="City, Governorate"
                      />
                    </div>
                  </div>

                  <div>
                    <label className={`block text-sm font-semibold mb-2 ${
                      isDarkMode ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      Project Description *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none ${
                        isDarkMode
                          ? 'bg-dark-800 border-dark-600 text-white placeholder-slate-400'
                          : 'bg-white border-slate-300 text-slate-900 placeholder-slate-500'
                      }`}
                      placeholder="Describe your project requirements, scope, and any specific details..."
                    />
                  </div>

                  <button
                    type="submit"
                    className={`w-full py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-300 ${
                      isDarkMode
                        ? 'bg-primary-500 hover:bg-primary-600 text-white'
                        : 'bg-primary-500 hover:bg-primary-600 text-white'
                    }`}
                  >
                    Submit Project Inquiry
                  </button>
                </form>
              )}

              {/* Supplier Registration Form */}
              {activeTab === 'supplier' && (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className={`block text-sm font-semibold mb-2 ${
                        isDarkMode ? 'text-slate-300' : 'text-slate-700'
                      }`}>
                        Company Name *
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                          isDarkMode
                            ? 'bg-dark-800 border-dark-600 text-white placeholder-slate-400'
                            : 'bg-white border-slate-300 text-slate-900 placeholder-slate-500'
                        }`}
                        placeholder="Enter your company name"
                      />
                    </div>

                    <div>
                      <label className={`block text-sm font-semibold mb-2 ${
                        isDarkMode ? 'text-slate-300' : 'text-slate-700'
                      }`}>
                        Contact Person *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                          isDarkMode
                            ? 'bg-dark-800 border-dark-600 text-white placeholder-slate-400'
                            : 'bg-white border-slate-300 text-slate-900 placeholder-slate-500'
                        }`}
                        placeholder="Contact person name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className={`block text-sm font-semibold mb-2 ${
                        isDarkMode ? 'text-slate-300' : 'text-slate-700'
                      }`}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                          isDarkMode
                            ? 'bg-dark-800 border-dark-600 text-white placeholder-slate-400'
                            : 'bg-white border-slate-300 text-slate-900 placeholder-slate-500'
                        }`}
                        placeholder="Business email address"
                      />
                    </div>

                    <div>
                      <label className={`block text-sm font-semibold mb-2 ${
                        isDarkMode ? 'text-slate-300' : 'text-slate-700'
                      }`}>
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                          isDarkMode
                            ? 'bg-dark-800 border-dark-600 text-white placeholder-slate-400'
                            : 'bg-white border-slate-300 text-slate-900 placeholder-slate-500'
                        }`}
                        placeholder="+20 10 XXXX XXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className={`block text-sm font-semibold mb-2 ${
                      isDarkMode ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      Company Website
                    </label>
                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                        isDarkMode
                          ? 'bg-dark-800 border-dark-600 text-white placeholder-slate-400'
                          : 'bg-white border-slate-300 text-slate-900 placeholder-slate-500'
                      }`}
                      placeholder="https://www.yourcompany.com"
                    />
                  </div>

                  <div>
                    <label className={`block text-sm font-semibold mb-2 ${
                      isDarkMode ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      Products/Services Offered *
                    </label>
                    <textarea
                      name="servicesOffered"
                      value={formData.servicesOffered}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none ${
                        isDarkMode
                          ? 'bg-dark-800 border-dark-600 text-white placeholder-slate-400'
                          : 'bg-white border-slate-300 text-slate-900 placeholder-slate-500'
                      }`}
                      placeholder="Describe your products or services relevant to construction projects..."
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className={`block text-sm font-semibold mb-2 ${
                        isDarkMode ? 'text-slate-300' : 'text-slate-700'
                      }`}>
                        Years of Experience
                      </label>
                      <select
                        name="yearsExperience"
                        value={formData.yearsExperience}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                          isDarkMode
                            ? 'bg-dark-800 border-dark-600 text-white'
                            : 'bg-white border-slate-300 text-slate-900'
                        }`}
                      >
                        <option value="">Select experience</option>
                        <option value="1-3 years">1-3 years</option>
                        <option value="3-5 years">3-5 years</option>
                        <option value="5-10 years">5-10 years</option>
                        <option value="10+ years">10+ years</option>
                      </select>
                    </div>

                    <div>
                      <label className={`block text-sm font-semibold mb-2 ${
                        isDarkMode ? 'text-slate-300' : 'text-slate-700'
                      }`}>
                        Previous Clients
                      </label>
                      <input
                        type="text"
                        name="previousClients"
                        value={formData.previousClients}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                          isDarkMode
                            ? 'bg-dark-800 border-dark-600 text-white placeholder-slate-400'
                            : 'bg-white border-slate-300 text-slate-900 placeholder-slate-500'
                        }`}
                        placeholder="Notable clients or projects"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className={`w-full py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-300 ${
                      isDarkMode
                        ? 'bg-primary-500 hover:bg-primary-600 text-white'
                        : 'bg-primary-500 hover:bg-primary-600 text-white'
                    }`}
                  >
                    Submit Supplier Application
                  </button>
                </form>
              )}

              {/* Career Inquiry Form */}
              {activeTab === 'career' && (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className={`block text-sm font-semibold mb-2 ${
                        isDarkMode ? 'text-slate-300' : 'text-slate-700'
                      }`}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                          isDarkMode
                            ? 'bg-dark-800 border-dark-600 text-white placeholder-slate-400'
                            : 'bg-white border-slate-300 text-slate-900 placeholder-slate-500'
                        }`}
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label className={`block text-sm font-semibold mb-2 ${
                        isDarkMode ? 'text-slate-300' : 'text-slate-700'
                      }`}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                          isDarkMode
                            ? 'bg-dark-800 border-dark-600 text-white placeholder-slate-400'
                            : 'bg-white border-slate-300 text-slate-900 placeholder-slate-500'
                        }`}
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className={`block text-sm font-semibold mb-2 ${
                        isDarkMode ? 'text-slate-300' : 'text-slate-700'
                      }`}>
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                          isDarkMode
                            ? 'bg-dark-800 border-dark-600 text-white placeholder-slate-400'
                            : 'bg-white border-slate-300 text-slate-900 placeholder-slate-500'
                        }`}
                        placeholder="+20 10 XXXX XXXX"
                      />
                    </div>

                    <div>
                      <label className={`block text-sm font-semibold mb-2 ${
                        isDarkMode ? 'text-slate-300' : 'text-slate-700'
                      }`}>
                        Current Position
                      </label>
                      <input
                        type="text"
                        name="position"
                        value={formData.position}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                          isDarkMode
                            ? 'bg-dark-800 border-dark-600 text-white placeholder-slate-400'
                            : 'bg-white border-slate-300 text-slate-900 placeholder-slate-500'
                        }`}
                        placeholder="Your current job title"
                      />
                    </div>
                  </div>

                  <div>
                    <label className={`block text-sm font-semibold mb-2 ${
                      isDarkMode ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      Cover Letter *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none ${
                        isDarkMode
                          ? 'bg-dark-800 border-dark-600 text-white placeholder-slate-400'
                          : 'bg-white border-slate-300 text-slate-900 placeholder-slate-500'
                      }`}
                      placeholder="Tell us about your background, interests, and why you want to join El Nuby Group..."
                    />
                  </div>

                  <div className={`p-4 rounded-xl border-2 border-dashed ${
                    isDarkMode ? 'border-dark-600 bg-dark-800' : 'border-slate-300 bg-slate-50'
                  }`}>
                    <div className="text-center">
                      <FaFileAlt className={`w-8 h-8 mx-auto mb-2 ${
                        isDarkMode ? 'text-slate-400' : 'text-slate-500'
                      }`} />
                      <p className={`text-sm ${
                        isDarkMode ? 'text-slate-300' : 'text-slate-600'
                      }`}>
                        Drag & drop your CV here or click to browse
                      </p>
                      <p className={`text-xs mt-1 ${
                        isDarkMode ? 'text-slate-400' : 'text-slate-500'
                      }`}>
                        PDF, DOC, DOCX (Max 5MB)
                      </p>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className={`w-full py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-300 ${
                      isDarkMode
                        ? 'bg-primary-500 hover:bg-primary-600 text-white'
                        : 'bg-primary-500 hover:bg-primary-600 text-white'
                    }`}
                  >
                    Submit Career Inquiry
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className={`text-3xl font-bold mb-4 font-cairo ${
                  isDarkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  Contact Information
                </h2>
                <p className={`text-lg ${
                  isDarkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  Get in touch with us through any of these channels.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex items-start space-x-4 p-6 rounded-2xl transition-all duration-300 hover:scale-105 ${
                      isDarkMode 
                        ? 'bg-dark-800 border border-dark-700 hover:border-primary-500/50' 
                        : 'bg-slate-50 border border-slate-200 hover:border-primary-500/50'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                      isDarkMode ? 'bg-primary-500/20' : 'bg-primary-100'
                    }`}>
                      <info.icon className={`w-6 h-6 ${
                        isDarkMode ? 'text-primary-400' : 'text-primary-600'
                      }`} />
                    </div>
                    <div>
                      <h3 className={`font-semibold mb-1 ${
                        isDarkMode ? 'text-white' : 'text-slate-900'
                      }`}>
                        {info.title}
                      </h3>
                      <p className={`font-medium mb-1 ${
                        isDarkMode ? 'text-primary-400' : 'text-primary-600'
                      }`}>
                        {info.details}
                      </p>
                      <p className={`text-sm ${
                        isDarkMode ? 'text-slate-400' : 'text-slate-600'
                      }`}>
                        {info.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className={`p-6 rounded-2xl ${
                isDarkMode ? 'bg-dark-800 border border-dark-700' : 'bg-slate-50 border border-slate-200'
              }`}>
                <h3 className={`font-semibold mb-4 ${
                  isDarkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                        isDarkMode 
                          ? 'bg-dark-700 hover:bg-primary-500 text-slate-300 hover:text-white' 
                          : 'bg-white hover:bg-primary-500 text-slate-600 hover:text-white'
                      }`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

          {/* Map Section */}
      <section className={`py-20 px-6 lg:px-8 ${
        isDarkMode ? 'bg-dark-900' : 'bg-slate-50'
      }`}>
        <div className="relative w-full max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className={`text-4xl lg:text-5xl font-bold mb-6 font-cairo ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Find Us
            </h2>
            <p className={`text-xl ${
              isDarkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              Visit our headquarters or explore our global presence.
            </p>
          </motion.div>

          <div className={`rounded-3xl overflow-hidden shadow-2xl ${
            isDarkMode ? 'ring-1 ring-dark-700' : 'ring-1 ring-slate-200'
          }`}>
            <div className="relative overflow-hidden rounded-2xl">
              {/* Custom Interactive Map Design */}
              <div className="relative w-full h-[450px] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 dark:from-slate-800 dark:via-slate-700 dark:to-slate-600">
                
                {/* Map Grid Background */}
                <div className="absolute inset-0 opacity-20">
                  <div className="w-full h-full" style={{
                    backgroundImage: `
                      linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px'
                  }}></div>
                </div>
                
                {/* Streets and Landmarks */}
                <div className="absolute inset-0">
                  {/* Major street */}
                  <div className="absolute top-1/2 left-0 w-full h-3 bg-slate-300 dark:bg-slate-600 transform -translate-y-1/2"></div>
                  <div className="absolute top-1/2 left-1/2 w-3 h-full bg-slate-300 dark:bg-slate-600 transform -translate-x-1/2"></div>
                  
                  {/* Buildings around */}
                  <div className="absolute top-20 left-20 w-16 h-12 bg-slate-400 dark:bg-slate-500 rounded shadow-lg"></div>
                  <div className="absolute top-32 right-24 w-20 h-16 bg-slate-400 dark:bg-slate-500 rounded shadow-lg"></div>
                  <div className="absolute bottom-24 left-32 w-12 h-20 bg-slate-400 dark:bg-slate-500 rounded shadow-lg"></div>
                  <div className="absolute bottom-20 right-20 w-18 h-14 bg-slate-400 dark:bg-slate-500 rounded shadow-lg"></div>
                </div>
                
                {/* Company Location Marker */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    {/* Pulsing circle */}
                    <div className="absolute -inset-4 bg-red-500 rounded-full animate-ping opacity-75"></div>
                    <div className="absolute -inset-2 bg-red-400 rounded-full opacity-50"></div>
                    
                    {/* Main marker */}
                    <div className="relative w-12 h-12 bg-red-500 rounded-full flex items-center justify-center shadow-2xl border-4 border-white">
                      <FaMapMarkerAlt className="w-6 h-6 text-white" />
                    </div>
                    
                    {/* Company name tooltip */}
                    <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-white dark:bg-slate-800 px-4 py-2 rounded-lg shadow-xl border border-slate-200 dark:border-slate-600 whitespace-nowrap">
                      <div className="text-sm font-semibold text-slate-800 dark:text-white">El Nuby Group HQ</div>
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white dark:border-t-slate-800"></div>
                    </div>
                  </div>
                </div>
                
                {/* Area labels */}
                <div className="absolute top-8 left-8 text-xs font-semibold text-slate-600 dark:text-slate-300 bg-white/80 dark:bg-slate-800/80 px-2 py-1 rounded">
                  Nasr City
                </div>
                <div className="absolute bottom-8 right-8 text-xs font-semibold text-slate-600 dark:text-slate-300 bg-white/80 dark:bg-slate-800/80 px-2 py-1 rounded">
                  Cairo, Egypt
                </div>
                
                {/* Action buttons */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href="https://www.google.com/maps/place/El+Nuby+Group/@30.0698889,31.3543128,17z/data=!3m1!4b1!4m6!3m5!1s0x14583de22006f13b:0xc0ff9f4566a1c93!8m2!3d30.0698889!4d31.3568877!16s%2Fg%2F11c5qx8nt8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-medium text-sm transition-colors shadow-lg backdrop-blur-sm"
                    >
                      <FaExternalLinkAlt className="w-3 h-3" />
                      Open in Google Maps
                    </a>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText('123 Hassan El-Maamoun St, Nasr City, Cairo, Egypt');
                        // You could add a toast notification here
                      }}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-slate-600 hover:bg-slate-700 text-white rounded-xl font-medium text-sm transition-colors shadow-lg backdrop-blur-sm"
                    >
                      <FaMapMarkerAlt className="w-3 h-3" />
                      Copy Address
                    </button>
                  </div>
                </div>
              </div>
              <div className={`absolute top-4 left-4 px-4 py-2 rounded-lg backdrop-blur-sm shadow-lg ${
                isDarkMode ? 'bg-dark-900/90 text-white border border-dark-700' : 'bg-white/90 text-slate-900 border border-slate-200'
              }`}>
                <div className="flex items-center space-x-2">
                  <FaMapMarkerAlt className="w-4 h-4 text-primary-500" />
                  <span className="font-semibold text-sm">El Nuby Group Headquarters</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Headquarters Information */}
          <div className="mt-12 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`p-8 rounded-2xl ${
                isDarkMode 
                  ? 'bg-dark-800 border border-dark-700' 
                  : 'bg-white border border-slate-200 shadow-lg'
              }`}
            >
              <div className="text-center mb-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center">
                  <FaBuilding className="w-8 h-8" />
                </div>
                <h3 className={`text-2xl font-bold mb-2 font-cairo ${
                  isDarkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  Cairo Headquarters
                </h3>
                <p className={`text-sm ${
                  isDarkMode ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  Main Office & Administrative Center
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className={`font-semibold mb-3 ${
                    isDarkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    Contact Information
                  </h4>
                  
                  <div className="flex items-start space-x-3">
                    <FaMapMarkerAlt className={`w-5 h-5 mt-1 flex-shrink-0 text-primary-500`} />
                    <div>
                      <p className={`font-medium ${
                        isDarkMode ? 'text-white' : 'text-slate-900'
                      }`}>
                        Address
                      </p>
                      <p className={`text-sm ${
                        isDarkMode ? 'text-slate-300' : 'text-slate-600'
                      }`}>
                        123 Hassan El-Maamoun St, Nasr City, Cairo
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <FaPhone className={`w-5 h-5 text-primary-500`} />
                    <div>
                      <p className={`font-medium ${
                        isDarkMode ? 'text-white' : 'text-slate-900'
                      }`}>
                        Phone
                      </p>
                      <p className={`text-sm font-medium ${
                        isDarkMode ? 'text-primary-400' : 'text-primary-600'
                      }`}>
                        +20 2 23546465
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <FaEnvelope className={`w-5 h-5 text-primary-500`} />
                    <div>
                      <p className={`font-medium ${
                        isDarkMode ? 'text-white' : 'text-slate-900'
                      }`}>
                        Email
                      </p>
                      <p className={`text-sm font-medium ${
                        isDarkMode ? 'text-primary-400' : 'text-primary-600'
                      }`}>
                        info@elnuby-group.com
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <FaClock className={`w-5 h-5 text-primary-500`} />
                    <div>
                      <p className={`font-medium ${
                        isDarkMode ? 'text-white' : 'text-slate-900'
                      }`}>
                        Business Hours
                      </p>
                      <p className={`text-sm ${
                        isDarkMode ? 'text-slate-300' : 'text-slate-600'
                      }`}>
                        Sat-Thu: 8AM-5PM | Fri: Closed
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className={`font-semibold mb-3 ${
                    isDarkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    Departments
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {offices[0].departments.map((dept, deptIndex) => (
                      <div key={deptIndex} className={`p-3 rounded-lg text-center ${
                        isDarkMode ? 'bg-dark-700 text-slate-300' : 'bg-slate-100 text-slate-700'
                      }`}>
                        <span className="text-sm font-medium">{dept}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 