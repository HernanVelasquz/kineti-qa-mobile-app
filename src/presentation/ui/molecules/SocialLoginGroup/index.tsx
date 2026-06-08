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
      <SocialButton
        provider="google"
        onPress={onGooglePress}
        labelText="Google"
        // colorButton="#000000"
      />
      <SocialButton
        provider="apple"
        onPress={onApplePress}
        labelText="Apple"
        colorButton="#000000"
      />
    </View>
  );
};

export default SocialLoginGroup;
