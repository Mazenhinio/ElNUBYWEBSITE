import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useDarkMode } from '../contexts/DarkModeContext';
import hero1 from '../assets/Images/Hero/hero1.webp';
import hero2 from '../assets/Images/Hero/hero2.webp';
import hero3 from '../assets/Images/Hero/hero3.webp';

// Typewriter effect hook
function useTypewriter(text, speed = 40) {
  const [displayed, setDisplayed] = useState('');
  useEffect(() => {
    setDisplayed('');
    if (!text) return;
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i += 1;
      } else {
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return displayed;
}

const slides = [
  {
    image: hero1,
    headline: 'El Nuby Group',
    subtext: 'Leading Construction & Engineering Excellence Since 2000',
    description: 'A premier Egyptian contracting company delivering world-class infrastructure and construction solutions across the Arab world.',
    cta: 'Explore Our Projects',
    priority: 'high'
  },
  {
    image: hero2,
    headline: 'Innovation in Construction',
    subtext: 'Cutting-Edge Technology & Sustainable Solutions',
    description: 'We combine traditional craftsmanship with modern engineering to create structures that stand the test of time.',
    cta: 'Discover Our Services',
    priority: 'medium'
  },
  {
    image: hero3,
    headline: 'Building Tomorrow',
    subtext: 'Quality, Safety & Excellence in Every Project',
    description: 'From concept to completion, we maintain the highest standards of quality and safety in all our endeavors.',
    cta: 'Learn About Us',
    priority: 'low'
  },
];

const HeroSlider = () => {
  const { i18n } = useTranslation();
  const { isDarkMode } = useDarkMode();
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1); // 1 next, -1 prev
  const [loadedImages, setLoadedImages] = useState(new Set([0])); // Track loaded images
  const intervalRef = useRef();
  const touchStartX = useRef(null);
  const [mouseShift, setMouseShift] = useState({ x: 0, y: 0 });

  const typewriterHeadline = useTypewriter(
    i18n.language === 'ar'
      ? 'مجموعة النوبي'
      : slides[current].headline,
    40
  );

  const typewriterSubtext = useTypewriter(
    i18n.language === 'ar'
      ? 'الريادة في البناء والهندسة منذ 2000'
      : slides[current].subtext,
    50
  );

  const goToSlide = (index) => {
    setCurrent(index);
    setProgress(0);
  };

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
    setDirection(1);
    setProgress(0);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    setDirection(-1);
    setProgress(0);
  };

  useEffect(() => {
    if (isPaused) return;
    const startTime = Date.now();
    const duration = 5000; // 5 seconds
    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(newProgress);
    };
    const progressInterval = setInterval(updateProgress, 16);
    intervalRef.current = setTimeout(nextSlide, duration);
    return () => {
      clearInterval(progressInterval);
      clearTimeout(intervalRef.current);
    };
  }, [current, nextSlide, isPaused]);

  // Keyboard navigation & pause toggle
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.code === 'Space') setIsPaused((p) => !p);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [nextSlide]);

  return (
    <div
      className={`relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-[75vh] min-h-[550px] max-h-[750px] overflow-hidden flex items-center justify-center ${
        isDarkMode 
          ? 'bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800' 
          : 'bg-gradient-to-br from-slate-900 via-slate-800 to-orange-50'
      }`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (e.clientX - cx) / rect.width;
        const dy = (e.clientY - cy) / rect.height;
        setMouseShift({ x: dx, y: dy });
      }}
      onTouchStart={(e) => {
        touchStartX.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        const dx = (e.changedTouches[0].clientX || 0) - (touchStartX.current || 0);
        if (dx > 50) prevSlide();
        else if (dx < -50) nextSlide();
        touchStartX.current = null;
      }}
    >
      {/* Background image with directional slide + stronger parallax */}
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={slides[current].image}
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover object-center z-0 hero-image"
          initial={{ opacity: 0, x: direction * 60, scale: 1.05 }}
          animate={{ opacity: 1, x: 0, scale: 1 + mouseShift.x * 0.02 + mouseShift.y * 0.01 }}
          exit={{ opacity: 0, x: -direction * 60, scale: 1.02 }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ transformOrigin: 'center' }}
          loading={current === 0 ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={current === 0 ? "high" : "auto"}
          onLoad={(e) => {
            // Mark image as loaded for performance tracking
            e.target.classList.add('loaded');
            setLoadedImages(prev => new Set([...prev, current]));
          }}
        />
      </AnimatePresence>

      {/* Smart preloading - only preload unloaded images when needed */}
      {(() => {
        const nextIndex = (current + 1) % slides.length;
        const nextImage = slides[nextIndex].image;
        
        // Only preload if:
        // 1. We're close to changing slides (progress > 70%)
        // 2. The next image isn't already loaded
        // 3. We're not on the last slide
        if (progress > 70 && !loadedImages.has(nextIndex) && current < slides.length - 1) {
          return (
            <link 
              rel="preload" 
              as="image" 
              href={nextImage}
              fetchPriority="low"
            />
          );
        }
        return null;
      })()}

      {/* Subtle elegant overlays - reduced opacity for better image visibility */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            'radial-gradient(1200px 500px at 15% 85%, rgba(251,192,45,0.05) 0%, transparent 60%), radial-gradient(900px 400px at 85% 15%, rgba(19,32,55,0.05) 0%, transparent 60%)',
        }}
      />
      <div
        className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-black/40 via-black/20 to-transparent"
        style={{ transform: `translate3d(${mouseShift.x * 16}px, ${mouseShift.y * 12}px, 0)` }}
      />

            {/* Modern Elegant Text Overlay */}
      <div className="relative z-30 w-full h-full flex items-center justify-start px-8 md:px-16 lg:px-20">
        {/* Elegant Glass Container */}
        <motion.div
          initial={{ opacity: 0, x: -40, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -40, scale: 0.98 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative max-w-2xl py-8 md:py-10 px-6 md:px-8"
        >
          {/* Glass Background */}
          <div
            className="absolute inset-0 rounded-3xl backdrop-blur-xl border border-white/5 bg-black/5 shadow-md"
            style={{ 
              transform: `translate3d(calc(-50% + ${mouseShift.x * 10}px), calc(-50% + ${mouseShift.y * 8}px), 0)`,
              left: '50%',
              top: '50%',
              width: '100%',
              height: '100%'
            }}
          />
          
          {/* Content Container */}
          <div className="relative z-10 space-y-4">
            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-2"
            >
              <motion.h1
                className="text-[clamp(1.5rem,3vw,2.25rem)] leading-tight font-medium tracking-wide text-[#ED8723]"
                style={{ 
                  textShadow: '0 1px 6px rgba(0,0,0,0.35)',
                  filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.4))'
                }}
              >
            {typewriterHeadline}
              </motion.h1>
              
              {/* Elegant Underline */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '80px' }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 rounded-full shadow-lg"
              />
            </motion.div>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-2"
            >
              <motion.h2
                className="text-[clamp(0.9rem,1.8vw,1.1rem)] font-medium text-white/95 max-w-xl leading-relaxed"
                style={{ textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}
              >
                {typewriterSubtext}
          </motion.h2>
              
              {/* Description */}
          <motion.p
                initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-[clamp(0.875rem,1.5vw,1rem)] text-white/85 max-w-lg leading-relaxed font-light"
                style={{ textShadow: '0 1px 6px rgba(0,0,0,0.8)' }}
          >
            {i18n.language === 'ar'
              ? (
                  current === 0
                        ? 'شركة مقاولات مصرية رائدة تقدم حلول البناء والبنية التحتية عالية الجودة'
                    : current === 1
                        ? 'ندمج الحرفية التقليدية مع الهندسة الحديثة لإنشاء هياكل تثبت اختبار الزمن'
                        : 'نحافظ على أعلى معايير الجودة والسلامة في جميع مشاريعنا'
                )
                  : slides[current].description}
          </motion.p>
            </motion.div>

            {/* CTA Buttons removed as requested */}
          </div>
        </motion.div>
      </div>

      

      {/* Modern Progress Indicators */}
      <div className="absolute bottom-10 left-0 w-full flex justify-center gap-4 z-50">
        {slides.map((_, idx) => (
          <motion.button
            key={idx}
            onClick={() => goToSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className="group relative"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            {/* Background Circle */}
            <div className={`w-4 h-4 rounded-full transition-all duration-300 ${
              idx === current
                ? 'bg-gradient-to-r from-[#ED8722] to-[#ff6b35] scale-125'
                : 'bg-white/30 hover:bg-white/50'
            }`} />
            
            {/* Active State Glow */}
            {idx === current && (
              <motion.div
                layoutId="activeDot"
                className="absolute inset-0 w-4 h-4 rounded-full bg-gradient-to-r from-[#ED8722] to-[#ff6b35] opacity-50 blur-md"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            
            {/* Progress Bar for Current Slide */}
            {idx === current && (
              <motion.div
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-[#ED8722] to-[#ff6b35] rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '32px' }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Progress Bar */}
      <motion.div
        className="absolute left-0 bottom-0 h-1 bg-gradient-to-r from-primary-500 via-orange-400 to-transparent z-50"
        style={{ width: `${progress}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.1, ease: 'linear' }}
      />
    </div>
  );
};

export default HeroSlider; 