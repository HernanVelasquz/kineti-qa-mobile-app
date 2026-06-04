import { FC } from "react";
import { View, ViewProps } from "react-native";

interface AppDividerLineProps extends ViewProps {
  className?: string;
  color?: string;
  width?: number | string;
  height?: number;
}

export const AppDividerLine: FC<AppDividerLineProps> = ({
  className = "",
  color = "#FF3E3D",
  width = 50,
  height = 6,
  style,
  ...props
}) => {
  return (
    <View
      style={[
        {
          width: width as any,
          height,
          backgroundColor: color,
          borderRadius: 2,
        },
        style,
      ]}
      className={`${className}`}
      {...props}
    />
  );
};

export default AppDividerLine;
