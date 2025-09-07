import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useDarkMode } from '../contexts/DarkModeContext';
import logo1 from '../assets/Images/Partner/logos-1.jpg';
import logo2 from '../assets/Images/Partner/logos-2.jpg';
import logo3 from '../assets/Images/Partner/logos-3.jpg';
import logo4 from '../assets/Images/Partner/logos-4.jpg';
import logo5 from '../assets/Images/Partner/logos-5.jpg';
import logo6 from '../assets/Images/Partner/logos-6.jpg';
import logo7 from '../assets/Images/Partner/logos-7.jpg';
import logo8 from '../assets/Images/Partner/logos-8.jpg';
import logo9 from '../assets/Images/Partner/logos-9.jpg';
import logo10 from '../assets/Images/Partner/logos-10.jpg';
import elnubyLogo from '../assets/Images/logo/nubylogo.webp';
import haramLogo from '../assets/Images/logo/haram.png';

const groupLogos = [
  elnubyLogo,
  haramLogo,
  logo1, 
  logo2, 
  logo3, 
  logo4, 
  logo5, 
  logo6, 
  logo7
];

const ElnubyGroupSection = () => {
  const { isDarkMode } = useDarkMode();
  const containerRef = useRef(null);

  return (
    <section className={`relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden py-16 ${
      isDarkMode ? 'bg-dark-900' : 'bg-white'
    }`}>
      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 lg:p-12 shadow-2xl min-h-[520px] ${
          isDarkMode ? 'bg-dark-800/50 border-dark-700/50' : 'bg-white/90 border-slate-200/50'
        }`}>
          {/* Background gradient border */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 via-orange-500 to-primary-500 rounded-3xl opacity-20 blur-sm -z-10" />
          
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`text-4xl lg:text-5xl font-bold mb-6 font-cairo ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              El Nuby Group
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className={`text-lg lg:text-xl max-w-3xl mx-auto ${
                isDarkMode ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              A comprehensive group of companies specializing in construction, contracting, and infrastructure development across the Middle East and Africa.
            </motion.p>
          </div>

          {/* Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
            {groupLogos.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className={`p-4 rounded-xl border transition-all duration-300 hover:scale-105 ${
                  isDarkMode 
                    ? 'bg-dark-700 border-dark-600 hover:border-primary-500/50' 
                    : 'bg-white border-slate-200 hover:border-primary-500/50'
                }`}>
                  <img 
                    src={logo} 
                    alt={`Company logo ${index + 1}`}
                    className="w-full h-20 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[logo8, logo9, logo10].map((logo, index) => (
              <motion.div
                key={index + groupLogos.length}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index + groupLogos.length) * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className={`p-3 rounded-lg border transition-all duration-300 hover:scale-105 ${
                  isDarkMode 
                    ? 'bg-dark-700 border-dark-600 hover:border-primary-500/50' 
                    : 'bg-white border-slate-200 hover:border-primary-500/50'
                }`}>
                  <img 
                    src={logo} 
                    alt={`Additional logo ${index + 1}`}
                    className="w-full h-16 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElnubyGroupSection; 