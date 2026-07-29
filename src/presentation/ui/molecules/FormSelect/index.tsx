import { FC } from "react";
import { View, Pressable, PressableProps } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import AppText from "../../atoms/AppText";

export interface FormSelectProps extends PressableProps {
  label: string;
  value?: string;
  placeholder?: string;
  containerStyle?: string;
  iconName?: keyof typeof Feather.glyphMap;
}

export const FormSelect: FC<FormSelectProps> = ({
  label,
  value,
  placeholder = "",
  containerStyle = "",
  iconName = "chevron-down",
  ...props
}) => {
  return (
    <View className={`mb-4 ${containerStyle}`}>
      <AppText className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-2 ml-1">
        {label}
      </AppText>
      <Pressable
        className={`flex-row items-center justify-between bg-[#1c1c1e] border border-white/5 rounded-full px-4 py-3.5 w-full`}
        {...props}
      >
        <AppText
          className={`font-outfit text-base ${
            value ? "text-white" : "text-white/40"
          }`}
        >
          {value || placeholder}
        </AppText>
        <Feather name={iconName} size={20} color="rgba(255, 255, 255, 0.5)" />
      </Pressable>
    </View>
  );
};

export default FormSelect;
