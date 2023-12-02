import { useMemo } from 'react';
import { useColorScheme } from 'react-native';
import { darkTheme, lightTheme } from './theme';

/**
 * A hook that returns the current theme and color scheme.
 */
export const useTheme = () => {
  const colorScheme = useColorScheme();

  const theme = useMemo(
    () => (colorScheme === 'dark' ? darkTheme : lightTheme),
    [colorScheme]
  );

  return { theme, colorScheme };
};
