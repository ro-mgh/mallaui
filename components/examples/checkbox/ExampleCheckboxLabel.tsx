import {useState} from 'react';
import {Checkbox} from '../../ui/Checkbox';

export function ExampleCheckboxLabel() {
  const [isChecked, setIsChecked] = useState(false);
  const toggleCheckbox = () => setIsChecked((previousState) => !previousState);

  return (
    <>
      <Checkbox
        label={'Marketing emails'}
        onValueChange={toggleCheckbox}
        value={isChecked}
      />
    </>
  );
}
