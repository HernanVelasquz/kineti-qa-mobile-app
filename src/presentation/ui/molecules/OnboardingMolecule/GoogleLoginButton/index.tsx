import { View } from 'react-native';
import { AppButtom } from '@/presentation/ui/atoms/AppButton';

interface GoogleLoginButtonProps {
    titleGoogle: string;
    onPress: () => void;
    loading?: boolean;
    className?: string;

    registerButtonText: string;
    onRegisterPress: () => void;
    isLoadingRegister?: boolean;
    classNameRegister?: string;
}

const GoogleLoginButton = ({ titleGoogle, onPress, loading, registerButtonText, onRegisterPress, isLoadingRegister, className, classNameRegister }: GoogleLoginButtonProps) => {
    return (
        <View>
            <AppButtom onPress={onPress} loading={loading} className={className}>
                {titleGoogle}
            </AppButtom>

            <AppButtom onPress={onRegisterPress} loading={isLoadingRegister} className={classNameRegister}>
                {registerButtonText}
            </AppButtom>
        </View>
    )
}

export default GoogleLoginButton;
