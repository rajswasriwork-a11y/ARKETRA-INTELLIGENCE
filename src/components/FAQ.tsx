import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const faqs = [
    {
      q: 'Do I need to write code to set this up?',
      a: 'No. None at all. Our team handles the entire configuration and integration process for you. Your workflows plug directly into your current corporate email inbox, calendar workspace, and spreadsheets.'
    },
    {
      q: 'Which Applicant Tracking Systems (ATS) do you support?',
      a: 'We support most popular platforms including Lever, Greenhouse, Bullhorn, Workable, and Ashby. If your staffing pipeline is currently managed across standard spreadsheets, we set up real-time automations for that too.'
    },
    {
      q: 'How long does the setup process take?',
      a: 'A typical initial custom setup takes under 24 hours. After our quick 30-minute discovery call to map candidate touchpoints, we can build and launch your automations by the next business day.'
    },
    {
      q: 'Is my candidate database and contact history secure?',
      a: 'Absolutely. We do not store your candidate resume files or email notes. Everything is routed securely using standard API channels, protecting your database, clients, and pipelines.'
    },
    {
      q: 'Will candidates get weird robotic messages?',
      a: 'No. We write custom follow-up email copy styled around your specific voice, tone, and agency style. The system feels completely authentic, and is indistinguishable from standard, polite manual recruiter outreach.'
    }
  ];

  const handleToggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative py-20 lg:py-28 overflow-hidden bg-[#030712] border-t border-gray-900">
      
      {/* Background blurs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-cyan-950/10 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        
        {/* Title area */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#a855f7] bg-[#a855f7]/10 px-3.5 py-1 rounded-full border border-[#a855f7]/25">
            Got Questions?
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight text-white leading-normal text-center">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed text-center">
            Everything you need to know about getting started with practical recruitment automations.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-gray-900 bg-gray-950/30 hover:border-gray-800 transition duration-200 overflow-hidden"
              >
                <button
                  onClick={() => handleToggle(idx)}
                  className="w-full flex items-center justify-between p-5 text-left text-gray-200 hover:text-white transition cursor-pointer"
                >
                  <span className="font-semibold text-sm sm:text-base block pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-gray-400 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-cyan-400' : ''}`}
                  />
                </button>

                {isOpen && (
                  <div className="p-5 pt-0 border-t border-gray-900/50 text-xs sm:text-sm text-gray-400 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
