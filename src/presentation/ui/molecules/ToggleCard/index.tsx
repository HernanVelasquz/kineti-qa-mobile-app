import { FC } from "react";
import { View } from "react-native";
import { AppSwitch, AppSwitchProps } from "../../atoms/AppSwitch";
import Feather from "@expo/vector-icons/Feather";
import AppText from "../../atoms/AppText";

export interface ToggleCardProps {
  title: string;
  subtitle: string;
  icon: keyof typeof Feather.glyphMap;
  switchProps?: AppSwitchProps;
  className?: string;
}

export const ToggleCard: FC<ToggleCardProps> = ({
  title,
  subtitle,
  icon,
  switchProps,
  className = "",
}) => {
  return (
    <View
      className={`flex-row items-center justify-between bg-[#1c1c1e] p-4 rounded-2xl w-full ${className}`}
    >
      <View className="flex-row items-center flex-1">
        <View className="bg-[#2c2c2e] p-2 rounded-xl mr-4">
          <Feather name={icon} size={20} color="#FF5A1F" />
        </View>
        <View className="flex-1">
          <AppText className="text-white font-bold text-base">{title}</AppText>
          <AppText className="text-gray-400 text-xs">{subtitle}</AppText>
        </View>
      </View>
      <AppSwitch {...switchProps} />
    </View>
  );
};

export default ToggleCard;
