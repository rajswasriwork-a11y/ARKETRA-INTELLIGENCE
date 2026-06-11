import { Sparkles } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export default function Footer({ onOpenBooking }: FooterProps) {
  const links = [
    { label: 'The Problem', href: '#problem' },
    { label: 'What We Automate', href: '#what-we-automate' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Who It Is For', href: '#who-this-is-for' },
    { label: 'Free Audit Form', href: '#early-access' },
    { label: 'Frequently Asked Questions', href: '#faq' },
  ];

  return (
    <footer className="relative bg-[#030712] border-t border-gray-900 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-gray-900/65">
          {/* Logo Brand information */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400 border border-cyan-500/20">
                <Sparkles size={16} />
              </div>
              <span className="font-display text-base font-extrabold tracking-tight text-white">
                ARKETRA <span className="text-cyan-400">Intelligence</span>
              </span>
            </div>
            
            <p className="text-xs text-gray-500 max-w-sm leading-relaxed">
              ARKETRA helps modern recruiting teams, staffing firms, and independent coordinators save hours every single week through practical recruitment automation setup.
            </p>
          </div>

          {/* Links Indices */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest font-mono">Platform Directories</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-500 hover:text-white transition"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Action trigger footer */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest font-mono">Book Direct Calls</h4>
            <p className="text-xs text-gray-500 leading-normal">
              Schedule your custom recruitment automation audit and set up your workflows.
            </p>
            <button
              onClick={onOpenBooking}
              className="w-full block rounded-lg bg-gray-900 hover:bg-gray-850 hover:text-white border border-gray-800 text-center text-xs font-semibold text-gray-300 py-2.5 px-4 transition cursor-pointer"
            >
              Request Custom Audit Call
            </button>
          </div>
        </div>

        {/* Bottom copyright bars */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-[11px] text-gray-600 gap-4">
          <p>© 2026 ARKETRA Intelligence. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-gray-400 transition cursor-pointer">Privacy Policy</span>
            <span className="hover:text-gray-400 transition cursor-pointer">Terms of Service</span>
            <span className="hover:text-gray-400 transition cursor-pointer">Google Calendar Integration</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
