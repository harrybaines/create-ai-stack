"use client";

import FeaturesSection from "./components/features-section";
import GettingStartedSection from "./components/getting-started-section";
import HeroSection from "./components/hero-section";
import OpenSourceSection from "./components/open-source-section";
import TechStackSelector from "./components/tech-stack-selector";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <FeaturesSection />
      <TechStackSelector />
      <OpenSourceSection />
      <GettingStartedSection />
    </div>
  );
}

