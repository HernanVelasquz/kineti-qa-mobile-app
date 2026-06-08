import { FC } from "react";
import AppButton from "@/presentation/ui/atoms/AppButton";
import AppImage from "@/presentation/ui/atoms/AppImage";
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
  colorButton = "#2B2B2B",
}) => {
  const isGoogle = provider === "google";

  return (
    <AppButton
      variant="oauth"
      onPress={onPress}
      style={{ flex: 1, borderRadius: 100 }}
      contentStyle={{ paddingVertical: 12 }}
      className={`bg-[#121212] border border-white/10 ${className}`}
      buttonColor={colorButton}
      icon={() => (
        isGoogle ? (
          <AppImage
            source={require("@/presentation/assets/img/google-botton-icon.png")}
            className="w-6 h-6"
          />
        ) : (
          <AntDesign name="apple1" size={24} color="white" />
        )
      )}
    >
      {labelText || (isGoogle ? "Google" : "Apple")}
    </AppButton>
  );
};

export default SocialButton;
