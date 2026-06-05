import AppText, { AppTextProps } from '@/presentation/ui/atoms/AppText';
import { View } from 'react-native'

export interface OnboardingTitleProps {
    title: string;
    description: string;
    titleConfig?: AppTextProps
    descriptionConfig?: AppTextProps
}

const OnboardingTitle = ({ title, description, titleConfig, descriptionConfig }: OnboardingTitleProps) => {
    return (
        <View>
            <AppText className={titleConfig?.className}>
                {title}
            </AppText>

            <AppText className={descriptionConfig?.className}>
                {description}
            </AppText>
        </View>
    )
}

export default OnboardingTitle