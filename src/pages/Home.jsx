import React, { useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import HeroSection from '../components/portfolio/HeroSection';
import AboutSection from '../components/portfolio/AboutSection';
import VibeCodingSection from '../components/portfolio/VibeCodingSection';
import SkillsSection from '../components/portfolio/SkillsSection';
import TechStackSection from '../components/portfolio/TechStackSection';
import AIBusinessSection from '../components/portfolio/AIBusinessSection';
import SEOMagicSection from '../components/portfolio/SEOMagicSection';
import NutritionAppSection from '../components/portfolio/NutritionAppSection';
import RunaAISection from '../components/portfolio/RunaAISection';
import DiscountBotSection from '../components/portfolio/DiscountBotSection';
import LandingsSection from '../components/portfolio/LandingsSection';

import Footer from '../components/Footer';

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="relative bg-[#0a0a0a] min-h-screen overflow-hidden">
      {/* Cyberpunk grid background */}
      <div className="fixed inset-0 z-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 107, 53, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 107, 53, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Content */}
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <VibeCodingSection />
        <SkillsSection />
        <TechStackSection />
        <AIBusinessSection />
        <SEOMagicSection />
        <NutritionAppSection />
        <RunaAISection />
        <DiscountBotSection />
        <LandingsSection />
        <Footer />
      </div>

      {/* Ambient particles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-orange-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
}