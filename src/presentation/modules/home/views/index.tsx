import { FC } from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import AppText from '@/presentation/ui/atoms/AppText';

export const HomeScreen: FC = () => {
  const { t } = useTranslation();

  return (
    <View className="flex-1 bg-black items-center justify-center">
      <AppText className="text-white text-xl">{t('home.title')}</AppText>
    </View>
  );
};

export default HomeScreen;
