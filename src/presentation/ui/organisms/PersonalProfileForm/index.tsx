import { FC, useState } from "react";
import { View } from "react-native";
import { AvatarUpload } from "../../molecules/AvatarUpload";
import { FormInput } from "../../molecules/FormInput";
import { FormSelect } from "../../molecules/FormSelect";
import { ToggleCard } from "../../molecules/ToggleCard";
import { AppButton } from "../../atoms/AppButton";
import { TermsFooter } from "../../molecules/TermsFooter";
import { useTranslation } from "react-i18next";

export interface PersonalProfileFormProps {
  onSubmit?: () => void;
  className?: string;
}

export const PersonalProfileForm: FC<PersonalProfileFormProps> = ({
  onSubmit,
  className = "",
}) => {
  const { t } = useTranslation();
  // Local state for the toggle just for UI completeness if a viewModel is missing
  const [hasLimitations, setHasLimitations] = useState(false);

  return (
    <View className={`w-full ${className}`}>
      <AvatarUpload />

      <View className="flex-row justify-between">
        <FormInput
          label={t("personalProfile.name_label", "NOMBRE")}
          placeholder={t("personalProfile.name_placeholder", "Juan")}
          containerStyle="flex-1 mr-2"
        />
        <FormInput
          label={t("personalProfile.lastname_label", "APELLIDOS")}
          placeholder={t("personalProfile.lastname_placeholder", "Pérez")}
          containerStyle="flex-1 ml-2"
        />
      </View>

      <FormSelect
        label={t("personalProfile.birthdate_label", "FECHA DE NACIMIENTO")}
        placeholder={t("personalProfile.birthdate_placeholder", "dd/mm/yyyy")}
        iconName="calendar"
      />

      <View className="flex-row justify-between">
        <FormSelect
          label={t("personalProfile.id_label", "ID")}
          value={t("personalProfile.id_value", "DNI")}
          containerStyle="flex-[0.4] mr-2"
        />
        <FormInput
          label={t("personalProfile.number_label", "NÚMERO")}
          placeholder={t("personalProfile.number_placeholder", "OOOOOOOOX")}
          containerStyle="flex-[0.6] ml-2"
        />
      </View>

      <View className="flex-row justify-between">
        <FormSelect
          label={t("personalProfile.goal_label", "META")}
          value={t("personalProfile.goal_value", "Perder Peso")}
          containerStyle="flex-[0.6] mr-2"
        />
        <FormInput
          label={t("personalProfile.weight_label", "PESO (KG)")}
          placeholder="75"
          keyboardType="numeric"
          containerStyle="flex-[0.4] ml-2"
        />
      </View>

      <ToggleCard
        title={t("personalProfile.limitations_title", "Limitaciones Físicas")}
        subtitle={t("personalProfile.limitations_subtitle", "¿Lesiones o condiciones?")}
        icon="plus-square" // Or "activity", "heart" as approximation for medical cross
        className="mt-2 mb-8"
        switchProps={{
          value: hasLimitations,
          onValueChange: setHasLimitations,
        }}
      />

      <AppButton
        variant="primary"
        className="mb-4 bg-[#FF5A1F]"
        labelStyle={{ color: "#ffffff", fontWeight: "bold" }}
        onPress={onSubmit}
      >
        {t("personalProfile.continue_button", "CONTINUAR ->")}
      </AppButton>

      <TermsFooter />
    </View>
  );
};

export default PersonalProfileForm;
