import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "Their discretion and access to truly off-market properties on Palm Jumeirah is unmatched. A flawless acquisition from start to finish.",
    author: "James W.",
    country: "United Kingdom",
    rating: 5
  },
  {
    text: "As an international investor, I required a team that understood the nuances of structuring and could act swiftly. They delivered beyond expectations.",
    author: "Wei C.",
    country: "Singapore",
    rating: 5
  },
  {
    text: "The level of concierge service provided during our penthouse search was extraordinary. They are the definition of luxury real estate.",
    author: "Elena M.",
    country: "Switzerland",
    rating: 5
  }
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-24 md:py-32 bg-obsidian relative" ref={ref}>
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gold-subtle z-0" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-panel p-10 relative mt-8 lg:mt-0"
            >
              <Quote className="absolute top-8 right-8 text-gold/20 w-12 h-12" />
              
              <div className="flex gap-1 mb-8 text-gold">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-gray-300 font-light leading-loose mb-8 text-sm italic">
                "{testimonial.text}"
              </p>
              
              <div className="border-t border-gold-subtle pt-6">
                <p className="font-serif text-white text-lg">{testimonial.author}</p>
                <p className="text-gold text-xs tracking-widest uppercase mt-1">{testimonial.country}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
