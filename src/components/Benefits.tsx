import { TrendingUp, Clock, FileCheck2, UserCheck, ShieldCheck } from 'lucide-react';

export default function Benefits() {
  const metrics = [
    {
      id: 'b1',
      metric: '10+ Hours',
      label: 'Saved Weekly',
      title: 'Reclaim Sourcing Time',
      description: 'Erase mechanical outbox followups, file parsing, and calendar coordinate loops. Spend your hours evaluating candidate alignment on real human calls.',
      icon: <Clock size={18} className="text-cyan-400" />,
    },
    {
      id: 'b2',
      metric: '4.2x Fast',
      label: 'Faster Engagement',
      title: 'Instant Candidate Communication',
      description: 'ARKETRA responds to and categorizes outbound candidate replies instantly, dramatically reducing follow-up times and keeping threads active.',
      icon: <TrendingUp size={18} className="text-purple-400" />,
    },
    {
      id: 'b3',
      metric: '92% Less',
      label: 'Manual Admin Work',
      title: 'Erase Scheduling Fatigue',
      description: 'Leave the back-and-forth coordinate links behind. Our calendar sync guarantees a booking experience without manual email chains.',
      icon: <FileCheck2 size={18} className="text-emerald-400" />,
    },
    {
      id: 'b4',
      metric: '65% Up',
      label: 'Recruiter Productivity',
      title: 'Maximize Sourcing Leverage',
      description: 'A single coordinator can now navigate double the recruitment volume while preserving fully customized, professional communications.',
      icon: <UserCheck size={18} className="text-cyan-400" />,
    },
  ];

  return (
    <section id="benefits" className="relative py-20 lg:py-28 overflow-hidden bg-gray-950/20">
      
      {/* Visual background lights */}
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Text */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 lg:mb-20">
          <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#10b981] bg-[#10b981]/15 px-3 py-1 rounded-full border border-[#10b981]/25">
            Quantified Benefits
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white animate-fade-in-up">
            Quantified Sourcing Outcomes
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            See the structural performance improvements leading staffing agencies and high-growth recruiters experience when moving to ARKETRA.
          </p>
        </div>

        {/* Dynamic Bento Box Metric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric) => (
            <div
              key={metric.id}
              className="relative rounded-2xl border border-gray-900 bg-gray-950/40 p-6 hover:border-gray-800 hover:bg-gray-950/60 transition duration-300 flex flex-col justify-between space-y-6"
            >
              {/* Metric Banner element */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-900 border border-gray-850">
                    {metric.icon}
                  </div>
                  <span className="text-[9px] uppercase tracking-wider font-mono text-gray-500">
                    Verified Metric
                  </span>
                </div>

                <div className="space-y-1">
                  <p className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-none">
                    {metric.metric}
                  </p>
                  <p className="text-[10px] uppercase font-mono tracking-widest text-emerald-400 font-bold">
                    {metric.label}
                  </p>
                </div>
              </div>

              {/* Text explanations */}
              <div className="space-y-2 pt-4 border-t border-gray-950">
                <h3 className="text-xs font-semibold text-gray-200">
                  {metric.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-gray-400 leading-relaxed">
                  {metric.description}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* High-Fidelity Testimonial callout block */}
        <div className="mt-16 bg-[#070b13]/40 border border-gray-900 rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-6">
          <div className="w-14 h-14 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 bg-gray-950 shrink-0 font-bold font-display text-lg text-cyan-400">
            MB
          </div>
          <div className="space-y-2 text-left">
            <p className="text-xs sm:text-sm text-gray-300 italic">
              "We deployed ARKETRA’s candidate automation module for our engineering recruitment desk. Sourcing productivity shot up immediately, and our average booking delays collapsed from 6 days to under 12 hours."
            </p>
            <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
              — <strong className="text-gray-300">Marcus Brody</strong>, Managing Director at Apex Executive Sourcing
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
