import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface DragonFrameProps {
  children: ReactNode;
}

const DragonFrame = ({ children }: DragonFrameProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="relative"
    >
      {/* Outer glow effect */}
      <motion.div
        className="absolute -inset-4 rounded-full prime-box-glow opacity-60"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Dragon coil frame - SVG wrapper */}
      <div className="relative w-64 h-64 md:w-80 md:h-80">
        {/* Golden dragon coil SVG */}
        <svg
          viewBox="0 0 400 400"
          className="absolute inset-0 w-full h-full z-10"
          style={{ filter: 'drop-shadow(0 0 20px hsl(var(--prime) / 0.5))' }}
        >
          <defs>
            {/* Purple gradient for dragon body */}
            <linearGradient id="dragonPurple" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(275, 90%, 75%)" />
              <stop offset="30%" stopColor="hsl(270, 85%, 60%)" />
              <stop offset="50%" stopColor="hsl(280, 95%, 80%)" />
              <stop offset="70%" stopColor="hsl(265, 80%, 50%)" />
              <stop offset="100%" stopColor="hsl(270, 90%, 65%)" />
            </linearGradient>
            
            {/* Shimmer gradient */}
            <linearGradient id="dragonShimmer" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="hsl(280, 100%, 85%)" stopOpacity="0.6" />
              <stop offset="100%" stopColor="transparent" />
              <animate attributeName="x1" values="-100%;100%" dur="3s" repeatCount="indefinite" />
              <animate attributeName="x2" values="0%;200%" dur="3s" repeatCount="indefinite" />
            </linearGradient>

            {/* Circular clip for photo */}
            <clipPath id="photoCircle">
              <circle cx="200" cy="200" r="120" />
            </clipPath>
          </defs>

          {/* Dragon body coiled around - stylized serpentine dragon */}
          <g className="dragon-body">
            {/* Main coil - outer ring */}
            <motion.path
              d="M200 30 
                 C320 30, 370 120, 370 200 
                 C370 280, 320 370, 200 370 
                 C80 370, 30 280, 30 200 
                 C30 120, 80 30, 200 30"
              fill="none"
              stroke="url(#dragonPurple)"
              strokeWidth="18"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            
            {/* Dragon scales texture - dots along the path */}
            {[...Array(24)].map((_, i) => {
              const angle = (i * 15) * (Math.PI / 180);
              const radius = 170;
              const x = 200 + Math.cos(angle) * radius;
              const y = 200 + Math.sin(angle) * radius;
              return (
                <motion.circle
                  key={i}
                  cx={x}
                  cy={y}
                  r="4"
                  fill="hsl(280, 100%, 85%)"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.05, duration: 0.3 }}
                />
              );
            })}

            {/* Dragon head - top */}
            <motion.g
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              {/* Head base */}
              <ellipse cx="200" cy="25" rx="35" ry="25" fill="url(#dragonPurple)" />
              
              {/* Horns */}
              <path
                d="M175 15 L160 -15 L170 10 M225 15 L240 -15 L230 10"
                stroke="url(#dragonPurple)"
                strokeWidth="6"
                fill="none"
                strokeLinecap="round"
              />
              
              {/* Eyes */}
              <circle cx="185" cy="25" r="5" fill="hsl(275, 100%, 70%)" />
              <circle cx="215" cy="25" r="5" fill="hsl(275, 100%, 70%)" />
              <circle cx="186" cy="24" r="2" fill="hsl(0, 0%, 100%)" />
              <circle cx="216" cy="24" r="2" fill="hsl(0, 0%, 100%)" />
              <circle cx="186" cy="24" r="2" fill="hsl(0, 0%, 100%)" />
              <circle cx="216" cy="24" r="2" fill="hsl(0, 0%, 100%)" />
              
              {/* Snout */}
              <ellipse cx="200" cy="35" rx="15" ry="8" fill="hsl(265, 80%, 50%)" />
              
              {/* Whiskers/Tendrils */}
              <motion.path
                d="M165 30 Q140 20, 130 35 M235 30 Q260 20, 270 35"
                stroke="url(#dragonPurple)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                animate={{ 
                  d: [
                    "M165 30 Q140 20, 130 35 M235 30 Q260 20, 270 35",
                    "M165 30 Q140 30, 130 25 M235 30 Q260 30, 270 25",
                    "M165 30 Q140 20, 130 35 M235 30 Q260 20, 270 35"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.g>

            {/* Dragon tail - bottom with curl */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.5 }}
            >
              <motion.path
                d="M200 375 Q200 400, 180 410 Q150 420, 140 400 Q130 380, 150 370"
                stroke="url(#dragonPurple)"
                strokeWidth="12"
                fill="none"
                strokeLinecap="round"
                animate={{
                  d: [
                    "M200 375 Q200 400, 180 410 Q150 420, 140 400 Q130 380, 150 370",
                    "M200 375 Q200 405, 185 415 Q155 425, 145 405 Q135 385, 155 375",
                    "M200 375 Q200 400, 180 410 Q150 420, 140 400 Q130 380, 150 370"
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* Tail spikes */}
              <path
                d="M145 395 L130 385 M155 405 L145 420"
                stroke="hsl(270, 90%, 65%)"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </motion.g>

            {/* Decorative claws on sides */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.5 }}
            >
              {/* Left claw */}
              <path
                d="M35 180 Q15 175, 10 165 M35 200 Q10 200, 5 195 M35 220 Q15 225, 10 235"
                stroke="url(#dragonPurple)"
                strokeWidth="5"
                fill="none"
                strokeLinecap="round"
              />
              {/* Right claw */}
              <path
                d="M365 180 Q385 175, 390 165 M365 200 Q390 200, 395 195 M365 220 Q385 225, 390 235"
                stroke="url(#dragonPurple)"
                strokeWidth="5"
                fill="none"
                strokeLinecap="round"
              />
            </motion.g>

            {/* Shimmer overlay */}
            <motion.path
              d="M200 30 
                 C320 30, 370 120, 370 200 
                 C370 280, 320 370, 200 370 
                 C80 370, 30 280, 30 200 
                 C30 120, 80 30, 200 30"
              fill="none"
              stroke="url(#dragonShimmer)"
              strokeWidth="18"
              strokeLinecap="round"
              opacity="0.5"
            />
          </g>
        </svg>

        {/* Photo container - circular */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-[60%] h-[60%] rounded-full overflow-hidden border-2 border-primary/50">
            {children}
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            
            <motion.div
              className="absolute inset-0 opacity-20"
              style={{
                background: 'linear-gradient(45deg, transparent 30%, hsl(var(--prime) / 0.4) 50%, transparent 70%)',
              }}
              animate={{
                backgroundPosition: ['-200% 0', '200% 0'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DragonFrame;
