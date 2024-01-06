import React, {ReactNode} from 'react';
import {StyleSheet, View} from 'react-native';
import {useStyles} from '../styles/useStyles';
import {Text} from './ui/Text';

const defaultStyles = () => {
  return StyleSheet.create({
    wrapper: {
      marginBottom: 30
    },
    text: {
      marginBottom: 8
    }
  });
};

export default function VariantWrapper({
  children,
  label
}: {
  children: ReactNode;
  label: string;
}) {
  const style = useStyles(defaultStyles);

  return (
    <View style={[style.wrapper]}>
      <Text size='lg' fontWeight='bold' style={style.text}>
        {label}
      </Text>
      {children}
    </View>
  );
}
