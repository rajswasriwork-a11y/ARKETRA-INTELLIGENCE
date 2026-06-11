import { Sparkles, Linkedin, Award, Compass, Eye } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-20 lg:py-28 overflow-hidden bg-gray-950/20">
      
      {/* Background blurs */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Block: Premium Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 blur-2xl rounded-3xl" />
            
            <div className="relative rounded-3xl border border-gray-900 bg-gray-950/80 p-8 text-left space-y-6">
              <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-cyan-400 bg-cyan-950 px-3 py-1 rounded-full border border-cyan-500/20">
                Founders Manifesto
              </span>
              
              <p className="text-sm text-gray-300 italic leading-relaxed">
                "ARKETRA was built out of pure professional frustration. We saw extraordinary technical sourcers spending most of their daylight hours copypasting templates, manually scheduling interview spots, and formatting resume lists, rather than actually building human relationships with engineering candidates."
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-gray-900">
                <div className="w-12 h-12 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 bg-gray-900 font-bold font-display text-base text-cyan-400">
                  AK
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-100">Alaric Kincaid</h4>
                  <p className="text-[10px] text-gray-500">Founder & CEO, ARKETRA Intelligence</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Block: Company Positioning & Mission points */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#a855f7] bg-[#a855f7]/10 px-3 py-1 rounded-full border border-[#a855f7]/25">
              About ARKETRA
            </span>
            
            <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-white leading-normal">
              Empowering Human Recruiter Intelligence
            </h2>
            
            <p className="text-gray-400 text-sm leading-relaxed">
              We do not believe in replacing the recruiter. The deepest, most successful recruitment outcomes originate from meaningful human alignments, conversations, and career vision pairing.
            </p>
            
            <p className="text-gray-400 text-sm leading-relaxed">
              Our core mission is to empower teams with autonomous agents that absorb the silent, mechanical admin load, allowing recruiters to focus 100% of their bandwidth on evaluating talent and guiding clients.
            </p>

            {/* Strategic Core Values indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-gray-900">
              <div className="flex gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-950 border border-cyan-500/20 text-cyan-400">
                  <Compass size={14} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-200">Values Integration</h4>
                  <p className="text-[11px] text-gray-500 leading-normal">Ensuring candidate interactions remain respectful and authentic.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-purple-950 border border-purple-500/20 text-purple-400">
                  <Eye size={14} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-200">Complete Transparency</h4>
                  <p className="text-[11px] text-gray-500 leading-normal">Open, logs-driven auditing showing every single outbound action.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
