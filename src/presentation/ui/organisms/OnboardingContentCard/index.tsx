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
    <View className="w-full justify-end">
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

        <AppText className="text-white/80 font-medium text-base mb-2 leading-6">
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

        {/* Footer login options */}
        <FooterLinkText onPressLink={onLoginLinkPress} />
      </View>
    </View>
  );
};

export default OnboardingContentCard;
