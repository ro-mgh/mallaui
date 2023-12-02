import {AppTheme} from '../../styles/theme';
import {useStyles} from '../../styles/useStyles';
import {View as DefaultView, StyleSheet, ViewProps} from 'react-native';

const defaultStyles = (theme: AppTheme) => {
  return StyleSheet.create({
    background: {
      backgroundColor: theme.colors.app.background
    }
  });
};

export function BackgroundView(props: ViewProps) {
  const {style, ...otherProps} = props;
  const styles = useStyles(defaultStyles);

  return <DefaultView style={[styles.background, style]} {...otherProps} />;
}
