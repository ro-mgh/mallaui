import {View} from 'react-native';
import {Button} from '../../ui/Button';
import {useTheme} from '../../../styles/useTheme';
import {Ionicons} from '@expo/vector-icons';

export function ExampleButtonIcon() {
  const {theme} = useTheme();

  return (
    <View style={{flexDirection: 'row'}}>
      <Button
        leftSlot={
          <Ionicons
            name='airplane'
            size={15}
            color={theme.colors.app.primaryForeground}
          />
        }
        title='Left slot'
        style={{marginRight: 10}}
      />
      <Button
        title='Right slot'
        shape='circle'
        variant='secondary'
        rightSlot={
          <Ionicons
            name='add-circle-outline'
            size={25}
            color={theme.colors.app.primary}
          />
        }
      />
    </View>
  );
}
