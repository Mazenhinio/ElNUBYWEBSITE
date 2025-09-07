import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaYoutube, FaFacebookF, FaMapMarkerAlt, FaPhone, FaMobileAlt } from 'react-icons/fa';
import logo from '../assets/Images/logo/nubylogo.webp';

const Footer = () => {
  const { i18n } = useTranslation();

  const branches = [
    {
      city: i18n.language === 'ar' ? 'مصر' : 'Egypt',
      address:
        i18n.language === 'ar'
          ? '123 ش حسن المأمون – المنطقة السادسة – مدينة نصر – القاهرة'
          : '123 Hassan El Mamon Street, 6th District, Nasr City, Cairo',
      phone: '0223546465',
      mobile: '01153494444',
      flag: '🇪🇬',
    },
    {
      city: i18n.language === 'ar' ? 'المملكة العربية السعودية' : 'Saudi Arabia',
      address:
        i18n.language === 'ar'
          ? '2537 شارع رقم 78، حي العليا، مدينة الرياض، المملكة العربية السعودية'
          : '2537 St. No. 78, Olaya District, Riyadh City, KSA',
      phone: '+966112000000',
      mobile: '+966501234567',
      flag: '🇸🇦',
    },
    {
      city: i18n.language === 'ar' ? 'ليبيا' : 'Libya',
      address:
        i18n.language === 'ar'
          ? 'طرابلس، ليبيا'
          : 'Tripoli, Libya',
      phone: '+218',
      mobile: '+218',
      flag: '🇱🇾',
    },
    {
      city: i18n.language === 'ar' ? 'العراق' : 'Iraq',
      address:
        i18n.language === 'ar'
          ? 'بغداد، العراق'
          : 'Baghdad, Iraq',
      phone: '+964',
      mobile: '+964',
      flag: '🇮🇶',
    },
  ];

  return (
    <footer className="relative text-white overflow-hidden" style={{ backgroundColor: '#000435' }} role="contentinfo" aria-label={i18n.language === 'ar' ? 'تذييل الصفحة' : 'Page footer'}>
      {/* subtle decorative glows removed per request */}

      {/* CTA removed per request */}

      {/* Main */}
      <div className="relative z-10 max-w-[1400px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-10 px-6 pt-6 pb-4">
        {/* Logo */}
        <div className="flex flex-col items-center justify-start text-center xl:col-span-3">
          <img
            src={logo}
            alt="El Nuby Group Logo"
            className="block pointer-events-none select-none w-48 h-auto object-contain"
          />
        </div>

        {/* Company */}
        <div className="flex flex-col xl:col-span-3">
          <h3 className="text-white font-semibold text-base mb-4 relative pl-4">
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-gradient-to-br from-primary-500 to-orange-500 rounded" />
            {i18n.language === 'ar' ? 'الشركة' : 'Company'}
          </h3>
          <div className="flex flex-wrap gap-2 text-white/90">
            <a href="/about" className="text-sm font-semibold hover:text-primary-500 hover:underline underline-offset-4 transition-colors">{i18n.language === 'ar' ? 'من نحن' : 'About us'}</a>
            <a href="/contact" className="text-sm font-semibold hover:text-primary-500 hover:underline underline-offset-4 transition-colors">{i18n.language === 'ar' ? 'اتصل بنا' : 'Contact us'}</a>
            <a href="/careers" className="text-sm font-semibold hover:text-primary-500 hover:underline underline-offset-4 transition-colors">{i18n.language === 'ar' ? 'الوظائف' : 'Careers'}</a>
          </div>
        </div>

        {/* Branches */}
        <div className="flex flex-col xl:col-span-3">
          <h3 className="text-white font-semibold text-base mb-4 relative pl-4">
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-gradient-to-br from-primary-500 to-orange-500 rounded" />
            {i18n.language === 'ar' ? 'الفروع' : 'Branches'}
          </h3>
          {/* Interactive branches: show titles as pills; show only hovered/active branch details */}
          <BranchesInteractive branches={branches} />
        </div>

        {/* Social */}
        <div className="flex flex-col xl:col-span-3">
          <h3 className="text-white font-semibold text-base mb-2 relative pl-4">
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-gradient-to-br from-primary-500 to-orange-500 rounded" />
              {i18n.language === 'ar' ? 'وسائل التواصل الاجتماعي' : 'Follow Us'}
          </h3>
          <div className="flex items-center gap-3 mt-2 ml-4">
            <motion.a
                href="https://www.linkedin.com/company/elnuby-group/" 
                target="_blank"
                rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary-500 to-orange-500 flex items-center justify-center text-dark-900"
                aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </motion.a>
            <motion.a
                href="https://www.youtube.com/@elnubygroup9683" 
                target="_blank"
                rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary-500 to-orange-500 flex items-center justify-center text-dark-900"
                aria-label="YouTube"
            >
              <FaYoutube />
            </motion.a>
            <motion.a
                href="https://web.facebook.com/ElnubyGroup?_rdc=1&_rdr#" 
                target="_blank"
                rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary-500 to-orange-500 flex items-center justify-center text-dark-900"
                aria-label="Facebook"
            >
              <FaFacebookF />
            </motion.a>
          </div>
        </div>
            </div>

      {/* Separator line above copyright */}
      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6">
        <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[#ED8721] to-transparent" />
      </div>

      {/* Bottom */}
      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 py-6 text-center">
        <div className="text-white/80 text-sm font-semibold">
            {i18n.language === 'ar' 
              ? 'حقوق النشر 2025 © مجموعة النوبي. جميع الحقوق محفوظة'
            : 'Copyright 2025 © Elnuby Group. All right reserved'}
        </div>
      </div>
    </footer>
  );
};

export default Footer; 

// Interactive branches subcomponent
const BranchesInteractive = ({ branches }) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <div onMouseLeave={() => setActiveIndex(-1)}>
      <div className="flex flex-wrap gap-2 mb-4">
        {branches.map((b, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={idx}
              onMouseEnter={() => setActiveIndex(idx)}
              onFocus={() => setActiveIndex(idx)}
              className={`w-16 h-10 rounded-lg transition relative overflow-hidden`}
              aria-label={`Select ${b.city} branch`}
              aria-pressed={isActive}
            >
              <img
                src={
                  b.city === 'Egypt' || b.city === 'مصر' ? 'https://flagcdn.com/eg.svg' :
                  b.city === 'Saudi Arabia' || b.city === 'المملكة العربية السعودية' ? 'https://flagcdn.com/sa.svg' :
                  b.city === 'Libya' || b.city === 'ليبيا' ? 'https://flagcdn.com/ly.svg' :
                  b.city === 'Iraq' || b.city === 'العراق' ? 'https://flagcdn.com/iq.svg' :
                  ''
                }
                alt={`${b.city} flag`}
                className="w-full h-full object-contain p-0.5"
                loading="lazy"
                decoding="async"
                draggable="false"
                referrerPolicy="no-referrer"
              />
            </button>
          );
        })}
      </div>
      {activeIndex >= 0 && (
        <div
          className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-4"
          onMouseEnter={() => setActiveIndex(activeIndex)}
        >
          <div className="flex items-center gap-2 text-primary-500 font-semibold">
            <FaMapMarkerAlt className="w-4 h-4" /> {branches[activeIndex].city}
          </div>
          <div className="mt-2 text-xs text-white/90 leading-relaxed">
            {branches[activeIndex].address}
          </div>
          <div className="mt-2 flex items-center gap-3 text-white/80 text-xs">
            <span className="inline-flex items-center gap-1"><FaPhone className="text-primary-500" />{branches[activeIndex].phone}</span>
            <span className="inline-flex items-center gap-1"><FaMobileAlt className="text-primary-500" />{branches[activeIndex].mobile}</span>
          </div>
        </div>
      )}
    </div>
  );
};