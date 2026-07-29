import { FC, ReactNode } from "react";
import { View } from "react-native";
import { ScreenContainer } from "../ScreenContainer";

export interface RegistrationStepTemplateProps {
  header: ReactNode;
  title: ReactNode;
  children: ReactNode;
  className?: string;
}

export const RegistrationStepTemplate: FC<RegistrationStepTemplateProps> = ({
  header,
  title,
  children,
  className = "",
}) => {
  return (
    <ScreenContainer backgroundColor="bg-[#000000]" scrollable={true}>
      <View className={`flex-1 px-6 pt-4 pb-8 ${className}`}>
        {header}
        {title}
        {children}
      </View>
    </ScreenContainer>
  );
};

export default RegistrationStepTemplate;
