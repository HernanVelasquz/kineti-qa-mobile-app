import './global.css';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { enableScreens } from 'react-native-screens';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppNavigator } from '@/presentation/navigation/AppNavigator';

// Enable react-native-screens usage
enableScreens();

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <NavigationContainer>
          <AppNavigator />
          <StatusBar style="auto" translucent backgroundColor="transparent" />
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
