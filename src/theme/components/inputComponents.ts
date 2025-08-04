import { type Components, type Theme } from "@mui/material/styles";

/**
 * MUI input-related component style overrides
 */
export const inputComponents: Components<Omit<Theme, "components">> = {
  MuiTextField: {
    styleOverrides: {
      root: ({ theme, ownerState }) => {
        // Info variant styling using 'outlined' variant (more appropriate)
        if (ownerState?.variant === "outlined") {
          return {
            borderRadius: 16,
            backgroundColor: "transparent",

            "& .MuiOutlinedInput-root": {
              borderRadius: 16,
              background: theme.palette.custom.buttonInfoBg,
              height: 48,

              "& fieldset": {
                border: `2px solid ${theme.palette.custom.buttonInfoBorder}`,
              },

              "&:hover fieldset": {
                border: `2px solid ${theme.palette.custom.buttonInfoBorder}`,
              },

              "&.Mui-focused fieldset": {
                border: `2px solid ${theme.palette.custom.buttonInfoBorder}`,
              },
            },
          };
        }

        // Original styling for filled variant
        return {
          borderRadius: 16,
          backgroundColor: "transparent",

          "& .MuiFilledInput-root": {
            borderRadius: 16,
            backgroundColor: theme.palette.custom.inputBackground,

            "&:before, &:after": {
              display: "none",
            },

            "&:hover": {
              backgroundColor: theme.palette.custom.inputBackground,
              "&:before": {
                borderBottom: `1px solid ${theme.palette.custom.inputBorder}`,
              },
            },

            "&.Mui-focused": {
              backgroundColor: theme.palette.custom.inputBackground,
              "&:after": {
                borderBottom: `1px solid ${theme.palette.custom.inputBorder}`,
              },
            },
          },
        };
      },
    },
    defaultProps: {
      variant: "outlined",
      size: "small",
      fullWidth: true,
    },
  },
};
