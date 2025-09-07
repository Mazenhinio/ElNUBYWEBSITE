import React from 'react';
import { useDarkMode } from '../contexts/DarkModeContext';
import HeroSlider from '../components/HeroSlider';
import HomeAboutSection from '../components/HomeAboutSection';
import MissionVisionSection from '../components/MissionVisionSection';
import StatsSection from '../components/StatsSection';
import ActivitiesSection from '../components/ActivitiesSection';
import IntegratedServicesSection from '../components/IntegratedServicesSection';
import PartnersSection from '../components/PartnersSection';
import { SectionDivider as SharedSectionDivider } from '../components/SectionWrapper';

// Use shared standardized SectionDivider
const SectionDivider = SharedSectionDivider;

const Home = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <div className="min-h-screen bg-[#000435] text-white">
      {/* Hero Section */}
      <section className="relative">
        <HeroSlider />
      </section>

      {/* About Section */}
      <section className="relative">
        <HomeAboutSection />
      </section>
      <SectionDivider />

      {/* Mission & Vision Section */}
      <section className="relative">
        <MissionVisionSection />
      </section>
      <SectionDivider />

      {/* Integrated Services Section */}
      <section className="relative">
        <IntegratedServicesSection />
      </section>
      <SectionDivider />

      {/* Activities Section */}
      <section className="relative">
        <ActivitiesSection />
      </section>
      <SectionDivider />

      {/* Stats Section */}
      <section className="relative">
        <StatsSection />
      </section>
      <SectionDivider />

      {/* Partners Section */}
      <section className="relative">
        <PartnersSection />
      </section>
    </div>
  );
};

export default Home; 