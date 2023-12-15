import React, {ReactNode} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useTheme} from '../styles/useTheme';
import {useStyles} from '../styles/useStyles';

const defaultStyles = () => {
  return StyleSheet.create({
    wrapper: {
      width: '100%'
    }
  });
};

export default function ScreenWrapper({children}: {children: ReactNode}) {
  const {theme} = useTheme();
  const style = useStyles(defaultStyles);

  return (
    <ScrollView
      style={[style.wrapper, {paddingHorizontal: theme.paddings.screenPaddingHorizontal}]}
      showsVerticalScrollIndicator={false}
    >
      <View
        style={{
          marginVertical: 10
        }}
      >
        {children}
      </View>
    </ScrollView>
  );
}
