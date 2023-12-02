import {Text} from '../../ui/Text';
import {View} from 'react-native';

export function ExampleTextFontWeight() {
  const placeholder = 'Font weight';
  return (
    <View>
      <Text fontWeight='light'>{placeholder} light</Text>
      <Text fontWeight='regular'>{placeholder} regular</Text>
      <Text fontWeight='medium'>{placeholder} medium</Text>
      <Text fontWeight='bold'>{placeholder} bold</Text>
      <Text fontWeight='xbold'>{placeholder} xbold</Text>
    </View>
  );
}
