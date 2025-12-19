import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import VenturesSection from '@/components/VenturesSection';
import TechArsenal from '@/components/TechArsenal';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      <ParticleBackground />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <VenturesSection />
        <TechArsenal />
        <ContactSection />
      </div>
    </main>
  );
};

export default Index;
