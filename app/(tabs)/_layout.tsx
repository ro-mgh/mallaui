import {Tabs} from 'expo-router';

import {useTheme} from '../../styles/useTheme';
import {Ionicons} from '@expo/vector-icons';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>['name'];
  color: string;
}) {
  return <Ionicons size={28} style={{marginBottom: -3}} {...props} />;
}

export default function TabLayout() {
  const {theme} = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colors.app.primary
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Primitives',
          tabBarIcon: ({color}) => <TabBarIcon name='code' color={color} />
        }}
      />
      <Tabs.Screen
        name='components'
        options={{
          title: 'Components',
          tabBarIcon: ({color}) => <TabBarIcon name='cube-outline' color={color} />
        }}
      />
      <Tabs.Screen
        name='theme'
        options={{
          title: 'Theme',
          tabBarIcon: ({color}) => (
            <TabBarIcon name='color-palette-outline' color={color} />
          )
        }}
      />
      <Tabs.Screen
        name='about'
        options={{
          title: 'About',
          tabBarIcon: ({color}) => <TabBarIcon name='information' color={color} />
        }}
      />
    </Tabs>
  );
}
