import { AppStackParamList } from './types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingView from '@/presentation/modules/onboarding/views';


const Stack = createNativeStackNavigator<AppStackParamList>();

export const AppNavigator = () => {

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboarding" component={OnboardingView} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};
