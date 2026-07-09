import { Instagram, Linkedin, MessageCircle, MapPin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal pt-20 pb-10 border-t border-gold/20" id="contact">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 flex items-center justify-center border border-gold rounded-full">
                <span className="font-serif text-gold text-lg">E</span>
              </div>
              <span className="font-serif text-xl tracking-wider text-white">
                ELEVATE <span className="text-gold">DUBAI</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm font-light leading-relaxed mb-6">
              The pinnacle of luxury real estate representation in Dubai. Serving global ultra-high-net-worth individuals with absolute discretion.
            </p>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-6">Connect</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-gold transition-colors text-sm font-light">
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-gold transition-colors text-sm font-light">
                  <Instagram size={16} />
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-gold transition-colors text-sm font-light">
                  <Linkedin size={16} />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm font-light">
                <MapPin size={16} className="mt-1 flex-shrink-0 text-gold" />
                <span>Level 42, ICD Brookfield Place<br/>DIFC, Dubai, UAE</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm font-light">
                <Phone size={16} className="text-gold" />
                +971 4 000 0000
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm font-light">
                <Mail size={16} className="text-gold" />
                private@elevatedubai.com
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-6">Legal</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><a href="#" className="text-gray-400 hover:text-gold transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gold transition-colors">Terms of Service</a></li>
              <li><span className="text-gray-500">RERA ORN: 12345</span></li>
              <li><span className="text-gray-500">DED License: 987654</span></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gold/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs tracking-wide">
            &copy; {new Date().getFullYear()} Elevate Dubai Luxury Real Estate. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-gray-600 tracking-wide uppercase">
            <span>Discretion</span>
            <span>&bull;</span>
            <span>Excellence</span>
            <span>&bull;</span>
            <span>Legacy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
