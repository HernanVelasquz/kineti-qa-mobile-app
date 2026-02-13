import { FC } from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    View,
    StyleSheet
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface ScreenContainerProps {
    children: React.ReactNode;
    scrollable?: boolean;
    className?: string;
    backgroundColor?: string;
}

export const ScreenContainer: FC<ScreenContainerProps> = ({
    children,
    scrollable = true,
    className = "",
    backgroundColor = "bg-gray-100"
}) => {
    const content = (
        <View className={`flex-1 ${className}`}>
            {children}
        </View>
    );

    return (
        <SafeAreaView
            className={`flex-1 ${backgroundColor}`}
            edges={['top', 'right', 'bottom', 'left']}
        >
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                className="flex-1"
            >
                {scrollable ? (
                    <ScrollView
                        className="flex-1"
                        contentContainerStyle={styles.scrollContent}
                        keyboardShouldPersistTaps="handled"
                    >
                        {content}
                    </ScrollView>
                ) : (
                    content
                )}
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    scrollContent: {
        flexGrow: 1,
    },
});
