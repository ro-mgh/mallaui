import {StyleSheet, View} from 'react-native';

import {BackgroundView} from '../../components/ui/BackgroundView';
import ScreenWrapper from '../../components/ScreenWrapper';
import {Stack} from 'expo-router';
import {ExampleSwitch} from '../../components/examples/switch/ExampleSwitch';
import {ExampleSwitchLabel} from '../../components/examples/switch/ExampleSwitchLabel';
import {ExampleSwitchLabelDescription} from '../../components/examples/switch/ExampleSwitchLabelDescription';
import {ExampleSwitchDisabled} from '../../components/examples/switch/ExampleSwitchDisabled';

export default function TextScreen() {
  return (
    <BackgroundView style={styles.container}>
      <Stack.Screen
        options={{
          title: 'Switch'
        }}
      />
      <ScreenWrapper>
        <View
          style={{
            marginVertical: 10
          }}
        >
          <View style={{marginBottom: 10}}>
            <ExampleSwitch />
          </View>
          <View style={{marginBottom: 10}}>
            <ExampleSwitchLabel />
          </View>
          <View style={{marginBottom: 10}}>
            <ExampleSwitchLabelDescription />
          </View>
          <View style={{marginBottom: 10}}>
            <ExampleSwitchDisabled />
          </View>
        </View>
      </ScreenWrapper>
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
