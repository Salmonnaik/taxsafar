import { useScrollAnimation } from '../hooks/useScrollAnimation';

const partners = [
  { name: 'ICAI', full: 'Institute of Chartered Accountants', emoji: '📜' },
  { name: 'MCA', full: 'Ministry of Corporate Affairs', emoji: '🏛️' },
  { name: 'GSTN', full: 'GST Network', emoji: '🔗' },
  { name: 'ClearTax', full: 'ClearTax Partner', emoji: '🤝' },
  { name: 'ISO 27001', full: 'Data Security Certified', emoji: '🔒' },
  { name: 'RBI', full: 'RBI Compliant Payments', emoji: '🏦' },
];

export default function TrustBar() {
  const ref = useScrollAnimation();

  return (
    <section className="relative py-12 sm:py-14 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-slate-600 font-body text-xs uppercase tracking-widest mb-8 font-500">
          Trusted partners & certifications
        </p>

        <div
          ref={ref}
          className="section-animate grid grid-cols-3 sm:grid-cols-6 gap-4 sm:gap-6"
        >
          {partners.map((p) => (
            <div
              key={p.name}
              className="group flex flex-col items-center gap-2 p-3 sm:p-4 rounded-2xl border border-white/[0.05] hover:border-white/10 hover:bg-white/[0.02] transition-all duration-200 cursor-default"
            >
              <span className="text-2xl transition-transform duration-200 group-hover:scale-110">{p.emoji}</span>
              <div className="text-center">
                <div className="text-white font-display font-700 text-xs">{p.name}</div>
                <div className="text-slate-600 font-body text-[9px] leading-tight hidden sm:block">{p.full}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
