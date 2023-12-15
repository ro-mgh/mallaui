import {StyleSheet, View} from 'react-native';

import {BackgroundView} from '../../components/ui/BackgroundView';
import ScreenWrapper from '../../components/ScreenWrapper';
import {Stack} from 'expo-router';
import {ExampleCheckbox} from '../../components/examples/checkbox/ExampleCheckbox';
import {ExampleCheckboxLabel} from '../../components/examples/checkbox/ExampleCheckboxLabel';
import {ExampleCheckboxLabelDes} from '../../components/examples/checkbox/ExampleCheckboxLabelDes';
import {ExampleCheckboxDisabled} from '../../components/examples/checkbox/ExampleCheckboxDisabled';
import VariantWrapper from '../../components/VariantWrapper';

export default function CheckboxScreen() {
  return (
    <BackgroundView style={styles.container}>
      <Stack.Screen
        options={{
          title: 'Checkbox'
        }}
      />
      <ScreenWrapper>
        <VariantWrapper label='Default'>
          <ExampleCheckboxLabel />
        </VariantWrapper>
        <VariantWrapper label='Description'>
          <ExampleCheckboxLabelDes />
        </VariantWrapper>
        <VariantWrapper label='Disabled'>
          <ExampleCheckboxDisabled />
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
