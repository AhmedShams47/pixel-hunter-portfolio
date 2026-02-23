import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Moon, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const RAMADAN_END = new Date('2026-03-20T18:00:00+06:00');

const RamadanBanner = () => {
  const [visible, setVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const { t } = useLanguage();

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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl mx-4 sm:mx-6 mb-8"
          style={{
            background: 'linear-gradient(135deg, hsl(var(--prime-dark) / 0.4) 0%, hsl(var(--prime) / 0.15) 40%, hsl(var(--accent) / 0.1) 100%)',
            border: '1px solid hsl(var(--prime) / 0.25)',
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
                  {t('ramadan.badge')}
                </span>
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-foreground">
                <span className="prime-text">{t('ramadan.title')}</span>{' '}
                <span className="text-foreground/90">{t('ramadan.subtitle')}</span>
              </h3>
              <p className="text-xs text-muted-foreground mt-1 hidden sm:block">
                {t('ramadan.helperText')}
              </p>
            </div>

            {/* Center: Countdown */}
            <div className="flex gap-2 sm:gap-3">
              {timeBlocks.map((block) => (
                <div
                  key={block.label}
                  className="flex flex-col items-center px-3 py-2 rounded-xl"
                  style={{
                    background: 'hsl(var(--prime) / 0.12)',
                    border: '1px solid hsl(var(--prime) / 0.2)',
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
                  background: 'linear-gradient(135deg, hsl(var(--prime)) 0%, hsl(var(--accent)) 100%)',
                  boxShadow: '0 4px 20px hsl(var(--prime) / 0.3)',
                }}
              >
                {t('ramadan.claim')}
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
