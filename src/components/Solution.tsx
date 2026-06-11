import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, FileText, Calendar, Check, ArrowRight, Layers, Sparkles, Database, CheckSquare, Zap } from 'lucide-react';

export default function Solution() {
  const [activeSegment, setActiveSegment] = useState<0 | 1 | 2>(0);

  const solutions = [
    {
      index: 0,
      title: 'Candidate Follow-Up Automation',
      description: 'Never lose a qualified candidate to unresponsive threads. ARKETRA monitors candidate interaction, and automatically triggers multi-channel sequence drip follow-ups.',
      bulletTitle: 'Auto-Sequence Orchestration',
      features: [
        'Personalized follow-ups designed via hiring manager guidelines',
        'Automatic timezone routing & candidate frequency protection',
        'SMS & email multi-channel triggers matching response metrics',
        'Auto-pause sequence immediately on prospect reply',
      ],
      stats: 'Save up to 4.5 hours daily per campaign',
      icon: <Mail size={22} className="text-cyan-400" />,
      tag: 'Candidate Engagement',
      demoMockup: (
        <div className="space-y-3">
          <div className="text-[10px] uppercase font-mono tracking-widest text-cyan-400 mb-1 flex items-center gap-1.5 bg-cyan-950/20 w-fit px-2.5 py-0.5 rounded border border-cyan-500/20">
            <Zap size={10} className="animate-spin" /> Sequence Core Enabled
          </div>
          <div className="space-y-2 text-left">
            {/* Step 1 */}
            <div className="flex gap-2.5 items-start text-xs border-l-2 border-emerald-500 pl-3">
              <span className="text-emerald-400 font-mono text-[10px]">Step 01</span>
              <div>
                <p className="font-bold text-gray-200">First Outreach sent</p>
                <p className="text-[10px] text-gray-500">Unreplied after 48 hours</p>
              </div>
            </div>
            {/* Connection line */}
            <div className="h-4 border-l-2 border-dashed border-gray-800 ml-4.5" />
            
            {/* Step 2 */}
            <div className="flex gap-2.5 items-start text-xs border-l-2 border-cyan-500 pl-3 bg-cyan-950/10 py-1 rounded">
              <span className="text-cyan-400 font-mono text-[10px]">Step 02</span>
              <div>
                <p className="font-bold text-white flex items-center gap-1.5">
                  Autonomous Multi-Channel Touch
                  <span className="text-[9px] uppercase tracking-wider font-mono bg-cyan-500/10 px-1.5 text-cyan-300 rounded border border-cyan-500/10">Active now</span>
                </p>
                <p className="text-[10px] text-gray-400">Personalized context: "Sarah, loved your GitHub repo on rust migration..."</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      index: 1,
      title: 'Resume Processing Automation',
      description: 'Stop reviewing files manually. Extract, evaluate, and categorize incoming applicant resumes relative to your job requirements instantly.',
      bulletTitle: 'High-Fidelity Context Parser',
      features: [
        'Instant JSON extraction: experiences, compensation, notice parameters',
        'Intelligent CV alignment with technical role frameworks',
        'Automatic candidate rejection with friendly advice for misaligned applicants',
        'Automatic sync with Lever, Greenhouse, Bullhorn ATS systems',
      ],
      stats: 'Process 1,000+ resumes in under 4 minutes',
      icon: <FileText size={22} className="text-purple-400" />,
      tag: 'Resume Parser Pipeline',
      demoMockup: (
        <div className="space-y-3">
          <div className="flex justify-between items-center bg-gray-900/30 p-2 rounded-lg border border-gray-800/60">
            <span className="text-xs font-mono text-gray-300">Parser Status: Parsing CV...</span>
            <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-purple-500/15 border border-purple-500/30 text-purple-400">99.4% Acc.</span>
          </div>

          <div className="text-left text-xs font-mono text-gray-400 space-y-1.5 p-2 bg-[#070b13] rounded border border-gray-900">
            <p className="text-purple-400">{"{"}</p>
            <p className="pl-4">"candidate_name": <span className="text-gray-100">"Marcus Vance"</span>,</p>
            <p className="pl-4">"fitment_score": <span className="text-emerald-400">96.8</span>,</p>
            <p className="pl-4">"missing_experience": <span className="text-amber-500">["Rust"]</span>,</p>
            <p className="pl-4">"compensation_aligned": <span className="text-emerald-400">true</span></p>
            <p className="text-purple-400">{"}"}</p>
          </div>
        </div>
      ),
    },
    {
      index: 2,
      title: 'Interview Scheduling Automation',
      description: 'Erase scheduling back-and-forths forever. Sync calendar availabilities, generate temporary, candidate-specific options, and auto-book sessions.',
      bulletTitle: 'Self-Service Smart Calendar Agent',
      features: [
        'Real-time coordination across multi-timezone candidate vectors',
        'Pre-qualification gate check done prior to granting booking access',
        'Automatic Google Meet, Microsoft Teams link generation & sync',
        'Double-booking protection & instant custom confirmation cards',
      ],
      stats: 'Reduce coordinator workload by up to 92%',
      icon: <Calendar size={22} className="text-emerald-400" />,
      tag: 'Scheduler Agent Engine',
      demoMockup: (
        <div className="space-y-3">
          <div className="flex items-center gap-1.5 justify-center py-1 px-2.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono w-fit mx-auto">
            <CheckSquare size={11} /> Scheduling Pipeline Synced
          </div>

          <div className="text-center space-y-2">
            <p className="text-xs text-gray-300 font-bold">Select alignment slot:</p>
            <div className="grid grid-cols-2 gap-2 max-w-xs mx-auto text-[11px] font-mono">
              <button className="p-2 rounded bg-emerald-950/20 border border-emerald-500/30 text-emerald-300">
                10:30 AM EST
              </button>
              <button className="p-2 rounded bg-gray-900 border border-gray-800 text-gray-400 hover:border-gray-700">
                02:00 PM EST
              </button>
            </div>
            <p className="text-[10px] text-gray-500">Time zone matching: Candidates Local Zone (EST)</p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="solution" className="relative py-20 lg:py-28 overflow-hidden bg-gray-950/20">
      
      {/* Background blurs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-cyan-950/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top title area */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 lg:mb-20">
          <span className="text-xs uppercase font-mono font-bold tracking-widest text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
            Platform Capabilities
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white animate-fade-in-up">
            Our Core Automation Suite
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Configure, deploy, and monitor self-governing recruitment workflows that connect to your ATS, talk to candidates, and book calls smoothly.
          </p>
        </div>

        {/* Tab Selection Row */}
        <div className="flex border-b border-gray-900 max-w-md mx-auto mb-12">
          {solutions.map((sol) => (
            <button
              key={sol.index}
              onClick={() => setActiveSegment(sol.index as 0 | 1 | 2)}
              className={`flex-1 pb-3 text-xs font-mono font-bold uppercase tracking-wider text-center border-b-2 transition duration-300 cursor-pointer ${
                activeSegment === sol.index
                  ? 'border-cyan-400 text-cyan-300'
                  : 'border-transparent text-gray-500 hover:text-gray-300'
              }`}
            >
              0{sol.index + 1} // Module
            </button>
          ))}
        </div>

        {/* Active Module Showcase Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#070b13]/60 border border-gray-900 rounded-3xl p-6 sm:p-8 lg:p-12 backdrop-blur-xl">
          
          {/* Left Block: Description & Feature Grid */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-950 border border-gray-800">
                {solutions[activeSegment].icon}
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono font-bold text-cyan-400 tracking-wider">
                  {solutions[activeSegment].tag}
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                  {solutions[activeSegment].title}
                </h3>
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed">
              {solutions[activeSegment].description}
            </p>

            {/* Structured Feature bullets */}
            <div className="space-y-3 pt-2">
              <p className="text-[11px] uppercase font-mono font-bold text-gray-400 tracking-widest">
                {solutions[activeSegment].bulletTitle}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {solutions[activeSegment].features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-gray-300 leading-normal">
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-cyan-950 text-cyan-400 mt-0.5">
                      <Check size={10} />
                    </span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance Metric box */}
            <div className="pt-4 border-t border-gray-900/60 flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
              <p className="font-mono text-xs text-emerald-400 font-semibold uppercase tracking-wider">
                Impact: {solutions[activeSegment].stats}
              </p>
            </div>
          </div>

          {/* Right Block: Live Dashboard Mockup Window */}
          <div className="lg:col-span-5 relative">
            {/* Visual glow frame layer */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 to-purple-500/5 blur-xl rounded-2xl" />
            <div className="relative rounded-2xl border border-gray-800/80 bg-gray-950 p-6 shadow-xl space-y-4">
              <div className="flex justify-between items-center text-xs pb-2 border-b border-gray-900">
                <span className="font-mono text-[10px] text-gray-500">Workflow Simulator</span>
                <span className="font-mono text-[9px] text-cyan-400 flex items-center gap-1.5 bg-cyan-950/20 px-2.0 py-0.5 rounded border border-cyan-500/10">
                  ● Ready
                </span>
              </div>
              {solutions[activeSegment].demoMockup}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
