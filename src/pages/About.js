import React from 'react';
import { motion } from 'framer-motion';
import { useDarkMode } from '../contexts/DarkModeContext';
import { useTranslation } from 'react-i18next';

import heroImg from '../assets/Images/About/nubyinside.jpg';

const About = () => {
  const { isDarkMode } = useDarkMode();
  const { t, i18n } = useTranslation();

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-dark-950 text-white' : 'bg-white text-slate-900'}`}>
      {/* Hero Section */}
      <section className={`relative py-20 px-6 lg:px-8 overflow-hidden ${
        isDarkMode ? 'bg-dark-900' : 'bg-gradient-to-br from-slate-50 to-slate-100'
      }`}>
        <div className="relative w-full max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className={`text-5xl lg:text-6xl font-black leading-tight font-cairo ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}>
                About El Nuby Group
              </h1>
              <p className={`text-xl lg:text-2xl leading-relaxed ${
                isDarkMode ? 'text-slate-300' : 'text-slate-600'
              }`}>
                A leading construction and contracting company with over two decades of excellence in building the future of the Middle East and Africa.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className={`px-6 py-3 rounded-full border-2 ${
                  isDarkMode 
                    ? 'border-primary-500 text-primary-400' 
                    : 'border-primary-600 text-primary-600'
                }`}>
                  <span className="font-semibold">25+ Years</span>
                </div>
                <div className={`px-6 py-3 rounded-full border-2 ${
                  isDarkMode 
                    ? 'border-orange-500 text-orange-400' 
                    : 'border-orange-600 text-orange-600'
                }`}>
                  <span className="font-semibold">500+ Projects</span>
                </div>
                <div className={`px-6 py-3 rounded-full border-2 ${
                  isDarkMode 
                    ? 'border-green-500 text-green-400' 
                    : 'border-green-600 text-green-600'
                }`}>
                  <span className="font-semibold">15 Countries</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className={`relative rounded-3xl overflow-hidden shadow-2xl ${
                isDarkMode ? 'ring-1 ring-dark-700' : 'ring-1 ring-slate-200'
              }`}>
                <img 
                  src={heroImg} 
                  alt="El Nuby Group Headquarters" 
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className={`py-20 px-6 lg:px-8 ${
        isDarkMode ? 'bg-dark-950' : 'bg-white'
      }`}>
        <div className="relative w-full max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl lg:text-5xl font-bold mb-6 font-cairo ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Our Story
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-primary-500 to-orange-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className={`text-3xl font-bold font-cairo ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}>
                Building Excellence Since 1998
              </h3>
              <p className={`text-lg leading-relaxed ${
                isDarkMode ? 'text-slate-300' : 'text-slate-600'
              }`}>
                El Nuby Group began as a small construction company in Egypt with a vision to transform the construction industry through innovation, quality, and reliability. Over the years, we have grown into a comprehensive group of companies serving multiple sectors across the Middle East and Africa.
              </p>
              <p className={`text-lg leading-relaxed ${
                isDarkMode ? 'text-slate-300' : 'text-slate-600'
              }`}>
                Our commitment to excellence, safety, and sustainable practices has made us a trusted partner for governments, corporations, and communities throughout the region.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className={`p-8 rounded-3xl ${
                isDarkMode 
                  ? 'bg-dark-800 border border-dark-700' 
                  : 'bg-slate-50 border border-slate-200'
              }`}
            >
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">25</span>
                  </div>
                  <div>
                    <h4 className={`font-semibold ${
                      isDarkMode ? 'text-white' : 'text-slate-900'
                    }`}>Years of Experience</h4>
                    <p className={`text-sm ${
                      isDarkMode ? 'text-slate-400' : 'text-slate-600'
                    }`}>Building trust since 1998</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">500+</span>
                  </div>
                  <div>
                    <h4 className={`font-semibold ${
                      isDarkMode ? 'text-white' : 'text-slate-900'
                    }`}>Projects Completed</h4>
                    <p className={`text-sm ${
                      isDarkMode ? 'text-slate-400' : 'text-slate-600'
                    }`}>Across multiple sectors</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">15</span>
                  </div>
                  <div>
                    <h4 className={`font-semibold ${
                      isDarkMode ? 'text-white' : 'text-slate-900'
                    }`}>Countries Served</h4>
                    <p className={`text-sm ${
                      isDarkMode ? 'text-slate-400' : 'text-slate-600'
                    }`}>Middle East & Africa</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={`py-20 px-6 lg:px-8 ${
        isDarkMode ? 'bg-dark-900' : 'bg-slate-50'
      }`}>
        <div className="relative w-full max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl lg:text-5xl font-bold mb-6 font-cairo ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Our Core Values
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-primary-500 to-orange-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                description: "We strive for excellence in every project, maintaining the highest standards of quality and craftsmanship."
              },
              {
                title: "Innovation",
                description: "Embracing new technologies and methodologies to deliver cutting-edge solutions for our clients."
              },
              {
                title: "Integrity",
                description: "Building trust through honest communication, ethical practices, and reliable project delivery."
              },
              {
                title: "Safety",
                description: "Prioritizing the safety of our team, clients, and communities in all our operations."
              },
              {
                title: "Sustainability",
                description: "Committed to environmental responsibility and sustainable construction practices."
              },
              {
                title: "Collaboration",
                description: "Working together with clients, partners, and communities to achieve shared success."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-8 rounded-2xl text-center transition-all duration-300 hover:scale-105 ${
                  isDarkMode 
                    ? 'bg-dark-800 border border-dark-700 hover:border-primary-500/50' 
                    : 'bg-white border border-slate-200 hover:border-primary-500/50'
                }`}
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center ${
                  isDarkMode ? 'bg-primary-500/20' : 'bg-primary-50'
                }`}>
                  <div className={`w-8 h-8 rounded-full ${
                    isDarkMode ? 'bg-primary-500' : 'bg-primary-600'
                  }`} />
                </div>
                <h3 className={`text-xl font-bold mb-4 font-cairo ${
                  isDarkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  {value.title}
                </h3>
                <p className={`leading-relaxed ${
                  isDarkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Expertise Section */}
      <section className={`py-20 px-6 lg:px-8 ${
        isDarkMode ? 'bg-dark-950' : 'bg-white'
      }`}>
        <div className="relative w-full max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl lg:text-5xl font-bold mb-6 font-cairo ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Our Expertise
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-primary-500 to-orange-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Infrastructure",
                description: "Roads, bridges, and transportation networks",
                projects: "200+"
              },
              {
                title: "Healthcare",
                description: "Modern hospitals and medical facilities",
                projects: "50+"
              },
              {
                title: "Education",
                description: "Schools, universities, and academic buildings",
                projects: "75+"
              },
              {
                title: "Government",
                description: "Administrative and public service buildings",
                projects: "100+"
              }
            ].map((expertise, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-8 rounded-2xl text-center group hover:scale-105 transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-dark-800 border border-dark-700 hover:border-primary-500/50' 
                    : 'bg-slate-50 border border-slate-200 hover:border-primary-500/50'
                }`}
              >
                <div className={`text-3xl font-bold mb-2 ${
                  isDarkMode ? 'text-primary-400' : 'text-primary-600'
                }`}>
                  {expertise.projects}
                </div>
                <h3 className={`text-xl font-bold mb-3 font-cairo group-hover:text-primary-500 transition-colors ${
                  isDarkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  {expertise.title}
                </h3>
                <p className={`text-sm leading-relaxed ${
                  isDarkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {expertise.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className={`py-20 px-6 lg:px-8 ${
        isDarkMode ? 'bg-dark-900' : 'bg-slate-50'
      }`}>
        <div className="relative w-full max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl lg:text-5xl font-bold mb-6 font-cairo ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Our Journey
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-primary-500 to-orange-500 mx-auto rounded-full" />
          </motion.div>

          <div className="relative">
            <div className={`absolute left-1/2 transform -translate-x-1/2 w-1 h-full ${
              isDarkMode ? 'bg-dark-700' : 'bg-slate-300'
            }`} />
            
            {[
              {
                year: "2000",
                title: "Company Foundation",
                description: "El Nuby Group was established with a vision to transform the construction industry in Egypt."
              },
              {
                year: "2005",
                title: "Major Infrastructure Projects",
                description: "Began work on significant road and transportation infrastructure projects across Egypt."
              },
              {
                year: "2010",
                title: "Healthcare Expansion",
                description: "Expanded into healthcare construction, building modern hospitals and medical facilities."
              },
              {
                year: "2015",
                title: "Regional Growth",
                description: "Extended operations across the Middle East and North Africa region."
              },
              {
                year: "2020",
                title: "Sustainable Construction",
                description: "Adopted green building practices and sustainable construction methodologies."
              },
              {
                year: "2024",
                title: "Digital Innovation",
                description: "Integrated advanced technologies and digital solutions in project management."
              }
            ].map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`w-1/2 ${
                  index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'
                }`}>
                  <div className={`p-6 rounded-2xl ${
                    isDarkMode 
                      ? 'bg-dark-800 border border-dark-700' 
                      : 'bg-white border border-slate-200'
                  }`}>
                    <div className={`text-2xl font-bold mb-2 ${
                      isDarkMode ? 'text-primary-400' : 'text-primary-600'
                    }`}>
                      {milestone.year}
                    </div>
                    <h3 className={`text-xl font-bold mb-3 font-cairo ${
                      isDarkMode ? 'text-white' : 'text-slate-900'
                    }`}>
                      {milestone.title}
                    </h3>
                    <p className={`leading-relaxed ${
                      isDarkMode ? 'text-slate-300' : 'text-slate-600'
                    }`}>
                      {milestone.description}
                    </p>
                  </div>
                </div>
                
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 ${
                  isDarkMode 
                    ? 'bg-primary-500 border-dark-900' 
                    : 'bg-primary-600 border-slate-50'
                }`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Geographic Presence Section */}
      <section className={`py-20 px-6 lg:px-8 ${
        isDarkMode ? 'bg-dark-950' : 'bg-white'
      }`}>
        <div className="relative w-full max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl lg:text-5xl font-bold mb-6 font-cairo ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Where We Operate
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-primary-500 to-orange-500 mx-auto rounded-full" />
            <p className={`mt-6 text-xl leading-relaxed max-w-3xl mx-auto ${
              isDarkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              Our projects span across multiple regions, bringing development and infrastructure to communities throughout Egypt and beyond.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                region: "Upper Egypt",
                cities: ["Luxor", "Aswan", "Sohag", "Kom Ombo"],
                projects: "Major infrastructure and tourism development"
              },
              {
                region: "Lower Egypt",
                cities: ["Cairo", "Ismailia", "Port Said", "Mansoura"],
                projects: "Urban development and healthcare facilities"
              },
              {
                region: "Canal Zone",
                cities: ["Suez Canal", "New Administrative Capital", "El Dabaa"],
                projects: "Strategic national infrastructure projects"
              },
              {
                region: "Western Desert",
                cities: ["Toshka", "El Alamein", "Matrouh"],
                projects: "Desert development and transportation networks"
              },
              {
                region: "Nile Delta",
                cities: ["Bani Mazar", "Samalout", "Qantara"],
                projects: "Agricultural and community infrastructure"
              },
              {
                region: "Red Sea",
                cities: ["Galala", "Hurghada", "Marsa Alam"],
                projects: "Tourism and coastal development"
              }
            ].map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-2xl ${
                  isDarkMode 
                    ? 'bg-dark-800 border border-dark-700' 
                    : 'bg-slate-50 border border-slate-200'
                }`}
              >
                <h3 className={`text-xl font-bold mb-4 font-cairo ${
                  isDarkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  {area.region}
                </h3>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {area.cities.map((city, cityIndex) => (
                      <span
                        key={cityIndex}
                        className={`px-3 py-1 rounded-full text-sm ${
                          isDarkMode 
                            ? 'bg-primary-500/20 text-primary-400' 
                            : 'bg-primary-100 text-primary-700'
                        }`}
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
                <p className={`text-sm leading-relaxed ${
                  isDarkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {area.projects}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className={`py-20 px-6 lg:px-8 ${
        isDarkMode ? 'bg-gradient-to-br from-dark-900 to-dark-800' : 'bg-gradient-to-br from-primary-50 to-orange-50'
      }`}>
        <div className="relative w-full max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className={`text-4xl lg:text-5xl font-bold mb-6 font-cairo ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Ready to Build the Future Together?
            </h2>
            <p className={`text-xl leading-relaxed mb-10 ${
              isDarkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              Partner with El Nuby Group for your next construction project. Let's create something remarkable together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-full transition-colors duration-300"
              >
                Get In Touch
              </motion.a>
              <motion.a
                href="/projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex items-center justify-center px-8 py-4 font-semibold rounded-full border-2 transition-all duration-300 ${
                  isDarkMode 
                    ? 'border-white text-white hover:bg-white hover:text-dark-900' 
                    : 'border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white'
                }`}
              >
                View Our Projects
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About; 