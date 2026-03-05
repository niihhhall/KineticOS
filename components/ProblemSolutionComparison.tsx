
import React from 'react';
// Shadow motion to bypass environment-specific type errors with framer-motion props
import { motion as motionBase } from 'framer-motion';
const motion = motionBase as any;
import { X, Check } from 'lucide-react';

export const ProblemSolutionComparison: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="pt-16 md:pt-24 pb-16 md:pb-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-5xl font-medium mb-8 text-brand-text leading-[1.2]"
            >
              You've Made 44 Decisions. <br/>
              <span className="relative inline-block mt-2">
                <span className="absolute inset-0 bg-[#ff751f]/10 -mx-1 py-1 rounded-md" />
                <span className="relative text-[#ff751f] font-bold">It's 10:15 AM.</span>
              </span>
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-500 mb-8 leading-relaxed"
            >
              <span className="font-bold text-brand-text bg-gray-100/80 px-1 rounded-sm">Which tool?</span> <span className="font-bold text-brand-text bg-gray-100/80 px-1 rounded-sm">Which task?</span> <span className="font-bold text-brand-text bg-gray-100/80 px-1 rounded-sm">Where to save this?</span> Every micro-decision drains willpower before real work starts. KineticOS decides for you.
            </motion.p>

            <div className="space-y-6">
              {/* Problem Item - Decision Fatigue */}
              <motion.div 
                variants={itemVariants}
                animate={{ 
                  x: [0, -1, 1, -1, 1, 0],
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  repeatType: "mirror",
                  ease: "easeInOut"
                }}
                className="flex gap-4 p-5 rounded-2xl bg-red-50/50 border border-red-100/50 shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 shrink-0 group-hover:rotate-12 transition-transform">
                  <X className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-text mb-1">The Morning Decision Marathon</h4>
                  <p className="text-sm text-gray-500">20 min deciding priorities + 15 min choosing file locations + 10 min figuring urgency = exhausted before productivity.</p>
                </div>
              </motion.div>

              {/* Solution Item - Pre-Decided Architecture */}
              <motion.div 
                variants={itemVariants}
                className="flex gap-4 p-5 rounded-2xl bg-brand-bg border border-brand-orange/10 shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden"
              >
                {/* Subtle pulse background */}
                <motion.div 
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 bg-brand-orange/5 pointer-events-none"
                />
                
                <div className="w-10 h-10 rounded-full bg-[#ff751f] flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform shadow-lg shadow-brand-orange/20 z-10">
                  <Check className="w-5 h-5" />
                </div>
                <div className="relative z-10">
                  <h4 className="font-bold text-brand-text mb-1 flex items-center gap-2">
                    Pre-Decided Architecture
                    <span className="text-sm">🔥</span>
                  </h4>
                  <p className="text-sm text-gray-500 font-medium">Dashboard auto-surfaces today's priorities. Urgent tasks highlighted red. Files auto link to projects. Zero decisions. Pure execution.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <div className="relative py-12">
            <div className="absolute -inset-4 bg-brand-orange/5 rounded-full blur-3xl opacity-50" />
            
            {/* Floating Card Component */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              animate={{ 
                y: [0, -15, 0],
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                ease: "easeInOut",
                opacity: { duration: 0.8 },
                scale: { duration: 0.8 }
              }}
              whileHover={{ scale: 1.02, rotate: 1 }}
              className="relative glass-panel rounded-3xl p-8 md:p-10 border border-black/5 bg-white shadow-2xl cursor-default"
            >
              <div className="text-center mb-8">
                <span className="text-[10px] font-bold text-[#ff751f] uppercase tracking-widest px-4 py-1.5 bg-[#ff751f]/10 rounded-full">Pro Tip</span>
                <h3 className="text-2xl md:text-3xl font-medium mt-6 text-brand-text leading-tight">Your brain isn't a filing cabinet. Stop using it like one.</h3>
              </div>
              
              <div className="space-y-4">
                {[
                  "Daily Planner with Auto-Display",
                  "Weekly Goals Dashboard",
                  "Overdue Task Alerts",
                  "Recurring Admin Checklist",
                  "Monthly Strategic Planning"
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i + 0.5 }}
                    className="flex items-center gap-4 p-3.5 rounded-xl border border-black/5 hover:bg-gray-50 transition-colors group"
                  >
                    <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center text-green-500 group-hover:scale-110 transition-transform">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-gray-600 font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="mt-10 p-6 bg-brand-bg rounded-2xl border border-brand-orange/10 text-center"
              >
                <p className="text-[#ff751f] font-bold text-xl">Estimated Savings: 11hrs / week</p>
                <p className="text-[10px] text-gray-400 mt-2 uppercase tracking-[0.2em] font-medium">Based on avg. user data</p>
              </motion.div>
            </motion.div>

            {/* Subtle background decorative elements that also float */}
            <motion.div
              animate={{ y: [-20, 20, -20], rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -top-10 -right-10 w-20 h-20 bg-[#ff751f]/5 rounded-full blur-xl pointer-events-none"
            />
            <motion.div
              animate={{ y: [20, -20, 20], scale: [1, 1.2, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none"
            />
          </div>
        </div>
      </div>
      
      {/* Visual Transition Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#fffff5] pointer-events-none z-10" />
    </section>
  );
};
