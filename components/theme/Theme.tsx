import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../../styles/theme';
import {Text} from '../ui/Text';
import ScreenWrapper from '../ScreenWrapper';
import ComponentWrapper from '../ComponentWrapper';
import {ExampleColor} from '../examples/color/ExampleColor';

export default function Theme() {
  return (
    <ScreenWrapper>
      <View
        style={{
          flexDirection: 'column'
        }}
      >
        {[
          {color: colors.slate, name: 'Slate'},
          {color: colors.zink, name: 'Zink'},
          {color: colors.red, name: 'Red'},
          {color: colors.cyan, name: 'Cyan'},
          {color: colors.purple, name: 'Purple'},
          {color: colors.rose, name: 'Rose'},
          {color: colors.pink, name: 'Pink'}
        ].map(({color, name}) => {
          return (
            <ComponentWrapper label={name} link='/slate'>
              <ExampleColor colors={color} />
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
