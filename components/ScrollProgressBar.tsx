'use client';

import { useScroll, useSpring, motion } from 'framer-motion';

/**
 * ScrollProgressBar
 *
 * A 2px line at the very top of the viewport that fills left-to-right
 * as the user scrolls. Spring-smoothed so it never feels mechanical.
 *
 * Sits above the navbar (z-[9999]).
 */
const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[9999] pointer-events-none"
      style={{
        scaleX,
        background:
          'linear-gradient(to right, hsl(268 87% 64%), hsl(280 85% 60%), hsl(310 72% 58%))',
        boxShadow: '0 0 12px hsl(268 87% 64% / 0.6)',
      }}
    />
  );
};

export default ScrollProgressBar;
