import {useState} from 'react';
import {Input} from '../../ui/Input';
import {View} from 'react-native';

export function ExampleInputDescription() {
  const [inputValue, setInputValue] = useState('');

  return (
    <View style={{flex: 1}}>
      <Input
        value={inputValue}
        onChangeText={setInputValue}
        description='Type something in the input'
      />
    </View>
  );
}
