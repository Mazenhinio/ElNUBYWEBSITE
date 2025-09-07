import React, { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { SectionDivider } from './SectionWrapper';

// Import all logo images
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
import logo11 from '../assets/Images/Partner/logos-11.jpg';
import logo12 from '../assets/Images/Partner/logos-12.jpg';
import logo13 from '../assets/Images/Partner/logos-13.jpg';
import logo14 from '../assets/Images/Partner/logos-14.jpg';
import logo15 from '../assets/Images/Partner/logos-15.jpg';
import logo16 from '../assets/Images/Partner/logos-16.jpg';
import logo17 from '../assets/Images/Partner/logos-17.jpg';
import logo18 from '../assets/Images/Partner/logos-18.jpg';
import logo19 from '../assets/Images/Partner/logos-19.jpg';
import logo20 from '../assets/Images/Partner/logos-20.jpg';
import logo21 from '../assets/Images/Partner/logos-21.jpg';
import logo22 from '../assets/Images/Partner/logos-22.jpg';

const logos = [
  logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11,
  logo12, logo13, logo14, logo15, logo16, logo17, logo18, logo19, logo20, logo21, logo22
];

const PartnersSection = () => {
  const { i18n } = useTranslation();
  const rowRef = useRef();
  const sectionRef = useRef();
  // Autoscroll effect with pause on hover
  useEffect(() => {
    let frame;
    let start;
    let paused = false;
    const speed = 0.06; // px per ms
    const rowWidth = (logos.length * 360);

    const scroll = (timestamp) => {
      if (!start) start = timestamp;
      if (!paused) {
        const elapsed = timestamp - start;
        const x = (elapsed * speed) % rowWidth;
        if (rowRef.current) {
          rowRef.current.style.transform = `translateX(-${x}px)`;
        }
      }
      frame = requestAnimationFrame(scroll);
    };
    const handleMouseEnter = () => { paused = true; };
    const handleMouseLeave = () => { paused = false; };
    if (sectionRef.current) {
      sectionRef.current.addEventListener('mouseenter', handleMouseEnter);
      sectionRef.current.addEventListener('mouseleave', handleMouseLeave);
    }
    frame = requestAnimationFrame(scroll);
    return () => {
      cancelAnimationFrame(frame);
      if (sectionRef.current) {
        sectionRef.current.removeEventListener('mouseenter', handleMouseEnter);
        sectionRef.current.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="text-center relative w-screen min-h-[400px] md:min-h-[500px] lg:min-h-[600px] py-12 md:py-16 flex flex-col justify-center items-center left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-[#000435]"
      >
        <motion.h3
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 text-3xl lg:text-4xl font-bold text-white font-cairo mb-6"
        >
                     {i18n.language === 'ar' ? 'شركاء النجاح' : 'Strategic Partners'}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative z-10 text-base lg:text-lg text-white leading-relaxed font-cairo max-w-3xl mx-auto mb-10"
        >
                     {i18n.language === 'ar'
             ? 'نفتخر بشراكاتنا مع مؤسسات رائدة تدفع مسيرة التنمية forward'
             : 'We collaborate with leading institutions to drive innovation and shared success.'}
        </motion.p>
        <div className="relative z-10 w-full overflow-hidden">
          {/* edge fades */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent dark:from-slate-900" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent dark:from-slate-900" />

          {/* Single marquee row */}
                     <motion.div ref={rowRef} className="flex items-center gap-0 will-change-transform">
            {logos.concat(logos).map((logo, idx) => (
              <motion.div
                key={`r1-${idx}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: 0.02 * idx }}
                                 className="rounded-[2rem] w-[420px] h-[236px] md:w-[320px] md:h-[180px] sm:w-[220px] sm:h-[124px] flex items-center justify-center flex-shrink-0 m-0 transition will-change-transform"
                whileHover={{ scale: 1.04, y: -4 }}
              >
                                                                   <div className="relative w-full h-full rounded-[1.5rem] flex items-center justify-center">
                                     <img
                     src={logo}
                     alt={`Logo ${idx + 1}`}
                     className="relative block max-w-[95%] max-h-[95%] w-auto h-auto object-contain rounded-lg bg-white p-1 md:p-2"
                   />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <SectionDivider />
    </>
  );
};

export default PartnersSection; 