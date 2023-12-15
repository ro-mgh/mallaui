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
              height: 60,
              width: 20,
              marginRight: 3,
              borderRadius: 5
            }}
          />
        );
      })}
    </View>
  );
}
