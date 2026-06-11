import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Video, Clock, Check, Layers, ArrowRight, UserCheck, Calendar, Sparkles } from 'lucide-react';
import { DemoVideoType } from '../types';

export default function Demo() {
  const [activeDemo, setActiveDemo] = useState<string>('d1');
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [playbackStep, setPlaybackStep] = useState<number>(0);

  const demos: DemoVideoType[] = [
    {
      id: 'd1',
      title: 'Loom Demo #1: Candidate Follow-Up Cycles',
      duration: '1:45 Min',
      description: 'See how ARKETRA sets up self-healing candidate outreach campaigns, tracks follow-up status, and pauses sequences once a candidate replies.',
      steps: [
        { label: 'Loading Sourcing Campaign', details: 'Scanning unresponsive candidates in the ATS queue.', duration: '0:05' },
        { label: 'Assembling Personalized Outreach', details: 'Compiling structured followups using modern variables.', duration: '0:15' },
        { label: 'Outbox Sent & Tracking Enabled', details: 'Outbound trigger launched and reply observer active.', duration: '0:35' },
        { label: 'Reply Detected', details: 'Candidate replies inside thread; campaign automatically paused.', duration: '1:10' },
      ],
    },
    {
      id: 'd2',
      title: 'Loom Demo #2: Resume Parsing & ATS Match',
      duration: '2:12 Min',
      description: 'Watch the parsing engine extract tech stack criteria, evaluate compatibility scores, and update CRM records automatically.',
      steps: [
        { label: 'Resume Upload Received', details: 'Parsing raw structural PDF/Docx files.', duration: '0:04' },
        { label: 'Extracting Structural Variables', details: 'JSON modeling of notice period, stacking, and salary.', duration: '0:22' },
        { label: 'Calculating Arketra Fitness Score', details: 'Rating role alignment (Matched 96.8%).', duration: '0:50' },
        { label: 'ATS DB Synchronized', details: 'Pushing structured contact logs straight to GreenHouse.', duration: '1:30' },
      ],
    },
    {
      id: 'd3',
      title: 'Loom Demo #3: Instant Calendar Agent',
      duration: '1:30 Min',
      description: 'Experience how our SMS-based booking agent maps host availability and schedules technical interviews without email pingpongs.',
      steps: [
        { label: 'Analyzing Recruiter Google Calendar', details: 'Pulling real-time slot vacancies and buffers.', duration: '0:06' },
        { label: 'Composing SMS Link invitation', details: 'SMS link dispatched to candidate phone terminal.', duration: '0:18' },
        { label: 'Candidate Selection Detected', details: 'Candidate clicks and submits slot (June 15 at 10 AM).', duration: '0:45' },
        { label: 'Calendar Invite confirmed', details: 'Creating Google Meet link and syncing invitations.', duration: '1:15' },
      ],
    },
  ];

  const currentDemo = demos.find((d) => d.id === activeDemo) || demos[0];

  const handleStartSimulation = () => {
    setIsPlaying(true);
    setPlaybackStep(0);
    
    // Simulate real-time stepping of the video tutorial
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
    <section id="demos" className="relative py-20 lg:py-28 overflow-hidden bg-[#030712] border-t border-gray-950">
      
      {/* Background ambient light arcs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-cyan-500/5 blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-500/5 blur-3xl animate-glow" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title sections */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs uppercase font-mono font-bold tracking-widest text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
            Interactive Video Walkthroughs
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white animate-fade-in-up">
            See ARKETRA in Action
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Click on our high-definition, interactive demo wrappers to watch the automation logs execute actual recruiter use-cases right on your screen.
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
                  <Video size={18} />
                </div>
                
                <div className="space-y-1">
                  <div className="flex justify-between items-center gap-2">
                    <span className="font-display text-xs sm:text-sm font-bold block truncate">
                      {d.id === 'd1' && 'Outreach Demo'}
                      {d.id === 'd2' && 'Parsing Demo'}
                      {d.id === 'd3' && 'Scheduling Demo'}
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-gray-500 bg-gray-950 px-1.5 py-0.5 rounded border border-gray-900">
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
                  <Video size={12} className="text-[#ff5e57]" />
                  {currentDemo.title}
                </span>
                <span className="font-mono text-[9px] text-gray-500 bg-gray-950 px-2 py-0.5 rounded border border-gray-900 uppercase">
                  Interactive loom simulator
                </span>
              </div>

              {/* Player Stage */}
              <div className="relative bg-[#070b13] h-[360px] flex flex-col justify-between p-6">
                
                {/* Background visual watermarks */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />

                {/* Simulated playback interface */}
                <AnimatePresence mode="wait">
                  {!isPlaying && playbackStep === 0 ? (
                    <motion.div
                      key="intro"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 space-y-4"
                    >
                      <div className="w-14 h-14 rounded-full bg-cyan-400 text-gray-950 flex items-center justify-center shadow-lg shadow-cyan-400/20 hover:scale-105 transition cursor-pointer" onClick={handleStartSimulation}>
                        <Play size={24} className="ml-1 fill-gray-950" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-gray-200">Start Platform Simulation Walkthrough</h4>
                        <p className="text-[11px] text-gray-500 max-w-sm mt-1">
                          Click to initiate a simulated Loom recording demonstrating the structural steps of {currentDemo.id === 'd1' ? 'unresponsive outbound follow-ups.' : currentDemo.id === 'd2' ? 'resume screening pipelines.' : 'coordination SMS booking.'}
                        </p>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="playback"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex-1 flex flex-col justify-between space-y-6"
                    >
                      {/* Active simulation timeline step details */}
                      <div className="space-y-4 text-left">
                        <div className="flex justify-between items-center text-[10px] uppercase tracking-wider text-gray-500 font-mono">
                          <span>Timeline Stage</span>
                          <span>Active Log</span>
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
                              <div>
                                <p className="text-xs font-bold">{step.label}</p>
                                <p className="text-[11px] text-gray-400 mt-0.5">{step.details}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Fake bottom controller */}
                      <div className="flex items-center gap-3 border-t border-gray-900 pt-3 text-[10px] font-mono text-gray-500">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-ping shrink-0" />
                        <span>Playing: {currentDemo.steps[playbackStep].duration} / {currentDemo.duration}</span>
                        <div className="flex-1 h-1 bg-gray-800 rounded-full overflow-hidden">
                          <div
                            className="bg-cyan-500 h-full transition-all duration-300"
                            style={{ width: `${((playbackStep + 1) / currentDemo.steps.length) * 100}%` }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
