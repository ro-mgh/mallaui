import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import {Text} from './ui/Text';
import {useTheme} from '../styles/useTheme';
import {Link} from 'expo-router';

const ComponentLink = ({name, link}: {name: string; link: string}) => {
  return (
    <Link href={link} asChild>
      <TouchableOpacity>
        <Text fontWeight='bold' size='xxl'>
          {name}
        </Text>
      </TouchableOpacity>
    </Link>
  );
};

export default function Primitives() {
  const {theme} = useTheme();

  return (
    <>
      <ComponentLink name='Text' link='/text' />
      <ComponentLink name='Button' link='/button' />
      <ComponentLink name='Input' link='/input' />
      <ComponentLink name='Switch' link='/switch' />
      <ComponentLink name='Checkbox' link='/checkbox' />
      <ComponentLink name='RadioGroup' link='/radioGroup' />
    </>
  );
}

const styles = StyleSheet.create({
  //
});
