import React, { createContext, useState } from "react";

import { Theme, availableThemes } from "themes";

type AuthContextProviderProps = {
  children: React.ReactNode;
};

interface ThemeContextProps {
  theme: Theme;
  availableThemes: Theme[];
  setTheme: (theme: string) => void;
}

const ThemeContext = createContext({} as ThemeContextProps);

const ThemeProvider = (props: AuthContextProviderProps) => {
  const [theme, setTheme] = useState("default");

  const currentTheme = availableThemes.find((t) => t.slug === theme);

  return (
    <ThemeContext.Provider
      value={{ theme: currentTheme as Theme, availableThemes, setTheme }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
