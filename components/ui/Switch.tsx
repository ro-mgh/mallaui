import {Switch as DefaultSwitch, SwitchProps, StyleSheet, View} from 'react-native';
import {useStyles} from '../../styles/useStyles';
import {FC} from 'react';
import {Text} from './Text';
import {useTheme} from '../../styles/useTheme';
import {DescriptionText} from './DescriptionText';

const defaultStyles = () => {
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
    }
  });
};

interface ISwitchProps extends SwitchProps {
  /**
   * The text to display under the switch.
   */
  description?: string;

  /**
   * The switch label.
   */
  label?: string;

  /**
   * If the checkbox is disabled, it becomes opaque and uncheckable.
   */
  isDisabled?: boolean;
}

const Switch: FC<ISwitchProps> = ({
  style,
  value,
  label,
  description,
  isDisabled,
  ...otherProps
}) => {
  const styles = useStyles(defaultStyles);
  const {theme} = useTheme();

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
      <DefaultSwitch
        style={[style]}
        trackColor={{false: theme.colors.app.input, true: theme.colors.app.primary}}
        thumbColor={theme.colors.app.background}
        disabled={isDisabled}
        value={value}
        {...otherProps}
      />
    </View>
  );
};

Switch.displayName = 'Switch';

export {Switch};
