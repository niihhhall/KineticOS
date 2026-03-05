import React from 'react';
// Shadow motion to bypass environment-specific type errors with framer-motion props
import { motion as motionBase } from 'framer-motion';
const motion = motionBase as any;
import { Zap, Shield, BarChart3, Clock, Layout, MousePointer2 } from 'lucide-react';

const FEATURES = [
  { icon: <Layout className="w-4 h-4" />, text: "Business HQ" },
  { icon: <BarChart3 className="w-4 h-4" />, text: "Finance HQ" },
  { icon: <Zap className="w-4 h-4" />, text: "Automated CRM" },
  { icon: <Clock className="w-4 h-4" />, text: "Time-Blocker Pro" },
  { icon: <Shield className="w-4 h-4" />, text: "Secure Database" },
  { icon: <MousePointer2 className="w-4 h-4" />, text: "1-Click Setup" },
];

export const FeatureTickerSection: React.FC = () => {
  return (
    <div className="bg-white border-y border-black/5 overflow-hidden py-6 select-none relative z-20">
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ 
          duration: 25, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="flex whitespace-nowrap gap-12 items-center"
      >
        {[...Array(6)].map((_, i) => (
          <React.Fragment key={i}>
            {FEATURES.map((feature, idx) => (
              <div key={`${i}-${idx}`} className="flex items-center gap-2 text-brand-text/60 font-medium uppercase tracking-widest text-[10px]">
                <span className="text-[#ff751f]">{feature.icon}</span>
                {feature.text}
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};