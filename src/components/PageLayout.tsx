import { motion } from 'framer-motion';
import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';
import FloatingSocialBar from '@/components/FloatingSocialBar';
import Footer from '@/components/Footer';
import RamadanBanner from '@/components/RamadanBanner';

interface PageLayoutProps {
  children: React.ReactNode;
  showParticles?: boolean;
}

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
  exit: { opacity: 0, transition: { duration: 0.2, ease: "easeOut" } },
};

const PageLayout = ({ children, showParticles = true }: PageLayoutProps) => {
  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="relative min-h-screen bg-background overflow-x-hidden transition-colors duration-400"
    >
      {showParticles && <ParticleBackground />}
      <FloatingSocialBar />
      <div className="relative z-10">
        <Navbar />
        {children}
        <RamadanBanner />
        <Footer />
      </div>
    </motion.main>
  );
};

export default PageLayout;
