import { type Components, type Theme } from "@mui/material/styles";

/**
 * MUI layout-related component style overrides
 */
export const layoutComponents: Components<Omit<Theme, "components">> = {
  MuiSkeleton: {
    styleOverrides: {
      root: {
        borderRadius: 10,
      },
    },
  },
  MuiStack: {
    styleOverrides: {
      root: {
        "& > .MuiAccordion-root ~ .MuiAccordion-root": {
          marginTop: 0,
        },
      },
    },
  },
};
