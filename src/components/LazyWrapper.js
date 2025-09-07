import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';

// Loading component
const LoadingSpinner = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="flex items-center justify-center min-h-[200px]"
  >
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#ED8722]"></div>
  </motion.div>
);

// Lazy wrapper component
const LazyWrapper = ({ children, fallback = <LoadingSpinner /> }) => (
  <Suspense fallback={fallback}>
    {children}
  </Suspense>
);

// Lazy load pages
export const LazyHome = lazy(() => import('../pages/Home'));
export const LazyAbout = lazy(() => import('../pages/About'));
export const LazyServices = lazy(() => import('../pages/Services'));
export const LazyProjects = lazy(() => import('../pages/Projects'));
export const LazyCareers = lazy(() => import('../pages/Careers'));
export const LazyContact = lazy(() => import('../pages/Contact'));

// Lazy load components
export const LazyFooter = lazy(() => import('./Footer'));
export const LazyHeroSlider = lazy(() => import('./HeroSlider'));
export const LazyAboutSection = lazy(() => import('./AboutSection'));
export const LazyActivitiesSection = lazy(() => import('./ActivitiesSection'));
export const LazyElnubyGroupSection = lazy(() => import('./ElnubyGroupSection'));
export const LazyIntegratedServicesSection = lazy(() => import('./IntegratedServicesSection'));
export const LazyMissionVisionSection = lazy(() => import('./MissionVisionSection'));
export const LazyPartnersSection = lazy(() => import('./PartnersSection'));
export const LazyStatsSection = lazy(() => import('./StatsSection'));

export default LazyWrapper;
