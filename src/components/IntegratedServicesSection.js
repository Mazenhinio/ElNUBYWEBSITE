import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useDarkMode } from '../contexts/DarkModeContext';
import { FaArrowRight } from 'react-icons/fa';
import { 
  HiOutlineBuildingOffice2, 
  HiOutlineCog6Tooth, 
  HiOutlineBolt, 
  HiOutlineWrenchScrewdriver 
} from 'react-icons/hi2';
import mechanicalImg from '../assets/Images/services/mechanical.webp';
import electricalImg from '../assets/Images/services/electrical.webp';
import plumbingImg from '../assets/Images/services/plumbing.webp';
import constructionImg from '../assets/Images/services/construction.webp';
import { GiCrane, GiGears, GiElectric, GiWaterRecycling } from 'react-icons/gi';

const IntegratedServicesSection = () => {
  const { isDarkMode } = useDarkMode();
  const [hoveredCard, setHoveredCard] = useState(null);

const services = [
  {
    key: 'construction',
    title: 'Construction',
    description: 'Complete construction solutions from foundation to finishing',
    gradient: 'from-blue-500 to-blue-600',
    bgGradient: 'from-white via-gray-50 to-gray-100',
    accent: 'blue',
    backgroundImage: constructionImg
  },
  {
    key: 'mechanical',
    title: 'Mechanical',
    description: 'Advanced mechanical systems and HVAC solutions',
    gradient: 'from-green-500 to-green-600',
    bgGradient: 'from-white via-gray-50 to-gray-100',
    accent: 'green',
    backgroundImage: mechanicalImg
  },
  {
    key: 'electrical',
    title: 'Electrical',
    description: 'Comprehensive electrical installations and power systems',
    gradient: 'from-orange-500 to-orange-600',
    bgGradient: 'from-white via-gray-50 to-gray-100',
    accent: 'orange',
    backgroundImage: electricalImg
  },
  {
    key: 'plumbing',
    title: 'Plumbing',
    description: 'Professional plumbing and water management systems',
    gradient: 'from-sky-500 to-sky-600',
    bgGradient: 'from-white via-gray-50 to-gray-100',
    accent: 'sky',
    backgroundImage: plumbingImg
  }
];

  try {
  return (
      <section className="relative py-20 px-6 lg:px-8 overflow-hidden bg-[#000435]">
        <div className="relative w-full max-w-7xl mx-auto">
          {/* Section Header */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white font-cairo mb-6">
              Our Integrated Services
            </h2>
            <p className="text-base lg:text-lg text-white leading-relaxed font-cairo max-w-3xl mx-auto">
              We provide a comprehensive range of specialized engineering and construction services
            </p>
          </motion.div>
          
          {/* Services Grid - Four Cards in a Row */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
            {services.map((service, index) => (
          <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative h-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:border-white/40 shadow-lg overflow-hidden min-h-[300px] flex flex-col">
                  {/* Background Image for all services */}
                  {service.backgroundImage && (
                    <div className="absolute inset-0 -z-10">
                      <img 
                        src={service.backgroundImage} 
                        alt={service.title}
                        className="w-full h-full object-cover opacity-25"
                        onError={(e) => {
                          console.warn(`Failed to load image for ${service.title}`);
                          e.target.style.display = 'none';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent"></div>
                    </div>
                  )}
                  
                  {/* Service Icon */}
                  <div className={`w-12 h-12 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {service.key === 'construction' && <GiCrane className="w-6 h-6 text-white" />}
                    {service.key === 'mechanical' && <GiGears className="w-6 h-6 text-white" />}
                    {service.key === 'electrical' && <GiElectric className="w-6 h-6 text-white" />}
                    {service.key === 'plumbing' && <GiWaterRecycling className="w-6 h-6 text-white" />}
                            </div>
                            
                  {/* Service Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 font-cairo">
                    {service.title}
                  </h3>
                  
                  {/* Service Description */}
                  <p className="text-base text-[#E0E0E0] leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>
                  
                  {/* More Details Button */}
                  <div className="mt-auto pt-4">
                    <button className={`px-4 py-2 bg-gradient-to-r ${service.gradient} text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg mx-auto`}>
                      More
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>


          </div>
      </section>
    );
  } catch (error) {
    console.error('Error in IntegratedServicesSection:', error);
    return (
      <section className="relative py-20 px-6 lg:px-8 overflow-hidden bg-[#000435]">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white">Something went wrong. Please refresh the page.</h2>
          <p className="text-[#E0E0E0] mt-4">Error: {error.message}</p>
      </div>
    </section>
  );
  }
};

export default IntegratedServicesSection;
