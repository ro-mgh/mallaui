import {useState} from 'react';
import {RadioGroup} from '../../ui/RadioGroup';

export function ExampleRadioGroup() {
  const [value, setValue] = useState('air');

  return (
    <>
      <RadioGroup defaultValue={value} onValueChange={setValue}>
        <RadioGroup.Button value={'air'} label={'Airplane'} />
        <RadioGroup.Button value={'ground'} label={'Train or bus'} />
      </RadioGroup>
    </>
  );
}
