import { Activity, Users, User, Puzzle } from 'lucide-react';

export default function WhoIsThisFor() {
  const targets = [
    {
      title: 'Recruitment Agencies',
      description: 'Run multiple custom outreach tracks at scale without adding manual workload. Keep your candidate pipelines full without hiring extra sourcers.',
      metric: 'Build infinite outreach sequences',
      icon: <Users className="text-cyan-400" size={20} />
    },
    {
      title: 'Staffing Firms',
      description: 'Process hundreds of inbound resume files and match applicants to open roles in seconds. Export clean data straight to your tracker database or spreadsheets.',
      metric: 'Zero manual filter backlog',
      icon: <Activity className="text-purple-400" size={20} />
    },
    {
      title: 'Independent Recruiters',
      description: 'Work like a full-scale agency all by yourself. Let automatic background systems handle follow-ups and scheduling so you can focus 100% on relationships.',
      metric: '10+ hours saved every week',
      icon: <User className="text-emerald-400" size={20} />
    },
    {
      title: 'HR Consultants',
      description: 'Add done-for-you automation pipelines directly to your clients\' hiring systems. Drive immediate value without needing developers or complicated code integrations.',
      metric: 'Plug-and-play setup in minutes',
      icon: <Puzzle className="text-pink-400" size={20} />
    }
  ];

  return (
    <section id="who-is-it-for" className="relative py-20 lg:py-28 overflow-hidden bg-[#030712] border-t border-gray-900">
      {/* Ambient background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-purple-950/10 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section title area */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 lg:mb-20">
          <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#22d3ee] bg-[#22d3ee]/10 px-3.5 py-1 rounded-full border border-[#22d3ee]/20">
            Target Audience
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-normal">
            Who Is Arketra For?
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Arketra is designed specifically for recruitment teams who are tired of fighting slow, repetitive admin tasks and want to spend more time calling high-intent candidates.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {targets.map((target, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl border border-gray-900 bg-gray-950/40 p-6 flex flex-col justify-between hover:border-gray-800 transition duration-300"
            >
              <div className="space-y-4 text-left">
                {/* Icon wrapper */}
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-950 border border-gray-850">
                  {target.icon}
                </div>

                <div className="space-y-2">
                  <h3 className="font-display text-base sm:text-lg font-bold text-gray-100">
                    {target.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    {target.description}
                  </p>
                </div>
              </div>

              {/* Outcome label */}
              <div className="mt-6 pt-4 border-t border-gray-900/60 text-left">
                <span className="block text-[10px] font-mono uppercase text-gray-500 tracking-wider">Estimated advantage</span>
                <span className="text-xs font-mono font-semibold text-cyan-400 block mt-1">{target.metric}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
