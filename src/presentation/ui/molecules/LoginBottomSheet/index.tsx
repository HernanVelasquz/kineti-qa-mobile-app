import { FC } from "react";
import { View, Modal, Pressable, KeyboardAvoidingView, Platform } from "react-native";
import { useTranslation } from "react-i18next";
import AppText from "@/presentation/ui/atoms/AppText";
import LoginForm from "@/presentation/ui/organisms/LoginForm";

interface LoginBottomSheetProps {
  isVisible: boolean;
  onClose: () => void;
  onLoginSubmit?: (email: string, pass: string) => void;
}

export const LoginBottomSheet: FC<LoginBottomSheetProps> = ({
  isVisible,
  onClose,
  onLoginSubmit,
}) => {
  const { t } = useTranslation();

  const handleSubmit = (email: string, pass: string) => {
    if (onLoginSubmit) {
      onLoginSubmit(email, pass);
    }
  };

  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1 justify-end"
      >
        {/* Semi-transparent Backdrop */}
        <Pressable className="flex-1 bg-black/75" onPress={onClose} />

        {/* Bottom Sheet Card Container */}
        <View className="bg-[#121212] border-t border-white/10 rounded-t-[32px] px-6 pb-12 pt-3 shadow-2xl">
          {/* Drag Handle Decoration */}
          <View className="w-14 h-1.5 bg-white/15 rounded-full self-center mb-6" />

          {/* Header Section */}
          <View className="mb-6">
            <AppText className="text-white text-3xl font-outfit-bold mb-1">
              {t("login.title")}
            </AppText>
            <AppText className="text-white/50 font-outfit text-sm">
              {t("login.subtitle")}
            </AppText>
          </View>

          {/* LoginForm Organism */}
          <LoginForm
            onSubmit={handleSubmit}
            onForgotPasswordPress={() => console.log("Forgot password pressed")}
            onGooglePress={() => console.log("Google social login")}
            onApplePress={() => console.log("Apple social login")}
          />
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default LoginBottomSheet;
