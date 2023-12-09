import {useState} from 'react';
import {Checkbox} from '../../ui/Checkbox';

export function ExampleCheckboxLabelDes() {
  const [isChecked, setIsChecked] = useState(false);
  const toggleCheckbox = () => setIsChecked((previousState) => !previousState);

  return (
    <>
      <Checkbox
        label={'Marketing emails'}
        description={'Receive updates about Malla UI product'}
        onValueChange={toggleCheckbox}
        value={isChecked}
      />
    </>
  );
}
