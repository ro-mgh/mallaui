import {StyleSheet, View} from 'react-native';

import {BackgroundView} from '../../components/ui/BackgroundView';
import ScreenWrapper from '../../components/ScreenWrapper';
import {Stack} from 'expo-router';
import {ExampleRadioGroup} from '../../components/examples/radioGroup/ExampleRadioGroup';
import {ExampleRadioGroupDescription} from '../../components/examples/radioGroup/ExampleRadioGroupDescription';
import {ExampleRadioGroupDisabled} from '../../components/examples/radioGroup/ExampleRadioGroupDisabled';

export default function RadioGroupScreen() {
  return (
    <BackgroundView style={styles.container}>
      <Stack.Screen
        options={{
          title: 'RadioGroup'
        }}
      />
      <ScreenWrapper>
        <View
          style={{
            marginVertical: 10
          }}
        >
          <View style={{marginBottom: 10}}>
            <ExampleRadioGroup />
          </View>
          <View style={{marginBottom: 10}}>
            <ExampleRadioGroupDescription />
          </View>
          <View style={{marginBottom: 10}}>
            <ExampleRadioGroupDisabled />
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
