import {Text} from '../../ui/Text';
import {View} from 'react-native';

export function ExampleTextColor() {
  return (
    <View>
      <Text size='xxl' color='primary'>
        Primary
      </Text>
      <Text size='xxl' color='secondary'>
        Secondary
      </Text>
      <Text size='xxl' color='destructive'>
        Destructive
      </Text>
    </View>
  );
}
