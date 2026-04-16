import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { faqs } from '../data/siteData';

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div
      className={`rounded-2xl border transition-all duration-300 overflow-hidden
        ${isOpen ? 'border-electric-500/30 bg-electric-500/5' : 'border-white/[0.07] bg-white/[0.02] hover:border-white/15'}`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className={`font-body font-600 text-base transition-colors duration-200 ${isOpen ? 'text-white' : 'text-slate-200'}`}>
          {faq.q}
        </span>
        <div className={`w-7 h-7 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300
          ${isOpen ? 'border-electric-500/50 bg-electric-500/20 rotate-45' : 'border-white/20'}`}
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M5 2V8M2 5H8" stroke={isOpen ? '#38bdf8' : '#94a3b8'} strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
      </button>

      <div
        className="overflow-hidden transition-all duration-400"
        style={{ maxHeight: isOpen ? '300px' : '0' }}
      >
        <p className="px-6 pb-5 text-slate-400 font-body text-sm leading-relaxed">
          {faq.a}
        </p>
      </div>
    </div>
  );
}

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(0);
  const titleRef = useScrollAnimation();
  const listRef = useScrollAnimation();

  return (
    <section id="faqs" className="relative py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div ref={titleRef} className="section-animate">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-electric-500/10 border border-electric-500/20 text-electric-400 text-xs font-body font-600 uppercase tracking-widest mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-electric-400 animate-pulse-slow" />
              FAQs
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-800 text-white mb-5 tracking-tight leading-tight">
              Questions we get{' '}
              <span className="text-gradient">all the time</span>
            </h2>
            <p className="text-slate-400 font-body text-base leading-relaxed mb-8">
              We believe in radical transparency. No fine print, no hidden charges, no surprises. 
              If you have a question not answered here, our team responds within 2 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl shimmer-btn text-white font-body font-600 text-sm">
                Chat with a CA
              </button>
              <button className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-white/10 text-slate-300 font-body font-500 text-sm hover:bg-white/5 hover:text-white transition-all duration-200">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 2a6 6 0 100 12A6 6 0 008 2zm0 4.5v3m0 2v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                Help Center
              </button>
            </div>

            {/* Contact info */}
            <div className="mt-8 p-5 rounded-2xl card-glass border border-white/[0.06]">
              <p className="text-slate-400 font-body text-xs uppercase tracking-widest mb-3">Contact Us Directly</p>
              <div className="space-y-2">
                {[
                  { icon: '📱', label: '+91 99999 12345', sub: 'Mon–Sat, 9AM–7PM' },
                  { icon: '📧', label: 'support@taxsafar.com', sub: 'Reply within 2 hrs' },
                  { icon: '💬', label: 'WhatsApp Chat', sub: 'Instant response' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <span className="text-base">{item.icon}</span>
                    <div>
                      <div className="text-white font-body text-sm font-500">{item.label}</div>
                      <div className="text-slate-500 text-xs font-body">{item.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div ref={listRef} className="section-animate space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
