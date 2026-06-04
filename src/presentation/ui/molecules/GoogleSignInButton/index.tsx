import { FC } from "react";
import AppButton, { AppButtonProps } from "@/presentation/ui/atoms/AppButton";
import GoogleIcon from "@/presentation/ui/atoms/GoogleIcon";

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
      icon={({ size }) => <GoogleIcon size={size} />}
      buttonColor="#131313"
      {...props}
    >
      Continuar con Google
    </AppButton>
  );
};

export default GoogleSignInButton;
