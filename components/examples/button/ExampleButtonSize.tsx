import {View} from 'react-native';
import {Button} from '../../ui/Button';

export function ExampleButtonSize() {
  return (
    <View style={{flexDirection: 'column', alignItems: 'center'}}>
      <Button title='Size xl' size='xl' style={{marginBottom: 5}} />
      <Button title='Size lg' size='lg' style={{marginBottom: 5}} />
      <Button title='Size md' size='md' style={{marginBottom: 5}} />
      <Button title='Size sm' size='sm' style={{marginBottom: 5}} />
    </View>
  );
}
