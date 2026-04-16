import { useScrollAnimation } from '../hooks/useScrollAnimation';
import ServiceCard from './ServiceCard';
import { services } from '../data/siteData';

export default function Services() {
  const titleRef = useScrollAnimation();
  const gridRef = useScrollAnimation();

  return (
    <section id="services" className="relative py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div ref={titleRef} className="section-animate text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-electric-500/10 border border-electric-500/20 text-electric-400 text-xs font-body font-600 uppercase tracking-widest mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-electric-400 animate-pulse-slow" />
            Our Services
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-800 text-white mb-4 tracking-tight">
            Everything tax, under{' '}
            <span className="text-gradient">one roof</span>
          </h2>
          <p className="text-slate-400 font-body text-lg leading-relaxed">
            CA-verified expertise, startup-grade speed, and transparent pricing. No surprise charges. Ever.
          </p>
        </div>

        {/* Services grid */}
        <div ref={gridRef} className="stagger-children grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map((service, i) => (
            <ServiceCard
              key={service.id}
              service={service}
              featured={i === 0}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-500 font-body text-sm mb-4">Not sure which service you need?</p>
          <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-slate-300 font-body font-500 text-sm hover:bg-white/5 hover:border-white/20 hover:text-white transition-all duration-200">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 3C5.2 3 3 5.2 3 8s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 7.5v-1M8 8V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            Talk to a CA for free
          </button>
        </div>
      </div>
    </section>
  );
}
