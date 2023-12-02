import {useState} from 'react';
import {Input} from '../../ui/Input';
import {View} from 'react-native';

export function ExampleInputDisabled() {
  const [inputValue, setInputValue] = useState('Disabled');

  return (
    <View style={{flex: 1}}>
      <Input value={inputValue} onChangeText={setInputValue} isDisabled />
    </View>
  );
}
