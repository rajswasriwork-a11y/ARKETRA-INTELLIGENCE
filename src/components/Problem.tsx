import { AlertCircle, Trash2, Calendar, FileText, Layers, XCircle } from 'lucide-react';

export default function Problem() {
  const problems = [
    {
      id: 'p1',
      title: 'Manual Follow-ups',
      description: 'Recruiters spend up to 4 hours daily copying, editing, and sending manual followup emails to passive candidates who did not reply to initial outreach.',
      stat: '4.2 Hrs',
      statLabel: 'Lost daily per recruiter',
      icon: <Layers size={18} className="text-red-400" />,
    },
    {
      id: 'p2',
      title: 'Spreadsheet Chaos',
      description: 'Tracking status, reply times, and multi-channel messages in disconnected spreadsheets leads to candidate drop-off and broken pipelines.',
      stat: '28%',
      statLabel: 'Candidate leakage rate',
      icon: <XCircle size={18} className="text-red-400" />,
    },
    {
      id: 'p3',
      title: 'Candidate Tracking Issues',
      description: 'Stale CRM profiles and lag times. When candidate responses arrive, recruiters lack instant context, delaying next steps and frustrating candidates.',
      stat: '3 Days',
      statLabel: 'Average delay in response',
      icon: <AlertCircle size={18} className="text-yellow-400" />,
    },
    {
      id: 'p4',
      title: 'Interview Scheduling Delays',
      description: 'The coordination dance: back-and-forth emails to align schedules, book meeting slots, and sync calendar URLs eats valuable sourcing time.',
      stat: '6.5 Days',
      statLabel: 'Added to hiring cycle',
      icon: <Calendar size={18} className="text-red-400" />,
    },
  ];

  return (
    <section id="problem" className="relative py-20 lg:py-28 overflow-hidden bg-[#030712] border-t border-gray-950">
      {/* Visual background subtle mask */}
      <div className="absolute inset-0 bg-[#060a17]/20 radial-glow" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header content section */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 lg:mb-20">
          <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#ef4444] bg-[#ef4444]/10 px-3 py-1 rounded-full border border-[#ef4444]/20">
            The Recruitment Bottleneck
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white">
            Why Modern Recruitment is Slowly Breaking
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Talented recruiters spend less than 20% of their day actually talking to prospective candidates. The remaining 80% is swallowed by repetitive, manual administration taskwork.
          </p>
        </div>

        {/* Dynamic Roadblock Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {problems.map((problem) => (
            <div
              key={problem.id}
              className="relative group rounded-2xl border border-gray-900 bg-gray-950/40 p-6 sm:p-8 hover:border-gray-800 hover:bg-gray-950/60 transition duration-300 flex flex-col justify-between"
            >
              {/* Card visual elements */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  {/* Icon wrap */}
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-900 border border-gray-800">
                    {problem.icon}
                  </div>
                  {/* Small warning element */}
                  <span className="text-[10px] font-mono uppercase tracking-wider text-red-500 bg-red-950/15 border border-red-950/40 px-2 py-0.5 rounded-md">
                    Pain Point
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-display text-lg sm:text-xl font-bold text-gray-100 group-hover:text-white transition">
                    {problem.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>

              {/* Quantification footer */}
              <div className="mt-8 pt-4 border-t border-gray-950 flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider font-mono">Quantified Impact</p>
                  <p className="font-mono text-xs text-gray-400 font-medium">{problem.statLabel}</p>
                </div>
                <div className="text-right">
                  <span className="font-mono text-2xl font-black text-red-400/90">{problem.stat}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Modern Contrast Quote Callout */}
        <div className="mt-16 lg:mt-24 p-6 sm:p-8 rounded-2xl border border-dashed border-gray-800 bg-gray-950/20 text-center max-w-4xl mx-auto">
          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed italic">
            "Candidate experience correlates directly with hiring speed. Recruiters who are buried in spreadsheets and manual coordination delay answers, giving competitors an open channel to close premium technical talent first."
          </p>
          <p className="mt-2 text-[10px] text-gray-500 font-mono uppercase tracking-widest font-bold">— State of Sourcing Review, 2026</p>
        </div>

      </div>
    </section>
  );
}
