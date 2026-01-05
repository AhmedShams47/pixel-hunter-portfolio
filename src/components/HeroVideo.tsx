import { motion } from 'framer-motion';

const HeroVideo = () => {
  return (
    <section className="relative w-full px-4 sm:px-6 pt-24 pb-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto"
      >
        <div className="hero-video-container aspect-video purple-box-glow">
          {/* Video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover rounded-lg"
          >
            <source src="/videos/intro.mp4" type="video/mp4" />
          </video>
          
          {/* Dark overlay for text readability */}
          <div className="hero-video-overlay rounded-lg" />
          
          {/* Optional centered text overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-center"
            >
              {/* Add overlay text if needed */}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroVideo;
