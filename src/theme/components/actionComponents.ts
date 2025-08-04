import { type Components, type Theme } from "@mui/material/styles";

/**
 * MUI action-related component style overrides
 */
export const actionComponents: Components<Omit<Theme, "components">> = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 16,
        textTransform: "none",
        boxShadow: "none",
      },
      sizeLarge: {
        height: 48,
      },
      containedPrimary: ({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        "&:hover": {
          backgroundColor: theme.palette.custom.buttonHover,
        },
      }),
      outlinedSecondary: ({ theme }) => ({
        color: theme.palette.text.primary,
        borderColor: theme.palette.custom.buttonSecondaryBorderColor,
        "&:hover": {
          backgroundColor: theme.palette.custom.buttonSecondaryHoverBg,
          borderColor: theme.palette.custom.buttonSecondaryHoverBorderColor,
        },
      }),
      outlinedInfo: ({ theme }) => ({
        background: theme.palette.custom.buttonInfoBg,
        border: `2px solid ${theme.palette.custom.buttonInfoBorder}`,

        color: theme.palette.text.primary,
        "&:hover": {
          background: theme.palette.custom.buttonInfoHoverBg,
          borderColor: theme.palette.custom.buttonInfoBorder,
          color: theme.palette.common.black,
        },
      }),
    },
  },
};
