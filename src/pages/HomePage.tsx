import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../components/home/Hero';
import { MetricsBar } from '../components/home/MetricsBar';
import { FeaturedProjects } from '../components/home/FeaturedProjects';
import { ArchitectureSection } from '../components/home/ArchitectureSection';
import { PerformanceChart } from '../components/home/PerformanceChart';
import { ExperienceTimeline } from '../components/home/ExperienceTimeline';
import { TechStackSection } from '../components/home/TechStackSection';
import { ContactSection } from '../components/home/ContactSection';

export const HomePage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // If navigating back with a hash like /#projects, scroll to it smoothly
    if (location.hash) {
      setTimeout(() => {
        const el = document.querySelector(location.hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    }
  }, [location.hash]);

  return (
    <main className="w-full">
      <Hero />
      <MetricsBar />
      <FeaturedProjects />
      <ArchitectureSection />
      <PerformanceChart />
      <ExperienceTimeline />
      <TechStackSection />
      <ContactSection />
    </main>
  );
};
