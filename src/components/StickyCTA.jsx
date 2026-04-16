import { useState, useEffect } from 'react';

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (!dismissed) {
        setVisible(window.scrollY > 500);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [dismissed]);

  if (dismissed) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 transition-all duration-500 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      {/* Gradient fade up */}
      <div className="absolute bottom-full left-0 right-0 h-16 bg-gradient-to-t from-navy-950/60 to-transparent pointer-events-none" />

      <div className="bg-navy-900/95 backdrop-blur-xl border-t border-white/[0.08] shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6">
          {/* Left: Offer text */}
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="hidden sm:flex w-9 h-9 rounded-xl bg-electric-500/15 items-center justify-center text-lg flex-shrink-0">
              ⚡
            </div>
            <div>
              <p className="text-white font-body font-600 text-sm">
                File your ITR today — Starting at <span className="text-gradient font-700">₹499</span>
              </p>
              <p className="text-slate-400 font-body text-xs">
                CA-verified · Done in 24 hrs · ₹0 charges until you approve
              </p>
            </div>
          </div>

          {/* Right: CTA + dismiss */}
          <div className="flex items-center gap-3 flex-shrink-0 w-full sm:w-auto">
            <button
              onClick={() => {
                const el = document.querySelector('#services');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl shimmer-btn text-white font-body font-600 text-sm"
            >
              Get Started
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7H11M11 7L8 4M11 7L8 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              onClick={() => setDismissed(true)}
              className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-200 flex-shrink-0"
              aria-label="Dismiss"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 2L10 10M10 2L2 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
