import { FC } from "react";
import { View, ViewProps } from "react-native";
import Feather from "@expo/vector-icons/Feather";

export interface AppAvatarPlaceholderProps extends ViewProps {
  size?: number;
  className?: string;
}

export const AppAvatarPlaceholder: FC<AppAvatarPlaceholderProps> = ({
  size = 100,
  className = "",
  ...props
}) => {
  return (
    <View
      className={`bg-[#1c1c1e] items-center justify-center rounded-3xl ${className}`}
      style={[{ width: size, height: size }, props.style]}
      {...props}
    >
      <Feather name="user" size={size * 0.4} color="#4a4a4c" />
    </View>
  );
};

export default AppAvatarPlaceholder;
