import { AppStackParamList } from './types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingView from '@/presentation/modules/onboarding/views';
import LoginView from '@/presentation/modules/login/views';
import RegisterView from '@/presentation/modules/register/views';
import HomeView from '@/presentation/modules/home/views';

const Stack = createNativeStackNavigator<AppStackParamList>();

export const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboarding" component={OnboardingView} />
      <Stack.Screen name="Login" component={LoginView} />
      <Stack.Screen name="Register" component={RegisterView} />
      <Stack.Screen name="Home" component={HomeView} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
