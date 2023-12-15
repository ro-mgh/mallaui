import React, {ReactNode} from 'react';
import {StyleSheet, View} from 'react-native';
import {useStyles} from '../styles/useStyles';
import {Text} from './ui/Text';
import {Button} from './ui/Button';
import {Link} from 'expo-router';
import {AppTheme} from '../styles/theme';

const defaultStyles = (theme: AppTheme) => {
  return StyleSheet.create({
    wrapper: {
      borderWidth: 1,
      width: '100%',
      paddingVertical: 16,
      paddingHorizontal: 12,
      borderColor: theme.colors.app.border,
      borderRadius: 20,
      marginBottom: 30
    },
    contentWrapper: {
      marginTop: 10
    },
    text: {
      marginBottom: 5
    },
    headerWrapper: {
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.app.border,
      marginBottom: 10,
      paddingBottom: 10,
      flexDirection: 'row',
      justifyContent: 'space-between'
    }
  });
};

export default function ComponentWrapper({
  children,
  label,
  link
}: {
  children: ReactNode;
  label: string;
  link: string;
}) {
  const style = useStyles(defaultStyles);

  return (
    <View style={[style.wrapper]}>
      <View style={style.headerWrapper}>
        <Text size='xl' fontWeight='bold' style={style.text}>
          {label}
        </Text>
        <Link href={link} asChild>
          <Button variant='ghost' size='sm' title='Variants ⇾' />
        </Link>
      </View>
      <View style={style.contentWrapper}>{children}</View>
    </View>
  );
}
