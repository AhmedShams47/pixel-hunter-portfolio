'use client';

import { motion, type Variants } from 'framer-motion';
import { type ReactNode } from 'react';

/**
 * Reveal / FadeIn — the thin client boundary behind the hybrid-RSC strategy.
 * Pages stay Server Components and author real headings/paragraphs; those
 * `children` are rendered on the server and only the motion runs client-side,
 * so all text is present in the initial HTML.
 */
const variants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] } },
};

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
  trigger?: 'hero' | 'viewport';
  [key: `data-${string}`]: string | undefined;
}

export const Reveal = ({ children, delay = 0, className, style, trigger = 'viewport', ...rest }: RevealProps) => {
  // Above the fold: CSS animation — content is visible at first paint, no hydration needed.
  if (trigger === 'hero') {
    return (
      <div className={`hero-rise ${className ?? ''}`} style={{ animationDelay: `${delay}s`, ...style }} {...rest}>
        {children}
      </div>
    );
  }
  const triggerProps = { initial: 'hidden', whileInView: 'visible', viewport: { once: true, margin: '-60px' } };
  return (
    <motion.div {...triggerProps} variants={variants} transition={{ delay }} className={className} style={style} {...rest}>
      {children}
    </motion.div>
  );
};

export const FadeIn = ({ children, delay = 0, className, style, trigger = 'viewport', ...rest }: RevealProps) => {
  if (trigger === 'hero') {
    return (
      <div className={`hero-fade ${className ?? ''}`} style={{ animationDelay: `${delay}s`, ...style }} {...rest}>
        {children}
      </div>
    );
  }
  const triggerProps = { initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: { once: true, margin: '-60px' } };
  return (
    <motion.div {...triggerProps} transition={{ duration: 0.55, delay, ease: 'easeOut' }} className={className} style={style} {...rest}>
      {children}
    </motion.div>
  );
};

export default Reveal;
