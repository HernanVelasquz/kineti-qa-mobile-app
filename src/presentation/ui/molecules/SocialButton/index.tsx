import { FC } from "react";
import AppButton from "@/presentation/ui/atoms/AppButton";
import AntDesign from "@expo/vector-icons/AntDesign";

interface SocialButtonProps {
  provider: "google" | "apple";
  onPress: () => void;
  className?: string;
  labelText?: string;
  colorButton?: string;
}

export const SocialButton: FC<SocialButtonProps> = ({
  provider,
  onPress,
  className = "",
  labelText,
  colorButton,
}) => {
  const iconName = provider === "google" ? "google" : "apple1";

  return (
    <AppButton
      variant="oauth"
      onPress={onPress}
      className={`flex-1 border border-white/10 rounded-full bg-[#1c1c1e] ${className}`}
      contentStyle={{ paddingVertical: 10 }}
      icon={() => <AntDesign name={iconName} size={18} color="white" />}
      buttonColor={colorButton}
    >
      {labelText}
    </AppButton>
  );
};

export default SocialButton;
