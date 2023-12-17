import {View} from 'react-native';
import {Button} from '../../ui/Button';

export function ExampleButtonState() {
  return (
    <View>
      <Button isDisabled title='Disabled' size='md' style={{marginBottom: 10}} />
      <Button
        isLoading
        title='Loading'
        variant='outline'
        size='md'
        style={{marginBottom: 10}}
      />
      <Button
        isLoading
        variant='destructive'
        title='Loading destructive'
        size='md'
        style={{marginBottom: 10}}
      />
    </View>
  );
}
