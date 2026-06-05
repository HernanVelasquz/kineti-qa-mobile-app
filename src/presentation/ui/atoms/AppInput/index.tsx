import { FC, useState } from "react";
import { View, TextInput, TextInputProps, Pressable } from "react-native";
import Feather from "@expo/vector-icons/Feather";

export interface AppInputProps extends TextInputProps {
  leftIcon?: keyof typeof Feather.glyphMap;
  isPassword?: boolean;
  className?: string;
  containerClassName?: string;
}

export const AppInput: FC<AppInputProps> = ({
  leftIcon,
  isPassword = false,
  className = "",
  containerClassName = "",
  secureTextEntry,
  ...props
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const isSecure = isPassword && !isPasswordVisible;

  return (
    <View
      className={`flex-row items-center bg-[#1c1c1e] border border-white/5 rounded-full px-4 py-3.5 w-full ${containerClassName}`}
    >
      {/* Left icon decoration */}
      {leftIcon && (
        <Feather
          name={leftIcon}
          size={20}
          color="rgba(255, 255, 255, 0.4)"
          style={{ marginRight: 10 }}
        />
      )}

      {/* Main TextInput */}
      <TextInput
        secureTextEntry={isSecure}
        placeholderTextColor="rgba(255, 255, 255, 0.4)"
        className={`flex-1 text-white font-outfit text-base p-0 m-0 ${className}`}
        {...props}
      />

      {/* Right toggle visibility icon for passwords */}
      {isPassword && (
        <Pressable onPress={togglePasswordVisibility} className="p-1">
          <Feather
            name={isPasswordVisible ? "eye-off" : "eye"}
            size={18}
            color="rgba(255, 255, 255, 0.5)"
          />
        </Pressable>
      )}
    </View>
  );
};

export default AppInput;
