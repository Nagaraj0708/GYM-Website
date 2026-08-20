"use client";

import { useState } from "react";
import SmoothScrollProvider from "../components/providers/SmoothScrollProvider";
import Preloader from "../components/ui/Preloader";
import CustomCursor from "../components/ui/CustomCursor";
import Navbar from "../components/ui/Navbar";
import HeroSection from "../components/sections/HeroSection";
import MarqueeTicker from "../components/sections/MarqueeTicker";
import AboutVisionMission from "../components/sections/AboutVisionMission";
import WhyChooseUsSection from "../components/sections/WhyChooseUsSection";
import HorizontalPinnedGallery from "../components/sections/HorizontalPinnedGallery";
import ProgramsGrid from "../components/sections/ProgramsGrid";
import TransformationsScrub from "../components/sections/TransformationsScrub";
import TrainersSection from "../components/sections/TrainersSection";
import PricingSection from "../components/sections/PricingSection";
import TestimonialsCarousel from "../components/sections/TestimonialsCarousel";
import InstagramStrip from "../components/sections/InstagramStrip";
import CTABanner from "../components/sections/CTABanner";
import FAQSection from "../components/sections/FAQSection";
import Footer from "../components/sections/Footer";
import TrialModal from "../components/ui/TrialModal";
import ContactModal from "../components/ui/ContactModal";
import VideoModal from "../components/ui/VideoModal";

export default function Home() {
  const [trialModalOpen, setTrialModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState("HIGH-OCTANE SPIN STUDIO");

  const handleOpenTrial = (program?: string) => {
    if (program) setSelectedProgram(program);
    setTrialModalOpen(true);
  };

  return (
    <SmoothScrollProvider>
      <Preloader />
      <CustomCursor />

      <Navbar
        onBookTrial={() => handleOpenTrial()}
        onContactUs={() => setContactModalOpen(true)}
      />

      <main className="min-h-screen flex flex-col bg-[#0B0B0E]">
        <HeroSection
          onBookTrial={() => handleOpenTrial()}
          onWatchVideo={() => setVideoModalOpen(true)}
        />
        <MarqueeTicker />
        <AboutVisionMission onWatchVideo={() => setVideoModalOpen(true)} />
        <WhyChooseUsSection onBookTrial={() => handleOpenTrial()} />
        <HorizontalPinnedGallery onBookPass={() => handleOpenTrial()} />
        <ProgramsGrid onSelectProgram={(prog: string) => handleOpenTrial(prog)} />
        <TransformationsScrub />
        <TrainersSection />
        <PricingSection onSelectTier={(tier: string) => handleOpenTrial(tier)} />
        <TestimonialsCarousel />
        <InstagramStrip />
        <CTABanner onBookTrial={() => handleOpenTrial()} />
        <FAQSection />
      </main>

      <Footer onBookTrial={() => handleOpenTrial()} />

      <TrialModal
        isOpen={trialModalOpen}
        onClose={() => setTrialModalOpen(false)}
        initialProgram={selectedProgram}
      />

      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />

      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
      />
    </SmoothScrollProvider>
  );
}
