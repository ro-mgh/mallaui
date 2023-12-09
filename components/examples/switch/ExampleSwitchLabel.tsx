import {useState} from 'react';
import {Switch} from '../../ui/Switch';

export function ExampleSwitchLabel() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <>
      <Switch label={'Airplane mode'} onValueChange={toggleSwitch} value={isEnabled} />
    </>
  );
}
