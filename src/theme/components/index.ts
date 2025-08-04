import { type Components, type Theme } from '@mui/material/styles';
import { accordionComponents } from './accordionComponents';
import { actionComponents } from './actionComponents';
import { dataDisplayComponents } from './dataDisplayComponents';
import { feedbackComponents } from './feedbackComponents';
import { globalStyles } from './globalStyles';
import { inputComponents } from './inputComponents';
import { layoutComponents } from './layoutComponents';
import { navigationComponents } from './navigationComponents';

/**
 * Combines all component style overrides into a single object
 */
export const getAllComponents = (): Components<Omit<Theme, 'components'>> => ({
  ...accordionComponents,
  ...actionComponents,
  ...dataDisplayComponents,
  ...feedbackComponents,
  ...globalStyles,
  ...inputComponents,
  ...layoutComponents,
  ...navigationComponents,
});