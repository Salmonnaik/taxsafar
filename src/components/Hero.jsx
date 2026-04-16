import { useState, useEffect } from 'react';
import { trustBadges } from '../data/siteData';

const intents = [
  {
    id: 'itr',
    emoji: '📊',
    title: 'File My ITR',
    subtitle: 'Income tax return filing',
    desc: 'From ₹499 · Done in 24 hrs',
    color: 'electric',
    href: '#services',
  },
  {
    id: 'gst',
    emoji: '🧾',
    title: 'GST Help',
    subtitle: 'Registration & monthly filing',
    desc: 'From ₹999 · All-inclusive',
    color: 'emerald',
    href: '#services',
  },
  {
    id: 'company',
    emoji: '🏢',
    title: 'Register Company',
    subtitle: 'Pvt Ltd, LLP, OPC',
    desc: 'From ₹2,999 · 2-week delivery',
    color: 'gold',
    href: '#services',
  },
  {
    id: 'notice',
    emoji: '🛡️',
    title: 'Got a Notice?',
    subtitle: 'IT dept / GST dept notices',
    desc: 'Expert CA response · Same day',
    color: 'red',
    href: '#services',
  },
];

const colorMap = {
  electric: {
    hover: 'hover:border-electric-500/60 hover:shadow-electric-500/20',
    selected: 'border-electric-500 bg-electric-500/10 shadow-electric-500/25',
    emoji: 'bg-electric-500/15',
    text: 'text-electric-400',
    badge: 'bg-electric-500/20 text-electric-300 border-electric-500/30',
  },
  emerald: {
    hover: 'hover:border-emerald-500/60 hover:shadow-emerald-500/20',
    selected: 'border-emerald-500 bg-emerald-500/10 shadow-emerald-500/25',
    emoji: 'bg-emerald-500/15',
    text: 'text-emerald-400',
    badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
  },
  gold: {
    hover: 'hover:border-gold-500/60 hover:shadow-gold-500/20',
    selected: 'border-gold-500 bg-gold-500/10 shadow-gold-500/25',
    emoji: 'bg-gold-500/15',
    text: 'text-gold-400',
    badge: 'bg-gold-500/20 text-gold-300 border-gold-500/30',
  },
  red: {
    hover: 'hover:border-red-500/60 hover:shadow-red-500/20',
    selected: 'border-red-500 bg-red-500/10 shadow-red-500/25',
    emoji: 'bg-red-500/15',
    text: 'text-red-400',
    badge: 'bg-red-500/20 text-red-300 border-red-500/30',
  },
};

function AnimatedWord({ words, interval = 2800 }) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % words.length);
        setVisible(true);
      }, 300);
    }, interval);
    return () => clearInterval(timer);
  }, [words, interval]);

  return (
    <span
      className="text-gradient inline-block"
      style={{
        transition: 'opacity 0.3s ease, transform 0.3s ease',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(-8px)',
        display: 'inline-block',
      }}
    >
      {words[index]}
    </span>
  );
}

