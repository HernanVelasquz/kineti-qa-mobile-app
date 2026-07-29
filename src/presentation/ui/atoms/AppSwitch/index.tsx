import { FC } from "react";
import { Switch, SwitchProps } from "react-native";

export interface AppSwitchProps extends SwitchProps {}

export const AppSwitch: FC<AppSwitchProps> = ({
  trackColor = { false: "#3a3a3c", true: "#FF5A1F" },
  thumbColor = "#ffffff",
  ios_backgroundColor = "#3a3a3c",
  ...props
}) => {
  return (
    <Switch
      trackColor={trackColor}
      thumbColor={thumbColor}
      ios_backgroundColor={ios_backgroundColor}
      {...props}
    />
  );
};

export default AppSwitch;
