import React, {FC, ReactNode} from 'react';
import {ActivityIndicator, TouchableOpacity, StyleSheet, View} from 'react-native';
import {AppTheme} from '../../styles/theme';
import {useStyles} from '../../styles/useStyles';
import {Text} from './Text';

const defaultStyles = (theme: AppTheme) => ({
  base: StyleSheet.create({
    buttonWrapper: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row'
    },
    disabled: {
      opacity: 0.5
    },
    leftSlot: {
      backgroundColor: 'transparent',
      marginRight: theme.paddings.iconPadding
    },
    rightSlot: {
      backgroundColor: 'transparent',
      marginLeft: theme.paddings.iconPadding
    }
  }),

  sizes: StyleSheet.create({
    sm: {
      paddingVertical: 7,
      paddingHorizontal: 12
    },
    md: {
      paddingVertical: 10,
      paddingHorizontal: 15
    },
    lg: {
      paddingVertical: 12,
      paddingHorizontal: 18
    },
    xl: {
      paddingVertical: 12,
      paddingHorizontal: 18
    }
  }),

  shapes: StyleSheet.create({
    square: {
      borderRadius: 10
    },
    circle: {
      borderRadius: 100
    }
  }),

  variants: {
    button: StyleSheet.create({
      default: {
        backgroundColor: theme.colors.app.primary
      },
      secondary: {
        backgroundColor: theme.colors.app.secondary
      },
      outline: {
        borderWidth: 2,
        backgroundColor: theme.colors.app.background,
        borderColor: theme.colors.app.input
      },
      ghost: {
        //
      },
      destructive: {
        backgroundColor: theme.colors.app.destructive
      }
    }),
    text: StyleSheet.create({
      default: {
        color: theme.colors.app.primaryForeground
      },
      secondary: {
        color: theme.colors.app.secondaryForeground
      },
      outline: {
        color: theme.colors.app.foreground
      },
      ghost: {
        color: theme.colors.app.foreground,
        textDecorationLine: 'underline'
      },
      destructive: {
        color: theme.colors.app.destructiveForeground
      }
    })
  }
});

interface IButtonProps {
  /**
   * The title of the button.
   */
  title?: string;

  /**
   * The size of the button.
   * @default 'md'
   */
  size?: keyof ReturnType<typeof defaultStyles>['sizes'];

  /**
   * The corner of the button.
   * @default 'square'
   */
  shape?: keyof ReturnType<typeof defaultStyles>['shapes'];

  /**
   * The variant of the button.
   * @default 'default'
   */
  variant?: keyof ReturnType<typeof defaultStyles>['variants']['button'];

  /**
   * The left slot of the button.
   */
  leftSlot?: ReactNode;

  /**
   * The right slot of the button.
   */
  rightSlot?: ReactNode;

  /**
   * Whether the button is loading.
   * @default false
   */
  isLoading?: boolean;

  /**
   * The action to perform when the user presses the button.
   */
  onPress?: () => void;

  /**
   * Whether the button is disabled.
   * @default false
   */
  isDisabled?: boolean;

  /**
   * The style of the button.
   */
  style?: any;

  /**
   * The style of the title.
   */
  textStyle?: any;
}

/**
 * Basic button component.
 */
const Button: FC<IButtonProps> = ({
  title,
  style,
  isLoading = false,
  textStyle,
  onPress = () => null,
  isDisabled,
  size = 'md',
  variant = 'default',
  shape = 'square',
  leftSlot,
  rightSlot
}) => {
  const styles = useStyles(defaultStyles);

  const handleButtonPress = () => {
    onPress();
  };

  return (
    <TouchableOpacity
      style={[
        styles.base.buttonWrapper,
        styles.sizes[size],
        styles.variants.button[variant],
        styles.shapes[shape],
        isDisabled && styles.base.disabled,
        style
      ]}
      onPress={handleButtonPress}
      disabled={isDisabled || isLoading}
    >
      {leftSlot && !isLoading ? (
        <View style={[styles.base.leftSlot]}>{leftSlot}</View>
      ) : null}
      {isLoading ? (
        <ActivityIndicator
          size='small'
          style={[styles.base.leftSlot]}
          color={styles.variants.text[variant].color}
        />
      ) : null}
      <Text
        size={size}
        fontWeight='medium'
        style={[styles.variants.text[variant], textStyle]}
        numberOfLines={1}
      >
        {title}
      </Text>
      {rightSlot && !isLoading ? (
        <View style={[styles.base.rightSlot]}>{rightSlot}</View>
      ) : null}
    </TouchableOpacity>
  );
};

Button.displayName = 'Button';

export {Button};
