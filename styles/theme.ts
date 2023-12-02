function slate<T extends `${number}%`>(lightness: T): `hsla(206, 20%, ${typeof lightness}, 1)` {
  return `hsla(206, 20%, ${lightness}, 1)`;
}
function zink<T extends `${number}%`>(lightness: T): `hsla(0, 0%, ${typeof lightness}, 1)` {
  return `hsla(0, 0%, ${lightness}, 1)`;
}
function red<T extends `${number}%`>(lightness: T): `hsla(0, 92%, ${typeof lightness}, 1)` {
  return `hsla(0, 92%, ${lightness}, 1)`;
}
function rose<T extends `${number}%`>(lightness: T): `hsla(348, 86%, ${typeof lightness}, 1)` {
  return `hsla(348, 86%, ${lightness}, 1)`;
}
function cyan<T extends `${number}%`>(lightness: T): `hsla(184, 80%, ${typeof lightness}, 1)` {
  return `hsla(184, 80%, ${lightness}, 1)`;
}
function purple<T extends `${number}%`>(lightness: T): `hsla(263, 55%, ${typeof lightness}, 1)` {
  return `hsla(263, 55%, ${lightness}, 1)`;
}
function pink<T extends `${number}%`>(lightness: T): `hsla(320, 61%, ${typeof lightness}, 1)` {
  return `hsla(320, 61%, ${lightness}, 1)`;
}

export const colors = {
  slate: {
    50: slate('98%'),
    100: slate('96%'),
    150: slate('91%'),
    200: slate('86%'),
    300: slate('76%'),
    400: slate('66%'),
    500: slate('56%'),
    600: slate('45%'),
    700: slate('34%'),
    750: slate('29%'),
    800: slate('23%'),
    850: slate('18%'),
    900: slate('12%'),
    950: slate('8%')
  },
  zink: {
    50: zink('98%'),
    100: zink('96%'),
    150: zink('91%'),
    200: zink('86%'),
    300: zink('76%'),
    400: zink('66%'),
    500: zink('56%'),
    600: zink('45%'),
    700: zink('34%'),
    750: zink('29%'),
    800: zink('23%'),
    850: zink('18%'),
    900: zink('12%'),
    950: zink('8%')
  },
  red: {
    50: red('98%'),
    100: red('96%'),
    150: red('91%'),
    200: red('86%'),
    300: red('76%'),
    400: red('66%'),
    500: red('56%'),
    600: red('45%'),
    700: red('34%'),
    750: red('29%'),
    800: red('23%'),
    850: red('18%'),
    900: red('12%'),
    950: red('8%')
  },
  rose: {
    50: rose('98%'),
    100: rose('96%'),
    150: rose('91%'),
    200: rose('86%'),
    300: rose('76%'),
    400: rose('66%'),
    500: rose('56%'),
    600: rose('45%'),
    700: rose('34%'),
    750: rose('29%'),
    800: rose('23%'),
    850: rose('18%'),
    900: rose('12%'),
    950: rose('8%')
  },
  cyan: {
    50: cyan('98%'),
    100: cyan('96%'),
    150: cyan('91%'),
    200: cyan('86%'),
    300: cyan('76%'),
    400: cyan('66%'),
    500: cyan('56%'),
    600: cyan('45%'),
    700: cyan('34%'),
    750: cyan('29%'),
    800: cyan('23%'),
    850: cyan('18%'),
    900: cyan('12%'),
    950: cyan('8%')
  },
  purple: {
    50: purple('98%'),
    100: purple('96%'),
    150: purple('91%'),
    200: purple('86%'),
    300: purple('76%'),
    400: purple('66%'),
    500: purple('56%'),
    600: purple('45%'),
    700: purple('34%'),
    750: purple('29%'),
    800: purple('23%'),
    850: purple('18%'),
    900: purple('12%'),
    950: purple('8%')
  },
  pink: {
    50: pink('98%'),
    100: pink('96%'),
    150: pink('91%'),
    200: pink('86%'),
    300: pink('76%'),
    400: pink('66%'),
    500: pink('56%'),
    600: pink('45%'),
    700: pink('34%'),
    750: pink('29%'),
    800: pink('23%'),
    850: pink('18%'),
    900: pink('12%'),
    950: pink('8%')
  },
  white: '#FFFFFF',
  black: '#000000'
} as const;

const paddings = {
  screenPaddingHorizontal: 15,
  iconPadding: 10,
  inputElementsPadding: 8
};

const shared = {
  paddings,
}

export const lightTheme = {
  colors: {
    ...colors,
    app: {
      background: colors.white,
      foreground: colors.slate[900],
      card: colors.white,
      cardForeground: colors.slate[950],
      popover: colors.white,
      popoverForeground: colors.slate[950],
      primary: colors.slate[900],
      primaryForeground: colors.slate[50],
      secondary: colors.slate[100],
      secondaryForeground: colors.slate[900],
      muted: colors.slate[100],
      mutedForeground: colors.slate[500],
      accent: colors.slate[100],
      accentForeground: colors.slate[900],
      destructive: colors.red[500],
      destructiveForeground: colors.slate[50],
      border: colors.slate[200],
      input: colors.slate[200],
      ring: colors.slate[950]
    },
  },
  navigation: {
    dark: false,
    colors: {
      primary: colors.slate[900],
      background: colors.white,
      card: colors.white,
      text: colors.slate[900],
      border: colors.slate[200],
      notification: colors.slate[100],
    }
  },
  ...shared
};

export const darkTheme = {
  colors: {
    ...colors,
    app: {
      background: colors.slate[950],
      foreground: colors.slate[50],
      card: colors.slate[950],
      cardForeground: colors.slate[50],
      popover: colors.slate[950],
      popoverForeground: colors.slate[50],
      primary: colors.slate[50],
      primaryForeground: colors.slate[900],
      secondary: colors.slate[800],
      secondaryForeground: colors.slate[50],
      muted: colors.slate[800],
      mutedForeground: colors.slate[400],
      accent: colors.slate[800],
      accentForeground: colors.slate[50],
      destructive: colors.red[500],
      destructiveForeground: colors.slate[50],
      border: colors.slate[800],
      input: colors.slate[800],
      ring: colors.slate[300]
    },
  },
  navigation: {
    dark: true,
    colors: {
      primary: colors.slate[50],
      background: colors.slate[950],
      card: colors.slate[950],
      text: colors.slate[50],
      border: colors.slate[800],
      notification: colors.slate[800],
    }
  },
  ...shared
};

export type LightTheme = typeof lightTheme;
export type DarkTheme = typeof darkTheme;

export type AppTheme = LightTheme | DarkTheme;
