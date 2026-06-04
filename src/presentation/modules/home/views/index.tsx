import { FC } from 'react';
import { View } from 'react-native';
import AppText from '@/presentation/ui/atoms/AppText';

export const HomeScreen: FC = () => {
  return (
    <View className="flex-1 bg-black items-center justify-center">
      <AppText className="text-white text-xl">Pantalla Principal (Home)</AppText>
    </View>
  );
};

export default HomeScreen;
