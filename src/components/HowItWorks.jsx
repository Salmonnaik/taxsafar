import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { steps } from '../data/siteData';

export default function HowItWorks() {
  const titleRef = useScrollAnimation();
  const stepsRef = useScrollAnimation();

  return (
    <section id="how-it-works" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-electric-500/[0.03] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="section-animate text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-body font-600 uppercase tracking-widest mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-slow" />
            How It Works
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-800 text-white mb-4 tracking-tight">
            From signup to filed{' '}
            <span className="text-gradient">in 4 steps</span>
          </h2>
          <p className="text-slate-400 font-body text-lg">
            We stripped out the complexity so you don't have to deal with it.
          </p>
        </div>

        <div
          ref={stepsRef}
          className="stagger-children relative"
        >
          {/* Connecting line — desktop only */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px">
            <div className="h-full bg-gradient-to-r from-electric-500/0 via-electric-500/30 to-electric-500/0" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {steps.map((step, i) => (
              <div key={step.step} className="relative flex flex-col items-center text-center group">
                {/* Step number circle */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-2xl card-glass border border-white/10 flex flex-col items-center justify-center transition-all duration-300 group-hover:border-electric-500/40 group-hover:bg-electric-500/5 group-hover:shadow-xl group-hover:shadow-electric-500/10">
                    <span className="text-3xl mb-0.5">{step.icon}</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-navy-900 border border-electric-500/50 flex items-center justify-center">
                    <span className="font-display text-[10px] font-700 text-electric-400">{step.step}</span>
                  </div>
                </div>

                <h3 className="font-display text-lg font-700 text-white mb-2 leading-tight">{step.title}</h3>
                <p className="text-slate-400 font-body text-sm leading-relaxed max-w-[220px]">{step.description}</p>

                {/* Arrow for non-last items — mobile hidden, desktop shown via absolute line */}
                {i < steps.length - 1 && (
                  <div className="sm:hidden mt-4 text-electric-500/40">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 5v14M12 19l-4-4M12 19l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Timeline note */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="card-glass rounded-2xl border border-white/[0.06] p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 flex items-center justify-center text-2xl flex-shrink-0">
              ⚡
            </div>
            <div className="text-center sm:text-left">
              <h4 className="font-display text-lg font-700 text-white mb-1">Most ITRs filed within 24 hours</h4>
              <p className="text-slate-400 font-body text-sm leading-relaxed">
                After you submit documents, a dedicated CA reviews, optimizes, and files your return. 
                You receive acknowledgement + ITR-V copy via email and WhatsApp.
              </p>
            </div>
            <button className="flex-shrink-0 px-5 py-2.5 rounded-xl shimmer-btn text-white font-body font-600 text-sm whitespace-nowrap">
              Start Now →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
