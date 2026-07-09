import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const steps = [
  { num: "01", title: "Consultation", desc: "Understanding your vision, investment goals, and precise lifestyle requirements." },
  { num: "02", title: "Selection", desc: "Curating a bespoke portfolio of off-market and exclusive properties matching your criteria." },
  { num: "03", title: "Viewing", desc: "Private tours arranged with absolute discretion, luxury transport, and expert guidance." },
  { num: "04", title: "Negotiation", desc: "Leveraging our market authority to secure the absolute best terms for your investment." },
  { num: "05", title: "Closing", desc: "Seamless handling of all legalities, structuring, and administrative processes." },
  { num: "06", title: "After Sales", desc: "Ongoing portfolio management, concierge services, and design consultation." }
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-24 md:py-32 bg-obsidian border-t border-b border-gold-subtle" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">The Acquisition Process</h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-light">A seamless, white-glove journey from initial vision to final acquisition.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 lg:gap-x-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-[40px] left-0 w-full h-[1px] bg-gold-subtle z-0" />
          <div className="hidden lg:block absolute top-[280px] left-0 w-full h-[1px] bg-gold-subtle z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative z-10 flex flex-col"
            >
              <div className="w-20 h-20 bg-charcoal border border-gold rounded-full flex items-center justify-center mb-8 mx-auto lg:mx-0 shadow-[0_0_30px_rgba(197,160,89,0.1)]">
                <span className="font-serif text-2xl text-gold">{step.num}</span>
              </div>
              <div className="text-center lg:text-left">
                <h3 className="text-xl font-serif text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 font-light text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
