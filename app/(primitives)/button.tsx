import {View} from 'react-native';

import {Stack} from 'expo-router';
import {Text} from '../../components/ui/Text';
import {ExampleButtonSize} from '../../components/examples/button/ExampleButtonSize';
import {ExampleButtonState} from '../../components/examples/button/ExampleButtonState';
import {ExampleButtonShape} from '../../components/examples/button/ExampleButtonShape';
import {ExampleButtonVariant} from '../../components/examples/button/ExampleButtonVariant';
import {Button} from '../../components/ui/Button';
import {ExampleButtonIcon} from '../../components/examples/button/ExampleButtonIcon';
import ScreenWrapper from '../../components/ScreenWrapper';
import VariantWrapper from '../../components/VariantWrapper';

export default function ButtonScreen() {
  return (
    <View>
      <Stack.Screen
        options={{
          title: 'Button'
        }}
      />
      <ScreenWrapper>
        <VariantWrapper label='Size'>
          <ExampleButtonSize />
        </VariantWrapper>

        <VariantWrapper label='State'>
          <ExampleButtonState />
        </VariantWrapper>

        <VariantWrapper label='Shape'>
          <ExampleButtonShape />
        </VariantWrapper>

        <VariantWrapper label='Variant'>
          <ExampleButtonVariant />
        </VariantWrapper>

        <VariantWrapper label='Button Group'>
          <View style={{flexDirection: 'row'}}>
            <Button
              title='Cancel'
              size='md'
              style={{marginRight: 10, flex: 1}}
              variant='outline'
            />
            <Button title='Accept' size='md' style={{flex: 1}} variant='default' />
          </View>
        </VariantWrapper>

        <VariantWrapper label='Icon'>
          <ExampleButtonIcon />
        </VariantWrapper>
      </ScreenWrapper>
    </View>
  );
}
