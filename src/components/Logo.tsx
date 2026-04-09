import { motion } from "motion/react";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative w-12 h-14"
      >
        {/* Flask Symbol - Accurate Erlenmeyer shape from manual */}
        <svg viewBox="0 0 40 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Cap (Tampa) */}
          <rect x="12" y="2" width="16" height="3" rx="1" fill="#5DCAA5" />
          
          {/* Neck (Gargalo) */}
          <rect x="15" y="5" width="10" height="10" fill="#0F6E56" />
          
          {/* Body (Frasco Verde) */}
          <path 
            d="M15 15L4 38C2 42 5 46 10 46H30C35 46 38 42 36 38L25 15H15Z" 
            fill="#0F6E56" 
          />
          
          {/* Interior Claro (Transparência) */}
          <path 
            d="M17 17L7 38C6.5 39 7.5 43 10 43H30C32.5 43 33.5 39 33 38L23 17H17Z" 
            fill="#E1F5EE" 
            fillOpacity="0.1"
          />

          {/* Liquid (Líquido em movimento) */}
          <path 
            d="M20 28L10 42C9.5 43 10.5 44 12 44H28C29.5 44 30.5 43 30 42L20 28Z" 
            fill="#5DCAA5" 
          />
          
          {/* Bubbles (Bolhas) */}
          <circle cx="16" cy="36" r="1.2" fill="white" opacity="0.8" />
          <circle cx="24" cy="39" r="0.8" fill="white" opacity="0.6" />
          <circle cx="20" cy="33" r="1" fill="white" opacity="0.7" />
        </svg>
      </motion.div>
      
      <div className="flex flex-col justify-center">
        <div className="flex flex-col -space-y-1">
          <span className="text-2xl font-bold tracking-tight text-brand-light-gray uppercase">Open</span>
          <span className="text-2xl font-bold tracking-tight text-brand-mint-green uppercase">Lab</span>
        </div>
        <span className="text-[7px] tracking-[0.4em] uppercase opacity-50 mt-1 font-mono">
          Open Source Solutions
        </span>
      </div>
    </div>
  );
}
