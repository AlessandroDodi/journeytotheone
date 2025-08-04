import { type Components, type Theme } from "@mui/material/styles";

/**
 * MUI Accordion component style overrides
 */
export const accordionComponents: Components<Omit<Theme, "components">> = {
  MuiAccordion: {
    styleOverrides: {
      root: {
        borderRadius: 10,

        "&:before": {
          display: "none",
          margin: 0,
        },
        "&.Mui-expanded": {
          margin: 0, // This prevents the accordion from moving when expanded
        },
        margin: 0,
      },
    },
  },
  MuiAccordionSummary: {
    styleOverrides: {
      root: {
        borderRadius: 10,
      },
    },
  },
};
