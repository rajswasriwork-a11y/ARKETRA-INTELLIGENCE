import { useState } from 'react';
import { Play, Video, Check, Calendar, Mail, FileText, Sparkles } from 'lucide-react';

export default function Demo() {
  const [activeDemo, setActiveDemo] = useState<string>('d1');
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [playbackStep, setPlaybackStep] = useState<number>(0);

  const demos = [
    {
      id: 'd1',
      title: 'Candidate Follow-Up Demo',
      duration: '1:45 Min',
      description: 'See how ARKETRA automatically schedules friendly, custom email follow-ups to candidates who have not replied. The system detects when a recipient replies and pauses instantly.',
      icon: <Mail size={16} />,
      steps: [
        { label: 'Monitor Candidate Threads', details: 'Scanning inbox for unreplied campaign stages.', duration: '0:15' },
        { label: 'Dispatch Sourcing Follow-Up', details: 'Sends personalized message directly through your account.', duration: '0:45' },
        { label: 'Candidate Reply Detected', details: 'Applicant responds. Sequence halts automatically.', duration: '1:20' }
      ]
    },
    {
      id: 'd2',
      title: 'Resume Processing Demo',
      duration: '2:12 Min',
      description: 'Watch the parsing system read deep information from PDFs, extract the candidate work stack, list relevant years of experience, and export structured data.',
      icon: <FileText size={16} />,
      steps: [
        { label: 'Parse Incoming CV Upload', details: 'Reading skills, authorization stats, and locations.', duration: '0:10' },
        { label: 'Extract Standard Fields', details: 'Translating text blocks to structured JSON schema.', duration: '0:50' },
        { label: 'Update Database / Spreadsheets', details: 'Exporting formatted fields to your existing tracks.', duration: '1:45' }
      ]
    },
    {
      id: 'd3',
      title: 'Interview Scheduling Demo',
      duration: '1:30 Min',
      description: 'Experience how candidate calendars and manager availability sync automatically, allowing candidates to pick time slots with zero manual back-and-forth.',
      icon: <Calendar size={16} />,
      steps: [
        { label: 'Sync Hiring Team Openings', details: 'Retrieving secure list of open slots from Google Calendar.', duration: '0:15' },
        { label: 'Send Self-Booking Link', details: 'Dispatches unique booking invite directly to candidate.', duration: '0:40' },
        { label: 'Auto-Confirm & Send Invite', details: 'Applicant books slot. Immediate confirmation sent.', duration: '1:10' }
      ]
    }
  ];

  const currentDemo = demos.find((d) => d.id === activeDemo) || demos[0];

  const handleStartSimulation = () => {
    setIsPlaying(true);
    setPlaybackStep(0);
    
    const interval = setInterval(() => {
      setPlaybackStep((prev) => {
        if (prev >= currentDemo.steps.length - 1) {
          clearInterval(interval);
          setIsPlaying(false);
          return prev;
        }
        return prev + 1;
      });
    }, 3000);
  };

  const handleDemoChange = (id: string) => {
    setActiveDemo(id);
    setIsPlaying(false);
    setPlaybackStep(0);
  };

  return (
    <section id="demos" className="relative py-20 lg:py-28 overflow-hidden bg-[#030712] border-t border-gray-900">
      
      {/* Background ambient light arcs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-500/5 blur-3xl pointers-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title sections */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#22d3ee] bg-[#22d3ee]/10 px-3.5 py-1 rounded-full border border-[#22d3ee]/20">
            Interactive Video Walkthroughs
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-normal">
            See Real Recruitment Automations In Action
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Choose a walkthrough below and click play to see exactly how our automations run in real-time. Done-for-you systems with zero technical setup required.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Switcher Tabs */}
          <div className="lg:col-span-4 space-y-3">
            {demos.map((d) => (
              <button
                key={d.id}
                onClick={() => handleDemoChange(d.id)}
                className={`w-full text-left p-5 rounded-2xl border transition duration-300 flex items-start gap-4 cursor-pointer ${
                  activeDemo === d.id
                    ? 'bg-gray-900 border-gray-800 text-white shadow-lg'
                    : 'bg-transparent border-gray-950 hover:border-gray-900 text-gray-400 hover:text-gray-200'
                }`}
              >
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${
                  activeDemo === d.id ? 'bg-cyan-950 border-cyan-500 text-cyan-300' : 'bg-gray-950 border-gray-900 text-gray-500'
                }`}>
                  {d.icon}
                </div>
                
                <div className="space-y-1">
                  <div className="flex justify-between items-center gap-2">
                    <span className="font-display text-xs sm:text-sm font-bold block truncate">
                      {d.title}
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-gray-500 bg-gray-950 px-1.5 py-0.5 rounded border border-gray-900 whitespace-nowrap">
                      {d.duration}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 leading-normal line-clamp-2">
                    {d.description}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Right Column: High-Fidelity Loom Screen Mockup Player */}
          <div className="lg:col-span-8">
            <div className="relative rounded-2xl border border-gray-800 bg-gray-950/70 p-1.5 shadow-2xl backdrop-blur-xl">
              
              {/* Loom player top border */}
              <div className="flex items-center justify-between px-4 py-2 border-b border-gray-900/60 text-xs">
                <span className="font-mono text-[10px] text-gray-400 font-semibold flex items-center gap-1.5">
                  <Video size={12} className="text-[#f43f5e]" />
                  Simulated Video Walkthrough
                </span>
                <span className="font-mono text-[9px] text-cyan-400 bg-cyan-950/20 px-2 py-0.5 rounded border border-cyan-500/10 uppercase tracking-wider">
                  Recruiter Walkthrough
                </span>
              </div>

              {/* Player Stage */}
              <div className="relative bg-[#070b13] h-[360px] flex flex-col justify-between p-6 rounded-b-xl overflow-hidden">
                
                {/* Background visual watermarks */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />

                {/* Simulated playback interface */}
                {!isPlaying && playbackStep === 0 ? (
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 space-y-4">
                    <button 
                      onClick={handleStartSimulation}
                      className="w-14 h-14 rounded-full bg-cyan-400 text-gray-950 flex items-center justify-center shadow-lg shadow-cyan-400/20 hover:scale-105 transition cursor-pointer"
                    >
                      <Play size={24} className="ml-1 fill-gray-950 text-gray-950" />
                    </button>
                    <div>
                      <h4 className="text-sm font-bold text-gray-200">Play Simulated Tech Demo ({currentDemo.duration})</h4>
                      <p className="text-[11px] text-gray-500 max-w-sm mt-1 mx-auto text-center">
                        Clicking play starts an interactive simulator tracing exactly how ARKETRA automates this specific recuritment task.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="flex-1 flex flex-col justify-between space-y-6">
                    {/* Active simulation timeline step details */}
                    <div className="space-y-4 text-left">
                      <div className="flex justify-between items-center text-[10px] uppercase tracking-wider text-gray-500 font-mono">
                        <span>Workflow Stage</span>
                        <span>Automation Logs</span>
                      </div>

                      {/* Staggered step highlights */}
                      <div className="space-y-3">
                        {currentDemo.steps.map((step, idx) => (
                          <div
                            key={idx}
                            className={`flex items-start gap-3 p-3 rounded-lg border transition ${
                              idx === playbackStep
                                ? 'bg-cyan-950/20 border-cyan-500/60 text-white'
                                : idx < playbackStep
                                ? 'bg-gray-950 border-gray-900 text-gray-500'
                                : 'opacity-20 border-transparent text-gray-600'
                            }`}
                          >
                            <div className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${
                              idx === playbackStep
                                ? 'bg-cyan-500 text-gray-950 animate-pulse'
                                : idx < playbackStep
                                ? 'bg-emerald-950 text-emerald-400 font-semibold'
                                : 'bg-gray-900 text-gray-600'
                            }`}>
                              {idx < playbackStep ? <Check size={10} /> : idx + 1}
                            </div>
                            <div className="text-left">
                              <p className="text-xs font-bold">{step.label}</p>
                              <p className="text-[11px] text-gray-400 mt-0.5">{step.details}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Simulation progress indicators */}
                    <div className="flex items-center gap-3 border-t border-gray-900 pt-3 text-[10px] font-mono text-gray-500">
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-ping shrink-0" />
                      <span>Running Walkthrough step {playbackStep + 1} of {currentDemo.steps.length}</span>
                      <div className="flex-1 h-1 bg-gray-800 rounded-full overflow-hidden">
                        <div
                          className="bg-cyan-500 h-full transition-all duration-300"
                          style={{ width: `${((playbackStep + 1) / currentDemo.steps.length) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                )}

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
