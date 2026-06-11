import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, Check, Building, Briefcase, Sparkles, ChevronRight, ThumbsUp } from 'lucide-react';
import { BookingDetails } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1); // 1: Info & qualification, 2: Slot Selection, 3: Success
  const [formData, setFormData] = useState<Partial<BookingDetails>>({
    fullName: '',
    email: '',
    companyName: '',
    teamSize: '1-10',
    atsUsed: 'Lever',
    primaryPainPoint: 'Candidate Follow-Ups',
  });

  const [selectedDate, setSelectedDate] = useState<string>('June 15, 2026');
  const [selectedTime, setSelectedTime] = useState<string>('10:00 AM EST');

  const dates = [
    { day: 'Mon', num: '15', full: 'June 15, 2026' },
    { day: 'Tue', num: '16', full: 'June 16, 2026' },
    { day: 'Wed', num: '17', full: 'June 17, 2026' },
    { day: 'Thu', num: '18', full: 'June 18, 2026' },
    { day: 'Fri', num: '19', full: 'June 19, 2026' },
  ];

  const timeSlots = [
    '09:00 AM EST',
    '10:00 AM EST',
    '11:30 AM EST',
    '01:00 PM EST',
    '02:30 PM EST',
    '04:00 PM EST',
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    }
  };

  const handleConfirmBooking = () => {
    setStep(3);
    // Persist details in localStorage to simulate real database tracking
    const persistedBookings = JSON.parse(localStorage.getItem('arketra_bookings') || '[]');
    const finalBooking = {
      ...formData,
      date: selectedDate,
      time: selectedTime,
      bookedAt: new Date().toISOString(),
    };
    persistedBookings.push(finalBooking);
    localStorage.setItem('arketra_bookings', JSON.stringify(persistedBookings));
  };

  const resetModal = () => {
    setStep(1);
    setFormData({
      fullName: '',
      email: '',
      companyName: '',
      teamSize: '1-10',
      atsUsed: 'Lever',
      primaryPainPoint: 'Candidate Follow-Ups',
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div id="booking-modal-portal" className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={resetModal}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', duration: 0.5 }}
          className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-gray-800 bg-[#0b0f19] shadow-2xl"
        >
          {/* Top colored accent line */}
          <div className="h-1.5 w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600" />

          {/* Close button */}
          <button
            onClick={resetModal}
            className="absolute top-4 right-4 text-gray-400 transition hover:text-white"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-12">
            {/* Left Column -- Context Badge & Progress */}
            <div className="md:col-span-4 border-r border-gray-800 bg-[#070b13] p-6 lg:p-8 flex flex-col justify-between">
              <div>
                <div className="mb-6 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <Sparkles size={16} />
                  </div>
                  <span className="font-display font-bold tracking-tight text-white text-lg">ARKETRA</span>
                </div>

                <h3 className="font-display text-xl font-bold text-white mb-2">1:1 AI Automation Strategy Demo</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  See how leading staffing agencies are setting up self-healing candidate outreach and resume pipelines customized around their specialized industry verticals.
                </p>
              </div>

              <div className="mt-8 space-y-6">
                <div className="flex items-center gap-3">
                  <div className={`flex h-7 w-7 items-center justify-center rounded-full border text-xs font-semibold ${step >= 1 ? 'border-cyan-500 bg-cyan-950 text-cyan-400' : 'border-gray-800 text-gray-500'}`}>
                    {step > 1 ? <Check size={12} /> : '1'}
                  </div>
                  <div>
                    <p className={`text-xs font-medium ${step >= 1 ? 'text-gray-200' : 'text-gray-500'}`}>Qualification</p>
                    <p className="text-[10px] text-gray-500">Your recuritment stack</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 flex-1">
                  <div className={`flex h-7 w-7 items-center justify-center rounded-full border text-xs font-semibold ${step >= 2 ? 'border-cyan-500 bg-cyan-950 text-cyan-400' : 'border-gray-800 text-gray-500'}`}>
                    {step > 2 ? <Check size={12} /> : '2'}
                  </div>
                  <div>
                    <p className={`text-xs font-medium ${step >= 2 ? 'text-gray-200' : 'text-gray-500'}`}>Select Time Slot</p>
                    <p className="text-[10px] text-gray-500">Coordinate and book</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className={`flex h-7 w-7 items-center justify-center rounded-full border text-xs font-semibold ${step === 3 ? 'border-cyan-500 bg-cyan-950 text-cyan-400' : 'border-gray-800 text-gray-500'}`}>
                    3
                  </div>
                  <div>
                    <p className={`text-xs font-medium ${step === 3 ? 'text-gray-200' : 'text-gray-500'}`}>Completed</p>
                    <p className="text-[10px] text-gray-500">Calendar invitations</p>
                  </div>
                </div>
              </div>

              <div className="hidden md:block mt-8 text-[11px] text-gray-500">
                Duration: <strong className="text-gray-300">30 minutes</strong> • Delivered via Google Meet.
              </div>
            </div>

            {/* Right Column -- Interactive Flow Steps */}
            <div className="md:col-span-8 p-6 lg:p-8 flex flex-col justify-center min-h-[420px]">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.form
                    key="step1"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    onSubmit={handleNextStep}
                    className="space-y-4"
                  >
                    <div>
                      <h4 className="text-base font-semibold text-gray-200 mb-1">Tell us about your recruitment setup</h4>
                      <p className="text-xs text-gray-400">Fill in the fields to help our architecture engineer prepare the exact workflows matching your stack.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-gray-400 mb-1">Full Name</label>
                        <input
                          required
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className="w-full rounded-lg border border-gray-800 bg-gray-950 px-3 py-2 text-sm text-gray-100 placeholder-gray-600 focus:border-cyan-500 focus:outline-none transition"
                          placeholder="Andrew Carter"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-400 mb-1">Work Email</label>
                        <input
                          required
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full rounded-lg border border-gray-800 bg-gray-950 px-3 py-2 text-sm text-gray-100 placeholder-gray-600 focus:border-cyan-500 focus:outline-none transition"
                          placeholder="andrew@staffingfirm.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-gray-400 mb-1">Company / Agency Name</label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                            <Building size={14} />
                          </span>
                          <input
                            required
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleInputChange}
                            className="w-full rounded-lg border border-gray-800 bg-gray-950 pl-9 pr-3 py-2 text-sm text-gray-100 placeholder-gray-600 focus:border-cyan-500 focus:outline-none transition"
                            placeholder="Apex Executive Staffing"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-400 mb-1">Sourcing Team Size</label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                            <Briefcase size={14} />
                          </span>
                          <select
                            name="teamSize"
                            value={formData.teamSize}
                            onChange={handleInputChange}
                            className="w-full rounded-lg border border-gray-800 bg-gray-950 pl-9 pr-3 py-2 text-sm text-gray-100 focus:border-cyan-500 focus:outline-none transition appearance-none"
                          >
                            <option value="1-5">1-5 Recruiters</option>
                            <option value="6-20">6-20 Recruiters</option>
                            <option value="21-50">21-50 Sourcing Agents</option>
                            <option value="50+">50+ Enterprise HR Team</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-gray-400 mb-1">Current ATS Platform</label>
                        <select
                          name="atsUsed"
                          value={formData.atsUsed}
                          onChange={handleInputChange}
                          className="w-full rounded-lg border border-gray-800 bg-gray-950 px-3 py-2 text-sm text-gray-100 focus:border-cyan-500 focus:outline-none transition"
                        >
                          <option value="Lever">Lever</option>
                          <option value="Greenhouse">Greenhouse</option>
                          <option value="Bullhorn">Bullhorn</option>
                          <option value="Workable">Workable</option>
                          <option value="Spreadsheets/Excel">Excel / Spreadsheet Chaos</option>
                          <option value="Other">Other ATS Provider</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-400 mb-1">Primary Bottleneck</label>
                        <select
                          name="primaryPainPoint"
                          value={formData.primaryPainPoint}
                          onChange={handleInputChange}
                          className="w-full rounded-lg border border-gray-800 bg-gray-950 px-3 py-2 text-sm text-gray-100 focus:border-cyan-500 focus:outline-none transition"
                        >
                          <option value="Candidate Follow-Ups">Manual Candidate Follow-Ups</option>
                          <option value="Resume Processing">Slow Resume Screening</option>
                          <option value="Interview Scheduling">Interview Scheduling Friction</option>
                          <option value="All combined">Universal busywork overload</option>
                        </select>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-900 flex justify-end">
                      <button
                        type="submit"
                        className="group flex items-center gap-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-bold px-5 py-2.5 text-sm transition shadow-lg shadow-cyan-500/10"
                      >
                        Choose Time Slot
                        <ChevronRight size={16} className="transition group-hover:translate-x-1" />
                      </button>
                    </div>
                  </motion.form>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="space-y-6"
                  >
                    <div>
                      <h4 className="text-base font-semibold text-gray-200 mb-1">Configure meeting schedule</h4>
                      <p className="text-xs text-gray-400">Our engineering consultants operate in global zones. Select a date and primary slot below:</p>
                    </div>

                    {/* Date Horizontal Picker */}
                    <div>
                      <p className="text-xs font-medium text-gray-400 mb-2 flex items-center gap-1">
                        <Calendar size={13} className="text-cyan-400" /> Date
                      </p>
                      <div className="grid grid-cols-5 gap-2">
                        {dates.map((d) => (
                          <button
                            key={d.num}
                            onClick={() => setSelectedDate(d.full)}
                            className={`flex flex-col items-center justify-center p-2.5 rounded-lg border text-center transition ${selectedDate === d.full ? 'bg-cyan-950/40 border-cyan-500 text-cyan-300' : 'bg-gray-950 border-gray-800 text-gray-400 hover:border-gray-700'}`}
                          >
                            <span className="text-[10px] tracking-wider uppercase opacity-80">{d.day}</span>
                            <span className="text-lg font-bold">{d.num}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Timeslot Matrix */}
                    <div>
                      <p className="text-xs font-medium text-gray-400 mb-2 flex items-center gap-1">
                        <Clock size={13} className="text-cyan-400" /> Available slots for {selectedDate}
                      </p>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {timeSlots.map((slot) => (
                          <button
                            key={slot}
                            onClick={() => setSelectedTime(slot)}
                            className={`px-3 py-2 text-xs rounded-lg border text-center font-medium transition ${selectedTime === slot ? 'bg-cyan-950/40 border-cyan-500 text-cyan-300' : 'bg-gray-950 border-gray-800 text-gray-400 hover:border-gray-700'}`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-900 flex justify-between items-center">
                      <button
                        onClick={() => setStep(1)}
                        className="text-xs font-medium text-gray-400 hover:text-white transition"
                      >
                        ← Back to details
                      </button>
                      <button
                        onClick={handleConfirmBooking}
                        className="group flex items-center gap-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-bold px-5 py-2.5 text-sm transition shadow-lg shadow-cyan-500/10"
                      >
                        Book Strategy Demo
                        <Check size={16} />
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="text-center py-8 px-4 flex flex-col items-center justify-center space-y-4"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-400 border-2 border-cyan-500/20 mb-2 animate-bounce">
                      <ThumbsUp size={28} />
                    </div>

                    <h4 className="font-display text-2xl font-bold text-white">Your Demo is Confirmed!</h4>
                    <p className="text-sm text-gray-300 max-w-md mx-auto">
                      Congratulations <span className="font-semibold text-cyan-400">{formData.fullName}</span>! We’ve reserved your personal AI Strategy Session for:
                    </p>

                    <div className="rounded-xl border border-gray-800 bg-[#070b13] p-4 max-w-sm w-full divide-y divide-gray-800/40 space-y-3">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-400 flex items-center gap-1">
                          <Calendar size={12} className="text-cyan-400" /> Date:
                        </span>
                        <span className="font-semibold text-white">{selectedDate}</span>
                      </div>
                      <div className="flex justify-between items-center text-xs pt-3">
                        <span className="text-gray-400 flex items-center gap-1">
                          <Clock size={12} className="text-cyan-400" /> Time:
                        </span>
                        <span className="font-semibold text-cyan-300">{selectedTime}</span>
                      </div>
                      <div className="flex justify-between items-center text-xs pt-3">
                        <span className="text-gray-400">Target ATS:</span>
                        <span className="font-semibold text-white">{formData.atsUsed}</span>
                      </div>
                    </div>

                    <p className="text-xs text-gray-500 max-w-sm">
                      A Google Meet link and detailed agenda have been sent to <span className="text-gray-400">{formData.email}</span>. Please accept the calendar invite.
                    </p>

                    <div className="pt-4">
                      <button
                        onClick={resetModal}
                        className="rounded-lg border border-gray-800 hover:border-gray-700 bg-gray-950 text-gray-300 px-6 py-2.5 text-xs font-semibold transition"
                      >
                        Return to Site
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
