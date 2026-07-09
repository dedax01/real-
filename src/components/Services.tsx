import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Shield, Gem, TrendingUp, Building2, MapPin, Star } from 'lucide-react';

const services = [
  { icon: TrendingUp, title: "Investment Consulting", desc: "Strategic advice for high-yield real estate investments in Dubai's most promising districts." },
  { icon: Shield, title: "Golden Visa Assistance", desc: "End-to-end support in securing your UAE Golden Visa through property investment." },
  { icon: Gem, title: "Luxury Property Selection", desc: "Curated access to off-market mansions, penthouses, and ultra-luxury villas." },
  { icon: Building2, title: "Off-Plan Specialists", desc: "Early access to premium projects from Emaar, DAMAC, Omniyat, and more." },
  { icon: MapPin, title: "Portfolio Management", desc: "Comprehensive management of your real estate assets ensuring maximum ROI." },
  { icon: Star, title: "VIP Customer Experience", desc: "Concierge-level service, handling every detail of your real estate journey." }
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="py-24 md:py-32 bg-charcoal" id="services">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16 md:mb-24">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-8 bg-gold" />
            <span className="text-gold tracking-widest text-xs font-semibold uppercase">Our Expertise</span>
            <div className="h-[1px] w-8 bg-gold" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-white">Bespoke Advisory Services</h2>
        </div>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group relative bg-obsidian border border-gold-subtle p-8 hover:border-gold transition-all duration-500 overflow-hidden"
            >
              {/* Subtle hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <service.icon className="w-10 h-10 text-gold mb-6 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
                <h3 className="text-xl font-serif text-white mb-4 group-hover:text-gold transition-colors">{service.title}</h3>
                <p className="text-gray-400 font-light text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
              
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-gold opacity-0 group-hover:opacity-50 transition-opacity duration-500 -translate-y-2 translate-x-2 group-hover:translate-y-0 group-hover:translate-x-0" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
