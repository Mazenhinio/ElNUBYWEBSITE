import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../assets/Images/logo/nubylogo.webp';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from './Footer';
import { useDarkMode } from '../contexts/DarkModeContext';

const navLinks = [
  { to: '/', key: 'home' },
  { to: '/about', key: 'aboutus' },
  { to: '/services', key: 'services' },
  { to: '/projects', key: 'projects' },
  { to: '/careers', key: 'careers' },
  { to: '/contact', key: 'contactus' },
];

// Memoized navigation link component for better performance
const NavLink = React.memo(({ link, index, location, t }) => (
  <motion.div
    key={link.key}
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ 
      duration: 0.4, 
      delay: index * 0.06,
      ease: [0.25, 0.46, 0.45, 0.94]
    }}
    className="relative flex items-center justify-center h-full"
  >
    <Link
      to={link.to}
      className={`group relative flex flex-col items-center justify-center px-6 py-2 text-sm font-semibold transition-all duration-300 h-full focus:outline-none focus:ring-0 focus:border-0 ${
        location.pathname === link.to
          ? 'text-[#ED8722]'
          : 'text-slate-300 hover:text-white'
      }`}
      style={{ outline: 'none', border: 'none' }}
    >
      <span className="font-semibold tracking-wide relative z-10">{t(`nav.${link.key}`)}</span>
      
      {/* Active state underline */}
      {location.pathname === link.to && (
        <motion.div
          layoutId="activeUnderline"
          className="mt-1 w-12 h-0.5 bg-[#ED8722] rounded-full"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
      
      {/* Elegant hover effect */}
      <motion.div
        className="absolute inset-0 bg-slate-700/60 dark:bg-slate-600/60 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"
        initial={{ scale: 0.8, opacity: 0 }}
        whileHover={{ scale: 1, opacity: 1 }}
      />
      
      {/* Subtle underline on hover (only for non-active items) */}
      {location.pathname !== link.to && (
        <motion.div
          className="mt-1 w-0 h-0.5 bg-gradient-to-r from-[#ED8722] to-[#ff6b35] rounded-full group-hover:w-8 transition-all duration-300"
        />
      )}
    </Link>
  </motion.div>
));

