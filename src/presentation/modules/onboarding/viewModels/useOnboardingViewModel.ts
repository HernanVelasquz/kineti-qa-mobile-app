import { useState } from 'react';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { AppStackParamList } from '@/presentation/navigation/types';

export interface OnboardingViewModel {
  isBottomSheetVisible: boolean;
  openLoginSheet: () => void;
  closeLoginSheet: () => void;
  handleStart: () => void;
  handleGoogleSignIn: () => void;
  handleLoginSubmit: (email: string, pass: string) => void;
}

export const useOnboardingViewModel = (): OnboardingViewModel => {
  const navigation = useNavigation<NavigationProp<AppStackParamList>>();
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);

  const openLoginSheet = () => {
    setIsBottomSheetVisible(true);
  };

  const closeLoginSheet = () => {
    setIsBottomSheetVisible(false);
  };

  const handleStart = () => {
    // Redirects to register screen as requested
    navigation.navigate('Register');
  };

  const handleGoogleSignIn = () => {
    console.log('Google sign-in clicked');
    // Implementation placeholder for Google Sign-In
  };

  const handleLoginSubmit = (email: string, pass: string) => {
    console.log('Login submitted:', { email, pass });
    // Process login credentials...
    setIsBottomSheetVisible(false);
    // Redirect to Home on successful auth
    navigation.navigate('Home');
  };

  return {
    isBottomSheetVisible,
    openLoginSheet,
    closeLoginSheet,
    handleStart,
    handleGoogleSignIn,
    handleLoginSubmit
  };
};

export default useOnboardingViewModel;
