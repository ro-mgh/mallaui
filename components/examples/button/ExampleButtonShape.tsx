import {View} from 'react-native';
import {Button} from '../../ui/Button';

export function ExampleButtonShape() {
  return (
    <View>
      <Button shape='square' title='Square' style={{marginBottom: 10}} />
      <Button shape='circle' title='Circle' style={{marginBottom: 10}} />
    </View>
  );
}
