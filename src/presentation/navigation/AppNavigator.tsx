import { AppStackParamList } from './types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuthStore } from '@/presentation/store/authStore';
import OnboardingView from '@/presentation/modules/onboarding/views';


const Stack = createNativeStackNavigator<AppStackParamList>();

export const AppNavigator = () => {
  const { isLoggedIn } = useAuthStore();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboarding" component={OnboardingView} options={{ headerShown: false }} />
      {/* {isLoggedIn ? (
        <Stack.Screen name="Home" component={HomeView} />
      ) : (
        <Stack.Screen name="Login" component={LoginView} />
      )} */}
    </Stack.Navigator>
  );
};
