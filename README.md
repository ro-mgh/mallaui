# malla UI

Reusable components for Expo and React Native projects inspired by shadcn library [link](https://github.com/shadcn-ui/ui).

# Documentation

https://mallaui.io/


## Examples



![Simulator Screenshot - iPhone 14 - 2024-01-07 at 18 09 35 Medium](https://github.com/ro-mgh/mallaui/assets/58989752/5a1fbfc2-4ed0-488d-9ade-96175373bcac)
![Simulator Screenshot - iPhone 14 - 2024-01-07 at 18 09 30 Medium](https://github.com/ro-mgh/mallaui/assets/58989752/0906f7c9-0202-4bc2-be42-fded1cad2d95)

##

![Simulator Screenshot - iPhone 14 - 2024-01-07 at 18 10 15 Medium](https://github.com/ro-mgh/mallaui/assets/58989752/8ca15827-0ed3-4fa1-8c9f-7d1d3f6bd4a5)
![Simulator Screenshot - iPhone 14 - 2024-01-07 at 18 10 13 Medium](https://github.com/ro-mgh/mallaui/assets/58989752/886a0b22-8f71-4f73-9eb2-08d572157690)


# Installation

Install malla ui system to your Expo or React Native CLI project 

## CLI

1. This command will add the the styles config into your project in /styles folder.

 ```bash
npx mallaui@latest init
```

2. Pass installed styles to your ThemeProvider in _layout (for Expo navigation) or App.tsx (for react-navigation in Expo and React Native CLI)

```tsx {{title: "App.tsx or _layout.tsx"}}
import {useTheme} from '../styles/useTheme';
import {ThemeProvider} from '@react-navigation/native';

...

function RootLayoutNav() {
  const {theme} = useTheme();

  return (
    <ThemeProvider value={theme.navigation}>
     ...
    </ThemeProvider>
  );
}
```

3. After that you could add components to your project

 ```bash
npx mallaui@latest add Text
```

# Components

- Text
- Button
- Input
- Switch
- Checkbox
- Radiogroup
- Tabs





