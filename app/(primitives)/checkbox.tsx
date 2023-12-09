import {StyleSheet, View} from 'react-native';

import {BackgroundView} from '../../components/ui/BackgroundView';
import ScreenWrapper from '../../components/ScreenWrapper';
import {Stack} from 'expo-router';
import {ExampleSwitch} from '../../components/examples/switch/ExampleSwitch';
import {ExampleSwitchLabel} from '../../components/examples/switch/ExampleSwitchLabel';
import {ExampleSwitchLabelDescription} from '../../components/examples/switch/ExampleSwitchLabelDescription';
import {ExampleCheckbox} from '../../components/examples/checkbox/ExampleCheckbox';
import {ExampleCheckboxLabel} from '../../components/examples/checkbox/ExampleCheckboxLabel';
import {ExampleCheckboxLabelDes} from '../../components/examples/checkbox/ExampleCheckboxLabelDes';
import {ExampleCheckboxDisabled} from '../../components/examples/checkbox/ExampleCheckboxDisabled';

export default function TextScreen() {
  return (
    <BackgroundView style={styles.container}>
      <Stack.Screen
        options={{
          title: 'Checkbox'
        }}
      />
      <ScreenWrapper>
        <View
          style={{
            marginVertical: 10
          }}
        >
          <View style={{marginBottom: 10}}>
            <ExampleCheckbox />
          </View>
          <View style={{marginBottom: 10}}>
            <ExampleCheckboxLabel />
          </View>
          <View style={{marginBottom: 10}}>
            <ExampleCheckboxLabelDes />
          </View>
          <View style={{marginBottom: 10}}>
            <ExampleCheckboxDisabled />
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
