import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section className="py-32 relative bg-obsidian overflow-hidden" ref={ref}>
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border-[1px] border-gold border-dashed animate-[spin_120s_linear_infinite]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border-[1px] border-gold animate-[spin_60s_linear_infinite_reverse]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-gold" />
            <span className="text-gold tracking-widest text-xs font-semibold uppercase">Take the Next Step</span>
            <div className="h-[1px] w-12 bg-gold" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">
            Let's Find Your Next <br className="hidden md:block"/> <span className="italic text-gradient-gold">Investment</span>
          </h2>
          
          <p className="text-gray-400 font-light mb-12 max-w-xl mx-auto">
            Schedule a confidential consultation with our ultra-prime specialists to discuss your portfolio objectives and explore exclusive opportunities.
          </p>
          
          <button className="px-10 py-5 bg-gold text-obsidian hover:bg-gold-light transition-all duration-300 text-sm tracking-widest uppercase font-semibold hover:shadow-[0_0_30px_rgba(197,160,89,0.3)]">
            Schedule Your Private Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
}
