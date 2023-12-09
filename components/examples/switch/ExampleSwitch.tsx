import {useState} from 'react';
import {Switch} from '../../ui/Switch';

export function ExampleSwitch() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <>
      <Switch onValueChange={toggleSwitch} value={isEnabled} />
    </>
  );
}
