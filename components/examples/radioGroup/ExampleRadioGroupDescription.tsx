import {useState} from 'react';
import {RadioGroup} from '../../ui/RadioGroup';

const options = [
  {
    label: 'Bicycle',
    value: 'bicycle',
    description:
      'Enjoy a leisurely ride, connecting with nature and promoting a healthy lifestyle.'
  },
  {
    label: 'Car',
    value: 'car',
    description:
      'Opt for the convenience of a car, offering speed and flexibility in your daily travels.'
  },
  {
    label: 'Public Transit',
    value: 'publicTransit',
    description:
      'Contribute to a sustainable environment by taking public transportation, reducing your carbon footprint.'
  }
];

export function ExampleRadioGroupDescription() {
  const [value, setValue] = useState(options[0].value);

  return (
    <RadioGroup defaultValue={value} onValueChange={setValue}>
      {options.map((option) => (
        <RadioGroup.Button
          key={option.value}
          value={option.value}
          label={option.label}
          description={option.description}
        />
      ))}
    </RadioGroup>
  );
}
