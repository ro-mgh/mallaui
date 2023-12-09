import {useState} from 'react';
import {Switch} from '../../ui/Switch';

export function ExampleSwitchLabelDescription() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <>
      <Switch
        label={'Marketing emails'}
        description={'Receive updates about Malla UI product'}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </>
  );
}
