import { FC, useState } from "react";
import { View, Pressable } from "react-native";
import { useTranslation } from "react-i18next";
import AppText from "@/presentation/ui/atoms/AppText";
import AppButton from "@/presentation/ui/atoms/AppButton";
import AppInput from "@/presentation/ui/atoms/AppInput";
import DividerWithText from "@/presentation/ui/molecules/DividerWithText";
import SocialLoginGroup from "@/presentation/ui/molecules/SocialLoginGroup";
import AppImage from "@/presentation/ui/atoms/AppImage";
import { AntDesign } from "@expo/vector-icons";

interface LoginFormProps {
  onSubmit: (email: string, pass: string) => void;
  onForgotPasswordPress?: () => void;
  onGooglePress?: () => void;
  onApplePress?: () => void;
  isLoading?: boolean;
}

export const LoginForm: FC<LoginFormProps> = ({
  onSubmit,
  onForgotPasswordPress,
  onGooglePress = () => {},
  onApplePress = () => {},
  isLoading = false,
}) => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    onSubmit(email, password);
  };

  return (
    <View className="w-full">
      {/* Email Input Field */}
      <View className="mb-4">
        <AppText className="text-white/60 font-outfit-medium text-xs mb-2 tracking-widest">
          {t("login.email_label")}
        </AppText>
        <AppInput
          value={email}
          onChangeText={setEmail}
          placeholder={t("login.email_placeholder")}
          keyboardType="email-address"
          autoCapitalize="none"
          leftIcon="mail"
        />
      </View>

      {/* Password Input Field */}
      <View className="mb-2">
        <AppText className="text-white/60 font-outfit-medium text-xs mb-2 tracking-widest">
          {t("login.password_label")}
        </AppText>
        <AppInput
          value={password}
          onChangeText={setPassword}
          placeholder="••••••••••"
          autoCapitalize="none"
          leftIcon="lock"
          isPassword
        />
      </View>

      {/* Forgot Password Link */}
      <Pressable onPress={onForgotPasswordPress} className="self-end py-2 mb-4">
        <AppText className="text-[#FF3E3D] font-outfit-bold text-xs tracking-wider">
          {t("login.forgot_password")}
        </AppText>
      </Pressable>

      {/* Submit Button */}
      <AppButton
        variant="primary"
        onPress={handleSubmit}
        isLoading={isLoading}
        buttonColor="#FF5A1F"
        labelStyle={{ color: "#ffffff", fontSize: 16, fontWeight: "bold" }}
        className="w-full mt-2"
      >
        {t("login.button_submit")}
      </AppButton>

      {/* Divider */}
      <DividerWithText text={t("login.or_continue_with")} />

      {/* Social Login Buttons */}
      {/* <SocialLoginGroup
        onGooglePress={onGooglePress}
        onApplePress={onApplePress}
      /> */}

      <View className="flex-row w-full items-center gap-x-4 justify-between my-4">
        <AppButton
          variant="oauth"
          icon={() => (
            <AppImage
              source={require("@/presentation/assets/img/google-botton-icon.png")}
              className="w-6 h-6"
            />
          )}
          style={{ flex: 1, borderRadius: 100 }}
          contentStyle={{ paddingVertical: 12 }}
          className="bg-[#121212] border border-white/10"
          buttonColor="#2B2B2B"
        >
          Google
        </AppButton>
        <AppButton
          variant="oauth"
          icon={() => <AntDesign name="apple1" size={24} color="white" />}
          style={{ flex: 1, borderRadius: 100 }}
          contentStyle={{ paddingVertical: 12 }}
          className="bg-[#121212] border border-white/10"
          buttonColor="#2B2B2B"
        >
          Apple
        </AppButton>
      </View>
    </View>
  );
};

export default LoginForm;
