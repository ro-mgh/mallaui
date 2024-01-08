import {StyleSheet} from 'react-native';

import Primitives from '../../components/Primitives';
import {BackgroundView} from '../../components/ui/BackgroundView';

export default function PrimitivesTabScreen() {
  return (
    <BackgroundView style={styles.container}>
      <Primitives />
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
