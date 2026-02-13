import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '@/presentation/modules/login/LoginScreen';
import { HomeScreen } from '@/presentation/modules/home/HomeScreen';
import { useAuthStore } from '@/presentation/store/authStore';

// Define the type for your stack navigator parameters
// This helps with type-checking when navigating between screens
export type AppStackParamList = {
  Login: undefined; // No parameters expected for Login screen
  Home: undefined;  // No parameters expected for Home screen
  // Add other screens here
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export const AppNavigator = () => {
  const { isLoggedIn } = useAuthStore();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isLoggedIn ? (
        <Stack.Screen name="Home" component={HomeScreen} />
      ) : (
        <Stack.Screen name="Login" component={LoginScreen} />
      )}
    </Stack.Navigator>
  );
};