export default function Hero() {
  const [selected, setSelected] = useState(null);
  const [mounted, setMounted] = useState(false);
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  const handleSelect = (intent) => {
    setSelected(intent.id);
    
    if (intent.id === 'company') {
      setSelectedService(intent.title);
      setShowComingSoon(true);
    } else {
      setTimeout(() => {
        const el = document.querySelector(intent.href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-mesh pt-16">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden preserve-3d">
        {/* Aurora animated background */}
        <div className="absolute inset-0 bg-aurora opacity-20" />
        
        {/* Morphing shapes */}
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] morph-bg opacity-30 rounded-full blur-2xl" style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] morph-bg opacity-25 rounded-full blur-3xl" style={{ animationDelay: '3s' }} />
        
        {/* Orbit elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 orbit-container">
          <div className="orbit-element" style={{ animationDelay: '0s', top: '-100px' }} />
          <div className="orbit-element" style={{ animationDelay: '5s', top: '-150px', left: '100px' }} />
          <div className="orbit-element" style={{ animationDelay: '10s', top: '50px', left: '-100px' }} />
        </div>
        
        {/* Original floating elements with enhanced animations */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-electric-500/5 rounded-full blur-3xl float-animation parallax-slow glow-pulse" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-emerald-500/4 rounded-full blur-3xl float-animation parallax-medium" style={{ animationDelay: '2s' }} />
        
        {/* Particle field effect */}
        <div className="absolute inset-0 bg-particle-field opacity-30" />
        
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.025] grid-overlay-3d"
          style={{
            backgroundImage: `linear-gradient(rgba(56,189,248,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Floating badges */}
        <div className="hidden lg:block absolute top-32 right-12 float-animation preserve-3d" style={{ animationDelay: '0s' }}>
          <div className="card-glass card-3d rounded-2xl px-4 py-3 flex items-center gap-2.5 transform-gpu hover:scale-105 hover:translateZ(15px) transition-all duration-300">
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-sm transform preserve-3d group-hover:rotate-12 transition-transform duration-300">{`\u2705`}</div>
            <div>
              <div className="text-xs text-white font-body font-600">ITR Filed</div>
              <div className="text-[10px] text-emerald-400 font-body">2 min ago · Bengaluru</div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block absolute top-64 right-32 float-animation preserve-3d" style={{ animationDelay: '2s' }}>
          <div className="card-glass card-3d rounded-2xl px-4 py-3 flex items-center gap-2.5 transform-gpu hover:scale-105 hover:translateZ(15px) transition-all duration-300">
            <div className="w-8 h-8 rounded-full bg-electric-500/20 flex items-center justify-center text-sm transform preserve-3d group-hover:rotate-12 transition-transform duration-300">{`\ud83d\udcb0`}</div>
            <div>
              <div className="text-xs text-white font-body font-600">Tax Saved</div>
              <div className="text-[10px] text-electric-400 font-body">{`\u20b9`}18,400 refund claimed</div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block absolute bottom-40 right-16 float-animation preserve-3d" style={{ animationDelay: '4s' }}>
          <div className="card-glass card-3d rounded-2xl px-4 py-3 flex items-center gap-2.5 transform-gpu hover:scale-105 hover:translateZ(15px) transition-all duration-300">
            <div className="w-8 h-8 rounded-full bg-gold-500/20 flex items-center justify-center text-sm transform preserve-3d group-hover:rotate-12 transition-transform duration-300">{`\u2b50`}</div>
            <div>
              <div className="text-xs text-white font-body font-600">5-star review</div>
              <div className="text-[10px] text-gold-400 font-body">Priya · GST Filing</div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Trust pill */}
        <div
          className="flex justify-center mb-8"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(-16px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full card-glass border border-white/10 text-sm">
            <div className="flex -space-x-1">
              {['PS', 'RA', 'AM'].map((initials, i) => (
                <div key={i} className="w-5 h-5 rounded-full bg-gradient-to-br from-electric-500 to-emerald-500 border border-navy-950 flex items-center justify-center text-[8px] text-white font-display font-700">
                  {initials[0]}
                </div>
              ))}
            </div>
            <span className="text-slate-300 font-body">Trusted by <span className="text-white font-600">2,40,000+</span> taxpayers</span>
            <span className="text-gold-400">★★★★★</span>
          </div>
        </div>

        {/* Headline */}
        <div className="text-center max-w-4xl mx-auto mb-6">
          <h1
            className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-800 text-white leading-[1.05] tracking-tight"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s',
            }}
          >
            Taxes made{' '}
            <AnimatedWord words={['simple.', 'smart.', 'stress-free.', 'accurate.']} />
            <br />
            <span className="text-slate-300">for every Indian.</span>
          </h1>
        </div>

        <p
          className="text-center text-slate-400 font-body text-lg sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.7s ease 0.25s, transform 0.7s ease 0.25s',
          }}
        >
          Expert CA-backed tax filing, GST compliance, and company registration. 
          From ₹499. Done in 24 hours.
        </p>

        {/* Decision engine */}
        <div
          className="max-w-3xl mx-auto"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(28px)',
            transition: 'opacity 0.7s ease 0.4s, transform 0.7s ease 0.4s',
          }}
        >
          <p className="text-center text-slate-500 text-sm font-body font-500 uppercase tracking-widest mb-5">
            What do you need today?
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {intents.map((intent) => {
              const colors = colorMap[intent.color];
              const isSelected = selected === intent.id;
              return (
                <button
                  key={intent.id}
                  onClick={() => handleSelect(intent)}
                  className={`relative group flex flex-col items-center gap-3 p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer text-left preserve-3d card-3d
                    ${isSelected
                      ? `${colors.selected} shadow-xl transform scale-105 translateZ(20px)`
                      : `border-white/10 bg-white/[0.02] ${colors.hover} hover:shadow-xl hover:-translate-y-1 hover:rotateY(5deg) hover:rotateX(-5deg) hover:translateZ(15px)`
                    }`}
                >
                  {isSelected && (
                    <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5L4.5 7.5L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  )}
                  <div className={`w-12 h-12 rounded-xl ${colors.emoji} flex items-center justify-center text-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 transform preserve-3d`}>
                    {intent.emoji}
                  </div>
                  <div className="text-center">
                    <div className="text-white font-display font-700 text-sm sm:text-base leading-tight">{intent.title}</div>
                    <div className="text-slate-500 text-xs font-body mt-0.5 leading-tight">{intent.subtitle}</div>
                  </div>
                  <div className={`text-[10px] font-body font-500 px-2 py-1 rounded-full border ${colors.badge}`}>
                    {intent.desc}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Trust badges row */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {trustBadges.map((badge) => (
              <div key={badge.label} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] text-xs text-slate-400 font-body">
                <span>{badge.icon}</span>
                <span>{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-[10px] text-slate-500 font-body uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-500 to-transparent" />
      </div>

      {/* Coming Soon Modal */}
      {showComingSoon && (
        <>
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" 
            onClick={() => setShowComingSoon(false)}
          />
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <div className="bg-navy-900 rounded-2xl border border-white/10 shadow-2xl max-w-md w-full p-6 transform transition-all duration-300 scale-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">Coming Soon</h3>
                <button
                  onClick={() => setShowComingSoon(false)}
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200"
                >
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="text-center py-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-gold-500/20 to-orange-500/20 flex items-center justify-center">
                  <span className="text-2xl">{"\ud83c\udfe2"}</span>
                </div>
                <p className="text-gray-300 mb-2">
                  <span className="text-white font-semibold">{selectedService}</span> service is coming soon!
                </p>
                <p className="text-gray-500 text-sm">
                  We're working on bringing you company registration services. Stay tuned for updates!
                </p>
              </div>
              
              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setShowComingSoon(false)}
                  className="flex-1 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors duration-200 font-medium"
                >
                  Go Back
                </button>
                <button
                  onClick={() => setShowComingSoon(false)}
                  className="px-4 py-2 bg-gradient-to-r from-gold-500 to-orange-500 hover:from-gold-600 hover:to-orange-600 text-white rounded-lg transition-all duration-200 font-medium"
                >
                  Got it
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
