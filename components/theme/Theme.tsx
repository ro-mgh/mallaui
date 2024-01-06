import React from 'react';
import {StyleSheet, View} from 'react-native';
import {tailwindColors} from '../../styles/theme';
import ScreenWrapper from '../ScreenWrapper';
import ComponentWrapper from '../ComponentWrapper';
import {ExampleColor} from '../examples/color/ExampleColor';
import {Text} from '../ui/Text';

export default function Theme() {
  return (
    <ScreenWrapper isCards>
      <View
        style={{
          flexDirection: 'column'
        }}
      >
        {Object.keys(tailwindColors).map((color) => {
          return (
            <ComponentWrapper
              label={color.charAt(0).toUpperCase() + color.slice(1)}
              link='/color'
              key={color}
              params={{
                colorName: color
              }}
            >
              <ExampleColor
                colors={tailwindColors[color as keyof typeof tailwindColors]}
              />
            </ComponentWrapper>
          );
        })}
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center'
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center'
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    textAlign: 'center'
  }
});
