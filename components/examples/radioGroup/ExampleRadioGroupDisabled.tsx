import {useState} from 'react';
import {RadioGroup} from '../../ui/RadioGroup';

export function ExampleRadioGroupDisabled() {
  const [value, setValue] = useState('dogs');

  return (
    <>
      <RadioGroup defaultValue={value} onValueChange={setValue} isDisabled>
        <RadioGroup.Button value={'dogs'} label={'Dogs are great'} />
        <RadioGroup.Button value={'cats'} label={'Cats are awersome'} />
      </RadioGroup>
    </>
  );
}
