import {StyleSheet} from 'react-native';

import {BackgroundView} from '../../components/ui/BackgroundView';
import Theme from '../../components/theme/Theme';

export default function TabTwoScreen() {
  return (
    <BackgroundView style={styles.container}>
      <Theme />
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
