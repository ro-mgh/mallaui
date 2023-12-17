import {Tabs} from '../../ui/Tabs';
import {Text} from '../../ui/Text';

const tabs = [
  {value: 'tab1', title: 'Activities'},
  {value: 'tab2', title: 'Friends'},
  {value: 'tab3', title: 'Places'}
];

export function ExampleTabs() {
  return (
    <Tabs defaultValue={tabs[0].value}>
      <Tabs.List>
        {tabs.map((tab) => {
          return <Tabs.Tab key={tab.value} value={tab.value} title={tab.title} />;
        })}
      </Tabs.List>
      <Tabs.Content value={tabs[0].value}>
        <Text>Activities tab content.</Text>
      </Tabs.Content>
      <Tabs.Content value={tabs[1].value}>
        <Text>Friends tab content.</Text>
      </Tabs.Content>
      <Tabs.Content value={tabs[2].value}>
        <Text>Places tab content.</Text>
      </Tabs.Content>
    </Tabs>
  );
}
