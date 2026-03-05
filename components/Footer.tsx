import React from 'react';
// Shadow motion to bypass environment-specific type errors with framer-motion props
import { motion as motionBase } from 'framer-motion';
const motion = motionBase as any;

const AsteriskLogo = ({ className = "w-6 h-6" }: { className?: string }) => (
  <motion.svg 
    viewBox="0 0 100 100" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    animate={{ rotate: [0, 360, 360, 0, 0] }}
    transition={{ 
      duration: 5, 
      repeat: Infinity, 
      times: [0, 0.1, 0.5, 0.6, 1],
      ease: "easeInOut" 
    }}
  >
    <rect x="41" y="10" width="18" height="80" rx="4" />
    <rect x="41" y="10" width="18" height="80" rx="4" transform="rotate(60 50 50)" />
    <rect x="41" y="10" width="18" height="80" rx="4" transform="rotate(120 50 50)" />
  </motion.svg>
);

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-200 bg-white py-12 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <AsteriskLogo className="w-6 h-6 text-[#ff751f]" />
          <span className="text-xl font-bold text-[#ff751f] leading-none">KineticOS</span>
        </div>
        
        <div className="text-sm text-gray-500 font-medium">
          &copy; {new Date().getFullYear()} KineticOS. All rights reserved. Not affiliated with Notion.
        </div>
        
        <div className="flex gap-6 text-sm text-gray-500 font-medium">
          <a href="#" className="hover:text-[#ff751f] transition-colors">Privacy</a>
          <a href="#" className="hover:text-[#ff751f] transition-colors">Terms</a>
          <a href="#" className="hover:text-[#ff751f] transition-colors">Support</a>
        </div>
      </div>
    </footer>
  );
};