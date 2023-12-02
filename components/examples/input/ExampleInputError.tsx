import {useState} from 'react';
import {Input} from '../../ui/Input';
import {View} from 'react-native';

export function ExampleInputError() {
  const [inputValue, setInputValue] = useState('UI is hard');

  return (
    <View style={{flex: 1}}>
      <Input value={inputValue} onChangeText={setInputValue} error="Noop, it's not" />
    </View>
  );
}
