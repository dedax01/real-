import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const team = [
  {
    name: "Alexander Vance",
    role: "Director of Ultra-Prime",
    languages: "English, Russian, Arabic",
    exp: "15 Years",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Sophia Laurent",
    role: "Off-Plan & Investment Lead",
    languages: "English, French, Mandarin",
    exp: "12 Years",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Omar Al Maktoum",
    role: "Emirati Heritage Specialist",
    languages: "Arabic, English",
    exp: "20 Years",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop"
  }
];

export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-24 md:py-32 bg-charcoal" id="team" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16 md:mb-24">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-8 bg-gold" />
            <span className="text-gold tracking-widest text-xs font-semibold uppercase">The Advisors</span>
            <div className="h-[1px] w-8 bg-gold" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-white">Elite Market Specialists</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="relative overflow-hidden aspect-[3/4] mb-6">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <button className="text-xs uppercase tracking-widest text-gold border border-gold px-4 py-2 hover:bg-gold hover:text-obsidian transition-colors">
                    Contact Advisor
                  </button>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-serif text-white mb-1">{member.name}</h3>
                <p className="text-gold text-sm mb-4">{member.role}</p>
                <div className="flex justify-center gap-4 text-xs font-light text-gray-400">
                  <span>{member.languages}</span>
                  <span className="w-[1px] h-3 bg-gray-600 self-center" />
                  <span>{member.exp}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
