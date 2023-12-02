import {Text} from '../../ui/Text';
import {View} from 'react-native';

export function ExampleTextSize() {
  const placeholder = 'Text size';
  return (
    <View>
      <Text size='xxxl'>{placeholder} xxxl</Text>
      <Text size='xxl'>{placeholder} xxl</Text>
      <Text size='xl'>{placeholder} xl</Text>
      <Text size='lg'>{placeholder} lg</Text>
      <Text size='md'>{placeholder} ms</Text>
      <Text size='sm'>{placeholder} sm</Text>
      <Text size='xs'>{placeholder} xs</Text>
      <Text size='xxs'>{placeholder} xxs</Text>
    </View>
  );
}
