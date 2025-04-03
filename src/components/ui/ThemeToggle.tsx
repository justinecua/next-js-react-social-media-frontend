// src/components/ThemeToggle.tsx
"use client";

import { IconButton } from "@mui/material";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { useThemeContext } from "@/features/theme/ThemeProvider";

export function ThemeToggle() {
  const { toggleColorMode, mode } = useThemeContext();

  return (
    <IconButton onClick={toggleColorMode} color="inherit">
      {mode === "dark" ? <WbSunnyIcon /> : <NightsStayIcon />}
    </IconButton>
  );
}
