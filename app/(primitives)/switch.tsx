import {StyleSheet, View} from 'react-native';

import {BackgroundView} from '../../components/ui/BackgroundView';
import ScreenWrapper from '../../components/ScreenWrapper';
import {Stack} from 'expo-router';
import {ExampleSwitch} from '../../components/examples/switch/ExampleSwitch';
import {ExampleSwitchLabel} from '../../components/examples/switch/ExampleSwitchLabel';
import {ExampleSwitchLabelDescription} from '../../components/examples/switch/ExampleSwitchLabelDescription';
import {ExampleSwitchDisabled} from '../../components/examples/switch/ExampleSwitchDisabled';
import VariantWrapper from '../../components/VariantWrapper';

export default function SwitchScreen() {
  return (
    <BackgroundView style={styles.container}>
      <Stack.Screen
        options={{
          title: 'Switch'
        }}
      />
      <ScreenWrapper>
        <VariantWrapper label='Default'>
          <ExampleSwitchLabel />
        </VariantWrapper>
        <VariantWrapper label='Description'>
          <ExampleSwitchLabelDescription />
        </VariantWrapper>
        <VariantWrapper label='Disabled'>
          <ExampleSwitchDisabled />
        </VariantWrapper>
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
