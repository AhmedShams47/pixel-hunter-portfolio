import { useState } from 'react';
import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import VenturesSection from '@/components/VenturesSection';
import PackagesSection from '@/components/PackagesSection';
import ContactSection from '@/components/ContactSection';
import VideoIntro from '@/components/VideoIntro';
import FloatingSocialBar from '@/components/FloatingSocialBar';

const Index = () => {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <>
      {/* Video Intro */}
      {!introComplete && (
        <VideoIntro onComplete={() => setIntroComplete(true)} />
      )}

      {/* Main Content */}
      <main className="relative min-h-screen bg-background overflow-x-hidden">
        <ParticleBackground />
        <FloatingSocialBar />
        <div className="relative z-10">
          <Navbar />
          <HeroSection />
          <AboutSection />
          <VenturesSection />
          <PackagesSection />
          <ContactSection />
        </div>
      </main>
    </>
  );
};

export default Index;
