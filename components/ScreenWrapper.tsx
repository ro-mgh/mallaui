import React, {ReactNode} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {useTheme} from '../styles/useTheme';

export default function ScreenWrapper({children}: {children: ReactNode}) {
  const {theme} = useTheme();

  return (
    <>
      <ScrollView
        style={{width: '100%', paddingHorizontal: theme.paddings.screenPaddingHorizontal}}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  //
});
