import { promises as fs } from 'fs';

export const STYLES_COMPONENTS = [
  'theme',
  'useStyles',
  'useTheme',
];

export const ALL_COMPONENTS = [
  'Text',
  'DescriptionText',
  'Button',
  'Input',
]

export const COMPONENTS_CONFIG = [
  {
    name: 'Text'
  },
  {
    name: 'DescriptionText',
    componentDependencies: ['Text'],
    npmDependencies: ['react-native-switch']
  },
  {
    name: 'Button',
    componentDependencies: ['Text'],
  },
  {
    name: 'Input',
    componentDependencies: ['Text', 'DescriptionText'],
  }
];

const baseUrl =
  '/Users/rmyagchenkov/ui-component-lib.nosync/expo-starter';

function getUniqueElements(components: string[]) {
  const uniqueElements = new Set();

  components.forEach(component => {
    uniqueElements.add(component);

    const config = COMPONENTS_CONFIG.find(config => config.name === component);
    if (config && config.componentDependencies) {
      config.componentDependencies.forEach(componentDependency => {
        uniqueElements.add(componentDependency);
      });
    }
  });

  return Array.from(uniqueElements);
}

export async function fetchComponents(components: string[]) {
  try {
    // go throw the componentDependencies array and make the set object with all the deps required
    const componentsToAdd = getUniqueElements(components)

    console.info('componentsToAdd', componentsToAdd);

    const fetchedComponents = await Promise.all(
      componentsToAdd.map(async component => {
        const componentConfig = COMPONENTS_CONFIG.find(c => c.name === component)
        // const response = await fetch(`${baseUrl}/components/${componentConfig?.name}.tsx`);
        // const content = await response.text();
        const response = await fs.readFile(`${baseUrl}/components/ui/${componentConfig?.name}.tsx`, 'utf8')
        const content = response
        return {
          name: `${component}.tsx`,
          content,
          ...(componentConfig?.npmDependencies && {
            npmDependencies: componentConfig?.npmDependencies
          })
        }
      }
      )
    );

    return fetchedComponents;
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to fetch components from registry.`);
  }
}

export async function fetchStyles() {
  try {
    const fetchedStyles = await Promise.all(
      STYLES_COMPONENTS.map(async fileName => {
        // const response = await fetch(`${baseUrl}/styles/${fileName}.ts`);
        // const content = await response.text();
        const response = await fs.readFile(`${baseUrl}/styles/${fileName}.ts`, 'utf8')
        const content = response
        return {
          name: `${fileName}.ts`,
          content,
        };
      })
    );

    return fetchedStyles;
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to fetch components from registry.`);
  }
}
