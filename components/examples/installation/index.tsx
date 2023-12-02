// import FontAwesome from '@expo/vector-icons/FontAwesome';
// import {ThemeProvider} from '@react-navigation/native';
// import {useFonts} from 'expo-font';
// import {SplashScreen, Stack} from 'expo-router';
// import {useEffect} from 'react';
// import {useTheme} from '../styles/useTheme';

// export const unstable_settings = {
//   // Ensure that reloading on `/modal` keeps a back button present.
//   initialRouteName: '(tabs)'
// };

// // Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

// export default function RootLayout() {
//   const [loaded, error] = useFonts({
//     SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
//     ...FontAwesome.font
//   });

//   // Expo Router uses Error Boundaries to catch errors in the navigation tree.
//   useEffect(() => {
//     if (error) throw error;
//   }, [error]);

//   useEffect(() => {
//     if (loaded) {
//       SplashScreen.hideAsync();
//     }
//   }, [loaded]);

//   if (!loaded) {
//     return null;
//   }

//   return <RootLayoutNav />;
// }

// import {useTheme} from '../styles/useTheme';

// function RootLayoutNav() {
//   const {theme} = useTheme();

//   return <ThemeProvider value={theme.navigation}>...</ThemeProvider>;
// }
