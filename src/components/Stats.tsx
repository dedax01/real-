import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const stats = [
  { value: "10+", label: "Years in Market" },
  { value: "AED 2B+", label: "Properties Sold" },
  { value: "2,500+", label: "Happy Investors" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "30+", label: "Nationalities Served" }
];

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="relative z-20 -mt-10 md:-mt-16 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-panel py-8 px-6 md:px-12 rounded-lg grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4 divide-x divide-gold/10"
        >
          {stats.map((stat, index) => (
            <div key={index} className={`flex flex-col items-center justify-center text-center ${index === 0 ? 'pl-0 border-none' : ''}`}>
              <span className="text-3xl md:text-4xl font-serif text-gold mb-2">{stat.value}</span>
              <span className="text-xs tracking-widest uppercase text-gray-400 font-medium">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
