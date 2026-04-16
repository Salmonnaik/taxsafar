const tagColorMap = {
  electric: 'bg-electric-500/15 text-electric-300 border-electric-500/30',
  emerald: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
  gold: 'bg-gold-500/15 text-gold-300 border-gold-500/30',
  red: 'bg-red-500/15 text-red-300 border-red-500/30',
};

const checkColorMap = {
  electric: 'text-electric-400',
  emerald: 'text-emerald-400',
  gold: 'text-gold-400',
  red: 'text-red-400',
};

const btnColorMap = {
  electric: 'bg-electric-500/15 text-electric-300 hover:bg-electric-500 hover:text-white border border-electric-500/30 hover:border-electric-500',
  emerald: 'bg-emerald-500/15 text-emerald-300 hover:bg-emerald-500 hover:text-white border border-emerald-500/30 hover:border-emerald-500',
  gold: 'bg-gold-500/15 text-gold-300 hover:bg-gold-500 hover:text-navy-950 border border-gold-500/30 hover:border-gold-500',
  red: 'bg-red-500/15 text-red-300 hover:bg-red-500 hover:text-white border border-red-500/30 hover:border-red-500',
};

export default function ServiceCard({ service, featured }) {
  const tagColor = tagColorMap[service.tagColor] || tagColorMap.electric;
  const checkColor = checkColorMap[service.color] || checkColorMap.electric;
  const btnColor = btnColorMap[service.color] || btnColorMap.electric;

  return (
    <div
      className={`relative flex flex-col rounded-3xl border transition-all duration-400 overflow-hidden group
        ${featured
          ? `${service.border} bg-gradient-to-br ${service.gradient} shadow-2xl ring-1 ring-white/10`
          : `border-white/[0.07] bg-white/[0.02] hover:${service.border} hover:bg-gradient-to-br hover:${service.gradient}`
        }
        card-glass-hover`}
    >
      {/* Top gradient line */}
      <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${
        service.color === 'electric' ? 'via-electric-500/60' :
        service.color === 'emerald' ? 'via-emerald-500/60' :
        service.color === 'gold' ? 'via-gold-500/60' :
        'via-red-500/60'
      } to-transparent`} />

      <div className="p-6 sm:p-7 flex flex-col h-full gap-5">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div className={`w-12 h-12 rounded-2xl ${service.iconBg} flex items-center justify-center text-2xl flex-shrink-0 transition-transform duration-300 group-hover:scale-110`}>
            {service.icon}
          </div>
          <div className={`px-2.5 py-1 rounded-full text-[10px] font-body font-600 uppercase tracking-wide border ${tagColor}`}>
            {service.tag}
          </div>
        </div>

        {/* Title */}
        <div>
          <h3 className="font-display text-xl font-700 text-white leading-tight">{service.title}</h3>
          <p className="text-slate-500 text-xs font-body mt-0.5">{service.subtitle}</p>
        </div>

        {/* Description */}
        <p className="text-slate-400 font-body text-sm leading-relaxed flex-1">{service.description}</p>

        {/* Features */}
        <ul className="space-y-2">
          {service.features.map((feat) => (
            <li key={feat} className="flex items-center gap-2.5 text-sm font-body text-slate-300">
              <svg className={`w-4 h-4 flex-shrink-0 ${checkColor}`} viewBox="0 0 16 16" fill="none">
                <path d="M3 8L6.5 11.5L13 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {feat}
            </li>
          ))}
        </ul>

        {/* Price + CTA */}
        <div className="flex items-center justify-between pt-2 border-t border-white/[0.05]">
          <div>
            <span className="font-display text-2xl font-800 text-white">{service.price}</span>
            <span className="text-slate-500 text-xs font-body ml-1">{service.priceNote}</span>
          </div>
          <button
            className={`px-4 py-2.5 rounded-xl text-sm font-body font-600 transition-all duration-250 ${btnColor}`}
          >
            {service.cta} →
          </button>
        </div>
      </div>
    </div>
  );
}
