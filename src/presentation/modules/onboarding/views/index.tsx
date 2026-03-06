import { View } from 'react-native'
import AppImage from '@/presentation/ui/atoms/AppImage'

const OnBoardingScreen = () => {
    return (
        <View className='flex-1 bg-black items-center justify-center'>
            <AppImage source={require('@/presentation/assets/img/onboarding.png')} alt='Onboarding' width={300} height={300} className='flex-1 items-center' />
        </View>
    )
}

export default OnBoardingScreen