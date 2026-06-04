import { FC } from "react";
import { View } from "react-native";
import SocialButton from "../SocialButton";

interface SocialLoginGroupProps {
  onGooglePress: () => void;
  onApplePress: () => void;
  className?: string;
}

export const SocialLoginGroup: FC<SocialLoginGroupProps> = ({
  onGooglePress,
  onApplePress,
  className = "",
}) => {
  return (
    <View className={`flex-row justify-between w-full gap-x-4 ${className}`}>
      <SocialButton provider="google" onPress={onGooglePress} />
      <SocialButton provider="apple" onPress={onApplePress} />
    </View>
  );
};

export default SocialLoginGroup;
