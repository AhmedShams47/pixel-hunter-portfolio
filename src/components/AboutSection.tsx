import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const AboutSection = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const fullText = `I don't just browse the web; I dismantle it. I'm the silent observer in the digital shadows—reverse-engineering the world's best designs to fuel my own empire.

Whether it's optimizing a restaurant menu, diagnosing a motherboard, or deploying a Vercel app, I hunt for perfection.

Every pixel tells a story. Every line of code is a weapon. I am the bridge between chaos and creation.`;

  useEffect(() => {
    if (isInView && currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 18);
      return () => clearTimeout(timeout);
    }
  }, [isInView, currentIndex, fullText]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section id="about" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-display tracking-widest mb-4 block">
            // THE STORY
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Professional Portfolio{' '}
            <span className="metallic-text glow-text">Stalker</span>
          </h2>
        </motion.div>

        {/* Terminal window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeInOut" }}
          className="glass-card overflow-hidden rounded-3xl"
        >
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-5 py-3.5 border-b border-border bg-secondary/30 rounded-t-3xl">
            <div className="w-3 h-3 rounded-full bg-destructive/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-green-500/60" />
            <span className="ml-4 text-xs text-muted-foreground font-mono">
              ahmed@galaxy:~$ cat about.md
            </span>
          </div>

          {/* Terminal content */}
          <div className="p-6 md:p-8 font-mono text-sm md:text-base leading-relaxed">
            <div className="flex gap-4">
              <div className="hidden sm:block text-muted-foreground/50 select-none">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="text-right w-6">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                ))}
              </div>
              <div className="flex-1">
                <span className="text-muted-foreground whitespace-pre-wrap">
                  {displayedText}
                  <span
                    className={`inline-block w-2 h-5 bg-primary ml-1 align-middle rounded-sm ${
                      showCursor ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ transition: 'opacity 0.1s ease-in-out' }}
                  />
                </span>
              </div>
            </div>
          </div>

          {/* Terminal footer */}
          <div className="px-5 py-3 border-t border-border bg-secondary/20 rounded-b-3xl">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span className="font-mono">UTF-8</span>
              <span className="font-mono flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Connected
              </span>
            </div>
          </div>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {[
            { label: 'Years Experience', value: '8+' },
            { label: 'Businesses Built', value: '3' },
            { label: 'Designs Hunted', value: '1.2K+' },
            { label: 'Lines of Code', value: '500K+' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 + index * 0.08, ease: "easeInOut" }}
              className="glass-card p-6 text-center group hover:border-primary/40 transition-all duration-300 ease-in-out rounded-3xl"
            >
              <div className="font-display text-3xl md:text-4xl font-bold text-primary glow-text mb-2">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground font-display tracking-wider uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
