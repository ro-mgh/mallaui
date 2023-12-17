export const STYLES_COMPONENTS = [
  'theme',
  'useStyles',
  'useTheme',
];

export const COMPONENTS_CONFIG: {
  name: string
  componentDependencies?: string[]
  npmDependencies?: string[]
}[] = [
    {
      name: 'Text'
    },
    {
      name: 'DescriptionText',
      componentDependencies: ['Text'],
    },
    {
      name: 'Button',
      componentDependencies: ['Text'],
    },
    {
      name: 'Input',
      componentDependencies: ['Text', 'DescriptionText'],
    },
    {
      name: 'Switch',
      componentDependencies: ['Text', 'DescriptionText'],
    },
    {
      name: 'Checkbox',
      componentDependencies: ['Text', 'DescriptionText'],
    },
    {
      name: 'RadioGroup',
      componentDependencies: ['Text', 'DescriptionText'],
    },
    {
      name: 'Tabs',
      componentDependencies: ['Text'],
    }
  ];

export const ALL_COMPONENTS = COMPONENTS_CONFIG.map(config => config.name);

const baseUrl = 'https://raw.githubusercontent.com/ro-mgh/mallaui/main'

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
        const response = await fetch(`${baseUrl}/components/ui/${componentConfig?.name}.tsx`);
        const content = await response.text();
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
        const response = await fetch(`${baseUrl}/styles/${fileName}.ts`);
        const content = await response.text();
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
