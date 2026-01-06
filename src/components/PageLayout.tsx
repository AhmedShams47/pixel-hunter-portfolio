import { motion } from 'framer-motion';
import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';
import FloatingSocialBar from '@/components/FloatingSocialBar';
import Footer from '@/components/Footer';

interface PageLayoutProps {
  children: React.ReactNode;
  showParticles?: boolean;
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const PageLayout = ({ children, showParticles = true }: PageLayoutProps) => {
  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="relative min-h-screen bg-background overflow-x-hidden"
    >
      {showParticles && <ParticleBackground />}
      <FloatingSocialBar />
      <div className="relative z-10">
        <Navbar />
        {children}
        <Footer />
      </div>
    </motion.main>
  );
};

export default PageLayout;
