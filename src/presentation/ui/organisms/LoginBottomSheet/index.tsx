import { FC, useEffect, useRef } from "react";
import {
  View,
  Modal,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Animated,
} from "react-native";
import { useTranslation } from "react-i18next";
import AppText from "@/presentation/ui/atoms/AppText";
import LoginForm from "@/presentation/ui/organisms/LoginForm";
import { BlurView } from "expo-blur";

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
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isVisible) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [isVisible]);

  const handleClose = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true,
    }).start(() => {
      onClose();
    });
  };

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
      onRequestClose={handleClose}
    >
      <View className="flex-1">
        {/* Full-screen Blur Backdrop & Dark Overlay */}
        <Animated.View style={[StyleSheet.absoluteFill, { opacity: fadeAnim }]}>
          {Platform.OS === "ios" ? (
            <BlurView
              intensity={40}
              tint="dark"
              style={StyleSheet.absoluteFill}
            >
              <Pressable className="flex-1 bg-black/60" onPress={handleClose} />
            </BlurView>
          ) : (
            <Pressable
              className="flex-1 bg-black/75"
              style={StyleSheet.absoluteFill}
              onPress={handleClose}
            />
          )}
        </Animated.View>

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          className="flex-1 justify-end"
          pointerEvents="box-none"
        >
          <View className="bg-[#121212] border-t border-white/10 rounded-t-[32px] px-6 pb-12 pt-3 shadow-2xl">
            <View className="w-14 h-1.5 bg-white/15 rounded-full self-center mb-6" />

            <View className="mb-6">
              <AppText className="text-white text-3xl font-outfit-bold mb-1">
                {t("login.title")}
              </AppText>
              <AppText className="text-white/50 font-outfit text-sm">
                {t("login.subtitle")}
              </AppText>
            </View>

            <LoginForm
              onSubmit={handleSubmit}
              onForgotPasswordPress={() =>
                console.log("Forgot password pressed")
              }
              onGooglePress={() => console.log("Google social login")}
              onApplePress={() => console.log("Apple social login")}
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    </Modal>
  );
};

export default LoginBottomSheet;
