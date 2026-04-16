import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeSwitcher from './ThemeSwitcher';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'File ITR', href: '/file-itr' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Help Center', href: '/help-center' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'backdrop-blur-xl border-b border-white/[0.06] shadow-2xl shadow-black/50'
            : ''
        }`}
        style={{
          backgroundColor: scrolled ? 'var(--color-navy-950)' : 'transparent'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2.5 group transform transition-all duration-300 hover:scale-105"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-electric-500 to-emerald-500 flex items-center justify-center shadow-lg shadow-electric-500/30 group-hover:shadow-electric-500/50 transition-all duration-300 transform group-hover:rotate-3 group-hover:scale-110">
                <span className="text-white font-display font-800 text-sm transform transition-transform duration-300 group-hover:scale-110">T</span>
              </div>
              <div className="flex flex-col leading-none transform transition-transform duration-300 group-hover:translate-y-0.5">
                <span className="font-display font-700 text-white text-lg tracking-tight bg-gradient-to-r from-white to-electric-400 bg-clip-text text-transparent group-hover:from-electric-400 group-hover:to-white transition-all duration-300">TaxSafar</span>
                <span className="text-electric-400 text-[10px] font-body font-500 tracking-widest uppercase group-hover:text-emerald-400 transition-colors duration-300">Smart Tax Filing</span>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-4 py-2 rounded-lg text-sm font-body font-500 transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 ${
                    location.pathname === link.href
                      ? 'text-electric-400 bg-electric-500/10 shadow-lg shadow-electric-500/20'
                      : 'text-slate-400 hover:text-white hover:bg-white/5 hover:shadow-lg'
                  }`}
                >
                  <span className="relative">
                    {link.label}
                    {location.pathname === link.href && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-electric-400 transform transition-transform duration-300 scale-x-100" />
                    )}
                  </span>
                </Link>
              ))}
            </div>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-3">
              <ThemeSwitcher />
              <Link
                to="/file-itr"
                className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-body font-600 bg-gradient-to-r from-emerald-500 to-green-600 text-white border border-emerald-500/30 hover:from-emerald-600 hover:to-green-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/30"
              >
                <span>File ITR</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transform transition-transform duration-300 group-hover:scale-110">
                  <path d="M2 7H12M12 7L9 4M12 7L9 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link
                to="/dashboard"
                className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-body font-600 bg-navy-800 text-white border border-white/10 hover:bg-navy-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <span>Dashboard</span>
              </Link>
              <Link
                to="/services"
                className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-body font-600 shimmer-btn text-white transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-electric-500/30"
              >
                <span>Get Started</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transform transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M3 7H11M11 7L8 4M11 7L8 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-white/5 transition-colors"
                aria-label="Toggle menu"
              >
                <span className={`block w-5 h-0.5 bg-slate-300 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block w-5 h-0.5 bg-slate-300 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-5 h-0.5 bg-slate-300 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-400 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 backdrop-blur-xl" onClick={() => setMenuOpen(false)} style={{ backgroundColor: 'var(--color-navy-950)', opacity: 0.95 }} />
        <div className={`absolute top-16 left-0 right-0 border-b border-white/[0.06] p-4 transition-all duration-400 ${
          menuOpen ? 'translate-y-0' : '-translate-y-8'
        }`} style={{ backgroundColor: 'var(--color-navy-900)', opacity: 0.95 }}>
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => handleNavClick(link.href)}
              className="flex w-full items-center justify-between px-4 py-3.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-200 font-body font-500"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              {link.label}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 8H12M12 8L9 5M12 8L9 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          ))}
          <Link
            to="/file-itr"
            className="mt-3 w-full py-3.5 rounded-xl text-sm font-body font-600 bg-gradient-to-r from-emerald-500 to-green-600 text-white border border-emerald-500/30 flex items-center justify-center gap-2"
          >
            File ITR {'->'}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7H12M12 7L9 4M12 7L9 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <Link
            to="/dashboard"
            className="mt-2 w-full py-3.5 rounded-xl text-sm font-body font-600 bg-navy-800 text-white border border-white/10"
          >
            Dashboard {'->'}
          </Link>
          <Link
            to="/services"
            className="mt-2 w-full py-3.5 rounded-xl text-sm font-body font-600 shimmer-btn text-white"
          >
            Get Started Free {'->'}
          </Link>
        </div>
      </div>
    </>
  );
}
