import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden" id="home">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-charcoal-light/30 rounded-bl-[100px] border-b border-l border-gold/10" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid md:grid-cols-2 gap-12 lg:gap-20 relative z-10 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="pt-10 md:pt-0"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-gold" />
            <span className="text-gold tracking-widest text-xs font-semibold uppercase">Premium Real Estate</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.1] mb-6">
            Where Exceptional <br className="hidden md:block"/> Investments Meet <br className="hidden md:block"/>
            <span className="text-gradient-gold italic">Extraordinary Living</span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl font-light mb-10 max-w-lg leading-relaxed">
            Connecting global visionaries with Dubai's most exclusive properties. Experience unparalleled luxury and intelligent wealth building.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <button className="px-8 py-4 bg-gold text-obsidian hover:bg-gold-light transition-colors duration-300 text-sm tracking-widest uppercase font-semibold flex items-center justify-center gap-3 group">
              Explore Properties
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border border-gold-subtle text-white hover:border-gold hover:bg-gold/5 transition-colors duration-300 text-sm tracking-widest uppercase font-medium flex items-center justify-center">
              Book a Consultation
            </button>
          </div>
        </motion.div>

        {/* Right Image Composition */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="relative mt-12 md:mt-0"
        >
          <div className="relative aspect-[4/5] max-w-md mx-auto md:ml-auto md:mr-0 z-10 border border-gold/20 p-2 rounded-t-full">
            <div className="w-full h-full rounded-t-full overflow-hidden relative">
              <div className="absolute inset-0 bg-obsidian/20 z-10" />
              {/* This image uses a high-end architectural/skyline shot with a professional feel, 
                  representing the high-end broker context provided by the user. */}
              <img 
                src="https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1200&auto=format&fit=crop" 
                alt="Dubai Luxury Skyline" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            
            {/* Experience Badge */}
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1, duration: 0.6, type: "spring" }}
              className="absolute -bottom-8 -left-8 md:-left-12 glass-panel rounded-full w-32 h-32 flex flex-col items-center justify-center p-4 border border-gold shadow-2xl z-20"
            >
              <span className="text-3xl font-serif text-gold">10+</span>
              <span className="text-[10px] uppercase tracking-widest text-center mt-1 font-medium text-gray-300">Years<br/>Experience</span>
            </motion.div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-1/4 -right-12 w-24 h-[1px] bg-gold/40 hidden md:block" />
          <div className="absolute bottom-1/4 -right-12 w-24 h-[1px] bg-gold/40 hidden md:block" />
        </motion.div>
      </div>
    </section>
  );
}
