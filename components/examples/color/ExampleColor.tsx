import {View} from 'react-native';

export function ExampleColor({colors}: {colors: any}) {
  return (
    <View style={{flexDirection: 'row'}}>
      {Object.keys(colors).map((variant) => {
        return (
          <View
            key={variant}
            style={{
              backgroundColor: colors[variant],
              height: 30,
              flex: 1,
              marginRight: 5,
              borderRadius: 8
            }}
          />
        );
      })}
    </View>
  );
}
