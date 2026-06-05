import { FC } from "react";
import { View } from "react-native";
import AppText from "@/presentation/ui/atoms/AppText";

interface DividerWithTextProps {
  text: string;
  className?: string;
}

export const DividerWithText: FC<DividerWithTextProps> = ({
  text,
  className = "",
}) => {
  return (
    <View
      className={`flex-row items-center justify-center w-full my-6 ${className}`}
    >
      <View className="flex-1 h-[1px] bg-white/10" />
      <AppText className="px-4 text-[11px] font-outfit-medium text-white/30 tracking-widest uppercase">
        {text}
      </AppText>
      <View className="flex-1 h-[1px] bg-white/10" />
    </View>
  );
};

export default DividerWithText;
