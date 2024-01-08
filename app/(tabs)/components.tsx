import {Linking, StyleSheet, View} from 'react-native';

import {BackgroundView} from '../../components/ui/BackgroundView';
import {Text} from '../../components/ui/Text';
import {Ionicons} from '@expo/vector-icons';
import {useStyles} from '../../styles/useStyles';
import {useTheme} from '../../styles/useTheme';
import {AppTheme} from '../../styles/theme';
import {Button} from '../../components/ui/Button';

export default function ComponentsTabScreen() {
  const {theme} = useTheme();
  const styles = useStyles(defaultStyles);

  return (
    <BackgroundView style={styles.container}>
      <Text style={styles.title} fontWeight='light'>
        Coming soon...
      </Text>
      <Button
        leftSlot={
          <Ionicons name='logo-github' size={20} color={theme.colors.app.primary} />
        }
        variant='outline'
        onPress={() => {
          Linking.openURL('https://github.com/ro-mgh/mallaui');
        }}
        title='Github'
      />
    </BackgroundView>
  );
}

const defaultStyles = (theme: AppTheme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 24
    },
    title: {
      marginBottom: 24
    }
  });
};
