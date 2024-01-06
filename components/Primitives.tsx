import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import {Text} from './ui/Text';
import {useTheme} from '../styles/useTheme';
import {Link} from 'expo-router';
import ComponentWrapper from './ComponentWrapper';
import {ExampleButton} from './examples/button/ExampleButton';
import {ExampleTextSize} from './examples/text/ExampleTextSize';
import {ExampleInput} from './examples/input/ExampleInput';
import {ExampleSwitch} from './examples/switch/ExampleSwitch';
import {ExampleCheckbox} from './examples/checkbox/ExampleCheckbox';
import {ExampleRadioGroup} from './examples/radioGroup/ExampleRadioGroup';
import ScreenWrapper from './ScreenWrapper';
import {ExampleSwitchLabel} from './examples/switch/ExampleSwitchLabel';
import {ExampleTabs} from './examples/tabs/ExampleTabs';

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
      <ScreenWrapper isCards>
        <ComponentWrapper label='Text' link='/text'>
          <ExampleTextSize />
        </ComponentWrapper>
        <ComponentWrapper label='Button' link='/button'>
          <ExampleButton />
        </ComponentWrapper>
        <ComponentWrapper label='Input' link='/input'>
          <ExampleInput />
        </ComponentWrapper>
        <ComponentWrapper label='Switch' link='/switch'>
          <ExampleSwitchLabel />
        </ComponentWrapper>
        <ComponentWrapper label='Checkbox' link='/checkbox'>
          <ExampleCheckbox />
        </ComponentWrapper>
        <ComponentWrapper label='RadioGroup' link='/radioGroup'>
          <ExampleRadioGroup />
        </ComponentWrapper>
        <ComponentWrapper label='Tabs'>
          <ExampleTabs />
        </ComponentWrapper>
      </ScreenWrapper>
    </>
  );
}

const styles = StyleSheet.create({
  //
});
