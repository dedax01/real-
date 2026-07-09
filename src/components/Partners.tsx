import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const partners = [
  "EMAAR", "DAMAC", "OMNIYAT", "MERAAS", "NAKHEEL", "SOBHA"
];

export default function Partners() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section className="py-16 bg-charcoal border-b border-t border-gold-subtle" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <p className="text-center text-xs tracking-widest uppercase text-gray-500 mb-10">Trusted Partner of Master Developers</p>
        
        <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-50">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1, delay: index * 0.1 }}
              className="text-xl md:text-2xl font-serif text-gold tracking-widest font-semibold uppercase hover:text-white transition-colors cursor-default"
            >
              {partner}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
