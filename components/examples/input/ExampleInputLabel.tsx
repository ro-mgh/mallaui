import {useState} from 'react';
import {Input} from '../../ui/Input';
import {View} from 'react-native';

export function ExampleInputLabel() {
  const [inputValue, setInputValue] = useState('');

  return (
    <View style={{flex: 1}}>
      <Input
        label='First Name'
        value={inputValue}
        onChangeText={setInputValue}
        placeholder='John Dorian'
      />
    </View>
  );
}
