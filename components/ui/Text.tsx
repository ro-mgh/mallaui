import {Text as DefaultText, StyleSheet, TextProps, TextStyle} from 'react-native';
import {useStyles} from '../../styles/useStyles';
import {AppTheme} from '../../styles/theme';
import {FC, ReactNode} from 'react';

const defaultStyles = (theme: AppTheme) => ({
  colors: StyleSheet.create({
    primary: {
      color: theme.colors.app.foreground
    },
    secondary: {
      color: theme.colors.app.mutedForeground
    },
    destructive: {
      color: theme.colors.app.destructive
    }
  }),
  fontWeights: StyleSheet.create({
    light: {
      fontWeight: '300' as TextStyle['fontWeight']
    },
    regular: {
      fontWeight: '400' as TextStyle['fontWeight']
    },
    medium: {
      fontWeight: '500' as TextStyle['fontWeight']
    },
    // bold: {
    //   fontWeight: '600' as TextStyle['fontWeight']
    // },
    bold: {
      fontWeight: '700' as TextStyle['fontWeight']
    }
  }),
  sizes: StyleSheet.create({
    xxl: {
      fontSize: 29,
      lineHeight: 40
    },
    xl: {
      fontSize: 24,
      lineHeight: 36
    },
    lg: {
      fontSize: 20,
      lineHeight: 32
    },
    md: {
      fontSize: 16,
      lineHeight: 24
    },
    sm: {
      fontSize: 14,
      lineHeight: 20
    },
    xs: {
      fontSize: 12,
      lineHeight: 16
    },
    xxs: {
      fontSize: 10,
      lineHeight: 12
    }
  })
});

interface ITextProps extends TextProps {
  /**
   * The color of the text.
   * @default 'primary'
   */
  color?: keyof ReturnType<typeof defaultStyles>['colors'];

  /**
   * The size of the text.
   * @default 'md'
   */
  size?: keyof ReturnType<typeof defaultStyles>['sizes'];

  /**
   * The weight of the text.
   * @default 'regular'
   */
  fontWeight?: keyof ReturnType<typeof defaultStyles>['fontWeights'];

  children: ReactNode;
}

const Text: FC<ITextProps> = ({
  style,
  children,
  color = 'primary',
  size = 'md',
  fontWeight = 'regular',
  ...otherProps
}) => {
  const styles = useStyles(defaultStyles);

  return (
    <DefaultText
      style={[
        styles.colors[color],
        styles.sizes[size],
        styles.fontWeights[fontWeight],
        style
      ]}
      {...otherProps}
    >
      {children}
    </DefaultText>
  );
};

Text.displayName = 'Text';

export {Text};
