import { FC } from "react";
import { View, Pressable } from "react-native";
import { useTranslation } from "react-i18next";
import AppText from "@/presentation/ui/atoms/AppText";

interface FooterLinkTextProps {
  onPressLink: () => void;
  className?: string;
}

export const FooterLinkText: FC<FooterLinkTextProps> = ({
  onPressLink,
  className = "",
}) => {
  const { t } = useTranslation();

  return (
    <View className={`flex-row justify-center items-center py-4 ${className}`}>
      <AppText className="text-white/80 font-outfit text-4md">
        {t("onboarding.has_account")}{" "}
      </AppText>
      <Pressable onPress={onPressLink}>
        <AppText className="text-[#FF3E3D] font-outfit-bold text-4md">
          {t("onboarding.login_link")}
        </AppText>
      </Pressable>
    </View>
  );
};

export default FooterLinkText;
