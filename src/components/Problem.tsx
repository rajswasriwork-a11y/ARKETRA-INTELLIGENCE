import { MailX, Calendar, FileText, Table } from 'lucide-react';

export default function Problem() {
  const problems = [
    {
      id: 'candidate-follow-ups',
      title: 'Candidate Follow-Ups',
      description: 'Recruiters spend hours drafting, personalizing, and sending follow-up emails to candidate leads who did not reply to the first message. When done manually, it takes up half your morning.',
      impact: 'Up to 3 hours lost daily per recruiter',
      icon: <MailX size={18} className="text-[#f43f5e]" />,
    },
    {
      id: 'interview-scheduling',
      title: 'Interview Scheduling',
      description: 'Checking schedules, sending back-and-forth emails to find a timeslot, and manual calendar invites delay the hiring process and lead to high drop-off rates.',
      impact: 'Adds up to 5 days of delay to each hire',
      icon: <Calendar size={18} className="text-[#f43f5e]" />,
    },
    {
      id: 'resume-processing',
      title: 'Resume Processing',
      description: 'Sifting through hundreds of resumes, manually extracting core skills, reading experience durations, and converting files to standard formats is slow and tedious.',
      impact: 'Over 60% of screen time is spent on formatting',
      icon: <FileText size={18} className="text-[#f43f5e]" />,
    },
    {
      id: 'spreadsheet-tracking',
      title: 'Spreadsheet Tracking',
      description: 'Manually copy-pasting candidate details, tracking interview columns, and updating statuses in multiple spreadsheets leads to errors and lost candidates.',
      impact: '25%+ candidate leakage due to outdated sheets',
      icon: <Table size={18} className="text-[#f43f5e]" />,
    },
  ];

  return (
    <section id="problem" className="relative py-20 lg:py-28 overflow-hidden bg-[#030712] border-t border-gray-900">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950/40 to-transparent pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header content section */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 lg:mb-20">
          <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#f43f5e] bg-[#f43f5e]/10 px-3.5 py-1 rounded-full border border-[#f43f5e]/20">
            The Reality of Sourcing
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-normal">
            Most Recruiters Spend Too Much Time On Work That Should Be Automated
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            The average recruiter spends less than a quarter of their day actually talking to candidates. The rest is consumed by administrative tasks.
          </p>
        </div>

        {/* Four Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {problems.map((problem) => (
            <div
              key={problem.id}
              className="relative rounded-2xl border border-gray-950 bg-gray-950/20 p-6 sm:p-8 hover:border-gray-800 hover:bg-gray-950/40 transition duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-900 border border-gray-800 text-red-400">
                    {problem.icon}
                  </div>
                  <span className="text-[9px] font-mono uppercase tracking-wider text-red-400 bg-red-950/10 border border-red-950/30 px-2.5 py-0.5 rounded-full">
                    Saves Time If Automated
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-display text-lg sm:text-xl font-bold text-gray-100">
                    {problem.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed text-left">
                    {problem.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-900/60 flex items-center justify-between">
                <span className="text-[10px] text-gray-500 uppercase tracking-wider font-mono">Measurable Drain</span>
                <span className="font-mono text-xs text-red-400 font-semibold">{problem.impact}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
