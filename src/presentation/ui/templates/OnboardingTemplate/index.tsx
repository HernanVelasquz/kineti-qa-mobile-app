import { FC, ReactNode } from "react";
import { View, ImageBackground, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

interface OnboardingTemplateProps {
  children: ReactNode;
  backgroundImageSource: any; // ImageSourcePropType from react-native
}

export const OnboardingTemplate: FC<OnboardingTemplateProps> = ({
  children,
  backgroundImageSource,
}) => {
  return (
    <View className="flex-1 bg-black">
      {/* Background Image Cover */}
      <ImageBackground
        source={backgroundImageSource}
        resizeMode="cover"
        className="flex-1"
        style={StyleSheet.absoluteFill}
      />

      {/* Elegant Dark Vignette & Bottom Gradient for Content Contrast */}
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.6)", "rgba(0,0,0,1)"]}
        style={[StyleSheet.absoluteFillObject, { justifyContent: "flex-end" }]}
      >
        <SafeAreaView className="w-full" edges={["bottom"]}>
          {children}
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
};

export default OnboardingTemplate;
