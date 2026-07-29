import { FC } from "react";
import { View } from "react-native";
import { AppIconButton } from "../../atoms/AppIconButton";
import { StepIndicator } from "../../molecules/StepIndicator";

export interface RegistrationHeaderProps {
  step: number;
  totalSteps: number;
  onBack?: () => void;
  className?: string;
}

export const RegistrationHeader: FC<RegistrationHeaderProps> = ({
  step,
  totalSteps,
  onBack,
  className = "",
}) => {
  return (
    <View className={`flex-row items-center pt-2 pb-6 ${className}`}>
      <AppIconButton
        icon="chevron-left"
        size={24}
        onPress={onBack}
        className="mr-4"
      />
      <StepIndicator step={step} totalSteps={totalSteps} />
    </View>
  );
};

export default RegistrationHeader;
