import { FC, ReactNode } from "react";
import { Button, ButtonProps } from "react-native-paper";

export interface AppButtonProps extends Omit<ButtonProps, "children"> {
  isLoading?: boolean;
  variant?: "primary" | "oauth" | "contained" | "text" | "outlined";
  className?: string;
  children: ReactNode;
}

export const AppButton: FC<AppButtonProps> = ({
  onPress,
  isLoading = false,
  variant = "contained",
  className = "",
  style,
  children,
  labelStyle,
  ...rest
}) => {
  let customStyle = "";
  let customLabelStyle: object = {};

  if (variant === "primary") {
    customStyle = "bg-white rounded-full justify-center items-center shadow-lg";
    customLabelStyle = {
      color: "#000000",
      fontWeight: "bold",
      fontSize: 16,
      letterSpacing: 0.5,
    };
  } else if (variant === "oauth") {
    customStyle =
      "bg-[#131313] border border-white/5 rounded-full my-1.5 w-full justify-center items-center";
    customLabelStyle = {
      color: "#ffffff",
      fontWeight: "600",
      fontSize: 16,
    };
  }

  return (
    <Button
      mode={
        variant === "primary" || variant === "oauth" ? "contained" : variant
      }
      onPress={onPress}
      loading={isLoading}
      uppercase={variant === "primary" ? true : false}
      className={`${customStyle} ${className}`}
      style={style}
      contentStyle={
        variant === "primary" || variant === "oauth"
          ? [{ paddingVertical: 10 }, rest.contentStyle]
          : rest.contentStyle
      }
      labelStyle={[customLabelStyle, labelStyle]}
      {...rest}
    >
      {children}
    </Button>
  );
};

export const AppButtom = AppButton;
export default AppButton;
