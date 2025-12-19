import { motion } from 'framer-motion';

const TechArsenal = () => {
  const tools = [
    { name: 'Figma', category: 'Design' },
    { name: 'VS Code', category: 'Development' },
    { name: 'Canva', category: 'Design' },
    { name: 'Linux', category: 'Systems' },
    { name: 'Vercel', category: 'Deployment' },
    { name: 'n8n', category: 'Automation' },
    { name: 'React', category: 'Frontend' },
    { name: 'Tailwind', category: 'Styling' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Supabase', category: 'Database' },
    { name: 'Git', category: 'Version Control' },
  ];

  // Duplicate for seamless loop
  const duplicatedTools = [...tools, ...tools];

  return (
    <section id="arsenal" className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-display tracking-widest mb-4 block">
            // WEAPONS OF CHOICE
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Tech{' '}
            <span className="metallic-text glow-text">Arsenal</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The tools that power the empire. Every weapon chosen for maximum impact.
          </p>
        </motion.div>

        {/* Infinite marquee */}
        <div className="relative">
          {/* Gradient fade left */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          
          {/* Gradient fade right */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: [0, -50 * tools.length] }}
              transition={{
                x: {
                  duration: 40,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              {duplicatedTools.map((tool, index) => (
                <motion.div
                  key={`${tool.name}-${index}`}
                  whileHover={{ scale: 1.04, y: -4 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="glass-card px-8 py-6 min-w-[180px] text-center group hover:border-primary/40 transition-all duration-300 ease-in-out cursor-pointer rounded-2xl"
                >
                  <div className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300 ease-in-out mb-1">
                    {tool.name}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">
                    {tool.category}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Floating spheres */}
        <div className="relative mt-20 flex justify-center">
          <div className="relative">
            {/* Central sphere */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
              className="relative w-64 h-64"
            >
              {/* Orbital rings */}
              <div className="absolute inset-0 rounded-full border border-primary/15" />
              <motion.div
                className="absolute inset-4 rounded-full border border-primary/25"
                animate={{ rotate: -360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-8 rounded-full border border-primary/35"
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />

              {/* Center glow */}
              <div className="absolute inset-16 rounded-full bg-primary/15 blur-xl" />
              <div className="absolute inset-20 rounded-full bg-primary/30 blur-md" />
              <div className="absolute inset-24 rounded-full bg-primary glow-box flex items-center justify-center">
                <span className="font-display text-xs font-bold text-primary-foreground tracking-widest">
                  CORE
                </span>
              </div>

              {/* Orbiting dots */}
              {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                <motion.div
                  key={angle}
                  className="absolute w-3 h-3 rounded-full bg-primary"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `rotate(${angle}deg) translateX(120px) translateY(-50%)`,
                    boxShadow: '0 0 12px hsl(var(--primary) / 0.8)',
                  }}
                  animate={{
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.4,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechArsenal;
