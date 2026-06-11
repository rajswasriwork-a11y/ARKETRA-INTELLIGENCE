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
    { label: 'The Problem', href: '#problem' },
    { label: 'What We Automate', href: '#what-we-automate' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Live Demos', href: '#demos' },
    { label: 'Who It Is For', href: '#who-is-it-for' },
    { label: 'Our Story', href: '#about' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <nav
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-[#030712]/90 backdrop-blur-md border-b border-gray-900/80 py-3 shadow-xl' : 'bg-[#030712]/40 backdrop-blur-sm py-4'}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          {/* Logo & Brand Wordmark */}
          <a href="#" className="flex items-center gap-2.5 group transition">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition duration-305">
              <Sparkles size={18} />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-base font-extrabold tracking-tight text-white sm:text-lg">
                ARKETRA <span className="text-cyan-400">Intelligence</span>
              </span>
              <span className="text-[9px] text-gray-500 tracking-wider uppercase font-mono">Simple Recruitment Automation</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-lg px-3 py-1.5 text-xs font-semibold text-gray-400 hover:text-white hover:bg-gray-900/40 transition"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA Callout */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onOpenBooking}
              className="group flex items-center gap-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-bold px-4 py-2.5 text-xs transition duration-300 shadow-md shadow-cyan-500/10 cursor-pointer"
            >
              Get Free Automation Audit
              <ArrowRight size={13} className="transition group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Mobile hamburger menu toggle */}
          <div className="flex lg:hidden">
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
        <div className="lg:hidden border-b border-gray-900 bg-[#030712] px-4 pt-2 pb-6 space-y-1">
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
              Get Free Automation Audit
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
