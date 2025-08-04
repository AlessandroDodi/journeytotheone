import { type Components, type Theme } from "@mui/material/styles";

/**
 * MUI navigation-related component style overrides
 */
export const navigationComponents: Components<Omit<Theme, "components">> = {
  MuiMenuItem: {
    styleOverrides: {
      root: {
        borderRadius: 10,
      },
    },
  },
};
