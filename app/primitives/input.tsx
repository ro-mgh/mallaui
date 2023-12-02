import {StyleSheet, View} from 'react-native';

import {BackgroundView} from '../../components/ui/BackgroundView';
import ScreenWrapper from '../../components/ScreenWrapper';
import {Text} from '../../components/ui/Text';
import {ExampleInput} from '../../components/examples/input/ExampleInput';
import {ExampleInputLabel} from '../../components/examples/input/ExampleInputLabel';
import {ExampleInputIcon} from '../../components/examples/input/ExampleInputIcon';
import {ExampleInputError} from '../../components/examples/input/ExampleInputError';
import {ExampleInputDescription} from '../../components/examples/input/ExampleInputDescription';
import {ExampleInputDisabled} from '../../components/examples/input/ExampleInputDisabled';
import {Stack} from 'expo-router';

export default function InputScreen() {
  return (
    <BackgroundView style={styles.container}>
      <Stack.Screen
        options={{
          title: 'Inpur'
        }}
      />
      <ScreenWrapper>
        <Text size='xxxl' color='primary' style={{marginBottom: 5}}>
          Input
        </Text>
        <View
          style={{
            marginVertical: 10
          }}
        >
          <View style={{marginBottom: 10}}>
            <ExampleInput />
          </View>
          <View style={{marginBottom: 10}}>
            <ExampleInputLabel />
          </View>
          <View style={{marginBottom: 10}}>
            <ExampleInputIcon />
          </View>

          <View style={{marginBottom: 10}}>
            <ExampleInputError />
          </View>

          <View style={{marginBottom: 10}}>
            <ExampleInputDescription />
          </View>

          <View style={{marginBottom: 10}}>
            <ExampleInputDisabled />
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
