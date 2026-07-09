import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-24 md:py-32 relative overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div 
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[3/4] max-w-md relative z-10 border p-3 border-gold-subtle rounded-sm">
              <div className="w-full h-full bg-charcoal overflow-hidden relative">
                {/* Use a placeholder image that matches the requested aesthetic: elegant female broker in dark suit with pearls */}
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" 
                  alt="Founder & Principal Broker" 
                  className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                />
              </div>
            </div>
            {/* Decorative block */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-gold/5 -z-10 blur-2xl" />
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t border-l border-gold/40 -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-8 bg-gold" />
              <span className="text-gold tracking-widest text-xs font-semibold uppercase">The Heritage</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-8 leading-tight">
              More than a decade connecting global investors with Dubai's <span className="italic text-gradient-gold">finest real estate</span>.
            </h2>
            
            <div className="space-y-6 text-gray-400 font-light leading-relaxed">
              <p>
                Founded on the principles of absolute discretion, unmatched market intelligence, and uncompromising luxury, we have established ourselves as the premier authority in Dubai's ultra-prime property sector.
              </p>
              <p>
                Our clientele demands perfection, and our tailored approach ensures that every acquisition is not merely a transaction, but a carefully curated addition to their legacy. From the Palm Jumeirah to the heart of Downtown, we provide exclusive access to properties that redefine extraordinary living.
              </p>
            </div>

            <div className="mt-10">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Signature_Placeholder.svg/300px-Signature_Placeholder.svg.png" className="h-12 opacity-50 invert" alt="Signature" />
              <p className="mt-4 font-serif text-white">Elena Rostova</p>
              <p className="text-xs tracking-widest uppercase text-gold mt-1">Founder & Managing Director</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
