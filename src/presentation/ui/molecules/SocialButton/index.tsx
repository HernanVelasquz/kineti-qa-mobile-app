import { FC } from "react";
import AppButton from "@/presentation/ui/atoms/AppButton";
import AntDesign from "@expo/vector-icons/AntDesign";

interface SocialButtonProps {
  provider: "google" | "apple";
  onPress: () => void;
  className?: string;
}

export const SocialButton: FC<SocialButtonProps> = ({
  provider,
  onPress,
  className = "",
}) => {
  const iconName = provider === "google" ? "google" : "apple1";
  const labelText = provider === "google" ? "Google" : "Apple";

  return (
    <AppButton
      variant="oauth"
      onPress={onPress}
      className={`flex-1 border border-white/10 rounded-full bg-[#1c1c1e] ${className}`}
      contentStyle={{ paddingVertical: 10 }}
      icon={() => (
        <AntDesign
          name={iconName}
          size={18}
          color="white"
          style={{ marginRight: 6 }}
        />
      )}
    >
      {labelText}
    </AppButton>
  );
};

export default SocialButton;
