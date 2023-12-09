import {useState} from 'react';
import {Switch} from '../../ui/Switch';

export function ExampleSwitchDisabled() {
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <>
      <Switch
        label={'Marketing emails'}
        description={'Receive updates about Malla UI product'}
        onValueChange={toggleSwitch}
        value={isEnabled}
        isDisabled
      />
    </>
  );
}
