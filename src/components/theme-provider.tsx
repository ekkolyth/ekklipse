import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'dark' | 'light' | 'system';

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: Theme;
  attribute?: string;
  enableSystem?: boolean;
}

interface ThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: 'dark' | 'light';
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  attribute = 'class',
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    // Load theme from localStorage on initialization
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme') as Theme;
      return stored || defaultTheme;
    }
    return defaultTheme;
  });
  
  // Initialize resolved theme based on the loaded theme
  const [resolvedTheme, setResolvedTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      const stored = localStorage.getItem('theme') as Theme;
      const currentTheme = stored || defaultTheme;
      return currentTheme === 'system' ? systemTheme : currentTheme;
    }
    return defaultTheme === 'system' ? 'light' : defaultTheme;
  });

  // Save theme to localStorage whenever it changes
  const handleSetTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newTheme);
    }
  };

  useEffect(() => {
    const root = document.documentElement;
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const actualTheme = theme === 'system' ? systemTheme : theme;
    
    setResolvedTheme(actualTheme);
    
    if (attribute === 'class') {
      root.classList.remove('light', 'dark');
      root.classList.add(actualTheme);
    }
  }, [theme, attribute]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme: handleSetTheme, resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
