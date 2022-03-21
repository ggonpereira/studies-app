import React, { createContext, useState, useMemo, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import themes from '../styles/themes';

export interface ThemeContextType {
  onToggleTheme: () => void;
  selectedTheme: string;
}

export const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

type Props = {
  children: React.ReactNode;
};

export default function ThemeContextProvider({ children }: Props) {
  const [theme, setTheme] = useState<string>(() => {
    const storageValueTheme = localStorage.getItem('@studiesApp:theme');

    if (storageValueTheme) {
      return JSON.parse(storageValueTheme);
    }

    return '';
  });

  const currentTheme = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return themes[theme] || themes.light;
  }, [theme]);

  console.info(theme);

  function handleToggleTheme() {
    setTheme((prevState) => (prevState === 'dark' ? 'light' : 'dark'));
  }

  useEffect(() => {
    localStorage.setItem('@studiesApp:theme', JSON.stringify(theme));
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ onToggleTheme: handleToggleTheme, selectedTheme: theme }}>
      <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
