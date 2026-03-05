
import React, { useState, useEffect, useRef } from 'react';
// Shadow motion to bypass environment-specific type errors with framer-motion props
import { motion as motionBase, useInView, animate } from 'framer-motion';
const motion = motionBase as any;
import { Quote, Zap, TrendingUp, ChevronRight, CheckCircle2 } from 'lucide-react';

const METRICS = [
  {
    value: "$450K+",
    description: "Billable hours recovered for independent pros in the last 12 months."
  },
  {
    value: "40-70%",
    description: "Reduction in project management time with Revenue Velocity System™."
  },
  {
    value: "15+ Hrs",
    description: "Average deep work time recovered per week for every active user."
  },
  {
    value: "$4,200",
    description: "Average annual financial leakage saved per user via Clarity Framework™."
  }
];

const STORY_CARDS = [
  {
    title: "Financial Breakthrough",
    content: "The Financial HQ found three recurring subscriptions I'd forgotten about and two unbilled projects from last quarter. It literally found money.",
    author: "MARCUS T., PRODUCT DESIGNER",
    resultIcon: <TrendingUp className="w-12 h-12 text-[#ff751f]" />,
    result: "$2,850 Recovered",
    metric: "Instant ROI"
  },
  {
    title: "The Admin Exit",
    content: "I was spending 10 hours a week on 'busy work'. KineticOS automated my client onboarding and invoicing. I finally feel like a CEO again.",
    author: "SOPHIA R., BRAND STRATEGIST",
    resultIcon: <Zap className="w-12 h-12 text-[#ff751f]" />,
    result: "12hrs Saved Weekly",
    metric: "Operational Velocity"
  }
];

/**
 * AnimatedCounter parses a string for numeric values and animates them from 0 to target.
 */
const AnimatedCounter: React.FC<{ value: string; delay?: number }> = ({ value, delay = 0 }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState("");

  useEffect(() => {
    if (!isInView) return;

    const numberRegex = /\d[\d,]*/g;
    const matches = value.match(numberRegex);
    
    if (!matches) {
      setDisplayValue(value);
      return;
    }

    const numericTargets = matches.map(m => parseFloat(m.replace(/,/g, '')));
    const staticParts = value.split(numberRegex);

    const mainAnim = animate(0, 1, {
      duration: 2.5,
      delay: delay,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (progress) => {
        let result = "";
        staticParts.forEach((part, i) => {
          result += part;
          if (numericTargets[i] !== undefined) {
            const currentVal = Math.floor(numericTargets[i] * progress);
            const formatted = matches[i].includes(',') 
              ? currentVal.toLocaleString() 
              : currentVal.toString();
            result += formatted;
          }
        });
        setDisplayValue(result);
      }
    });

    return () => mainAnim.stop();
  }, [isInView, value, delay]);

  return <span ref={nodeRef}>{displayValue || value}</span>;
};

const MetricFlipCard = ({ story, index }: { story: typeof STORY_CARDS[0], index: number }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative h-[380px] w-full perspective-1000 group cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ 
          type: "spring", 
          stiffness: 200, 
          damping: 25,
          mass: 1 
        }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative h-full w-full"
      >
        {/* Front Side */}
        <div 
          className="absolute inset-0 backface-hidden p-10 rounded-[2.5rem] bg-white border border-black/5 flex flex-col h-full shadow-[0_20px_50px_rgba(0,0,0,0.04)]"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center text-[#ff751f] mb-8">
            <Quote className="w-5 h-5 fill-current" />
          </div>
          <h3 className="text-2xl font-bold text-brand-text mb-4 leading-tight">{story.title}</h3>
          <p className="text-gray-500 text-base leading-relaxed mb-6">{story.content}</p>
          
          <div className="mt-auto pt-6 border-t border-black/5">
            <span className="text-[11px] font-bold text-[#ff751f] uppercase tracking-widest">{story.author}</span>
            <div className="mt-2 text-[10px] text-gray-400 font-medium uppercase tracking-tighter">Hover to see result</div>
          </div>
        </div>

        {/* Back Side */}
        <div 
          className="absolute inset-0 backface-hidden p-10 rounded-[2.5rem] bg-white flex flex-col items-center justify-center h-full shadow-2xl border-2 border-brand-orange/20"
          style={{ 
            backfaceVisibility: "hidden", 
            transform: "rotateY(180deg)" 
          }}
        >
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isFlipped ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center text-center"
          >
            <div className="mb-6 p-4 rounded-full bg-brand-orange/5">
              {story.resultIcon}
            </div>
            <h4 className="text-2xl font-bold text-brand-text mb-2 tracking-tight">{story.result}</h4>
            <div className="bg-[#ff751f] text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-8">
              {story.metric}
            </div>
            <button 
              className="text-[#ff751f] font-bold text-xs uppercase tracking-widest border-b border-brand-orange/20 hover:border-brand-orange transition-all"
            >
              Learn the method
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export const AchievementMetricsSection: React.FC = () => {
  return (
    <section className="bg-brand-bg text-brand-text py-16 md:py-40 px-8 md:px-16 lg:px-24 border-t border-black/5 relative overflow-hidden">
      {/* Subtle background decorative element */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/4"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl md:text-5xl lg:text-6xl font-medium mb-24 tracking-tight leading-tight max-w-4xl"
        >
          What our users achieve <br className="hidden md:block" />
          with <span className="text-[#ff751f]">KineticOS</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-16 md:gap-y-24 mb-24">
          {METRICS.map((metric, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <motion.div 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: idx * 0.15, ease: "circOut" }}
                style={{ originX: 0 }}
                className="absolute top-0 left-0 right-0 h-px bg-black/10 group-first:hidden md:group-nth-2:hidden md:block"
              />

              <div className="pt-12">
                <div className="text-[#ff751f] text-6xl md:text-8xl font-bold mb-6 tracking-tighter">
                  <AnimatedCounter value={metric.value} delay={idx * 0.15 + 0.4} />
                </div>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.15 + 0.6, ease: "easeOut" }}
                  className="text-gray-500 text-lg md:text-2xl font-medium leading-relaxed max-w-md group-hover:text-brand-text transition-colors duration-500"
                >
                  {metric.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* New Social Proof Flip Cards Section */}
        <div className="pt-24 border-t border-black/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
            <h3 className="text-2xl md:text-3xl font-medium text-brand-text max-w-lg">
              Individual results may vary, but the <span className="text-[#ff751f]">velocity</span> is real.
            </h3>
            <div className="flex items-center gap-2 text-gray-400 font-bold uppercase tracking-widest text-xs">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              Verified Kinetic Users
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {STORY_CARDS.map((story, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 * i, duration: 0.8 }}
              >
                <MetricFlipCard story={story} index={i} />
              </motion.div>
            ))}
          </div>
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
        @media (min-width: 768px) {
          .grid > div:nth-child(1) > div:first-child,
          .grid > div:nth-child(2) > div:first-child {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};
