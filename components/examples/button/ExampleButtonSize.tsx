import {View} from 'react-native';
import {Button} from '../../ui/Button';

export function ExampleButtonSize() {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Button title='Size xl' size='xl' style={{marginRight: 5}} />
      <Button title='Size lg' size='lg' style={{marginRight: 5}} />
      <Button title='Size md' size='md' style={{marginRight: 5}} />
      <Button title='Size sm' size='sm' style={{marginRight: 5}} />
    </View>
  );
}
