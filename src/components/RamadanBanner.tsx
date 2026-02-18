import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Moon, Star } from 'lucide-react';

const RAMADAN_END = new Date('2026-03-20T18:00:00+06:00'); // Approx end of Ramadan 2026 BD time

const RamadanBanner = () => {
  const [visible, setVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = RAMADAN_END.getTime() - now.getTime();
      if (diff <= 0) {
        setVisible(false);
        clearInterval(timer);
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!visible) return null;

  const timeBlocks = [
    { value: timeLeft.days, label: 'Days' },
    { value: timeLeft.hours, label: 'Hrs' },
    { value: timeLeft.minutes, label: 'Min' },
    { value: timeLeft.seconds, label: 'Sec' },
  ];

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="relative overflow-hidden rounded-2xl mx-4 sm:mx-6 mt-4"
          style={{
            background: 'linear-gradient(135deg, hsl(265 80% 12%) 0%, hsl(280 70% 18%) 40%, hsl(310 60% 15%) 100%)',
            border: '1px solid hsl(280 60% 40% / 0.3)',
          }}
        >
          {/* Decorative elements */}
          <div className="absolute top-2 left-4 text-primary/20">
            <Moon className="w-8 h-8" />
          </div>
          <div className="absolute top-3 right-12 text-primary/15">
            <Star className="w-5 h-5" />
          </div>
          <div className="absolute bottom-2 left-1/4 text-primary/10">
            <Star className="w-4 h-4" />
          </div>

          <div className="relative z-10 px-6 py-5 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Left: Message */}
            <div className="text-center sm:text-left flex-1">
              <div className="flex items-center gap-2 justify-center sm:justify-start mb-1">
                <Moon className="w-4 h-4 text-primary" />
                <span className="text-xs font-display tracking-[0.2em] text-primary uppercase">
                  Ramadan Mubarak
                </span>
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-foreground">
                <span className="prime-text">20% OFF</span>{' '}
                <span className="text-foreground/90">All Services This Ramadan</span>
              </h3>
              <p className="text-xs text-muted-foreground mt-1 hidden sm:block">
                Special blessing for this holy month — DM me on WhatsApp to claim
              </p>
            </div>

            {/* Center: Countdown */}
            <div className="flex gap-2 sm:gap-3">
              {timeBlocks.map((block) => (
                <div
                  key={block.label}
                  className="flex flex-col items-center px-3 py-2 rounded-xl"
                  style={{
                    background: 'hsl(280 60% 25% / 0.5)',
                    border: '1px solid hsl(280 60% 50% / 0.2)',
                  }}
                >
                  <span className="font-display text-lg sm:text-xl font-bold prime-text tabular-nums">
                    {String(block.value).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] text-muted-foreground font-display tracking-wider uppercase">
                    {block.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Right: CTA + Close */}
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/8801707887676?text=Assalamu%20Alaikum!%20I%20want%20to%20claim%20the%20Ramadan%2020%25%20OFF%20offer"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 font-display font-bold text-sm rounded-xl text-primary-foreground transition-all duration-300 hover:scale-[1.03] whitespace-nowrap"
                style={{
                  background: 'linear-gradient(135deg, hsl(280 85% 65%) 0%, hsl(310 75% 60%) 100%)',
                  boxShadow: '0 4px 20px hsl(280 85% 65% / 0.3)',
                }}
              >
                Claim Offer
              </a>
              <button
                onClick={() => setVisible(false)}
                className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Close banner"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RamadanBanner;
