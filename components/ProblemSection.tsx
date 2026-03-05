
import React from 'react';
// Shadow motion to bypass environment-specific type errors with framer-motion props
import { motion as motionBase } from 'framer-motion';
const motion = motionBase as any;
import { AlertTriangle, Clock, DollarSign } from 'lucide-react';

const icons = [
  "https://cdn.worldvectorlogo.com/logos/trello.svg",
  "https://cdn.worldvectorlogo.com/logos/asana-12.svg",
  "https://cdn.worldvectorlogo.com/logos/google-drive.svg",
  "https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg",
  "https://cdn.worldvectorlogo.com/logos/stripe-4.svg",
  "https://cdn.worldvectorlogo.com/logos/dropbox-1.svg",
  "https://cdn.worldvectorlogo.com/logos/zoom-app.svg",
  "https://cdn.worldvectorlogo.com/logos/mailchimp-freddie-icon.svg"
];

export const ProblemSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-brand-bg">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-100/40 via-brand-bg to-brand-bg pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-100 text-red-600 text-sm font-medium mb-6"
          >
            <AlertTriangle className="w-4 h-4" />
            <span>The Silent Business Killer</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-medium mb-6 text-brand-text">
            You are wasting <span className="text-red-500 line-through decoration-red-500/30 decoration-4">$46,800</span> every year.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The average freelancer loses 12 hours/week switching between disconnected tools. 
            That's unbilled time that bleeds your profit margin dry.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Chaos Visualization */}
          <div className="relative h-[400px] glass-panel rounded-2xl p-8 border-red-100 bg-white/50">
            <div className="absolute inset-0 bg-red-50/50 filter blur-3xl rounded-full transform scale-75 animate-pulse" />
            <div className="grid grid-cols-4 gap-4 h-full relative z-10">
               {icons.map((src, i) => (
                 <motion.div
                   key={i}
                   initial={{ opacity: 0, scale: 0.8 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   transition={{ delay: i * 0.1 }}
                   className="flex items-center justify-center p-4 glass-panel rounded-xl grayscale hover:grayscale-0 transition-all duration-300 bg-white shadow-sm"
                 >
                   <img src={src} alt="tool" className="w-12 h-12 opacity-80" />
                   <div className="absolute top-1/2 left-1/2 w-full h-0.5 bg-red-200 -translate-x-1/2 rotate-45 transform origin-center" />
                 </motion.div>
               ))}
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="bg-red-600 text-white font-medium text-xl px-6 py-3 rounded-lg shadow-xl shadow-red-500/20 rotate-12 border border-red-400">
                   CONTEXT SWITCHING HELL
                 </div>
               </div>
            </div>
          </div>

          {/* Hard Stats */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-red-50 p-3 rounded-lg">
                <Clock className="w-8 h-8 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-brand-text mb-2">12+ Hours Lost Weekly</h3>
                <p className="text-gray-600">Searching for files, syncing data manually, and remembering login details. That's 1.5 workdays vanished.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-red-50 p-3 rounded-lg">
                <DollarSign className="w-8 h-8 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-brand-text mb-2">Leaks in the Funnel</h3>
                <p className="text-gray-600">Leads slip through cracks because you forgot a follow-up in your messy inbox. Each lost lead is lost revenue.</p>
              </div>
            </div>

            <div className="p-6 bg-red-50/50 border-l-4 border-red-500 rounded-r-xl">
              <p className="text-lg text-red-900 italic font-normal">
                "I didn't realize I was working part-time as a data entry clerk for my own business until I saw the numbers."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
