import React, {ReactNode, useState} from 'react';
import {forwardRef} from 'react';
import {TextInput, TextInputProps, StyleSheet, View, Platform} from 'react-native';
import {AppTheme} from '../../styles/theme';
import {useStyles} from '../../styles/useStyles';
import {useTheme} from '../../styles/useTheme';
import {Text} from './Text';
import {DescriptionText} from './DescriptionText';

const defaultStyles = (theme: AppTheme) => {
  return StyleSheet.create({
    labelText: {
      marginBottom: theme.paddings.inputElementsPadding
    },
    input: {
      backgroundColor: theme.colors.app.background,
      borderRadius: 10,
      borderColor: theme.colors.app.border,
      color: theme.colors.app.foreground,
      paddingHorizontal: 16,
      paddingVertical: 12,
      flex: 1,
      height: 44,
      fontSize: 16,
      lineHeight: 20,
      fontWeight: '400',
      borderWidth: 1
    },
    inputWithRightSlot: {
      paddingRight: 44
    },
    placeholderText: {
      fontWeight: '300'
    },
    rightSlot: {
      alignItems: 'center',
      end: 16,
      height: '100%',
      justifyContent: 'center',
      position: 'absolute',
      backgroundColor: 'transparent'
    },
    disabled: {
      opacity: 0.5
    },
    bottomText: {
      marginTop: theme.paddings.inputElementsPadding
    },
    inputFocus: {
      borderColor: theme.colors.app.secondaryForeground,
      borderWidth: 1
    },
    inputError: {
      borderColor: theme.colors.app.destructive,
      borderWidth: 1
    }
  });
};

interface IInputProps extends TextInputProps {
  /**
   * Label for the input
   */
  label?: string;

  /**
   * The right slot of the input.
   */
  rightSlot?: ReactNode;

  /**
   * Whether the input is disabled.
   */
  isDisabled?: boolean;

  /**
   * Error message to display
   */
  error?: string;

  /**
   * Description text to display
   */
  description?: string;

  /**
   * Style of input wrapper
   */
  wrapperStyle?: any;
}

export const Input = forwardRef<TextInput, IInputProps>((props, ref) => {
  const {wrapperStyle, rightSlot, style, label, isDisabled, error, description, value} =
    props;
  const styles = useStyles(defaultStyles);
  const {theme} = useTheme();
  const [isOnFocus, setIsOnFocus] = useState(false);

  return (
    <View style={[wrapperStyle]}>
      {label ? (
        <Text color='primary' size='md' fontWeight='medium' style={styles.labelText}>
          {label}
        </Text>
      ) : null}
      <View>
        <TextInput
          {...props}
          onFocus={() => setIsOnFocus(true)}
          onBlur={() => setIsOnFocus(false)}
          placeholderTextColor={theme.colors.app.mutedForeground}
          selectionColor={
            Platform.OS === 'ios' ? theme.colors.app.foreground : theme.colors.app.input
          }
          cursorColor={theme.colors.app.foreground}
          ref={ref}
          editable={!isDisabled}
          selectTextOnFocus={!isDisabled}
          style={[
            styles.input,
            !!rightSlot && styles.inputWithRightSlot,
            !value && styles.placeholderText,
            isOnFocus && styles.inputFocus,
            !!error && styles.inputError,
            isDisabled && styles.disabled,
            style
          ]}
        />
        {rightSlot ? <View style={[styles.rightSlot]}>{rightSlot}</View> : null}
      </View>
      {error || description ? (
        <DescriptionText type={!!error ? 'error' : 'info'} style={[styles.bottomText]}>
          {error || description}
        </DescriptionText>
      ) : null}
    </View>
  );
});
