import { useState, useEffect, useRef } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { testimonials } from '../data/siteData';

function StarRating({ count = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#fbbf24">
          <path d="M7 1l1.8 3.6 4 .6-2.9 2.8.7 4-3.6-1.9-3.6 1.9.7-4L1.2 5.2l4-.6L7 1z"/>
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial, active }) {
  return (
    <div className={`relative rounded-3xl border p-6 sm:p-7 transition-all duration-500 flex flex-col gap-5 h-full
      ${active
        ? 'border-electric-500/40 bg-gradient-to-br from-electric-500/10 to-electric-600/5 shadow-2xl shadow-electric-500/10'
        : 'border-white/[0.07] bg-white/[0.02]'
      }`}
    >
      {/* Quote mark */}
      <div className="text-4xl text-electric-500/20 font-display font-800 leading-none select-none">"</div>

      {/* Badge */}
      <div className="inline-flex self-start items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] text-emerald-400 font-body font-600 uppercase tracking-wide">
        ✅ {testimonial.service}
      </div>

      <p className="text-slate-300 font-body text-sm sm:text-base leading-relaxed flex-1">
        {testimonial.text}
      </p>

      {/* Highlight */}
      <div className="inline-flex self-start items-center gap-2 px-3 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20">
        <span className="text-gold-400 text-xs font-body font-700">💡 {testimonial.highlight}</span>
      </div>

      {/* Author */}
      <div className="flex items-center gap-3 pt-2 border-t border-white/[0.05]">
        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.avatarColor} flex items-center justify-center text-white font-display font-700 text-sm`}>
          {testimonial.avatar}
        </div>
        <div>
          <div className="text-white font-body font-600 text-sm">{testimonial.name}</div>
          <div className="text-slate-500 text-xs font-body">{testimonial.role}</div>
        </div>
        <div className="ml-auto">
          <StarRating count={testimonial.rating} />
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const titleRef = useScrollAnimation();
  const gridRef = useScrollAnimation();
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActive((a) => (a + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleDotClick = (i) => {
    setActive(i);
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActive((a) => (a + 1) % testimonials.length);
    }, 4000);
  };

  return (
    <section id="reviews" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="section-animate text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-body font-600 uppercase tracking-widest mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse-slow" />
            Client Stories
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-800 text-white mb-4 tracking-tight">
            Real people,{' '}
            <span className="text-gradient-gold">real results</span>
          </h2>
          <p className="text-slate-400 font-body text-lg">
            From first-time filers to seasoned founders — here's what they say.
          </p>
        </div>

        {/* Testimonial grid */}
        <div ref={gridRef} className="stagger-children grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {testimonials.slice(0, 3).map((t, i) => (
            <TestimonialCard key={t.id} testimonial={t} active={active === i} />
          ))}
        </div>

        {/* Bottom row - 2 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mt-5 sm:mt-6 max-w-4xl mx-auto">
          {testimonials.slice(3, 5).map((t, i) => (
            <TestimonialCard key={t.id} testimonial={t} active={active === i + 3} />
          ))}
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              className={`rounded-full transition-all duration-300 ${
                active === i ? 'w-6 h-2 bg-electric-400' : 'w-2 h-2 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>

        {/* Rating summary */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          <div className="flex items-center gap-3">
            <StarRating count={5} />
            <span className="font-display text-2xl font-800 text-white">4.9</span>
            <span className="text-slate-400 font-body text-sm">on Google (2,800+ reviews)</span>
          </div>
          <div className="w-px h-6 bg-white/10 hidden sm:block" />
          <div className="flex items-center gap-2 text-slate-400 font-body text-sm">
            <span className="text-emerald-400">✓</span>
            All reviews are verified clients
          </div>
        </div>
      </div>
    </section>
  );
}
