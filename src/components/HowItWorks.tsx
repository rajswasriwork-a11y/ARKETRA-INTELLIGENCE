import { FileSearch, Layers, Sparkles, CheckCircle2 } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      badge: 'Step 1',
      title: 'Review Your Current Recruitment Process',
      description: 'We hop on a 30-minute call to look at how you currently handle follow-ups, resume screening, and interview scheduling. We find the specific repetitive tasks that slow you down.',
      highlights: [
        'Analyze current candidate touchpoints',
        'Map out scheduling bottlenecks',
        'Identify where spreadsheet tracking leaks leads'
      ],
      icon: <FileSearch size={22} className="text-cyan-400" />
    },
    {
      id: 2,
      badge: 'Step 2',
      title: 'We Build The Automation',
      description: 'Your team does not need to learn any technical skills or write code. We set up the workflows for you. They plug right into your email, CRM, and calendar.',
      highlights: [
        'Custom template setup matching your tone',
        'Direct synchronization with your calendar',
        'Done-for-you ATS or spreadsheet connections'
      ],
      icon: <Layers size={22} className="text-purple-400" />
    },
    {
      id: 3,
      badge: 'Step 3',
      title: 'You Save Hours Every Week',
      description: 'The automated systems take over the busywork in the background. Your candidate pipeline is updated 24/7. You only step in when a candidate wants to talk.',
      highlights: [
        '10+ hours reclaimed per recruiter weekly',
        'Zero manual email chains for timespots',
        'Consistent, professional candidate experience'
      ],
      icon: <CheckCircle2 size={22} className="text-emerald-400" />
    }
  ];

  return (
    <section id="how-it-works" className="relative py-20 lg:py-28 overflow-hidden bg-[#030712] border-t border-gray-900">
      
      {/* Decorative timeline background line for desktop */}
      <div className="absolute top-[40%] left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-emerald-500/10 hidden lg:block" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title elements */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 lg:mb-24">
          <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#a855f7] bg-[#a855f7]/10 px-3.5 py-1 rounded-full border border-[#a855f7]/25">
            The Process
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-normal">
            How It Works
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Transitioning to automatic workflows is quick and straightforward. We handle the entire configuration.
          </p>
        </div>

        {/* Steps Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {steps.map((step) => (
            <div
              key={step.id}
              className="relative rounded-2xl border border-gray-900 bg-gray-950/20 p-6 sm:p-8 hover:border-gray-800 hover:bg-gray-950/40 transition duration-300 flex flex-col justify-between"
            >
              {/* Outer top index number badges */}
              <div className="absolute -top-4 left-6 bg-gradient-to-r from-gray-900 to-gray-950 text-xs font-mono font-bold text-cyan-400 px-3.5 py-1 rounded-full border border-gray-800">
                {step.badge}
              </div>

              <div className="space-y-4 pt-2 text-left">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-950 border border-gray-800">
                  {step.icon}
                </div>

                <div className="space-y-2">
                  <h3 className="font-display text-lg sm:text-xl font-bold text-gray-100">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed text-left">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Subbullets */}
              <div className="mt-6 pt-4 border-t border-gray-950/80 space-y-2 text-left">
                {step.highlights.map((highlight, i) => (
                  <div key={i} className="flex items-center gap-2 text-[11px] text-gray-400 leading-normal">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