const Layout = ({ children }) => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [mobileOpen, setMobileOpen] = useState(false);
  const langRef = useRef();

  // Memoized scroll handler for better performance
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 30);
  }, []);

  // Handle scroll effect with throttling
  useEffect(() => {
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [handleScroll]);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e) {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  // Memoized navigation links
  const navigationLinks = useMemo(() => 
    navLinks.map((link, index) => (
      <NavLink 
        key={link.key} 
        link={link} 
        index={index} 
        location={location} 
        t={t} 
      />
    )), [location, t]
  );

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'}`}>
      {/* Skip link for keyboard navigation */}
      <a href="#main-content" className="skip-link">
        {i18n.language === 'ar' ? 'انتقل إلى المحتوى الرئيسي' : 'Skip to main content'}
      </a>
      
      {/* Ultra Modern Minimalist Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#000435]"
        role="banner"
        aria-label={i18n.language === 'ar' ? 'رأس الصفحة' : 'Page header'}
      >

        
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className={`flex items-center justify-between ${scrolled ? 'h-18' : 'h-24'}`}>
            {/* Enhanced Logo Section - Clear and Readable */}
            <motion.div 
              className="flex items-center justify-center h-full"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Link to="/" className="flex items-center justify-center group h-full">
                <div className="relative flex items-center justify-center">
                  <motion.img 
                    src={logo} 
                    alt="El Nuby Group Logo" 
                    width={240}
                    height={64}
                    loading="eager"
                    decoding="async"
                    className={`${scrolled ? 'h-12' : 'h-16'} w-auto transition-all duration-300 filter drop-shadow-lg`}
                  />
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 blur-md bg-[#ED8722] transition-opacity duration-300" />
                </div>
              </Link>
            </motion.div>

            {/* Ultra Modern Elegant Navigation */}
            <nav className="hidden lg:flex items-center justify-center h-full">
              <div className="flex items-center justify-center h-full">
                {navigationLinks}
              </div>
            </nav>

            {/* Premium Right Controls */}
            <div className="flex items-center justify-center gap-2 h-full">
              {/* Enhanced Dark Mode Toggle - Hidden */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleDarkMode}
                className={`hidden flex items-center justify-center p-2 rounded-lg transition-all duration-200 h-10 ${
                  isDarkMode 
                    ? 'bg-slate-800/80 text-slate-200 hover:bg-slate-700/80' 
                    : 'bg-slate-100/80 text-slate-600 hover:bg-slate-200/80'
                } backdrop-blur-sm border border-white/20 dark:border-slate-700/30`}
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
                    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </motion.button>

              {/* Premium Language Switcher */}
              <div className="relative flex items-center justify-center h-full" ref={langRef}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setDropdownOpen(v => !v)}
                  className={`flex items-center justify-center p-2 rounded-lg transition-all duration-200 h-10 ${
                    isDarkMode 
                      ? 'bg-slate-800/80 text-slate-200 hover:bg-slate-700/80' 
                      : 'bg-slate-100/80 text-slate-600 hover:bg-slate-200/80'
                  } backdrop-blur-sm border border-white/20 dark:border-slate-700/30`}
                  aria-label="Select language"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                    <ellipse cx="12" cy="12" rx="4" ry="10" stroke="currentColor" strokeWidth="2" />
                    <line x1="2" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </motion.button>

                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                      className={`absolute top-full right-0 mt-2 rounded-xl shadow-lg border overflow-hidden min-w-28 ${
                        isDarkMode 
                          ? 'bg-slate-800/95 border-slate-700/50' 
                          : 'bg-white/95 border-slate-200/50'
                      } backdrop-blur-xl`}
                    >
                      <div className="p-1">
                        <motion.button
                          whileHover={{ scale: 1.02, x: 3 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => { i18n.changeLanguage('ar'); setDropdownOpen(false); }}
                          className={`w-full px-3 py-2 text-left text-sm rounded-lg transition-all duration-200 ${
                            i18n.language === 'ar'
                              ? 'bg-[#ED8722] text-white' 
                              : (isDarkMode ? 'text-slate-300 hover:text-white hover:bg-slate-700/60' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/60')
                          }`}
                        >
                          العربية
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.02, x: 3 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => { i18n.changeLanguage('en'); setDropdownOpen(false); }}
                          className={`w-full px-3 py-2 text-left text-sm rounded-lg transition-all duration-200 ${
                            i18n.language === 'en'
                              ? 'bg-[#ED8722] text-white' 
                              : (isDarkMode ? 'text-slate-300 hover:text-white hover:bg-slate-700/60' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/60')
                          }`}
                        >
                          English
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>



              {/* Enhanced Mobile Menu Button */}
              <motion.button
                className={`lg:hidden flex items-center justify-center p-2 rounded-lg transition-all duration-200 h-10 ${
                  isDarkMode 
                    ? 'bg-slate-800/80 text-slate-200 hover:bg-slate-700/80' 
                    : 'bg-slate-100/80 text-slate-600 hover:bg-slate-200/80'
                } backdrop-blur-sm border border-white/20 dark:border-slate-700/30`}
                whileTap={{ scale: 0.95 }}
                onClick={() => setMobileOpen((v) => !v)}
                aria-label="Toggle menu"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Premium Mobile Navigation */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="lg:hidden overflow-hidden bg-[#000435]"
            >
              <div className="px-4 py-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.key}
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center justify-center px-4 py-3 rounded-xl font-semibold transition-all duration-200 ${
                      location.pathname === link.to
                        ? 'bg-[#ED8722]/15 text-[#ED8722] border border-[#ED8722]/20'
                        : isDarkMode
                        ? 'text-slate-200 hover:bg-slate-700/60 hover:text-white'
                        : 'text-slate-700 hover:bg-slate-200/60 hover:text-slate-900'
                    }`}
                  >
                    <span className="font-medium">{t(`nav.${link.key}`)}</span>
                  </Link>
                ))}

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Spacer for fixed header */}
      <div className="h-18" />

      {/* Main content */}
      <main className="flex-1 w-full font-cairo overflow-x-hidden" id="main-content" role="main">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout; 