import { type Components, type Theme } from "@mui/material/styles";

/**
 * MUI global style overrides
 */
export const globalStyles: Components<Omit<Theme, "components">> = {
  MuiCssBaseline: {
    styleOverrides: {
      "*": ({ theme }: { theme: Theme }) => ({
        // WebKit scrollbar styles
        "&::-webkit-scrollbar": {
          width: "8px",
          height: "8px",
        },
        "&::-webkit-scrollbar-track": {
          background: "transparent",
        },
        "&::-webkit-scrollbar-thumb": {
          background: theme.palette.custom.scrollbarThumb,
          borderRadius: "4px",
          border: "none",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          background: theme.palette.custom.scrollbarThumbHover,
        },
        "&::-webkit-scrollbar-corner": {
          background: "transparent",
        },
        // Firefox scrollbar styles
        scrollbarWidth: "thin",
        scrollbarColor: `${theme.palette.custom.scrollbarThumb} transparent`,
      }),
    },
  },
};
