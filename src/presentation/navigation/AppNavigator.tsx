import { AppStackParamList } from "./types";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingView from "@/presentation/modules/onboarding/views";

import HomeView from "@/presentation/modules/home/views";
import { PersonalProfileView } from "@/presentation/modules/signup/views";

const Stack = createNativeStackNavigator<AppStackParamList>();

export const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboarding" component={OnboardingView} />
      <Stack.Screen name="Register" component={PersonalProfileView} />
      <Stack.Screen name="Home" component={HomeView} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
