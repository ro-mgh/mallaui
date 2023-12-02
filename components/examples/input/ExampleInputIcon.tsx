import {useState} from 'react';
import {Input} from '../../ui/Input';
import {TouchableOpacity, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {useTheme} from '../../../styles/useTheme';

export function ExampleInputIcon() {
  const [inputValue, setInputValue] = useState('Clear me');
  const {theme} = useTheme();

  return (
    <View style={{flex: 1}}>
      <Input
        value={inputValue}
        onChangeText={setInputValue}
        rightSlot={
          inputValue ? (
            <TouchableOpacity onPress={() => setInputValue('')}>
              <Ionicons
                name='close-circle-outline'
                size={20}
                color={theme.colors.app.primary}
              />
            </TouchableOpacity>
          ) : null
        }
      />
    </View>
  );
}
