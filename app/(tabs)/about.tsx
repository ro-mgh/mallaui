import {Linking, StyleSheet, View} from 'react-native';

import {BackgroundView} from '../../components/ui/BackgroundView';
import {Text} from '../../components/ui/Text';
import {Ionicons} from '@expo/vector-icons';
import {useStyles} from '../../styles/useStyles';
import {useTheme} from '../../styles/useTheme';
import {AppTheme} from '../../styles/theme';
import {Button} from '../../components/ui/Button';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Logo from '../../assets/icons/Logo';

export default function AboutTabScreen() {
  const {theme} = useTheme();
  const styles = useStyles(defaultStyles);

  return (
    <BackgroundView style={styles.container}>
      <View style={styles.titleWrapper}>
        <Logo />
        <Text size='xl' fontWeight='bold' style={styles.title}>
          malla UI
        </Text>
        <Text size='md' fontWeight='regular' color='secondary'>
          v 0.0.8
        </Text>
      </View>

      <Text size='lg' fontWeight='light' style={styles.description}>
        Inspired by{' '}
        <TouchableOpacity
          onPress={() => {
            Linking.openURL('https://shadcn.com/');
          }}
        >
          <Text size='lg' fontWeight='medium' style={[styles.textLink]}>
            shadcn
          </Text>
        </TouchableOpacity>
        , build with passion by{' '}
        <TouchableOpacity
          onPress={() => {
            Linking.openURL('https://github.com/ro-mgh');
          }}
        >
          <Text size='lg' fontWeight='medium' style={styles.textLink}>
            ro-mgh
          </Text>
        </TouchableOpacity>{' '}
        for Expo and React Native devs.
      </Text>

      <View style={styles.buttonWrapper}>
        <Button
          leftSlot={
            <Ionicons
              name='logo-github'
              size={20}
              color={theme.colors.app.primaryForeground}
            />
          }
          onPress={() => {
            Linking.openURL('https://github.com/ro-mgh/mallaui');
          }}
          title='Github'
          style={{marginRight: 8, flex: 1}}
        />
        <Button
          leftSlot={
            <Ionicons
              name='document-outline'
              size={20}
              color={theme.colors.app.primary}
            />
          }
          onPress={() => {
            Linking.openURL('https://www.mallaui.io/');
          }}
          variant='outline'
          title='Documentation'
          style={{flex: 1}}
        />
      </View>
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
    buttonWrapper: {
      flexDirection: 'row'
    },
    textLink: {
      textDecorationLine: 'underline',
      lineHeight: 28
    },
    title: {
      marginTop: 12
    },
    description: {
      marginTop: 32,
      marginBottom: 24,
      textAlign: 'center'
    },
    titleWrapper: {
      alignItems: 'center',
      justifyContent: 'center'
    }
  });
};
