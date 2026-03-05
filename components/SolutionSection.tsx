
import React, { useState } from 'react';
// Shadow motion to bypass environment-specific type errors with framer-motion props
import { motion as motionBase } from 'framer-motion';
const motion = motionBase as any;
import { CheckCircle2, ChevronRight } from 'lucide-react';
import { HQ_FEATURES } from '../constants';

const FEATURE_DETAILS: Record<string, string[]> = {
  "Business HQ": [
    "Business Metrics Dashboard",
    "Strategic Initiatives Tracker",
    "KPI Monitoring System",
    "Backend Settings Hub"
  ],
  "Clients & Projects HQ": [
    "Complete CRM Database",
    "Project Status Tracker",
    "Deliverables Manager",
    "Automatic Notification System"
  ],
  "Finance HQ": [
    "Monthly Financial Dashboard",
    "Annual Revenue Overview",
    "Client Profitability Tracker",
    "Expense Categorization Engine"
  ],
  "Productivity HQ": [
    "Centralized Task Manager",
    "Daily/Weekly/Monthly Planners",
    "Recurring Task Automation",
    "Auto-Display Current Day"
  ],
  "Social HQ": [
    "Multi-Platform Content Calendar",
    "Draft/Scheduled/Published Tracker",
    "Content Performance Analytics",
    "Platform-Specific Filters"
  ],
  "Marketing HQ": [
    "Marketing Initiatives Database",
    "Campaign ROI Calculator",
    "Revenue Attribution System",
    "Active/Paused Status Manager"
  ]
};

const FeatureFlipCard = ({ feature, index }: { feature: typeof HQ_FEATURES[0], index: number }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative h-[320px] w-full perspective-1000 cursor-pointer group"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ 
          type: "spring", 
          stiffness: 150, 
          damping: 20,
          mass: 1.2
        }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative h-full w-full"
      >
        {/* Front Side */}
        <div 
          className="absolute inset-0 backface-hidden glass-panel p-10 rounded-[1.5rem] bg-white/70 border border-black/5 flex flex-col h-full shadow-sm"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="w-14 h-14 rounded-xl bg-[#ff751f]/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
            <span className="text-3xl">{feature.icon}</span>
          </div>
          <h3 className="text-2xl font-medium text-brand-text mb-4">{feature.title}</h3>
          <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
          
          <div className="mt-auto flex items-center gap-2 text-[#ff751f] text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
            <span>What's inside</span>
            <ChevronRight className="w-3 h-3" />
          </div>
        </div>

        {/* Back Side */}
        <div 
          className="absolute inset-0 backface-hidden p-10 rounded-[1.5rem] bg-[#ff751f] text-white flex flex-col h-full shadow-2xl overflow-hidden border border-[#ff751f]"
          style={{ 
            backfaceVisibility: "hidden", 
            transform: "rotateY(180deg)" 
          }}
        >
          {/* Subtle internal gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
          
          <h4 className="text-lg font-bold mb-6 flex items-center gap-2 relative z-10">
            <CheckCircle2 className="w-5 h-5 text-white/70" />
            Components
          </h4>
          <ul className="space-y-4 relative z-10">
            {(FEATURE_DETAILS[feature.title] || []).map((item, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={isFlipped ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 * i + 0.1, type: "spring", stiffness: 300, damping: 20 }}
                className="flex items-center gap-3 text-sm font-medium text-white/95"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
                {item}
              </motion.li>
            ))}
          </ul>
          <div className="mt-auto pt-4 border-t border-white/20 relative z-10">
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/80">Fully Integrated</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const SolutionSection: React.FC = () => {
  return (
    <section className="pt-16 md:pt-24 pb-16 md:pb-24 relative bg-brand-bg overflow-hidden px-6 md:px-12 lg:px-24">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-brand-accent/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="text-4xl md:text-6xl font-medium mb-8 text-brand-text leading-tight"
          >
            One Operating System. <br/>
            <span className="text-[#ff751f]">Infinite Clarity.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Replace 8 monthly subscriptions with a single, powerful Notion ecosystem designed for high-performance scaling.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {HQ_FEATURES.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, type: "spring", stiffness: 70, damping: 20 }}
            >
              <FeatureFlipCard feature={feature} index={idx} />
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
};
