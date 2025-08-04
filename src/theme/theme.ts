"use client";
import { createTheme } from "@mui/material/styles";
import "./themeTypes"; // Import custom theme type declarations
import { getAllComponents } from "./components";
import { themePalette } from "./colors";

export const theme = createTheme({
  spacing: 6,
  palette: themePalette,
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "4rem",
      fontWeight: 500,
      letterSpacing: "-0.05em",
      background:
        "linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.5) 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      lineHeight: 1.2,
    },
    h2: {
      fontSize: "38px",
      fontWeight: 400,
      background:
        "linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.5) 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      color: themePalette.text.primary,
      lineHeight: 1.3,
    },

    h3: {
      fontSize: "34px",
      fontWeight: 400,
      color: themePalette.text.primary,
      background:
        "linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.5) 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      lineHeight: 1.3,
    },
    h4: {
      fontWeight: 500,
      fontSize: "1.75rem",
      color: themePalette.text.primary,
    },
    body1: { fontSize: "0.9rem" },
    body2: { fontSize: "0.75rem" },
  },
  components: getAllComponents(),
});
