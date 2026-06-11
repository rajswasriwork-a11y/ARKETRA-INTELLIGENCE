import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Play, Server, Clock, Calendar, Database, CheckCircle2, User, ChevronRight } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const [activeTab, setActiveTab] = useState<'outreach' | 'resume' | 'scheduling'>('outreach');
  const [typedMessage, setTypedMessage] = useState('');
  const [statusLogs, setStatusLogs] = useState<string[]>([]);

  // Simulation effect for status reports
  useEffect(() => {
    setStatusLogs([
      '⚙️ Core Agent Engine Online',
      '📥 Monitoring ATS Inbox for unresponsive candidates...',
    ]);

    const interval = setInterval(() => {
      setStatusLogs((prev) => {
        const list = [...prev];
        if (list.length > 5) {
          list.shift();
        }
        const reports = [
          '⚡ Automated candidate response classified (High Intent)',
          '📄 Parsed candidate CV: Emily Vance (94% Tech Stack Alignment)',
          '📅 Interview request synced: 1:1 Technical Alignment booked',
          '🔔 Campaign Step 2: "Unlocking Human Sourcing" Follow-Up sent',
          '🚀 Sequence updated: Candidate status shifted to "Interviewing"',
        ];
        const nextReport = reports[Math.floor(Math.random() * reports.length)];
        return [...list, nextReport];
      });
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 overflow-hidden grid-bg flex flex-col justify-center">
      {/* Background ambient light blur blobs */}
      <div className="absolute top-1/4 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl animate-glow" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Branding, Typography, Call-to-Actions */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Banner element */}
            <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/20 bg-cyan-950/25 px-3.5 py-1 text-xs text-cyan-300 font-mono tracking-tight">
              <Sparkles size={11} className="inline animate-spin text-cyan-400" />
              <span>Next-Gen Autonomous Recruitment Engine</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-extrabold tracking-tight text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.1]">
              Recruit Smarter.<br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-400 bg-clip-text text-transparent">
                Automate the Busy Work.
              </span>
            </h1>

            {/* Subheadline description */}
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-lg">
              ARKETRA Intelligence helps recruiters save hours every week by automating candidate follow-ups, interview scheduling, and resume processing.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenBooking}
                className="group flex h-12 items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-gray-950 font-extrabold px-8 text-sm transition-all shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/20 cursor-pointer"
              >
                Book Free Demo
                <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </button>
              
              <a
                href="#solution"
                className="flex h-12 items-center justify-center gap-1.5 rounded-xl border border-gray-800 hover:border-gray-700 bg-gray-950/40 hover:bg-gray-950 text-xs font-semibold text-gray-300 hover:text-white px-6 transition duration-300"
              >
                Explore Platfom Capabilities
              </a>
            </div>

            {/* Interactive Social Proof highlights */}
            <div className="pt-8 border-t border-gray-900 grid grid-cols-3 gap-4">
              <div>
                <p className="font-display text-2xl font-bold text-white text-left">10h+</p>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest">Saved Weekly</p>
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-cyan-400 text-left">4.2x</p>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest">Faster Booking</p>
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-purple-400 text-left">99%</p>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest">Parsing Accuracy</p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Interactive Dashboard Simulator */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl border border-gray-800 bg-gray-950/70 p-1.5 shadow-2xl backdrop-blur-xl">
              
              {/* Fake top window control rail */}
              <div className="flex items-center justify-between px-4 py-2 border-b border-gray-900/60 text-xs">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/35" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/35" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/35" />
                  <span className="text-gray-500 font-mono text-[10px] ml-1.5">ArketraConsole v1.4 // Live Simulator</span>
                </div>
                <div className="flex items-center gap-1.5 text-gray-500">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-mono text-[9px] uppercase tracking-widest">Active Loop</span>
                </div>
              </div>

              {/* Console Dashboard Nav Tabs */}
              <div className="grid grid-cols-3 gap-1 p-2 bg-gray-950/40 border-b border-gray-950">
                {(['outreach', 'resume', 'scheduling'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-2 py-2 rounded-lg text-left text-[11px] font-mono tracking-tight transition-all cursor-pointer ${
                      activeTab === tab
                        ? 'bg-gray-900 border border-gray-800 text-cyan-300 font-bold'
                        : 'text-gray-400 hover:text-gray-200'
                    }`}
                  >
                    <span className="block text-[8px] uppercase tracking-wider text-gray-500">Module</span>
                    {tab === 'outreach' && 'Outreach Automator'}
                    {tab === 'resume' && 'Resume Parser AI'}
                    {tab === 'scheduling' && 'Scheduling Agent'}
                  </button>
                ))}
              </div>

              <div className="p-4 sm:p-5 h-[320px] overflow-hidden flex flex-col justify-between">
                
                {/* Simulated Content Screen based on active tab */}
                <div className="space-y-4 flex-1">
                  {activeTab === 'outreach' && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between bg-gray-900/50 rounded-lg p-2.5 border border-gray-800/60">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold text-xs">SB</div>
                          <div>
                            <p className="text-xs font-semibold text-gray-200">Sarah Brody (Candidate Lead)</p>
                            <p className="text-[10px] text-gray-500">Inbound Application: Full-Stack Engineer</p>
                          </div>
                        </div>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono">Unresponsive</span>
                      </div>

                      <div className="rounded-lg border border-gray-800/40 bg-[#070b13] p-3 text-left space-y-1.5">
                        <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                          <span>Outbox / Interactive Auto-Campaign v2</span>
                          <span>Subject: Sarah, checking on your software role index</span>
                        </div>
                        <p className="text-xs text-gray-300 leading-relaxed">
                          "Hi Sarah, since our initial outreach regarding the Full-Stack lead, we haven't linked up yet. Arketra synced with our engineering team and saw you would be a great fit for our modern server migration. Would either Tuesday or Wednesday morning work?"
                        </p>
                      </div>

                      <div className="flex items-center justify-between text-[11px] text-gray-400">
                        <span id="trigger-next-step" className="flex items-center gap-1 font-mono text-[10px] text-cyan-400">
                          <CheckCircle2 size={11} /> Auto-Scheduled Step #2: Email Follow-Up
                        </span>
                        <span className="font-mono text-[9px] text-gray-500">Post applied: +72 hours delay</span>
                      </div>
                    </div>
                  )}

                  {activeTab === 'resume' && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="flex-1 bg-gray-900/40 rounded-lg border border-gray-850 p-2.5">
                          <span className="block text-[8px] uppercase tracking-wider text-gray-500 mb-1">Parsed Resume Segment</span>
                          <p className="text-xs font-bold text-white mb-0.5">Daniel Kang, Principal Dev</p>
                          <p className="text-[10px] text-gray-400">AWS • React Router • Node • Python LLMs</p>
                        </div>
                        <div className="w-16 h-12 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex flex-col items-center justify-center text-center">
                          <span className="text-[8px] uppercase tracking-wider text-emerald-500 font-mono">Arketra Score</span>
                          <span className="text-sm font-bold text-emerald-400 font-mono">98%</span>
                        </div>
                      </div>

                      <div className="rounded-lg border border-gray-800 bg-[#070b13] p-3 space-y-1 px-4">
                        <span className="text-[9px] text-gray-500 uppercase tracking-widest font-mono font-bold block">Structured JSON Export for ATS</span>
                        <div className="grid grid-cols-2 gap-2 text-[10px] font-mono leading-relaxed pt-1">
                          <div className="text-gray-400">
                            "experience": <span className="text-cyan-400">"8 years senior lead"</span>
                          </div>
                          <div className="text-gray-400">
                            "salary_expectation": <span className="text-purple-400">"$175,000 OK"</span>
                          </div>
                          <div className="text-gray-400">
                            "work_authorization": <span className="text-green-400">"US Citizen"</span>
                          </div>
                          <div className="text-gray-400">
                            "notice_period": <span className="text-amber-400">"Immediate"</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'scheduling' && (
                    <div className="space-y-3">
                      <div className="flex justify-between items-center bg-gray-900/35 border border-gray-800 rounded-lg p-2.5">
                        <div className="flex items-center gap-1.5 text-xs text-gray-200">
                          <Calendar size={13} className="text-cyan-400" />
                          <span>Candidate Interview Slots</span>
                        </div>
                        <span className="text-[9px] text-emerald-400 font-mono bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">Synced Host: Google Calendar</span>
                      </div>

                      <p className="text-[11px] text-gray-400 leading-relaxed">
                        Arketra’s Booking Agent automatically detects the hiring manager's calendar availability and sends a direct, secure scheduling widget URL over candidate SMS.
                      </p>

                      <div className="grid grid-cols-3 gap-2">
                        {['10:00 AM', '02:00 PM', '04:30 PM'].map((time, idx) => (
                          <div key={idx} className="bg-gray-900 border border-cyan-500/20 rounded-lg p-2 text-center">
                            <span className="block text-[8px] text-gray-500 uppercase tracking-wider font-mono">Available Slot {idx + 1}</span>
                            <span className="text-xs font-bold text-cyan-300 font-mono">{time}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Live Real-Time Logs terminal feet */}
                <div className="border-t border-gray-900/80 pt-3 flex flex-col gap-1 text-[10px] font-mono text-gray-500">
                  {statusLogs.map((log, i) => (
                    <div key={i} className="flex gap-1.5 truncate">
                      <span className="text-cyan-500/50">{'>'}</span>
                      <span className={i === statusLogs.length - 1 ? 'text-gray-300 font-medium' : 'text-gray-500'}>{log}</span>
                    </div>
                  ))}
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
