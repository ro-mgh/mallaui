import {Pressable, StyleSheet, View, ViewStyle} from 'react-native';
import {useStyles} from '../../styles/useStyles';
import {AppTheme} from '../../styles/theme';
import {FC, createContext, useContext, useState} from 'react';
import {Text} from './Text';
import {DescriptionText} from './DescriptionText';

type RadioGroupContextType = {
  value: string | undefined;
  onChange: (value: string) => void;
  isDisabled?: boolean;
};

const RadioGroupContext = createContext<RadioGroupContextType>({
  value: undefined,
  onChange: () => null,
  isDisabled: false
});

const defaultButtonStyles = (theme: AppTheme) => {
  return StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginVertical: 10
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
    radio: {
      height: 20,
      width: 20,
      borderRadius: 10,
      borderWidth: 1.5,
      borderColor: theme.colors.app.primary,
      backgroundColor: theme.colors.app.background,
      alignItems: 'center',
      justifyContent: 'center'
    },
    dot: {
      height: 10,
      width: 10,
      borderRadius: 5,
      backgroundColor: theme.colors.app.primary
    },
    disabled: {
      opacity: 0.5
    }
  });
};

interface IButtonProps {
  /**
   * The description of the radio.
   */
  description?: string;

  /**
   * The label of the radio.
   */
  label: string;

  /**
   * The value of the radio.
   */
  value: string;

  /**
   * The style to apply to the radio.
   */
  style?: ViewStyle;
}

const Button: FC<IButtonProps> = ({style, value, label, description}) => {
  const styles = useStyles(defaultButtonStyles);
  const {value: selectedValue, onChange, isDisabled} = useContext(RadioGroupContext);

  const isSelected = selectedValue === value;

  return (
    <View style={[styles.wrapper, !!description && styles.wrapperWithDescription]}>
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
        accessibilityRole='radio'
        hitSlop={10}
        accessibilityState={{disabled: isDisabled, selected: isSelected}}
        style={[style, styles.radio, isDisabled && styles.disabled]}
        onPress={() => onChange(value)}
      >
        {isSelected ? <View style={styles.dot} /> : null}
      </Pressable>
    </View>
  );
};

Button.displayName = 'RadioGroup.Button';

interface IRadioGroupProps {
  /**
   * The default value of the radio group.
   */
  defaultValue?: string;

  /**
   * The radio group children.
   */
  children: React.ReactNode;

  /**
   * If the radio group is disabled, it becomes opaque and uncheckable.
   */
  isDisabled?: boolean;

  /**
   * Function to call when the radio group value changes.
   */
  onValueChange: (value: string) => void;

  [x: string]: any;
}

const RadioGroup = ({
  defaultValue,
  isDisabled,
  children,
  onValueChange
}: IRadioGroupProps) => {
  const [value, setValue] = useState(defaultValue);

  const onChange = (value: string) => {
    setValue(value);
    onValueChange(value);
  };

  return (
    <RadioGroupContext.Provider value={{value, onChange, isDisabled}}>
      <View accessibilityRole='radiogroup'>{children}</View>
    </RadioGroupContext.Provider>
  );
};

RadioGroup.displayName = 'RadioGroup';

RadioGroup.Button = Button;

export {RadioGroup};
