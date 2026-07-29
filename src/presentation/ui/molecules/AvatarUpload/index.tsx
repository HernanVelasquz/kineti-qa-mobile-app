import { FC } from "react";
import { View } from "react-native";
import { AppAvatarPlaceholder } from "../../atoms/AppAvatarPlaceholder";
import { AppIconButton } from "../../atoms/AppIconButton";

export interface AvatarUploadProps {
  onPressUpload?: () => void;
  className?: string;
}

export const AvatarUpload: FC<AvatarUploadProps> = ({
  onPressUpload,
  className = "",
}) => {
  return (
    <View className={`self-center my-6 ${className}`}>
      <AppAvatarPlaceholder size={110} />
      <View className="absolute -bottom-1 -right-1 border-[4px] border-[#000000] rounded-full">
        <AppIconButton
          icon="camera"
          size={16}
          backgroundColor="bg-[#FF5A1F]"
          color="#ffffff"
          onPress={onPressUpload}
        />
      </View>
    </View>
  );
};

export default AvatarUpload;
