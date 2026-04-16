import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export default function ThemeSwitcher() {
  const { currentTheme, changeTheme, themes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const themeColors = {
    default: 'bg-gradient-to-br from-blue-500 to-emerald-500',
    redmi: 'bg-gradient-to-br from-orange-500 to-red-500',
    ocean: 'bg-gradient-to-br from-cyan-500 to-blue-500',
    forest: 'bg-gradient-to-br from-green-500 to-lime-500',
    sunset: 'bg-gradient-to-br from-orange-500 to-yellow-500',
    aurora: 'bg-gradient-to-br from-purple-500 to-pink-500',
    midnight: 'bg-gradient-to-br from-indigo-500 to-green-500',
    cherry: 'bg-gradient-to-br from-red-500 to-yellow-500'
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 rounded-full border-2 border-white/20 overflow-hidden transition-all duration-300 hover:scale-110 hover:border-white/40"
        style={{
          background: `linear-gradient(135deg, ${themes[currentTheme].colors['electric-500']} 0%, ${themes[currentTheme].colors['emerald-500']} 100%)`
        }}
      >
        <div className="w-full h-full flex items-center justify-center">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
          </svg>
        </div>
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-56 bg-navy-900 rounded-xl border border-white/10 shadow-2xl z-50 overflow-hidden">
            <div className="p-2">
              <div className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Themes
              </div>
              {Object.entries(themes).map(([key, theme]) => (
                <button
                  key={key}
                  onClick={() => {
                    changeTheme(key);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                    currentTheme === key
                      ? 'bg-white/10 text-white'
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <div 
                    className={`w-6 h-6 rounded-full ${themeColors[key]}`}
                  />
                  <span className="text-sm font-medium">{theme.name}</span>
                  {currentTheme === key && (
                    <svg className="w-4 h-4 text-electric-400 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
