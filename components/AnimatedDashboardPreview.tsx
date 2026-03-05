import React from 'react';
// Shadow motion to bypass environment-specific type errors with framer-motion props
import { motion as motionBase } from 'framer-motion';
const motion = motionBase as any;

export const AnimatedDashboardPreview: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="w-full h-full p-6 md:p-10 grid grid-cols-12 gap-4 md:gap-6 bg-white"
    >
      {/* Sidebar */}
      <motion.div
        variants={itemVariants}
        className="hidden md:flex col-span-2 flex-col gap-4 p-4 rounded-2xl bg-gray-50/50 border border-black/5"
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="h-3 w-full bg-gray-200 rounded-full overflow-hidden relative"
          >
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
            />
          </motion.div>
        ))}
        <div className="mt-auto">
          <div className="h-8 w-8 rounded-full bg-brand-orange/10 mx-auto" />
        </div>
      </motion.div>

      {/* Main Content Area */}
      <div className="col-span-12 md:col-span-10 flex flex-col gap-6">
        
        {/* Top Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { label: 'Active Leads', value: '24', color: 'bg-blue-500' },
            { label: 'Revenue/Mo', value: '$12k', color: 'bg-[#ff751f]' },
            { label: 'Task Pulse', value: '94%', color: 'bg-green-500' },
            { label: 'Hours Saved', value: '42h', color: 'bg-purple-500' }
          ].map((stat, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl border border-black/5 p-4 md:p-5 shadow-sm flex flex-col justify-between h-24 md:h-28"
            >
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{stat.label}</span>
              <div className="flex items-end justify-between">
                <span className="text-xl md:text-2xl font-bold text-brand-text">{stat.value}</span>
                <div className={`w-1.5 h-1.5 rounded-full ${stat.color} animate-pulse`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Big Widget Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">
          {/* Project Timeline Widget */}
          <motion.div
            variants={itemVariants}
            className="col-span-1 md:col-span-2 bg-white rounded-[2rem] border border-black/5 p-8 relative overflow-hidden group shadow-sm flex flex-col"
          >
            <div className="flex justify-between items-center mb-8">
              <h4 className="text-lg font-bold text-brand-text">Project Timeline</h4>
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-gray-200" />
                <div className="w-2 h-2 rounded-full bg-gray-200" />
                <div className="w-2 h-2 rounded-full bg-[#ff751f]" />
              </div>
            </div>

            <div className="space-y-6 flex-1 flex flex-col justify-center">
              {[
                { label: 'Brand Audit', progress: 100, color: 'bg-green-500' },
                { label: 'Visual Design', progress: 65, color: 'bg-[#ff751f]' },
                { label: 'Client Approval', progress: 20, color: 'bg-gray-300' }
              ].map((proj, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-xs font-medium text-gray-500">
                    <span>{proj.label}</span>
                    <span>{proj.progress}%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${proj.progress}%` }}
                      transition={{ duration: 1.5, delay: 0.5 + i * 0.2 }}
                      className={`h-full ${proj.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-tr from-[#ff751f]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>

          {/* Revenue Widget */}
          <motion.div
            variants={itemVariants}
            className="col-span-1 bg-white rounded-[2rem] border border-black/5 p-8 relative overflow-hidden group shadow-sm flex flex-col"
          >
            <h4 className="text-lg font-bold text-brand-text mb-8">Revenue</h4>
            <div className="flex items-end justify-between h-32 gap-2">
              {[40, 70, 55, 90, 65, 80].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2">
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    transition={{ 
                      type: 'spring', 
                      stiffness: 100, 
                      delay: 0.8 + i * 0.1 
                    }}
                    className={`w-full rounded-t-lg ${i === 3 ? 'bg-[#ff751f]' : 'bg-brand-orange/20'} group-hover:bg-[#ff751f] transition-colors duration-500`}
                  />
                  <span className="text-[8px] font-bold text-gray-300 uppercase">M{i+1}</span>
                </div>
              ))}
            </div>
            <div className="mt-auto pt-6 border-t border-black/5">
              <div className="text-2xl font-bold text-brand-text">$142,400</div>
              <div className="text-[10px] text-green-500 font-bold uppercase tracking-widest">+12% vs last year</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Center Floating Pill Overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
        <motion.div 
          animate={{ 
            y: [0, -10, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="px-8 py-4 glass-panel rounded-full border border-brand-orange/30 flex items-center gap-4 bg-white/95 shadow-2xl pointer-events-auto cursor-default"
        >
          <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse shadow-[0_0_15px_rgba(34,197,94,0.5)]" />
          <span className="text-base font-bold text-brand-text tracking-tight">Live System Demo</span>
        </motion.div>
      </div>
    </motion.div>
  );
};