import { FC } from "react";
import { View, ViewProps } from "react-native";

export interface AppProgressBarProps extends ViewProps {
  progress: number;
  className?: string;
  trackColor?: string;
  fillColor?: string;
}

export const AppProgressBar: FC<AppProgressBarProps> = ({
  progress,
  className = "",
  trackColor = "bg-[#2c2c2e]",
  fillColor = "bg-[#FF5A1F]",
  ...props
}) => {
  const validProgress = Math.max(0, Math.min(1, progress));

  return (
    <View
      className={`h-1.5 w-full rounded-full overflow-hidden ${trackColor} ${className}`}
      {...props}
    >
      <View
        className={`h-full rounded-full ${fillColor}`}
        style={{ width: `${validProgress * 100}%` }}
      />
    </View>
  );
};

export default AppProgressBar;
