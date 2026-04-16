import React from 'react';
import { motion } from 'motion/react';

interface LogoProps {
  className?: string;
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ className = "", size = 48 }) => {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Background Shape */}
      <rect width="100" height="100" rx="20" fill="#001A33" />
      
      {/* Circuit lines */}
      <motion.path
        d="M20 20 H80 V80 H20 Z"
        stroke="#0070FF"
        strokeWidth="1"
        strokeOpacity="0.3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />
      
      <circle cx="20" cy="20" r="2" fill="#0070FF" />
      <circle cx="80" cy="80" r="2" fill="#0070FF" />

      {/* Monogram B R */}
      <g stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
        {/* Letter B */}
        <path d="M35 30 V70 H45 C55 70 55 52 45 52 H35 H45 C55 52 55 30 45 30 H35 Z" fill="none" />
        
        {/* Letter R */}
        <path d="M55 70 V30 H65 C75 30 75 50 65 50 H55 L75 70" fill="none" />
      </g>
      
      {/* Silver Accent Line */}
      <motion.path
        d="M10 50 H90"
        stroke="#BDC3C7"
        strokeWidth="0.5"
        strokeDasharray="4 4"
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
    </motion.svg>
  );
};
