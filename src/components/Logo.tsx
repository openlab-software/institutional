import { motion } from "motion/react";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative w-10 h-12"
      >
        <svg
          viewBox="0 0 11.377083 14.022917"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g transform="translate(-56.356247,-125.67709)">
            <g
              transform="matrix(0.26458333,0,0,0.26458333,56.356249,125.67708)"
              style={{ fill: '#000000' }}
            >
              <rect
                x="9"
                y="0"
                width="25"
                height="4"
                rx="1"
                style={{ fill: '#0f6e56' }}
              />
              <rect
                x="0"
                y="8"
                width="43"
                height="45"
                rx="3"
                style={{ fill: '#0f6e56' }}
              />
              <rect
                x="4"
                y="12"
                width="35"
                height="37"
                rx="2"
                style={{ fill: '#e1f5ee' }}
              />
              <rect
                x="7"
                y="26"
                width="29"
                height="19"
                rx="2"
                style={{ fill: '#5dcaa5', opacity: 0.3 }}
              />
              <rect
                x="7"
                y="37"
                width="29"
                height="8"
                rx="1"
                style={{ fill: '#5dcaa5', opacity: 0.55 }}
              />
              <circle
                cx="15"
                cy="22"
                r="2.5"
                style={{ fill: '#5dcaa5', opacity: 0.8 }}
              />
              <circle
                cx="28"
                cy="19"
                r="1.5"
                style={{ fill: '#5dcaa5', opacity: 0.6 }}
              />
            </g>
          </g>
        </svg>
      </motion.div>
      
      <div className="flex flex-col justify-center">
        <div className="flex flex-col -space-y-1">
          <span className="text-2xl font-bold tracking-tight text-brand-light-gray uppercase">Open</span>
          <span className="text-2xl font-bold tracking-tight text-brand-mint-green uppercase">Lab</span>
        </div>
      </div>
    </div>
  );
}
