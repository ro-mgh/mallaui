import {Pressable, StyleSheet, View, ViewStyle} from 'react-native';
import {useStyles} from '../../styles/useStyles';
import {AppTheme} from '../../styles/theme';
import {FC} from 'react';
import {Text} from './Text';
import {DescriptionText} from './DescriptionText';

const defaultStyles = (theme: AppTheme) => {
  return StyleSheet.create({
    wrapperWithLabel: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    wrapperWithDescription: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'space-between'
    },
    textWrapper: {
      flexDirection: 'column',
      flex: 1
    },
    checkbox: {
      height: 20,
      width: 20,
      borderRadius: 6,
      borderWidth: 1.5,
      borderColor: theme.colors.app.primary,
      alignContent: 'center',
      justifyContent: 'center'
    },
    checked: {
      backgroundColor: theme.colors.app.primary
    },
    icon: {
      color: theme.colors.app.primaryForeground,
      lineHeight: 18,
      textAlign: 'center'
    },
    disabled: {
      opacity: 0.5
    }
  });
};

interface ICheckboxProps {
  /**
   * The text to display under the switch.
   */
  description?: string;

  /**
   * The switch label.
   */
  label?: string;

  /**
   * Value indicating if the checkbox should be rendered as checked or not.
   * @default false
   */
  value?: boolean;

  /**
   * If the checkbox is disabled, it becomes opaque and uncheckable.
   */
  isDisabled?: boolean;

  /**
   * Callback that is invoked when the user presses the checkbox.
   * @param value A boolean indicating the new checked state of the checkbox.
   */
  onValueChange?: (value: boolean) => void;

  /**
   * The style to apply to the checkbox.
   */
  style?: ViewStyle;
}

const Checkbox: FC<ICheckboxProps> = ({
  style,
  value,
  onValueChange,
  label,
  description,
  isDisabled
}) => {
  const styles = useStyles(defaultStyles);

  const handleValueChange = () => {
    onValueChange?.(!value);
  };

  return (
    <View
      style={[
        !!label && styles.wrapperWithLabel,
        !!description && styles.wrapperWithDescription
      ]}
    >
      <View style={styles.textWrapper}>
        {label ? (
          <Text color='primary' size='md' fontWeight='medium'>
            {label}
          </Text>
        ) : null}
        {description ? <DescriptionText>{description}</DescriptionText> : null}
      </View>
      <Pressable
        disabled={isDisabled}
        accessibilityRole='checkbox'
        hitSlop={10}
        accessibilityState={{disabled: isDisabled, checked: value}}
        style={[
          style,
          styles.checkbox,
          value && styles.checked,
          isDisabled && styles.disabled
        ]}
        onPress={handleValueChange}
      >
        {value ? (
          <Text size='xs' fontWeight='bold' style={styles.icon}>
            ✓
          </Text>
        ) : null}
      </Pressable>
    </View>
  );
};

Checkbox.displayName = 'Checkbox';

export {Checkbox};
