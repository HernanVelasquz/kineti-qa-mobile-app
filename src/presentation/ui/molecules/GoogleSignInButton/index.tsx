import { FC } from "react";
import AppButton, { AppButtonProps } from "@/presentation/ui/atoms/AppButton";
import AntDesign from "@expo/vector-icons/AntDesign";

interface GoogleSignInButtonProps extends Omit<AppButtonProps, "children"> {
  onPress: () => void;
  isLoading?: boolean;
}

export const GoogleSignInButton: FC<GoogleSignInButtonProps> = ({
  onPress,
  isLoading = false,
  ...props
}) => {
  return (
    <AppButton
      variant="oauth"
      onPress={onPress}
      isLoading={isLoading}
      icon={() => <AntDesign name="google" size={24} color="white" />}
      buttonColor="#131313"
      {...props}
    >
      Continuar con Google
    </AppButton>
  );
};

export default GoogleSignInButton;
