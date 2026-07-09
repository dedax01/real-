/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import Properties from './components/Properties';
import Process from './components/Process';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Partners from './components/Partners';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-obsidian text-white font-sans selection:bg-gold selection:text-obsidian">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Properties />
        <Process />
        <Team />
        <Testimonials />
        <Partners />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
