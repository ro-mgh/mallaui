import {StyleSheet, View} from 'react-native';

import {BackgroundView} from '../../components/ui/BackgroundView';
import ScreenWrapper from '../../components/ScreenWrapper';
import {Stack} from 'expo-router';
import {ExampleRadioGroup} from '../../components/examples/radioGroup/ExampleRadioGroup';
import {ExampleRadioGroupDescription} from '../../components/examples/radioGroup/ExampleRadioGroupDescription';
import {ExampleRadioGroupDisabled} from '../../components/examples/radioGroup/ExampleRadioGroupDisabled';
import VariantWrapper from '../../components/VariantWrapper';

export default function RadioGroupScreen() {
  return (
    <BackgroundView style={styles.container}>
      <Stack.Screen
        options={{
          title: 'RadioGroup'
        }}
      />
      <ScreenWrapper>
        <VariantWrapper label='Default'>
          <ExampleRadioGroup />
        </VariantWrapper>
        <VariantWrapper label='Description'>
          <ExampleRadioGroupDescription />
        </VariantWrapper>
        <VariantWrapper label='Disabled'>
          <ExampleRadioGroupDisabled />
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
