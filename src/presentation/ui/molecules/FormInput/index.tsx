import { FC } from "react";
import { View } from "react-native";
import AppText from "../../atoms/AppText";
import { AppInput, AppInputProps } from "../../atoms/AppInput";

export interface FormInputProps extends AppInputProps {
  label: string;
  containerStyle?: string;
}

export const FormInput: FC<FormInputProps> = ({
  label,
  containerStyle = "",
  ...inputProps
}) => {
  return (
    <View className={`mb-4 ${containerStyle}`}>
      <AppText className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-2 ml-1">
        {label}
      </AppText>
      <AppInput {...inputProps} />
    </View>
  );
};

export default FormInput;
