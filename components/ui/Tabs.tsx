import React, {FC, ReactNode, createContext, useContext, useState} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {AppTheme} from '../../styles/theme';
import {useStyles} from '../../styles/useStyles';
import {Text} from './Text';

const defaultStyles = (theme: AppTheme) => {
  return StyleSheet.create({
    tabListWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.app.border,
      marginBottom: 14
    },
    tabWrapper: {
      flex: 1,
      height: 40,
      borderBottomWidth: 2,
      borderBottomColor: 'transparent',
      justifyContent: 'center'
    },
    tabText: {
      textAlign: 'center'
    },
    tabActive: {
      borderBottomColor: theme.colors.app.primary
    }
  });
};

type TabsType = {
  activeTab: string;
  setActiveTab: (id: string) => void;
};

const TabsContext = createContext<TabsType>({
  activeTab: '',
  setActiveTab: () => {}
});

interface TabsProps {
  /**
   * The default tab.
   */
  defaultValue: string;

  children: ReactNode;

  [x: string]: any;
}

const Tabs = ({defaultValue, children}: TabsProps) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <TabsContext.Provider value={{activeTab, setActiveTab}}>
      {children}
    </TabsContext.Provider>
  );
};
Tabs.displayName = 'Tabs';

interface ListProps {
  children: React.ReactElement<TabProps>[] | React.ReactElement<TabProps>;
}

const List: FC<ListProps> = ({children}) => {
  const styles = useStyles(defaultStyles);

  return <View style={styles.tabListWrapper}>{children}</View>;
};
List.displayName = 'Tabs.List';

interface TabProps {
  /**
   * The id of the tab.
   */
  value: string;

  /**
   * The title of the tab.
   */
  title: string;
}

const Tab: FC<TabProps> = ({value, title}) => {
  const styles = useStyles(defaultStyles);

  const {activeTab, setActiveTab} = useContext(TabsContext);
  const isActive = value === activeTab;

  return (
    <Pressable
      style={[styles.tabWrapper, isActive && styles.tabActive]}
      onPress={() => setActiveTab(value)}
    >
      <Text
        color={isActive ? 'primary' : 'secondary'}
        style={[styles.tabText]}
        size='md'
        fontWeight={isActive ? 'medium' : 'regular'}
      >
        {title}
      </Text>
    </Pressable>
  );
};
Tab.displayName = 'Tabs.Tab';

interface ContentProps {
  /**
   * The id of the tab.
   */
  value: string;

  children: ReactNode;
}

const Content: FC<ContentProps> = ({value, children}) => {
  const {activeTab} = useContext(TabsContext);

  if (value === activeTab) return <View>{children}</View>;

  return null;
};
Content.displayName = 'Tabs.Content';

Tabs.List = List;
Tabs.Tab = Tab;
Tabs.Content = Content;

export {Tabs};
