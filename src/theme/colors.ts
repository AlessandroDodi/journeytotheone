/**
 * Theme color palette
 * Centralized color definitions for consistent theming across components
 */
import { type PaletteMode } from "@mui/material";

// Base colors
const baseColors = {
  white: "#ffffff",
  black: "#000000",
  darkBackground: "#08090A",
  paper: "#141517",
  inputBackground: "#1A1C1D",
  cardBorder: "#212629",
  secondaryText: "#9C9D9D",
  success: "#45E5A8",
  error: "#ff6b6b",
  info: "#64b5f6",
  warning: "#e1a536",
};

// Opacity variants
const opacityVariants = {
  white: {
    "05": "rgba(255, 255, 255, 0.05)",
    "08": "rgba(255, 255, 255, 0.08)",
    "15": "rgba(255, 255, 255, 0.15)",
    "20": "rgba(255, 255, 255, 0.2)",
    "25": "rgba(255, 255, 255, 0.25)",
    "40": "rgba(255, 255, 255, 0.4)",
    "70": "rgba(255, 255, 255, 0.7)",
  },
  teal: {
    "20": "rgba(3, 162, 158, 0.2)",
  },
  gray: {
    "20": "rgba(156, 157, 157, 0.2)",
  },
  red: {
    "20": "rgba(211, 47, 47, 0.2)",
  },
  green: {
    "20": "rgba(56, 142, 60, 0.2)",
  },
  blue: {
    "20": "rgba(25, 118, 210, 0.2)",
  },
  orange: {
    "20": "rgba(237, 108, 2, 0.2)",
  },
};

// Add gradient colors BEFORE using them
const gradientColors = {
  infoButtonBg:
    "linear-gradient(135deg, rgba(253, 253, 253, 0.05) 0%, rgba(240, 240, 228, 0.1) 100%)",
};

export const themePalette = {
  // Standard MUI palette
  mode: "dark" as PaletteMode,
  primary: {
    main: baseColors.white,
    contrastText: baseColors.black,
  },
  secondary: {
    main: baseColors.secondaryText,
    contrastText: baseColors.white,
  },
  text: {
    primary: baseColors.white,
    secondary: baseColors.secondaryText,
  },
  background: {
    default: baseColors.darkBackground,
    paper: baseColors.paper,
  },
  success: {
    main: baseColors.success,
    contrastText: baseColors.white,
  },
  divider: opacityVariants.white["08"],

  // Custom palette extensions
  custom: {
    cardBorder: baseColors.cardBorder,
    chipBg: baseColors.cardBorder,
    chipText: baseColors.white,
    buttonHover: opacityVariants.white["70"],
    inputBackground: baseColors.inputBackground,
    inputBorder: opacityVariants.white["15"],
    scrollbarThumb: opacityVariants.white["20"],
    scrollbarThumbHover: opacityVariants.white["40"],
    chipDefaultBg: opacityVariants.white["20"],
    chipDefaultText: "#f0f0f0",
    chipPrimaryBg: opacityVariants.teal["20"],
    chipPrimaryText: baseColors.success,
    chipSecondaryBg: opacityVariants.gray["20"],
    chipSecondaryText: baseColors.white,
    chipErrorBg: opacityVariants.red["20"],
    chipErrorText: baseColors.error,
    chipSuccessBg: opacityVariants.green["20"],
    chipSuccessText: baseColors.success,
    chipInfoBg: opacityVariants.blue["20"],
    chipInfoText: baseColors.info,
    chipWarningBg: opacityVariants.orange["20"],
    chipWarningText: baseColors.warning,
    buttonSecondaryBorderColor: opacityVariants.white["15"],
    buttonSecondaryHoverBg: opacityVariants.white["08"],
    buttonSecondaryHoverBorderColor: opacityVariants.white["25"],
    buttonInfoBg: gradientColors.infoButtonBg,
    buttonInfoBorder: opacityVariants.white["05"],
    buttonInfoHoverBg: "white",
  },
};
