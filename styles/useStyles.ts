import { useMemo } from 'react';
import { useTheme, } from './useTheme';
import { AppTheme } from './theme';

/**
* A hook to access the theme object for creating styles.
*/
export function useStyles<TStyles extends Record<string, unknown>, TProps = undefined>(
  styles: (theme: AppTheme, props?: TProps) => TStyles,
  props?: TProps
): TStyles {
  const { theme } = useTheme();

  return useMemo(() => styles(theme, props), [props, theme, styles]);
}
