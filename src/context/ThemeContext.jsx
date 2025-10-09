import { createContext, useContext, useEffect, useState, useCallback } from 'react';

const STORAGE_KEY = 'theme'; // values: 'light' | 'dark' | 'system'
const ThemeContext = createContext(null);

function getSystemPrefersDark() {
  if (typeof window === 'undefined' || typeof window.matchMedia === 'undefined') return false;
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function resolveTheme(savedTheme) {
  if (!savedTheme || savedTheme === 'system') return getSystemPrefersDark() ? 'dark' : 'light';
  return savedTheme;
}

export default function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw || 'system';
    } catch (e) {
      return 'system';
    }
  });

  // derived value: the theme actually applied to the UI ('light' or 'dark')
  const [appliedTheme, setAppliedTheme] = useState(() => resolveTheme(theme));

  // apply theme to document element
  const apply = useCallback((t) => {
    const toApply = resolveTheme(t);
    setAppliedTheme(toApply);
    try {
      document.documentElement.setAttribute('data-theme', toApply);
    } catch (e) {
      // ignore for SSR or restricted environments
    }
  }, []);

  // Listen for system changes when theme === 'system'
  useEffect(() => {
    if (theme !== 'system') return undefined;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = () => apply('system');
    mq.addEventListener ? mq.addEventListener('change', handler) : mq.addListener(handler);
    // cleanup
    return () => {
      mq.removeEventListener ? mq.removeEventListener('change', handler) : mq.removeListener(handler);
    };
  }, [theme, apply]);

  // whenever theme (the preference) changes, persist and apply
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {
      // ignore
    }
    apply(theme);
  }, [theme, apply]);

  // helper API
  const setTheme = useCallback((value) => {
    // allow only 'light'|'dark'|'system'
    if (!['light', 'dark', 'system'].includes(value)) return;
    setThemeState(value);
  }, []);

  const toggleTheme = useCallback(() => {
    // toggles between dark and light; if system, resolve then toggle and persist explicit opposite
    const current = resolveTheme(theme);
    const next = current === 'dark' ? 'light' : 'dark';
    setTheme(next);
  }, [theme, setTheme]);

  const value = {
    // preference: 'light' | 'dark' | 'system'
    theme,
    // actual applied: 'light' | 'dark'
    appliedTheme,
    setTheme,
    toggleTheme,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within a ThemeProvider');
  return ctx;
}
