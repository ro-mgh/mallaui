import {View} from 'react-native';
import {Button} from '../../ui/Button';

export function ExampleButtonVariant() {
  return (
    <View>
      <Button title='Default' style={{marginBottom: 10}} variant='default' />
      <Button title='Secondary' style={{marginBottom: 10}} variant='secondary' />
      <Button title='Outline' style={{marginBottom: 10}} variant='outline' />
      <Button title='Destructive' style={{marginBottom: 10}} variant='destructive' />
      <Button title='Ghost' style={{marginBottom: 10}} variant='ghost' />
    </View>
  );
}
