import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AudiencePainSection } from './components/AudiencePainSection';
import { InteractiveDemo } from './components/InteractiveDemo';
import { MethodologySection } from './components/MethodologySection';
import { ProgramSyllabus } from './components/ProgramSyllabus';
import { StudyProcessSection } from './components/StudyProcessSection';
import { AuthorSection } from './components/AuthorSection';
import { QuizSection } from './components/QuizSection';
import { PricingSection } from './components/PricingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { ApplicationModal } from './components/ApplicationModal';
import { FreeGuideModal } from './components/FreeGuideModal';
import { StickyBottomBar } from './components/StickyBottomBar';

export default function App() {
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [selectedTariffId, setSelectedTariffId] = useState<string>('tariff-mentor');
  const [guideModalOpen, setGuideModalOpen] = useState(false);

  const handleOpenApplyModal = (tariffId?: string) => {
    if (tariffId) {
      setSelectedTariffId(tariffId);
    }
    setApplyModalOpen(true);
  };

  const handleOpenGuideModal = () => {
    setGuideModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F8F6F0] text-[#2C2926] font-sans antialiased selection:bg-[#9E4A3B]/20 selection:text-[#9E4A3B]">
      {/* Header with Urgency Bar & Navigation */}
      <Header
        onOpenApplyModal={handleOpenApplyModal}
        onOpenGuideModal={handleOpenGuideModal}
      />

      {/* Hero Section matching the exact design in the uploaded image */}
      <main>
        <HeroSection
          onOpenApplyModal={() => handleOpenApplyModal()}
          onOpenGuideModal={handleOpenGuideModal}
        />

        {/* Pain points & Cognitive Psychology of 45+ Learners */}
        <AudiencePainSection
          onOpenApplyModal={() => handleOpenApplyModal()}
        />

        {/* 90-second Interactive Memory Demo (Aha! Moment for conversion) */}
        <InteractiveDemo />

        {/* The 3 Pillars Methodology (Memory • Attention • Language) */}
        <MethodologySection />

        {/* 12-Week Interactive Syllabus Breakdown */}
        <ProgramSyllabus
          onOpenApplyModal={() => handleOpenApplyModal()}
          onOpenGuideModal={handleOpenGuideModal}
        />

        {/* How the learning process works (Micro-lessons, Zoom, Telegram) */}
        <StudyProcessSection />

        {/* About Author — Mila Khabirova (18+ years, Credentials, Regalia) */}
        <AuthorSection />

        {/* Interactive Memory Profiling Quiz (1-minute readiness test) */}
        <QuizSection
          onOpenApplyModal={() => handleOpenApplyModal()}
          onOpenGuideModal={handleOpenGuideModal}
        />

        {/* Pricing Tariffs (Full payment vs 0% installments, places count) */}
        <PricingSection
          onOpenApplyModal={handleOpenApplyModal}
        />

        {/* Real Reviews & Audio Case Studies from 45-68 yr old Students */}
        <TestimonialsSection />

        {/* Frequently Asked Questions */}
        <FAQSection
          onOpenApplyModal={() => handleOpenApplyModal()}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Bottom Bar for High Conversion during scroll */}
      <StickyBottomBar
        onOpenApplyModal={() => handleOpenApplyModal()}
      />

      {/* Course Enrollment Modal */}
      <ApplicationModal
        isOpen={applyModalOpen}
        onClose={() => setApplyModalOpen(false)}
        initialTariffId={selectedTariffId}
      />

      {/* Free Guide & Syllabus PDF Modal */}
      <FreeGuideModal
        isOpen={guideModalOpen}
        onClose={() => setGuideModalOpen(false)}
      />
    </div>
  );
}
