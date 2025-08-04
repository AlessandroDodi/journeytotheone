import { type Components, type Theme } from "@mui/material/styles";

/**
 * MUI data display component style overrides
 */
export const dataDisplayComponents: Components<Omit<Theme, "components">> = {
  MuiCard: {
    styleOverrides: {
      root: ({ theme }) => ({
        elevation: 0,
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        border: `1px solid ${theme.palette.custom.cardBorder}`,
        borderRadius: 10,
        padding: 10,
      }),
    },
  },
  MuiTableCell: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderBottom: `1px solid ${theme.palette.divider}`,
      }),
      head: ({ theme }) => ({
        color: theme.palette.text.secondary,
        fontWeight: "bold",
      }),
      body: ({ theme }) => ({
        color: theme.palette.text.primary,
      }),
    },
  },
  MuiChip: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: 10,
        fontSize: "0.65rem",
        fontWeight: 500,
        height: 20,
        backgroundColor: theme.palette.custom.chipDefaultBg,
        color: theme.palette.custom.chipDefaultText,
      }),
      colorPrimary: ({ theme }) => ({
        backgroundColor: theme.palette.custom.chipPrimaryBg,
        color: theme.palette.custom.chipPrimaryText,
      }),
      colorSecondary: ({ theme }) => ({
        backgroundColor: theme.palette.custom.chipSecondaryBg,
        color: theme.palette.custom.chipSecondaryText,
      }),
      colorError: ({ theme }) => ({
        backgroundColor: theme.palette.custom.chipErrorBg,
        color: theme.palette.custom.chipErrorText,
      }),
      colorSuccess: ({ theme }) => ({
        backgroundColor: theme.palette.custom.chipSuccessBg,
        color: theme.palette.custom.chipSuccessText,
      }),
      colorInfo: ({ theme }) => ({
        backgroundColor: theme.palette.custom.chipInfoBg,
        color: theme.palette.custom.chipInfoText,
      }),
      colorWarning: ({ theme }) => ({
        backgroundColor: theme.palette.custom.chipWarningBg,
        color: theme.palette.custom.chipWarningText,
      }),
    },
  },
};
