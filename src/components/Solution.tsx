import { Mail, FileText, Calendar, Check, ArrowRight } from 'lucide-react';

export default function Solution() {
  const workflows = [
    {
      id: 'follow-ups',
      title: 'Candidate Follow-Up Automation',
      description: 'Automatically follow up with candidates and update status tracking. Pauses instantly as soon as a candidate replies so you always maintain actual personal contact.',
      benefits: [
        'No manual copy-pasting required',
        'Auto-pauses when candidate replies',
        'Integrates with your existing email'
      ],
      color: 'cyan',
      metric: 'Save 10+ hours a week',
      icon: <Mail size={20} className="text-cyan-400" />
    },
    {
      id: 'resumes',
      title: 'Resume Processing Automation',
      description: 'Extract skills, experience, and candidate information automatically. Pulls out key qualifications, work authorization, notice details, and translates files into clean, searchable criteria.',
      benefits: [
        'Identifies top criteria in 2 seconds',
        'Extracts true experience durations',
        'Works with PDFs and Word files'
      ],
      color: 'purple',
      metric: '99% parsing precision',
      icon: <FileText size={20} className="text-purple-400" />
    },
    {
      id: 'interviews',
      title: 'Interview Scheduling Automation',
      description: 'Coordinate interviews without endless email chains. Sends a secure link representing current real-time manager slots, letting candidates schedule themselves.',
      benefits: [
        'Eliminates booking back-and-forth',
        'Protects from double-booking',
        'Sends automatic calendar triggers'
      ],
      color: 'emerald',
      metric: '4x faster call booking',
      icon: <Calendar size={20} className="text-emerald-400" />
    }
  ];

  return (
    <section id="what-we-automate" className="relative py-20 lg:py-28 overflow-hidden bg-gray-950/10 border-t border-gray-900">
      {/* Background blurs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-cyan-950/5 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top header area */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 lg:mb-20">
          <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#22d3ee] bg-[#22d3ee]/10 px-3.5 py-1 rounded-full border border-[#22d3ee]/20">
            Platform Capabilities
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-normal">
            Three Recruitment Workflows We Automate
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            We target and automate the three most tedious manual tasks in your recruitment pipeline so your team can focus on actually speaking to talent.
          </p>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {workflows.map((flow) => (
            <div
              key={flow.id}
              className="relative rounded-2xl border border-gray-950 bg-gray-950/20 p-6 sm:p-8 hover:border-gray-800 hover:bg-gray-950/50 transition duration-300 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4 text-left">
                {/* Header Icon & Title */}
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-900 border border-gray-850">
                    {flow.icon}
                  </div>
                  <h3 className="font-display text-lg font-bold text-gray-100">
                    {flow.title}
                  </h3>
                </div>

                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {flow.description}
                </p>

                {/* Benefits Bullet Points */}
                <div className="space-y-2 pt-2">
                  {flow.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                      <span className="flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-gray-900 text-cyan-400 border border-cyan-500/10">
                        <Check size={10} />
                      </span>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom tag indicator */}
              <div className="pt-4 border-t border-gray-900/60 flex items-center justify-between text-[11px] font-mono">
                <span className="text-gray-500 uppercase tracking-widest">Calculated outcome</span>
                <span className="text-cyan-400 font-semibold">{flow.metric}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
