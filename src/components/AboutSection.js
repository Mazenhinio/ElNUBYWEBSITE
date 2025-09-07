import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import aboutImg from '../assets/Images/About/nubyinside2.jpg';

const GlassCard = ({ children }) => (
  <div className="relative rounded-3xl bg-white/70 dark:bg-slate-800/40 backdrop-blur-xl border border-white/20 shadow-[0_25px_60px_rgba(19,32,55,0.18),0_12px_30px_rgba(237,135,34,0.15)]">
    <div className="pointer-events-none absolute -inset-px rounded-3xl"
         style={{ background: 'linear-gradient(135deg, rgba(237,135,34,0.25), rgba(255,255,255,0.5), rgba(237,135,34,0.25))' }} />
    <div className="relative z-10 p-6 sm:p-8 md:p-10 lg:p-12">{children}</div>
  </div>
);

const Heading = ({ children }) => (
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.6 }}
    className="font-black tracking-tight text-3xl sm:text-4xl lg:text-5xl bg-gradient-to-br from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent"
  >
    {children}
  </motion.h2>
);

const Paragraph = ({ children, delay = 0.1 }) => (
  <motion.p
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.6, delay }}
    className="text-slate-700 dark:text-slate-200/90 leading-relaxed text-base sm:text-lg md:text-[1.1rem]"
  >
    {children}
  </motion.p>
);

export const AboutSectionAboutPage = () => {
  return (
    <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-14 md:py-20 bg-[#000435]">
      <div className="max-w-7xl mx-auto px-6">
        <GlassCard>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <Heading>About Us</Heading>
              <Paragraph delay={0.15}>
                El Nuby Contracting Company was established in 2000 by Egyptian hands and under the management and supervision of a group of engineers seeking to provide all services in the field of construction and contracting. The company aims to provide integrated solutions that includes all stages of construction from planning and design to implementation and finishing, observing the highest standards of quality, efficiency and professional safety to meet the needs of customers in the Middle East and Africa.
              </Paragraph>
              <Paragraph delay={0.25}>
                We pride ourselves on building a full working environment through which we invest the highest human competencies and expertise. Each member of the team contributes their unique skills to the achievement of the company's lofty goals, faithfully reflecting our vision for the future on the ground as a pioneer in the construction and contracting sector.
              </Paragraph>
              <Paragraph delay={0.35}>
                Therefore, we have been keen on continuous development to enhance the efficiency of the system through policies and strategic plans that begin with selecting the finest construction materials and applying international standards in terms of technical and aesthetic aspects. Through these efforts, we aim to earn the trust of our clients by solidifying principles of credibility, professionalism, and commitment.
              </Paragraph>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="rounded-2xl overflow-hidden border border-white/20 bg-white/40 dark:bg-slate-900/30 shadow-[0_12px_30px_rgba(19,32,55,0.15)]">
                <img src={aboutImg} alt="About El Nuby" className="w-full h-[320px] md:h-[380px] lg:h-[420px] object-cover" />
              </div>
            </motion.div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};

const AboutSection = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-16 md:py-24 bg-[#000435] overflow-hidden">
      {/* subtle background grid */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04] dark:opacity-[0.06] -z-0" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M 24 0 L 0 0 0 24" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      {/* decorative blobs */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#ED8722]/20 blur-3xl rounded-full" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-sky-500/10 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Text */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#ED8722]/10 text-[#ED8722] mb-3">
              {i18n.language === 'ar' ? 'من نحن' : 'ABOUT US'}
            </div>
            <Heading>{t('about.title')}</Heading>
            <div className="mt-4 space-y-4">
              <Paragraph delay={0.15}>{t('about.description')}</Paragraph>
              <Paragraph delay={0.25}>
                {i18n.language === 'ar'
                  ? 'نقدم حلول إنشاءات وبنية تحتية متكاملة بمعايير عالمية من الجودة والسلامة.'
                  : 'We deliver integrated construction and infrastructure solutions with world‑class quality and safety.'}
              </Paragraph>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link to="/about" className="inline-flex items-center justify-center px-5 py-3 rounded-xl font-extrabold text-white bg-[#B45309] shadow-[0_10px_30px_rgba(180,83,9,0.35)] hover:shadow-[0_14px_36px_rgba(180,83,9,0.45)] transition">
                {i18n.language === 'ar' ? 'اكتشف المزيد' : 'Discover More'}
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center px-5 py-3 rounded-xl font-bold border border-[#B45309]/40 text-[#B45309] hover:bg-[#B45309]/10 transition">
                {i18n.language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
              </Link>
            </div>
          </div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 order-1 lg:order-2"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#ED8722]/20 to-transparent blur-xl" />
              <div className="relative rounded-[1.5rem] overflow-hidden ring-1 ring-white/20 shadow-[0_20px_50px_rgba(19,32,55,0.25)]">
                <img src={aboutImg} alt="About El Nuby" className="w-full h-[320px] md:h-[380px] lg:h-[440px] object-cover" />
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -left-4">
                <div className="rounded-xl px-3 py-2 bg-white/80 dark:bg-slate-900/70 backdrop-blur-md border border-white/30 shadow-sm text-xs font-bold text-slate-700 dark:text-slate-200">
                  {i18n.language === 'ar' ? 'منذ 2000' : 'Since 2000'}
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4">
                <div className="rounded-xl px-3 py-2 bg-[#B45309] text-white shadow-lg text-xs font-extrabold">
                  {i18n.language === 'ar' ? '+25 سنة خبرة' : '25+ Years'}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 