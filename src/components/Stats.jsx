import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useCountUp } from '../hooks/useCountUp';
import { stats } from '../data/siteData';

function StatCard({ stat }) {
  const { count, ref } = useCountUp(parseFloat(stat.value), 2000);

  return (
    <div ref={ref} className="flex flex-col items-center text-center group">
      <div className="text-3xl mb-3 transition-transform duration-300 group-hover:scale-110">{stat.icon}</div>
      <div className="font-display text-4xl sm:text-5xl font-800 text-white mb-1 leading-none">
        {Number.isInteger(parseFloat(stat.value)) ? count : count === parseFloat(stat.value) ? stat.value : count}
        <span className="text-gradient">{stat.suffix}</span>
      </div>
      <div className="text-slate-400 font-body text-sm font-500">{stat.label}</div>
    </div>
  );
}

export default function Stats() {
  const ref = useScrollAnimation();

  return (
    <section className="relative py-16 sm:py-20 overflow-hidden">
      {/* Divider lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className="section-animate grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12"
        >
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
