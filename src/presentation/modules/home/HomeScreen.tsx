import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from '@/presentation/ui/atoms/Text';
import { Button } from '@/presentation/ui/atoms/Button';
import { useAuthStore } from '@/presentation/store/authStore';
import { StackScreenProps } from '@react-navigation/stack';
import { AppStackParamList } from '@/presentation/navigation/AppNavigator'; // Assuming this will be created

type HomeScreenProps = StackScreenProps<AppStackParamList, 'Home'>;

export const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    // navigation.replace('Login'); // Navigate back to Login after logout
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, {user?.email || 'Guest'}!</Text>
      <Text style={styles.subtitle}>This is the GymFlow Home Screen.</Text>
      <Button title="Logout" onPress={handleLogout} style={styles.logoutButton} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 30,
    textAlign: 'center',
  },
  logoutButton: {
    backgroundColor: '#dc3545', // Red color for logout
  },
});
