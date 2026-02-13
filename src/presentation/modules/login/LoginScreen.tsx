import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Alert } from 'react-native';
import { Button } from '@/presentation/ui/atoms/Button';
import { Text } from '@/presentation/ui/atoms/Text';
import { useAuthStore } from '@/presentation/store/authStore';
import { StackScreenProps } from '@react-navigation/stack';
import { AppStackParamList } from '@/presentation/navigation/AppNavigator';
import { User } from '@/domain/user/User';

type LoginScreenProps = StackScreenProps<AppStackParamList, 'Login'>;

export const LoginScreen = ({ navigation }: LoginScreenProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const login = useAuthStore((state) => state.login);

  const handleLogin = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    if (email === 'test@example.com' && password === 'password') {
      const mockUser: User = { id: '1', email: 'test@example.com' };
      login('mock-jwt-token', mockUser);
      navigation.replace('Home'); // Navigate to Home on successful login
    } else {
      Alert.alert('Login Failed', 'Invalid credentials');
    }
    setIsLoading(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to GymFlow</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} isLoading={isLoading} style={styles.loginButton} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#333',
  },
  input: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  loginButton: {
    marginTop: 10,
    width: '100%',
  },
});
