import { FC } from "react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();

  return (
    <AppButton
      variant="oauth"
      onPress={onPress}
      isLoading={isLoading}
      icon={() => <AntDesign name="google" size={24} color="white" />}
      buttonColor="#131313"
      {...props}
    >
      {t("onboarding.button_google")}
    </AppButton>
  );
};

export default GoogleSignInButton;
