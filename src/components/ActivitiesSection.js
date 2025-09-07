import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useDarkMode } from '../contexts/DarkModeContext';
import roadsImg from '../assets/btshk-7.jpg';
import hospitalsImg from '../assets/lvmai-scaled.jpg';
import variousImg from '../assets/rdkbsh-2-1.jpg';
import AdministrativeProsecutionLuxorImg from '../assets/Images/project/Administrative/AdministrativeProsecutionLuxor.jpg';
import FacultyofAlsunImg from '../assets/Images/project/Education/FacultyofAlsun.jpg';
import HospitalityImg from '../assets/Images/project/Hoispitality/TodYouthHostelLuxor.jpg';
import ResidentialImg from '../assets/Images/project/residential/ElTarfRuralhouses.jpg';
import CommercialImg from '../assets/Images/project/Commercial/MallsWestShorouk.jpg';
import EntertainmentImg from '../assets/Images/project/Entertament/AlFayrouzClubIsmailia.jpg';

const activities = [
  {
    id: 1,
    title: 'Roads & Infrastructure',
    image: roadsImg
  },
  {
    id: 2,
    title: 'Administrative',
    image: AdministrativeProsecutionLuxorImg
  },
  {
    id: 3,
    title: 'Education',
    image: FacultyofAlsunImg
  },
  {
    id: 5,
    title: 'Hospitality',
    image: HospitalityImg
  },
  {
    id: 6,
    title: 'Medical & Healthcare',
    image: hospitalsImg
  },
  {
    id: 7,
    title: 'Residential',
    image: ResidentialImg
  },
  {
    id: 8,
    title: 'Commercial',
    image: CommercialImg
  },
  {
    id: 9,
    title: 'Entertainment',
    image: EntertainmentImg
  },
  {
    id: 10,
    title: 'Tourism',
    image: variousImg
  },
  {
    id: 11,
    title: 'Agricultural Land Reclamation',
    image: variousImg
  }
];

const ActivityIcon = ({ title }) => {
  const normalized = title.toLowerCase();
  const commonProps = {
    width: 22,
    height: 22,
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: 'text-[#ED8722]'
  };

  if (normalized.includes('road')) {
    // Road icon
    return (
      <svg {...commonProps}>
        <path d="M10 2l-2 20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M14 2l2 20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M12 6v2M12 12v2M12 18v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }
  if (normalized.includes('administration') || normalized.includes('administrative')) {
    // Government building icon
    return (
      <svg {...commonProps}>
        <path d="M3 10h18M6 10v8M10 10v8M14 10v8M18 10v8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M12 4l8 4H4l8-4z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    );
  }
  if (normalized.includes('education')) {
    // Graduation cap icon
    return (
      <svg {...commonProps}>
        <path d="M12 4l10 6-10 6L2 10l10-6z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M22 10v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }
  if (normalized.includes('residential')) {
    // House icon
    return (
      <svg {...commonProps}>
        <path d="M3 12l9-7 9 7" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M5 11v9h14v-9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M10 20v-5h4v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }
  if (normalized.includes('commercial')) {
    // Shopping bag icon
    return (
      <svg {...commonProps}>
        <path d="M6 8h12l-1 12H7L6 8z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M9 8a3 3 0 0 1 6 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }
  if (normalized.includes('entertain')) {
    // Star icon
    return (
      <svg {...commonProps}>
        <path d="M12 4l2.6 5.27L20 10.2l-4 3.9.95 5.5L12 17.8 7.05 19.6 8 14.1 4 10.2l5.4-.93L12 4z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    );
  }
  if (normalized.includes('tourism') || normalized.includes('tourist')) {
    // Globe icon
    return (
      <svg {...commonProps}>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
        <path d="M3 12h18" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }
  if (normalized.includes('agric') || normalized.includes('reclamation')) {
    // Leaf icon
    return (
      <svg {...commonProps}>
        <path d="M20 4s-6 0-10 4-4 10-4 10 6 0 10-4 4-10 4-10z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M10 14c0-4 4-8 8-8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }
  if (normalized.includes('hospitality')) {
    // Hotel/bed icon
    return (
      <svg {...commonProps}>
        <path d="M3 11h18v7H3z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M6 11V7a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }
  if (normalized.includes('medical') || normalized.includes('health')) {
    // Medical cross icon
    return (
      <svg {...commonProps}>
        <path d="M10 3h4v6h6v4h-6v6h-4v-6H4v-4h6V3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    );
  }
  // Various / default: layers icon
  return (
    <svg {...commonProps}>
      <path d="M12 3L3 8l9 5 9-5-9-5z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M3 12l9 5 9-5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
};

const ActivitiesSection = () => {
  const { t } = useTranslation();
  const { isDarkMode } = useDarkMode();

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
            Our Activities
          </h2>
          <p className="text-base lg:text-lg text-white leading-relaxed font-cairo max-w-3xl mx-auto">
            Discover our diverse portfolio of construction and development projects
          </p>
        </motion.div>

        {/* Activities Grid - Matching Insurance Card Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.id}
              initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              {/* Card using exact .division class styling */}
              <div className="division">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-48 object-cover"
                />
                
                {/* Text wrapper using exact .text-wrapper class */}
                <div className="text-wrapper">
                  <h4 className="text-2xl font-bold text-white font-cairo">
                    <a href="#">{activity.title}</a>
                  </h4>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;