import React, { useEffect, useRef, useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';

const Section = ({ children }) => (
  <div className="w-full text-center min-h-[420px] py-16 bg-[#000435]">{children}</div>
);

// Optimized Animated Counter component
const Counter = React.memo(({ to }) => {
  const [count, setCount] = useState(0);
  const ref = useRef();
  
  useEffect(() => {
    const end = parseInt(to.replace(/\D/g, ''));
    const duration = 1000; // Reduced from 1800+ to 1000ms
    let startTime = null;
    
    function animateCounter(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        ref.current = requestAnimationFrame(animateCounter);
      } else {
        setCount(end);
      }
    }
    
    ref.current = requestAnimationFrame(animateCounter);
    
    return () => {
      if (ref.current) {
        cancelAnimationFrame(ref.current);
      }
    };
  }, [to]);
  
  return <>{count}{to.replace(/\d/g, '')}</>;
});

Counter.displayName = 'Counter';

// Memoized stats data
const stats = [
  {
    en: { num: '150', label: 'Client' },
    ar: { num: '150', label: 'عميل' },
  },
  {
    en: { num: '500', label: 'Project' },
    ar: { num: '500', label: 'مشروع' },
  },
  {
    en: { num: '2000', label: 'Employee' },
    ar: { num: '2000', label: 'موظف' },
  },
  {
    en: { num: '25', label: 'Year of Experience' },
    ar: { num: '25', label: 'سنة خبرة' },
  },
];

const StatsSection = React.memo(() => {
  const { i18n } = useTranslation();
  
  // Memoize the title text to prevent unnecessary re-renders
  const titleText = useMemo(() => 
    i18n.language === 'ar'
      ? 'تفخر مجموعة النوبى بالمستوى الإستثنائي من رضاء العملاء عن الجودة والإنجاز في أي من مشاريع الشركة.'
      : 'El Nuby Group is proud of the exceptional level of customer satisfaction with the quality and completion of all its projects.',
    [i18n.language]
  );

  // Memoize the section title
  const sectionTitle = useMemo(() => 
    i18n.language === 'ar'
      ? 'إحصائياتنا'
      : 'Our Statistics',
    [i18n.language]
  );
  
  // Memoize the stats mapping to prevent unnecessary re-renders
  const renderedStats = useMemo(() => 
    stats.map((stat, idx) => (
      <motion.div
        key={idx}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.6, delay: 0.1 * idx }}
        className="flex-1 min-w-[150px] px-2 py-6 relative flex flex-col items-center"
      >
        <div className="text-[#ED8723] text-[3.6rem] font-bold mb-2">
          <Counter to={stat[i18n.language].num} />
        </div>
        <div className="text-white text-[1.2rem] md:text-[1.4rem] font-medium">
          {stat[i18n.language].label}
        </div>
        {idx !== stats.length - 1 && (
          <div className="hidden sm:block absolute right-0 top-[20%] h-[60%] w-[2px] bg-black/70" />
        )}
      </motion.div>
    )),
    [i18n.language]
  );
  
  return (
    <SectionWrapper background="rgba(244,246,250,0.6)" $fullWidth={true}>
      <Section>
        <h2 className="text-white text-3xl lg:text-4xl font-bold font-cairo mb-6">
          {sectionTitle}
        </h2>
        <h3 className="text-white/90 text-[1.35rem] font-bold mb-11">
          {titleText}
        </h3>
        <div className="flex justify-center items-stretch gap-0 flex-wrap">
          {renderedStats}
        </div>
      </Section>
    </SectionWrapper>
  );
});

StatsSection.displayName = 'StatsSection';

export default StatsSection; 