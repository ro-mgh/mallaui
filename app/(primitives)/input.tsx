import {StyleSheet, View} from 'react-native';

import {BackgroundView} from '../../components/ui/BackgroundView';
import ScreenWrapper from '../../components/ScreenWrapper';
import {ExampleInput} from '../../components/examples/input/ExampleInput';
import {ExampleInputLabel} from '../../components/examples/input/ExampleInputLabel';
import {ExampleInputIcon} from '../../components/examples/input/ExampleInputIcon';
import {ExampleInputError} from '../../components/examples/input/ExampleInputError';
import {ExampleInputDescription} from '../../components/examples/input/ExampleInputDescription';
import {ExampleInputDisabled} from '../../components/examples/input/ExampleInputDisabled';
import {Stack} from 'expo-router';
import VariantWrapper from '../../components/VariantWrapper';

export default function InputScreen() {
  return (
    <BackgroundView style={styles.container}>
      <Stack.Screen
        options={{
          title: 'Input'
        }}
      />
      <ScreenWrapper>
        <VariantWrapper label='Default'>
          <ExampleInput />
        </VariantWrapper>

        <VariantWrapper label='Label'>
          <ExampleInputLabel />
        </VariantWrapper>

        <VariantWrapper label='Icon'>
          <ExampleInputIcon />
        </VariantWrapper>

        <VariantWrapper label='Error'>
          <ExampleInputError />
        </VariantWrapper>

        <VariantWrapper label='Description'>
          <ExampleInputDescription />
        </VariantWrapper>

        <VariantWrapper label='Disabled'>
          <ExampleInputDisabled />
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
