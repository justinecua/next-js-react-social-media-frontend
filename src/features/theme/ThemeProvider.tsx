"use client";

import { createContext, useContext, useState, useMemo, useEffect } from "react";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

type ThemeMode = "light" | "dark";

const ThemeContext = createContext({
  toggleColorMode: () => {},
  mode: "light" as ThemeMode,
});

export function useThemeContext() {
  return useContext(ThemeContext);
}

export function AppThemeProvider({ children }: { children: React.ReactNode }) {
  // Default mode is light, we update it after the component mounts
  const [mode, setMode] = useState<ThemeMode>("light");
  const [isMounted, setIsMounted] = useState(false); // Track mount state

  // Load the theme from localStorage after mount (to avoid SSR mismatch)
  useEffect(() => {
    const storedMode = localStorage.getItem("themeMode") as ThemeMode;
    if (storedMode) {
      setMode(storedMode);
    }
    setIsMounted(true); // Component is now mounted
  }, []);

  // Save theme mode to localStorage when changed
  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("themeMode", mode);
    }
  }, [mode, isMounted]);

  const theme = useMemo(
    () =>
      createTheme({
        typography: {
          fontFamily: `"Work Sans", sans-serif`,
        },
        palette: {
          mode,
          primary: {
            main: mode === "light" ? "#edeced" : "#1c1e29",
          },
          secondary: {
            main: mode === "light" ? "#9c27b0" : "#ce93d8",
          },
          background: {
            default: mode === "light" ? "#f7f6f8" : "#121212",
            paper: mode === "light" ? "#ffffff" : "#14171a",
          },
          custom: {
            fontColor: mode === "light" ? "#070706" : "#f9f8f8",
            subtitle: mode === "light" ? "#999998" : "#5a5b5a",
            skyBlue: mode === "light" ? "#1485ff" : "#1485ff",
            postBorder:
              mode === "light" ? "1px solid #e5e4e4" : "1px solid #1d2532",
          },
        },
      }),
    [mode]
  );

  const contextValue = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
      mode,
    }),
    []
  );

  // Prevent rendering the theme until the component has mounted
  if (!isMounted) return null;

  return (
    <ThemeContext.Provider value={contextValue}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
}
