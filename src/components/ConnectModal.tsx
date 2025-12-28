import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, MessageCircle } from 'lucide-react';

interface ConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConnectModal = ({ isOpen, onClose }: ConnectModalProps) => {
  const contactOptions = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      description: 'Send me an email',
      href: 'mailto:shamsvisuals@gmail.com',
      gradient: 'from-primary/20 to-accent/20',
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      label: 'WhatsApp',
      description: 'Chat on WhatsApp',
      href: 'https://wa.me/8801707887676',
      gradient: 'from-green-500/20 to-emerald-500/20',
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            onClick={onClose}
            className="fixed inset-0 bg-background/85 backdrop-blur-md z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90%] max-w-md"
          >
            <div className="glass-card p-8 rounded-3xl">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-2xl text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all duration-400"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="text-center mb-8">
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                  Let's <span className="gold-text gold-glow">Connect</span>
                </h3>
                <p className="text-muted-foreground text-sm tracking-wide">
                  Choose your preferred way to reach out
                </p>
              </div>

              {/* Contact options */}
              <div className="space-y-4">
                {contactOptions.map((option) => (
                  <motion.a
                    key={option.label}
                    href={option.href}
                    target={option.href.startsWith('http') ? '_blank' : undefined}
                    rel={option.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    whileHover={{ scale: 1.02, y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-r ${option.gradient} border border-border/50 hover:border-primary/50 transition-all duration-500 group`}
                  >
                    <div className="p-3 rounded-xl bg-primary/15 text-primary group-hover:bg-primary/25 transition-all duration-500">
                      {option.icon}
                    </div>
                    <div className="flex-1">
                      <div className="font-display font-semibold text-foreground group-hover:text-primary transition-colors duration-500">
                        {option.label}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {option.description}
                      </div>
                    </div>
                    <div className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-500">
                      →
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Footer note */}
              <p className="text-center text-xs text-muted-foreground mt-6 tracking-wide">
                I typically respond within 24 hours
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ConnectModal;