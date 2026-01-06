import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';
import FloatingSocialBar from '@/components/FloatingSocialBar';
import Footer from '@/components/Footer';

interface PageLayoutProps {
  children: React.ReactNode;
  showParticles?: boolean;
}

const PageLayout = ({ children, showParticles = true }: PageLayoutProps) => {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      {showParticles && <ParticleBackground />}
      <FloatingSocialBar />
      <div className="relative z-10">
        <Navbar />
        {children}
        <Footer />
      </div>
    </main>
  );
};

export default PageLayout;
