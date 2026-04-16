import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const themes = {
  default: {
    name: 'Default',
    colors: {
      'navy-950': '#0f172a',
      'navy-900': '#1e293b',
      'navy-800': '#334155',
      'electric-500': '#0ea5e9',
      'electric-400': '#38bdf8',
      'emerald-500': '#10b981',
      'emerald-400': '#34d399',
      'purple-500': '#a855f7',
      'purple-400': '#c084fc',
    }
  },
  redmi: {
    name: 'Redmi',
    colors: {
      'navy-950': '#1a0000',
      'navy-900': '#2d0000',
      'navy-800': '#400000',
      'electric-500': '#ff6900',
      'electric-400': '#ff8533',
      'emerald-500': '#ff4500',
      'emerald-400': '#ff6347',
      'purple-500': '#ff1744',
      'purple-400': '#f44336',
    }
  },
  ocean: {
    name: 'Ocean',
    colors: {
      'navy-950': '#082f49',
      'navy-900': '#0c4a6e',
      'navy-800': '#075985',
      'electric-500': '#06b6d4',
      'electric-400': '#22d3ee',
      'emerald-500': '#14b8a6',
      'emerald-400': '#2dd4bf',
      'purple-500': '#6366f1',
      'purple-400': '#818cf8',
    }
  },
  forest: {
    name: 'Forest',
    colors: {
      'navy-950': '#14532d',
      'navy-900': '#166534',
      'navy-800': '#15803d',
      'electric-500': '#16a34a',
      'electric-400': '#22c55e',
      'emerald-500': '#84cc16',
      'emerald-400': '#a3e635',
      'purple-500': '#65a30d',
      'purple-400': '#84cc16',
    }
  },
  sunset: {
    name: 'Sunset',
    colors: {
      'navy-950': '#431407',
      'navy-900': '#7c2d12',
      'navy-800': '#9a3412',
      'electric-500': '#f97316',
      'electric-400': '#fb923c',
      'emerald-500': '#f59e0b',
      'emerald-400': '#fbbf24',
      'purple-500': '#dc2626',
      'purple-400': '#ef4444',
    }
  },
  aurora: {
    name: 'Aurora',
    colors: {
      'navy-950': '#1e1b4b',
      'navy-900': '#312e81',
      'navy-800': '#4c1d95',
      'electric-500': '#8b5cf6',
      'electric-400': '#a78bfa',
      'emerald-500': '#ec4899',
      'emerald-400': '#f472b6',
      'purple-500': '#06b6d4',
      'purple-400': '#22d3ee',
    }
  },
  midnight: {
    name: 'Midnight',
    colors: {
      'navy-950': '#030712',
      'navy-900': '#111827',
      'navy-800': '#1f2937',
      'electric-500': '#6366f1',
      'electric-400': '#818cf8',
      'emerald-500': '#10b981',
      'emerald-400': '#34d399',
      'purple-500': '#f59e0b',
      'purple-400': '#fbbf24',
    }
  },
  cherry: {
    name: 'Cherry',
    colors: {
      'navy-950': '#450a0a',
      'navy-900': '#7f1d1d',
      'navy-800': '#991b1b',
      'electric-500': '#e11d48',
      'electric-400': '#f43f5e',
      'emerald-500': '#be123c',
      'emerald-400': '#e11d48',
      'purple-500': '#fbbf24',
      'purple-400': '#f59e0b',
    }
  }
};

export function ThemeProvider({ children }) {
  const [currentTheme, setCurrentTheme] = useState('midnight');
  const [theme, setTheme] = useState(themes.midnight);
  const [bubbleTrigger, setBubbleTrigger] = useState(0);

  useEffect(() => {
    const savedTheme = localStorage.getItem('taxsafar-theme');
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme);
      setTheme(themes[savedTheme]);
    }
  }, []);

  const changeTheme = (themeName) => {
    if (themes[themeName]) {
      setCurrentTheme(themeName);
      setTheme(themes[themeName]);
      localStorage.setItem('taxsafar-theme', themeName);
      
      // Trigger bubble animation
      setBubbleTrigger(prev => prev + 1);
      
      // Apply theme colors to CSS variables
      const root = document.documentElement;
      Object.entries(themes[themeName].colors).forEach(([key, value]) => {
        root.style.setProperty(`--color-${key}`, value);
      });
    }
  };

  useEffect(() => {
    // Apply initial theme colors
    const root = document.documentElement;
    Object.entries(theme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, currentTheme, changeTheme, themes, bubbleTrigger }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
