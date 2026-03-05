
import React from 'react';
import { motion as motionBase } from 'framer-motion';
import { Check, X, AlertTriangle, Crown, ArrowRight, ShieldCheck } from 'lucide-react';

const motion = motionBase as any;

const COMPARISON_DATA = [
  {
    name: "KineticOS",
    isBrand: true,
    cells: [
      { status: 'check', text: 'Setup in < 1 hour' },
      { status: 'check', text: '+30% conversion' },
      { status: 'check', text: 'Pro-grade outputs' },
      { status: 'check', text: 'Unlimited growth' },
      { status: 'check', text: 'One-time cost' }
    ]
  },
  {
    name: "In-house Team",
    cells: [
      { status: 'cross', text: 'Slow hiring' },
      { status: 'warning', text: 'Manual effort' },
      { status: 'check', text: 'Consistent brand' },
      { status: 'cross', text: 'Limited bandwidth' },
      { status: 'cross', text: 'Expensive salaries' }
    ]
  },
  {
    name: "Agencies",
    cells: [
      { status: 'cross', text: 'Long timelines' },
      { status: 'cross', text: 'Generic positioning' },
      { status: 'check', text: 'High quality' },
      { status: 'warning', text: 'Communication lag' },
      { status: 'cross', text: 'High retainers' }
    ]
  },
  {
    name: "Freelancers",
    cells: [
      { status: 'cross', text: 'Inconsistent delivery' },
      { status: 'cross', text: 'Mixed clarity' },
      { status: 'cross', text: 'Variable quality' },
      { status: 'cross', text: "Can't scale" },
      { status: 'warning', text: 'Mgmt overhead' }
    ]
  },
  {
    name: "AI Tools",
    cells: [
      { status: 'check', text: 'Instant outputs' },
      { status: 'cross', text: 'No narrative' },
      { status: 'cross', text: 'Low quality' },
      { status: 'cross', text: 'Not business-ready' },
      { status: 'check', text: 'Low cost' }
    ]
  }
];

const StatusIcon = ({ status, isBrand }: { status: 'check' | 'cross' | 'warning', isBrand?: boolean }) => {
  return (
    <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
      status === 'check' 
        ? (isBrand ? 'bg-[#ff751f] text-white' : 'bg-green-100 text-green-600') 
        : status === 'warning'
        ? 'bg-amber-100 text-amber-500'
        : 'bg-gray-100 text-gray-400'
    }`}>
      {status === 'check' && <Check className="w-4 h-4 stroke-[3px]" />}
      {status === 'cross' && <X className="w-4 h-4 stroke-[3px]" />}
      {status === 'warning' && <AlertTriangle className="w-4 h-4 stroke-[2.5px]" />}
    </div>
  );
};

export const ComparisonMatrixSection: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-brand-bg px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Background decorations */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-3xl mix-blend-multiply" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl mix-blend-multiply" />
       </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 text-[#ff751f] font-bold uppercase tracking-widest text-[10px] mb-6"
          >
            <Crown className="w-3 h-3" />
            Market Comparison
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
            className="text-4xl md:text-5xl font-medium text-brand-text mb-6 tracking-tight leading-tight"
          >
            Why freelance founders choose <br className="hidden md:block" />
            <span className="text-[#ff751f] relative whitespace-nowrap">
              KineticOS
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#ff751f]/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                 <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </span>
          </motion.h2>
          <p className="text-gray-500 text-lg">
            Compare the value, speed, and scalability against traditional options.
          </p>
        </div>

        {/* Mobile Scroll Hint */}
        <div className="md:hidden flex items-center justify-center gap-2 mb-6 text-xs font-bold text-gray-400 uppercase tracking-widest animate-pulse">
            <ArrowRight className="w-3 h-3" />
            <span>Swipe to compare</span>
        </div>

        {/* The Matrix Card */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0 }}
          className="bg-white rounded-[2.5rem] border border-gray-200 shadow-2xl shadow-gray-200/50 overflow-hidden relative"
        >
           {/* Header Background Strip */}
           <div className="absolute top-0 left-0 right-0 h-[72px] bg-gray-50/80 border-b border-gray-100 z-0" />

           <div className="overflow-x-auto scrollbar-hide">
             <div className="min-w-[1000px] p-2 md:p-6">
               
               {/* Grid Header */}
               <div className="grid grid-cols-[220px_1fr_1fr_1fr_1fr_1fr] gap-4 mb-4 relative z-10 px-4 items-center h-12">
                  <div className="text-left font-bold text-gray-400 text-[11px] uppercase tracking-widest pl-2">Provider</div>
                  {["SPEED", "CONVERSION", "QUALITY", "SCALABILITY", "COST"].map((header, i) => (
                    <div key={i} className="text-center">
                      <span className="text-[10px] font-extrabold text-gray-400 uppercase tracking-[0.2em]">
                        {header}
                      </span>
                    </div>
                  ))}
               </div>

               {/* Rows */}
               <div className="space-y-3 relative z-10">
                  {COMPARISON_DATA.map((row, idx) => (
                    <div
                      key={idx}
                      className={`grid grid-cols-[220px_1fr_1fr_1fr_1fr_1fr] gap-4 items-center px-6 py-5 rounded-2xl transition-all duration-300 ${
                        row.isBrand 
                          ? 'bg-brand-bg border border-[#ff751f]/20 shadow-lg shadow-orange-500/5 relative overflow-hidden' 
                          : 'hover:bg-gray-50 border border-transparent'
                      }`}
                    >
                      {/* Brand Highlight Effect */}
                      {row.isBrand && (
                        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#ff751f]" />
                      )}

                      <div className="flex items-center gap-3 pl-2">
                        {row.isBrand ? (
                            <div className="w-8 h-8 rounded-lg bg-[#ff751f] flex items-center justify-center text-white shadow-md shadow-orange-500/20">
                                <ShieldCheck className="w-4 h-4" />
                            </div>
                        ) : (
                            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                                <span className="text-[10px] font-bold">{idx}</span>
                            </div> 
                        )}
                        <span className={`font-bold tracking-tight ${row.isBrand ? 'text-brand-text text-lg' : 'text-gray-500 text-sm'}`}>
                          {row.name}
                        </span>
                      </div>
                      
                      {row.cells.map((cell, cIdx) => (
                        <div key={cIdx} className="flex flex-col items-center text-center px-2">
                          <div className="mb-2">
                            <StatusIcon status={cell.status as any} isBrand={row.isBrand} />
                          </div>
                          <span className={`text-[11px] font-medium leading-tight ${row.isBrand ? 'text-gray-900' : 'text-gray-400'}`}>
                            {cell.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  ))}
               </div>

             </div>
           </div>
        </motion.div>
        
        <div className="mt-8 text-center">
           <p className="text-sm text-gray-400 font-medium italic">
             Comparison based on average market rates and delivery timelines for 2024.
           </p>
        </div>
      </div>
    </section>
  );
};
