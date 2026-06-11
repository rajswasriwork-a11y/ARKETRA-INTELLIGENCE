import { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'The Pain', href: '#problem' },
    { label: 'Platform Solutions', href: '#solution' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Quantified Benefits', href: '#benefits' },
    { label: 'Live Demos', href: '#demos' },
    { label: 'Our Story', href: '#about' },
  ];

  return (
    <nav
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-[#030712]/85 backdrop-blur-md border-b border-gray-900/60 py-3 shadow-xl' : 'bg-transparent py-5'}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          {/* Logo & Brand Wordmark */}
          <a href="#" className="flex items-center gap-2 group transition">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition duration-300">
              <Sparkles size={18} className="animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-base font-extrabold tracking-tight text-white sm:text-lg">
                ARKETRA <span className="text-cyan-400">Intelligence</span>
              </span>
              <span className="text-[9px] text-gray-500 tracking-wider uppercase font-mono">AUTONOMOUS SOURCING</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-lg px-3.5 py-2 text-xs font-medium text-gray-400 hover:text-white hover:bg-gray-900/35 transition"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA Callout */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onOpenBooking}
              className="group flex items-center gap-1.5 rounded-lg bg-white hover:bg-cyan-400 hover:text-gray-950 text-gray-950 font-bold px-4 py-2 text-xs transition duration-300 shadow-[0_4px_20px_rgba(255,255,255,0.05)] cursor-pointer"
            >
              Book Free Demo
              <ArrowRight size={13} className="transition group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Mobile hamburger menu toggle */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-lg p-2 text-gray-400 hover:bg-gray-900 hover:text-white focus:outline-none transition"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-gray-900 bg-[#030712] px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-950"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-gray-900 mt-4 px-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex justify-center items-center gap-2 rounded-lg bg-cyan-500 text-gray-950 font-bold py-3 text-sm transition"
            >
              Book Free Demo
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
