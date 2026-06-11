import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Check, Calendar, Clock, ThumbsUp, Sparkles, ShieldCheck } from 'lucide-react';

export default function EarlyAccess() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    atsUsed: 'Excel / Spreadsheet Chaos'
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputChangeReact = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Mimic storing waitlists/free audit bookings in localStorage
    const waitlist = JSON.parse(localStorage.getItem('arketra_waitlist') || '[]');
    waitlist.push({
      ...formData,
      bookedAt: new Date().toISOString()
    });
    localStorage.setItem('arketra_waitlist', JSON.stringify(waitlist));
  };

  return (
    <section id="early-access" className="relative py-20 lg:py-28 overflow-hidden bg-gray-950/40 border-t border-gray-900">
      
      {/* Ambient glowing radial effects */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-cyan-950/10 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Block: Narrative text */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#22d3ee] bg-[#22d3ee]/10 px-3.5 py-1 rounded-full border border-[#22d3ee]/20">
              Limited Availability
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-tight">
              Get Your Free Recruitment Automation Audit
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              We are currently selecting 10 recruitment teams this month to help them configure, connect, and run custom follow-up and scheduling automations for free.
            </p>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              We look at your current manual steps, map out where candidate drop-offs or lost hours happen, and set up your initial live automations. If you decide to keep running them, it’s yours. If not, you pay nothing.
            </p>

            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-2.5 text-xs text-gray-300">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-950 text-cyan-400 border border-cyan-500/10">
                  <Check size={11} />
                </span>
                <span>Includes done-for-you workflow mapping & CRM connection</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-gray-300">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-950 text-cyan-400 border border-cyan-500/10">
                  <Check size={11} />
                </span>
                <span>Absolutely zero technical or coding skills required from your team</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-gray-300">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-950 text-cyan-400 border border-cyan-500/10">
                  <Check size={11} />
                </span>
                <span>Protected by clean enterprise-grade file and email privacy</span>
              </div>
            </div>
          </div>

          {/* Right Block: Interactive Request Panel */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl border border-gray-900 bg-gray-950 p-6 sm:p-8 md:p-10 text-left shadow-2xl">
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1">
                    <h3 className="font-display text-lg sm:text-xl font-bold text-gray-100">
                      Reserve Your Free Audit
                    </h3>
                    <p className="text-xs text-gray-400">
                      We will review your application status and touch base via email within 24 hours.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-400 mb-1.5">Full Name</label>
                      <input
                        required
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full rounded-lg border border-gray-800 bg-gray-950/70 px-3.5 py-2 text-sm text-gray-100 placeholder-gray-600 focus:border-cyan-500 focus:outline-none transition"
                        placeholder="e.g. Andrew Carter"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-400 mb-1.5">Work Email</label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full rounded-lg border border-gray-800 bg-gray-950/70 px-3.5 py-2 text-sm text-gray-100 placeholder-gray-600 focus:border-cyan-500 focus:outline-none transition"
                        placeholder="e.g. andrew@myagency.com"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-400 mb-1.5">Company / Agency Name</label>
                      <input
                        required
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        className="w-full rounded-lg border border-gray-800 bg-gray-950/70 px-3.5 py-2 text-sm text-gray-100 placeholder-gray-600 focus:border-cyan-500 focus:outline-none transition"
                        placeholder="e.g. Apex Executive Staffing"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-400 mb-1.5">Current ATS or Spreadsheet Tracker</label>
                      <select
                        name="atsUsed"
                        value={formData.atsUsed}
                        onChange={handleInputChange}
                        className="w-full rounded-lg border border-gray-800 bg-gray-950/70 px-3.5 py-2 text-sm text-gray-200 focus:border-cyan-500 focus:outline-none transition"
                      >
                        <option value="Excel / Spreadsheet Chaos">Excel / Spreadsheet Chaos</option>
                        <option value="Lever">Lever</option>
                        <option value="Greenhouse">Greenhouse</option>
                        <option value="Bullhorn">Bullhorn</option>
                        <option value="Workable">Workable</option>
                        <option value="Other">Other CRM / Email lists</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-lg bg-cyan-400 hover:bg-cyan-500 text-gray-950 font-bold px-5 py-3 text-sm transition shadow-lg shadow-cyan-400/15 cursor-pointer text-center block"
                  >
                    Book Free Recruitment Automation Audit
                  </button>

                  <div className="flex items-center justify-center gap-1.5 text-[10px] text-gray-500 font-mono">
                    <ShieldCheck size={11} className="text-emerald-500" /> Only 4 audit slots remaining this week.
                  </div>
                </form>
              ) : (
                <div className="text-center py-6 space-y-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-950 text-cyan-400 border border-cyan-500/20 mx-auto animate-bounce">
                    <ThumbsUp size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">Your spot is reserved, {formData.fullName}!</h4>
                    <p className="text-xs text-gray-400 max-w-sm mx-auto leading-relaxed">
                      We have stored your registration on our client roster. We will reach out to schedule your 1:1 strategy call at <strong className="text-gray-300">{formData.email}</strong> shortly. Let’s eliminate the busywork.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-lg bg-gray-900/50 border border-gray-800 text-xs text-left text-gray-400 space-y-1 w-full font-mono">
                    <p className="text-gray-500 uppercase text-[9px] tracking-widest">Submission logs</p>
                    <p><span className="text-gray-500">Queue:</span> Priority Sourcing Review</p>
                    <p><span className="text-gray-500">Platform:</span> {formData.atsUsed}</p>
                    <p><span className="text-gray-500">Registered:</span> Approved slot reservation</p>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
