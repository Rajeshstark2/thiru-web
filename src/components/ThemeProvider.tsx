import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

type ThemeProviderProps = {
  children: React.ReactNode;
}

type ThemeContextType = {
  theme: "dark"; // Theme is now always dark
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const theme: "dark" = "dark"; // Theme is fixed to dark

  useEffect(() => {
    // Update the HTML class when theme changes
    document.documentElement.classList.remove('light'); // Only remove light class
    document.documentElement.classList.add('dark'); // Always add dark class
    localStorage.setItem("theme", "dark"); // Always set dark theme in localStorage
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
