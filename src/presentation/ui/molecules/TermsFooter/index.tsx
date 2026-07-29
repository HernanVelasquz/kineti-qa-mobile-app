import { FC } from "react";
import { View } from "react-native";
import { useTranslation } from "react-i18next";
import AppText from "../../atoms/AppText";

export interface TermsFooterProps {
  onPressTerms?: () => void;
  onPressPrivacy?: () => void;
  className?: string;
}

export const TermsFooter: FC<TermsFooterProps> = ({
  onPressTerms,
  onPressPrivacy,
  className = "",
}) => {
  const { t } = useTranslation();

  return (
    <View className={`items-center mt-4 mb-8 ${className}`}>
      <AppText className="text-gray-500 text-xs text-center leading-5">
        {t("terms.prefix", "Al continuar, aceptas nuestros")}{" "}
        <AppText
          className="text-gray-300 font-bold underline"
          onPress={onPressTerms}
        >
          {t("terms.terms_of_service", "Términos de Servicio")}
        </AppText>{" "}
        {t("terms.and", "y")}
        {"\n"}
        <AppText
          className="text-gray-300 font-bold underline"
          onPress={onPressPrivacy}
        >
          {t("terms.privacy_policy", "Política de Privacidad")}
        </AppText>
        .
      </AppText>
    </View>
  );
};

export default TermsFooter;
