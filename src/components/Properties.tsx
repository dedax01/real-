import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { MapPin, Bed, Maximize } from 'lucide-react';

const properties = [
  {
    name: "Bugatti Residences Penthouse",
    location: "Business Bay",
    price: "AED 125,000,000",
    beds: 5,
    area: "14,500 sqft",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Armani Signature Villa",
    location: "Palm Jumeirah",
    price: "AED 85,000,000",
    beds: 6,
    area: "9,200 sqft",
    image: "https://images.unsplash.com/photo-1613490908677-70950a4175ac?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Baccarat Hotel & Residences",
    location: "Downtown Dubai",
    price: "AED 45,000,000",
    beds: 4,
    area: "5,100 sqft",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Orla by Dorchester Collection",
    location: "Palm Jumeirah",
    price: "AED 62,000,000",
    beds: 4,
    area: "7,500 sqft",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop"
  }
];

export default function Properties() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="py-24 md:py-32 relative" id="properties">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-charcoal -z-10 rounded-tl-[150px]" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[1px] w-8 bg-gold" />
              <span className="text-gold tracking-widest text-xs font-semibold uppercase">Exclusive Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-white">Featured Properties</h2>
          </div>
          <button className="text-sm tracking-widest uppercase font-medium border-b border-gold text-gold hover:text-white hover:border-white transition-colors pb-1 w-max">
            View All Properties
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12" ref={ref}>
          {properties.map((prop, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-[4/3] mb-6">
                <img 
                  src={prop.image} 
                  alt={prop.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                  <button className="px-6 py-3 border border-gold text-white backdrop-blur-sm hover:bg-gold hover:text-obsidian transition-colors uppercase tracking-widest text-xs font-semibold">
                    View Details
                  </button>
                </div>
              </div>
              
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-2xl font-serif text-white mb-2 group-hover:text-gold transition-colors">{prop.name}</h3>
                  <div className="flex items-center gap-2 text-gray-400 text-sm font-light">
                    <MapPin size={14} className="text-gold" />
                    {prop.location}
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-gold font-medium block">{prop.price}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-6 mt-4 pt-4 border-t border-gold-subtle text-sm text-gray-400 font-light">
                <div className="flex items-center gap-2">
                  <Bed size={16} />
                  <span>{prop.beds} Beds</span>
                </div>
                <div className="flex items-center gap-2">
                  <Maximize size={16} />
                  <span>{prop.area}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
