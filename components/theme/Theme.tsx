import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../../styles/theme';
import {Text} from '../ui/Text';
import ScreenWrapper from '../ScreenWrapper';

export default function Theme() {
  return (
    <ScreenWrapper>
      <Text fontWeight='bold' size='xxl'>
        Colors
      </Text>
      <View
        style={{
          flexDirection: 'row'
        }}
      >
        {[
          {color: colors.slate, name: 'slate'},
          {color: colors.zink, name: 'zink'},
          {color: colors.red, name: 'red'},
          {color: colors.cyan, name: 'cyan'},
          {color: colors.purple, name: 'purple'},
          {color: colors.rose, name: 'rose'},
          {color: colors.pink, name: 'pink'}
        ].map(({color, name}) => {
          return (
            <View
              key={name}
              style={{
                flexDirection: 'column',
                marginRight: 10
              }}
            >
              {Object.keys(color).map((variant) => {
                return (
                  <View
                    key={variant}
                    style={{
                      backgroundColor: color[variant],
                      height: 40,
                      width: 40,
                      borderRadius: 10,
                      marginBottom: 5
                    }}
                  />
                );
              })}
            </View>
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
