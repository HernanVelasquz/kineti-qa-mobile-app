import { FC } from "react";
import { View } from "react-native";
import AppText from "../../atoms/AppText";

export interface HeaderTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export const HeaderTitle: FC<HeaderTitleProps> = ({
  title,
  subtitle,
  className = "",
}) => {
  return (
    <View className={`mb-8 ${className}`}>
      <AppText className="text-white text-3xl font-bold mb-2">{title}</AppText>
      {subtitle && (
        <AppText className="text-gray-400 text-sm">{subtitle}</AppText>
      )}
    </View>
  );
};

export default HeaderTitle;
