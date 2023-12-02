import {StatusBar} from 'expo-status-bar';
import {Platform, StyleSheet, View} from 'react-native';

import EditScreenInfo from '../components/Primitives';
import {BackgroundView} from '../components/ui/BackgroundView';
import {Text} from '../components/ui/Text';

export default function ModalScreen() {
  return (
    <BackgroundView style={styles.container}>
      <Text style={styles.title}>Modal</Text>
      <View style={styles.separator} />
      <EditScreenInfo />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </BackgroundView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%'
  }
});
