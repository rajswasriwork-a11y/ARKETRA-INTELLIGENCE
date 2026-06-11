import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import Demo from './components/Demo';
import About from './components/About';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleOpenBooking = () => setIsBookingOpen(true);
  const handleCloseBooking = () => setIsBookingOpen(false);

  return (
    <div id="arketra-saas-root" className="relative min-h-screen bg-[#030712] text-gray-100 overflow-x-hidden selection:bg-cyan-500 selection:text-gray-950 font-sans">
      {/* Background glow meshes */}
      <div className="absolute top-0 left-0 right-0 h-[600px] radial-glow pointer-events-none z-0" />
      
      {/* Glassmorphic Top Header Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Hero Section */}
      <Hero onOpenBooking={handleOpenBooking} />

      {/* Recruiter Pain Points Sections */}
      <Problem />

      {/* Platforms Solution Suite */}
      <Solution />

      {/* Workflow steps sequence timelines */}
      <HowItWorks />

      {/* Quantified Benefits indicators */}
      <Benefits />

      {/* Showcase Interactive Loom Video wrappers */}
      <Demo />

      {/* About founder manifest story */}
      <About />

      {/* Section 8: Final Call-to-Action Section */}
      <section id="final-cta" className="relative py-20 lg:py-28 overflow-hidden border-t border-gray-950 bg-[#070b13]/60 grid-bg">
        {/* Colorful visual backdrop flare */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
        
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/20 bg-cyan-950/30 px-3.5 py-1 text-xs text-cyan-300 font-mono">
            <Sparkles size={11} className="inline animate-pulse" />
            <span>Scale Your Talent Acquisition Capacity</span>
          </div>

          <h2 className="font-display font-extrabold tracking-tight text-white text-3xl sm:text-4xl lg:text-5xl leading-tight max-w-3xl mx-auto">
            Ready to Automate Your Recruitment Workflow?
          </h2>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
            Join forward-thinking recruiting teams and independent agencies saving 10+ hours a week. Integrate sandbox automations customizable to your exact role requirements.
          </p>

          <div className="pt-2">
            <button
              onClick={handleOpenBooking}
              className="group inline-flex h-12 items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-gray-950 font-extrabold px-10 text-sm transition-all shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/25 cursor-pointer"
            >
              Book Free Demo
              <ArrowRight size={16} className="transition group-hover:translate-x-1" />
            </button>
          </div>

          <p className="text-[10px] text-gray-500 font-mono uppercase tracking-widest pt-2">
            30-Minute Architecture Sandbox Session • Available globally on Google Meet
          </p>
        </div>
      </section>

      {/* Navigation Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Interactive, self-governing scheduling system */}
      <BookingModal isOpen={isBookingOpen} onClose={handleCloseBooking} />
    </div>
  );
}
