import { Cable, PlayCircle, Clock } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      badge: 'Step 01',
      title: 'Connect workflow',
      description: 'Integrate ARKETRA directly into your current ATS setup (Lever, Greenhouse, etc.) or spreadsheet configuration in under 10 minutes with native sandbox controls.',
      substeps: [
        'Secure OAuth connection to current ATS',
        'Custom template guidelines mapped around hiring policies',
        'Automatic timezone routing checks enabled by default',
      ],
      icon: <Cable size={22} className="text-cyan-400" />,
    },
    {
      id: 2,
      badge: 'Step 02',
      title: 'Automate repetitive tasks',
      description: 'Define your desired automated campaigns. Let ARKETRA screen inbound CVs, categorize scores, prompt outreach followups, and handle calendar coordination.',
      substeps: [
        'Interactive campaign triggers defined globally',
        'Outreach emails custom-compiled with contextual variables',
        'AI classification of candidate replies (High Intent, Rejection)',
      ],
      icon: <PlayCircle size={22} className="text-purple-400" />,
    },
    {
      id: 3,
      badge: 'Step 03',
      title: 'Save time and close positions',
      description: 'Review your streamlined dashboard logs. Direct your human focus strictly toward evaluating qualified, high-intent candidates and filling active job openings faster.',
      substeps: [
        '10+ recruiter hours reclaimed per week',
        'Candidate engagement latencies slashed by 4.2x',
        'Pristine tracking reports for client coordination',
      ],
      icon: <Clock size={22} className="text-emerald-400" />,
    },
  ];

  return (
    <section id="how-it-works" className="relative py-20 lg:py-28 overflow-hidden bg-[#030712] border-t border-gray-950">
      
      {/* Decorative timeline background line for desktop */}
      <div className="absolute top-[35%] left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-emerald-500/20 hidden lg:block" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title elements */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 lg:mb-24">
          <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#a855f7] bg-[#a855f7]/10 px-3 py-1 rounded-full border border-[#a855f7]/25">
            Deployment Engine
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white">
            Three Steps to Full Sourcing Autonomy
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Transition your staffing workflows from manual, error-prone coordination to a resilient, high-speed automated cycle.
          </p>
        </div>

        {/* Steps Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {steps.map((step) => (
            <div
              key={step.id}
              className="relative rounded-2xl border border-gray-900 bg-gray-950/40 p-6 sm:p-8 hover:border-gray-800 hover:bg-gray-950/60 transition duration-300 flex flex-col justify-between"
            >
              {/* Outer top index number badges */}
              <div className="absolute -top-4 left-6 bg-gradient-to-r from-gray-900 to-gray-950 text-xs font-mono font-bold text-cyan-400 px-3.5 py-1 rounded-full border border-gray-850">
                {step.badge}
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-950 border border-gray-800">
                  {step.icon}
                </div>

                <div className="space-y-2">
                  <h3 className="font-display text-lg sm:text-xl font-bold text-gray-100">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Subbullets */}
              <div className="mt-6 pt-4 border-t border-gray-950/80 space-y-2">
                {step.substeps.map((sub, i) => (
                  <div key={i} className="flex items-center gap-2 text-[11px] text-gray-500 leading-normal">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/20" />
                    <span>{sub}</span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
