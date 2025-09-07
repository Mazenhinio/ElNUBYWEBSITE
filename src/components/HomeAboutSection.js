import React from 'react';
import { motion } from 'framer-motion';
import { useDarkMode } from '../contexts/DarkModeContext';
import { FaUsers, FaBookmark, FaCheckCircle, FaClock } from 'react-icons/fa';
import mapImage from '../assets/Images/HAbout/mapnew.webp';

const HomeAboutSection = () => {
  const { isDarkMode } = useDarkMode();

  const features = [
    {
      icon: FaBookmark,
      title: "25+ Years of Experience"
    },
    {
      icon: FaUsers,
      title: "Professional Team of Engineers and Experts"
    },
    {
      icon: FaCheckCircle,
      title: "Over 150 Successfully Completed Projects"
    },
    {
      icon: FaClock,
      title: "We Commit to Delivering Projects On Time"
    }
  ];

  return (
    <section className="relative py-20 px-6 lg:px-8 overflow-hidden bg-[#000435]">
      <div className="relative w-full max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Main Title */}
            <h2 className="text-3xl lg:text-4xl font-bold text-white font-cairo leading-tight">
              Who we are
            </h2>

            <p className="text-base lg:text-lg text-white leading-relaxed font-cairo">
              Founded in 2000, our company is a prominent Egyptian contracting firm, managed and overseen by a team of highly skilled engineers dedicated to delivering comprehensive construction and contracting services. We specialize in providing integrated solutions across all phases of the construction process, including planning, design, execution, and finalization. Committed to the highest standards of quality, efficiency, and occupational safety, we aim to meet the diverse needs of our clients throughout the Middle East and Africa region.
            </p>
            
            {/* Elegant Feature Presentation */}
            <div className="space-y-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.15,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true }}
                  className={`flex items-center gap-6 ${
                    index % 2 === 1 ? 'flex-row-reverse' : ''
                  }`}
                >
                  {/* Icon Container */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <div className="w-14 h-14 bg-[#ED8722] rounded-xl flex items-center justify-center shadow-xl relative overflow-hidden">
                      <feature.icon className="w-7 h-7 text-white relative z-10" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className={`flex-1 space-y-3 ${
                    index % 2 === 1 ? 'text-right' : ''
                  }`}>
                    <p className="text-lg font-bold text-white leading-tight font-cairo">
                      {feature.title}
                    </p>
                    {/* Elegant divider */}
                    <div className={`w-12 h-0.5 bg-[#ED8722] ${
                      index % 2 === 1 ? 'ml-auto' : ''
                    }`}></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative mt-32"
          >
            {/* Map Container with Border and Shadow */}
            <div className="relative rounded-2xl border border-[#CCCCCC] shadow-[0_0_30px_rgba(26,43,77,0.3)] overflow-hidden">
                  {/* Map Image */}
              <div className="relative w-full h-[500px] bg-white">
                <img 
                  src={mapImage} 
                  alt="Middle East and North Africa Map" 
                  className="w-full h-full object-cover object-top"
                />
                
                {/* Interactive Dots with Glow Effect */}
                <div className="absolute top-[35%] left-[30%] w-4 h-4">
                  <div className="w-full h-full rounded-full bg-[#ED8722] shadow-[0_0_20px_rgba(237,135,34,0.6)] animate-pulse" />
                  <div className="absolute inset-0 rounded-full border-2 border-[#ED8722] animate-ping" />
                </div>
                
                <div className="absolute top-[35%] left-[50%] w-4 h-4">
                  <div className="w-full h-full rounded-full bg-[#ED8722] shadow-[0_0_20px_rgba(237,135,34,0.6)] animate-pulse" />
                  <div className="absolute inset-0 rounded-full border-2 border-[#ED8722] animate-ping" />
                </div>
                
                <div className="absolute top-[41%] left-[78%] w-4 h-4">
                  <div className="w-full h-full rounded-full bg-[#ED8722] shadow-[0_0_20px_rgba(237,135,34,0.6)] animate-pulse" />
                  <div className="absolute inset-0 rounded-full border-2 border-[#ED8722] animate-ping" />
                </div>
                
                <div className="absolute top-[23%] left-[75%] w-4 h-4">
                  <div className="w-full h-full rounded-full bg-[#ED8722] shadow-[0_0_20px_rgba(237,135,34,0.6)] animate-pulse" />
                  <div className="absolute inset-0 rounded-full border-2 border-[#ED8722] animate-ping" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeAboutSection;