import { FC } from "react";
import { Pressable, PressableProps } from "react-native";
import Feather from "@expo/vector-icons/Feather";

export interface AppIconButtonProps extends PressableProps {
  icon: keyof typeof Feather.glyphMap;
  size?: number;
  color?: string;
  backgroundColor?: string;
  className?: string;
}

export const AppIconButton: FC<AppIconButtonProps> = ({
  icon,
  size = 20,
  color = "#ffffff",
  backgroundColor = "bg-[#1c1c1e]",
  className = "",
  ...props
}) => {
  return (
    <Pressable
      className={`items-center justify-center rounded-full p-3 ${backgroundColor} ${className}`}
      {...props}
    >
      <Feather name={icon} size={size} color={color} />
    </Pressable>
  );
};

export default AppIconButton;
