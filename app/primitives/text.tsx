import {StyleSheet, View} from 'react-native';

import {BackgroundView} from '../../components/ui/BackgroundView';
import ScreenWrapper from '../../components/ScreenWrapper';
import {Text} from '../../components/ui/Text';
import {ExampleTextColor} from '../../components/examples/text/ExampleTextColor';
import {ExampleTextFontWeight} from '../../components/examples/text/ExampleTextFontWeight';
import {ExampleTextSize} from '../../components/examples/text/ExampleTextSize';
import {Stack} from 'expo-router';

export default function TextScreen() {
  return (
    <BackgroundView style={styles.container}>
      <Stack.Screen
        options={{
          title: 'Text'
        }}
      />
      <ScreenWrapper>
        <View style={{marginBottom: 10, marginTop: 20}}>
          <Text size='xxxl' color='primary' style={{marginBottom: 5}}>
            Text variants
          </Text>
          <ExampleTextColor />
        </View>

        <View style={{marginBottom: 10, marginTop: 20}}>
          <Text size='xxxl' color='primary' style={{marginBottom: 5}}>
            Font weight
          </Text>
          <ExampleTextFontWeight />
        </View>

        <Text size='xxxl' color='primary' style={{marginBottom: 5}}>
          Text sizes
        </Text>
        <ExampleTextSize />
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
