import { FC } from "react";
import { View } from "react-native";
import AppText from "@/presentation/ui/atoms/AppText";
import AppButton from "@/presentation/ui/atoms/AppButton";
import AppDividerLine from "@/presentation/ui/atoms/AppDividerLine";
import GoogleSignInButton from "@/presentation/ui/molecules/GoogleSignInButton";
import FooterLinkText from "@/presentation/ui/molecules/FooterLinkText";

interface OnboardingContentCardProps {
  onStartPress: () => void;
  onGooglePress: () => void;
  onLoginLinkPress: () => void;
}

export const OnboardingContentCard: FC<OnboardingContentCardProps> = ({
  onStartPress,
  onGooglePress,
  onLoginLinkPress,
}) => {
  return (
    <View className="w-full">
      <View className="px-6 w-full">
        <AppDividerLine className="mb-4 mt-8" />

        <View className="mb-4">
          <AppText className="text-white text-5xl font-bold italic uppercase leading-[52px]">
            SUPERA TUS
          </AppText>
          <AppText className="text-[#FF3E3D] text-5xl font-bold italic uppercase leading-[52px]">
            LÍMITES
          </AppText>
        </View>

        <AppText className="text-slate-100 text-[1.5rem] font-medium leading-relaxed max-w-[280]">
          Entrenamientos de élite diseñados para tu máximo rendimiento físico.
        </AppText>

        <View className="w-full my-4 gap-y-4">
          <AppButton
            variant="primary"
            onPress={onStartPress}
            buttonColor="#fff"
          >
            COMENZAR AHORA
          </AppButton>

          <GoogleSignInButton onPress={onGooglePress} />
        </View>

        <FooterLinkText onPressLink={onLoginLinkPress} className="text-2xl " />
      </View>
    </View>
  );
};

export default OnboardingContentCard;
