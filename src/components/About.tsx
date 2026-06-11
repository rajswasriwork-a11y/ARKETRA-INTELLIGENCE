import { Mail, Compass, Eye, ShieldCheck, Zap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-20 lg:py-28 overflow-hidden bg-gray-950/20 border-t border-gray-900">
      
      {/* Background blurs */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Block: Premium Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 blur-2xl rounded-3xl" />
            
            <div className="relative rounded-3xl border border-gray-900 bg-gray-950/80 p-8 text-left space-y-6">
              <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#22d3ee] bg-[#22d3ee]/10 px-3 py-1 rounded-full border border-cyan-500/20">
                A Note From The Founder
              </span>
              
              <p className="text-sm text-gray-300 italic leading-relaxed">
                "I spent years watching recruiters copy-paste the exact same follow-up emails, fight calendar templates, and manually filter resumes instead of speaking to interested talent. Arketra was built to put those tasks on automatic pilots so you can focus entirely on your candidates."
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-gray-900">
                <div className="w-12 h-12 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 bg-gray-900 font-bold font-display text-base text-cyan-400">
                  AR
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-100">Alex Rivera</h4>
                  <p className="text-[10px] text-gray-500 font-mono">Founder, Arketra Intelligence</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Block: Company Positioning & Mission points */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#a855f7] bg-[#a855f7]/10 px-3.5 py-1 rounded-full border border-[#a855f7]/25">
              The Mission
            </span>
            
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight text-white leading-normal">
              About Arketra Intelligence
            </h2>
            
            <p className="text-gray-400 text-sm leading-relaxed">
              We help staffing companies and independent recruitment agencies put boring, repetitive manual workflows on autopilot.
            </p>
            
            <p className="text-gray-400 text-sm leading-relaxed">
              We do not believe in replacing human recruiters. True talent sourcing requires human judgment and authentic relationship building. We simply automate the tedious middle tasks — like tracking down time slots or following up on cold threads — so your team has more time to do what they do best: build real human connections.
            </p>

            {/* Strategic Core Values indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-gray-900">
              <div className="flex gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-950 border border-cyan-500/20 text-cyan-400">
                  <ShieldCheck size={14} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-200">100% Secure & Private</h4>
                  <p className="text-[11px] text-gray-400 leading-normal">Your candidate data, pipeline information, and notes remain private and secure.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-purple-950 border border-purple-500/20 text-purple-400">
                  <Zap size={14} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-200">Practical & Jargon-Free</h4>
                  <p className="text-[11px] text-gray-400 leading-normal">No complicated code to write or run. We set up everything and handle the backend logic for you.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
