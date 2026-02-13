import React from 'react'
import ImageAtom from '@/presentation/ui/atoms/ImageAtom'
import { View } from 'react-native'

const onBoardingScreen = () => {
    return (
        <View className='absolute inset-0 z-0 items-center'>
            <ImageAtom source={require('@/presentation/assets/img/onboarding.png')} alt='Onboarding' width={300} height={300} className='flex-1 items-center' />
        </View>
    )
}

export default onBoardingScreen