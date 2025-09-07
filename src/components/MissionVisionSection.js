import React, { useState, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MdTrackChanges, MdVisibility, MdStarOutline } from 'react-icons/md';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Enhanced cards data with theme colors
const cards = [
  {
    key: 'mission',
    icon: <MdTrackChanges size={52} color="#ED8722" />,
    primaryColor: '#ED8722',
    secondaryColor: '#B45309',
    en: {
      title: 'Mission',
      desc: 'Excellence in construction and contracting through professional service and client partnership.',
      highlight: 'Professional Excellence'
    },
    ar: {
      title: 'المهمة',
      desc: 'التميز في البناء والمقاولات من خلال الخدمة المهنية وشراكة العملاء.',
      highlight: 'التميز المهني'
    },
  },
  {
    key: 'vision',
    icon: <MdVisibility size={52} color="#ED8722" />,
    primaryColor: '#ED8722',
    secondaryColor: '#B45309',
    en: {
      title: 'Vision',
      desc: 'To be the regional leader in construction by setting benchmarks in quality, innovation, and reliability',
      highlight: 'Regional Leadership'
    },
    ar: {
      title: 'الرؤية',
      desc: 'شركة بناء رائدة في مصر والعالم العربي بأعلى معايير الجودة.',
      highlight: 'القيادة الإقليمية'
    },
  },
  {
    key: 'values',
    icon: <MdStarOutline size={52} color="#ED8722" />,
    primaryColor: '#ED8722',
    secondaryColor: '#B45309',
    en: {
      title: 'Values',
      desc: 'Integrity, transparency, and continuous development for client satisfaction.',
      highlight: 'Integrity & Trust'
    },
    ar: {
      title: 'القيم',
      desc: 'النزاهة والشفافية والتطوير المستمر لرضا العملاء.',
      highlight: 'النزاهة والثقة'
    },
  },
];

const MissionVisionSection = React.memo(() => {
  const { i18n } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Memoized title text
  const titleText = useMemo(() => 
    i18n.language === 'ar' ? 'مهمتنا ورؤيتنا وقيمنا' : 'Our Mission, Vision & Values',
    [i18n.language]
  );

  // Memoized description text
  const descriptionText = useMemo(() => 
    i18n.language === 'ar'
      ? 'نؤمن بالتميز في كل مشروع نعمل عليه'
      : 'Learn more about our complete story and journey in the world of construction and contracting',
    [i18n.language]
  );

  return (
    <section className="relative py-20 px-6 lg:px-8 overflow-hidden bg-[#000435]" role="region" aria-labelledby="mission-vision-heading">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-[#ED8722]/3 to-[#B45309]/3 rounded-full" />
        <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-br from-[#B45309]/3 to-[#ED8722]/3 rounded-full" />
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-gradient-to-br from-[#ED8722]/3 to-orange-300/3 rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white font-cairo leading-tight">
            Our Mission, Vision & Values
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary-500 to-orange-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* Modern Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {cards.map(({ key, icon, primaryColor, secondaryColor, en, ar }, idx) => {
            const { title, desc, highlight } = i18n.language === 'ar' ? ar : en;
            const isHovered = hoveredCard === key;
            
            return (
              <div
                key={key}
                onMouseEnter={() => setHoveredCard(key)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative"
              >
                {/* Modern Card */}
                <div className="relative h-full rounded-3xl bg-white dark:bg-slate-800 shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-200/50 dark:border-slate-700/50 overflow-hidden">
                  {/* Gradient Border Effect */}
                  <div 
                    className="absolute inset-0 rounded-3xl p-[2px] bg-gradient-to-br from-[#ED8722] via-[#B45309] to-[#ED8722] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  >
                    <div className="w-full h-full rounded-3xl bg-white dark:bg-slate-800" />
                  </div>
                  
                  {/* Card Content */}
                  <div className="relative p-8 h-full">
                    {/* Icon Section */}
                    <div className="relative mb-8">
                      <div 
                        className="w-24 h-24 rounded-3xl flex items-center justify-center relative"
                        style={{
                          background: `linear-gradient(135deg, ${primaryColor}15, ${secondaryColor}15)`,
                          border: `2px solid ${primaryColor}30`
                        }}
                      >
                        {icon}
                        {/* Subtle glow */}
                        <div 
                          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          style={{
                            boxShadow: `0 0 30px ${primaryColor}40`
                          }}
                        />
                              </div>
                            </div>

                    {/* Content */}
                    <h3 
                      className="text-2xl font-black text-slate-900 dark:text-white mb-4 font-cairo"
                                style={{
                        color: isHovered ? primaryColor : 'inherit'
                      }}
                            >
                              {title}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-300 mb-6 text-base leading-relaxed font-cairo">
                          {desc}
                        </p>

                    {/* Enhanced Highlight */}
                    <div
                      className="inline-flex items-center px-4 py-3 rounded-2xl border transition-all duration-300"
                        style={{
                        backgroundColor: `${primaryColor}10`,
                        borderColor: `${primaryColor}30`,
                        color: primaryColor
                      }}
                    >
                      <span className="text-sm font-bold">{highlight}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>


      </div>
    </section>
  );
});

MissionVisionSection.displayName = 'MissionVisionSection';

export default MissionVisionSection;