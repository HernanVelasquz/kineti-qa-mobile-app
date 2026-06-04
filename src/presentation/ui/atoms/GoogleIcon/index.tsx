import { FC } from "react";
import { Image, StyleSheet } from "react-native";

interface GoogleIconProps {
  size?: number;
  className?: string;
}

export const GoogleIcon: FC<GoogleIconProps> = ({
  size = 22,
  className = "",
}) => {
  return (
    <Image
      source={{
        uri: "https://developers.google.com/static/identity/images/g-logo.png",
      }}
      style={{ width: size, height: size, marginRight: 8 }}
      className={className}
      resizeMode="contain"
    />
  );
};

export default GoogleIcon;
