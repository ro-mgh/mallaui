import {StyleSheet, TouchableOpacity, View} from 'react-native';

import {BackgroundView} from '../../components/ui/BackgroundView';
import ScreenWrapper from '../../components/ScreenWrapper';
import {Stack, useLocalSearchParams} from 'expo-router';
import {Text} from '../../components/ui/Text';
import {AppTheme, tailwindColors} from '../../styles/theme';
import {useStyles} from '../../styles/useStyles';
import {Ionicons} from '@expo/vector-icons';
import {useTheme} from '../../styles/useTheme';
import * as Clipboard from 'expo-clipboard';

export default function ColorScreen() {
  const styles = useStyles(defaultStyles);
  const {theme} = useTheme();

  const params = useLocalSearchParams();
  const {colorName} = params;
  const colors = tailwindColors[colorName as keyof typeof tailwindColors];

  return (
    <BackgroundView style={styles.container}>
      <Stack.Screen
        options={{
          title: 'Color'
        }}
      />
      <ScreenWrapper>
        {Object.keys(colors)
          .reverse()
          .map((variant) => {
            const color = colors[variant as unknown as keyof typeof colors];

            return (
              <View style={styles.variantContainer} key={color}>
                <View style={[styles.colorBox, {backgroundColor: color}]} />
                <View style={styles.textContainer}>
                  <Text fontWeight='bold' size='lg'>{`${colorName}-${variant}`}</Text>
                  <Text fontWeight='regular' size='md' color='secondary'>
                    {color.toUpperCase()}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={async () => {
                    await Clipboard.setStringAsync(color);
                  }}
                >
                  <Ionicons
                    name='copy-outline'
                    size={20}
                    color={theme.colors.app.mutedForeground}
                  />
                </TouchableOpacity>
              </View>
            );
          })}
      </ScreenWrapper>
    </BackgroundView>
  );
}

const defaultStyles = (theme: AppTheme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    variantContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 24
    },
    colorBox: {
      width: 56,
      height: 56,
      borderRadius: 8,
      marginRight: 12
    },
    textContainer: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center'
    },
    icon: {
      //
    }
  });
};
