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
    </>
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
