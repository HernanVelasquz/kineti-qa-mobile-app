import { FC } from "react";
import { View } from "react-native";
import AppText from "../../atoms/AppText";
import { AppProgressBar } from "../../atoms/AppProgressBar";
import { useTranslation } from "react-i18next";

export interface StepIndicatorProps {
  step: number;
  totalSteps: number;
  label?: string;
  className?: string;
}

export const StepIndicator: FC<StepIndicatorProps> = ({
  step,
  totalSteps,
  label,
  className = "",
}) => {
  const { t } = useTranslation();
  const progress = step / totalSteps;

  return (
    <View className={`flex-1 ${className}`}>
      <View className="flex-row justify-end mb-2">
        <AppText className="text-[#FF5A1F] text-xs font-bold mr-2 uppercase tracking-widest">
          {label || t("registration.step_label", "REGISTRO")}
        </AppText>
        <AppText className="text-gray-400 text-xs">
          {t("registration.step_count", { defaultValue: "Paso {{step}} de {{totalSteps}}", step, totalSteps })}
        </AppText>
      </View>
      <AppProgressBar progress={progress} />
    </View>
  );
};

export default StepIndicator;
