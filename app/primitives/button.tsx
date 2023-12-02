import {ScrollView, StyleSheet, View} from 'react-native';

import {Stack} from 'expo-router';
import {Text} from '../../components/ui/Text';
import {ExampleButtonSize} from '../../components/examples/button/ExampleButtonSize';
import {ExampleButtonState} from '../../components/examples/button/ExampleButtonState';
import {ExampleButtonShape} from '../../components/examples/button/ExampleButtonShape';
import {ExampleButtonVariant} from '../../components/examples/button/ExampleButtonVariant';
import {Button} from '../../components/ui/Button';
import {ExampleButtonIcon} from '../../components/examples/button/ExampleButtonIcon';
import ScreenWrapper from '../../components/ScreenWrapper';

export default function ButtonScreen() {
  return (
    <View>
      <Stack.Screen
        options={{
          title: 'Button'
        }}
      />
      <ScreenWrapper>
        <Text size='xxxl' color='primary' style={{marginBottom: 5, marginTop: 20}}>
          Sizes
        </Text>
        <View style={{marginBottom: 10}}>
          <ExampleButtonSize />
        </View>

        <View style={{marginBottom: 10}}>
          <Text size='xxxl' color='primary' style={{marginBottom: 5}}>
            States
          </Text>
          <ExampleButtonState />
        </View>

        <View style={{marginBottom: 10}}>
          <Text size='xxxl' color='primary' style={{marginBottom: 5}}>
            Shape
          </Text>
          <ExampleButtonShape />
        </View>

        <View style={{marginBottom: 10}}>
          <Text size='xxxl' color='primary' style={{marginBottom: 5}}>
            Variants
          </Text>
          <ExampleButtonVariant />
        </View>

        <Text size='xxxl' color='primary' style={{marginBottom: 5}}>
          Button Group
        </Text>
        <View style={{flexDirection: 'row', marginBottom: 10}}>
          <Button
            title='Cancel'
            size='md'
            style={{marginRight: 10, flex: 1}}
            variant='outline'
          />
          <Button title='Accept' size='md' style={{flex: 1}} variant='default' />
        </View>

        <Text size='xxxl' color='primary' style={{marginBottom: 5}}>
          Icon
        </Text>
        <View style={{marginBottom: 10}}>
          <ExampleButtonIcon />
        </View>
      </ScreenWrapper>
    </View>
  );
}
