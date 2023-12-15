import {StyleSheet, View} from 'react-native';

import {BackgroundView} from '../../components/ui/BackgroundView';
import ScreenWrapper from '../../components/ScreenWrapper';
import {Text} from '../../components/ui/Text';
import {ExampleTextColor} from '../../components/examples/text/ExampleTextColor';
import {ExampleTextFontWeight} from '../../components/examples/text/ExampleTextFontWeight';
import {ExampleTextSize} from '../../components/examples/text/ExampleTextSize';
import {Stack} from 'expo-router';
import VariantWrapper from '../../components/VariantWrapper';

export default function TextScreen() {
  return (
    <BackgroundView style={styles.container}>
      <Stack.Screen
        options={{
          title: 'Text'
        }}
      />
      <ScreenWrapper>
        <VariantWrapper label='Color'>
          <ExampleTextColor />
        </VariantWrapper>

        <VariantWrapper label='Font weight'>
          <ExampleTextFontWeight />
        </VariantWrapper>

        <VariantWrapper label='Size'>
          <ExampleTextSize />
        </VariantWrapper>
      </ScreenWrapper>
    </BackgroundView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%'
  }
});
