import {useState} from 'react';
import {Input} from '../../ui/Input';
import {View} from 'react-native';

export function ExampleInput() {
  const [inputValue, setInputValue] = useState('');

  return (
    <View style={{flex: 1}}>
      <Input
        value={inputValue}
        onChangeText={setInputValue}
        placeholder='Input placeholder...'
      />
    </View>
  );
}
