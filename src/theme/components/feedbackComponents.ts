import { type Components, type Theme } from '@mui/material/styles';

/**
 * MUI feedback-related component style overrides
 */
export const feedbackComponents: Components<Omit<Theme, 'components'>> = {
  MuiAlert: {
    styleOverrides: {
      root: {
        borderRadius: 16,
      },
    },
  },
};