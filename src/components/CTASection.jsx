import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function CTASection() {
  const ref = useScrollAnimation();

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-electric-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-emerald-500/8 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className="section-animate relative rounded-3xl overflow-hidden border border-white/10"
          style={{
            background: 'linear-gradient(135deg, rgba(14,165,233,0.12) 0%, rgba(15,32,64,0.8) 40%, rgba(16,185,129,0.08) 100%)',
          }}
        >
          {/* Top line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric-500/60 to-transparent" />
          {/* Bottom line */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />

          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `linear-gradient(rgba(56,189,248,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.5) 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
            }}
          />

          <div className="relative px-8 py-14 sm:px-14 sm:py-16 text-center">
            {/* Floating badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300 font-body mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-slow" />
              CA experts available now · Zero wait
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-800 text-white tracking-tight leading-[1.05] mb-6">
              Your taxes deserve{' '}
              <span className="text-gradient">expert hands.</span>
              <br />
              <span className="text-slate-300">Not a guessing game.</span>
            </h2>

            <p className="text-slate-400 font-body text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Join 2,40,000+ Indians who file smarter, save more, and never worry about tax notices.
              Start in 2 minutes. Pay only when you're happy.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl shimmer-btn text-white font-body font-700 text-base shadow-2xl shadow-electric-500/30">
                <span>Start Filing for Free</span>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M4 9H14M14 9L10 5M14 9L10 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl border border-white/15 text-slate-200 font-body font-600 text-base hover:bg-white/5 hover:border-white/25 hover:text-white transition-all duration-250">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 2a7 7 0 100 14A7 7 0 009 2zm0 3.5v4l2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Schedule a CA call</span>
              </button>
            </div>

            {/* Trust micro-copy */}
            <div className="flex flex-wrap items-center justify-center gap-5 text-sm text-slate-500 font-body">
              {[
                { icon: '🔒', text: 'Bank-level encryption' },
                { icon: '✅', text: 'No hidden charges' },
                { icon: '🛡️', text: '90-day post-filing support' },
                { icon: '↩️', text: 'Money-back guarantee' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-1.5">
                  <span>{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
