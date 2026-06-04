import { FC, useState } from 'react';
import { View, Modal, Pressable, KeyboardAvoidingView, Platform, TextInput } from 'react-native';
import AppText from '@/presentation/ui/atoms/AppText';
import AppButton from '@/presentation/ui/atoms/AppButton';

interface LoginBottomSheetProps {
  isVisible: boolean;
  onClose: () => void;
  onLoginSubmit?: (email: string, pass: string) => void;
}

export const LoginBottomSheet: FC<LoginBottomSheetProps> = ({
  isVisible,
  onClose,
  onLoginSubmit
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    if (onLoginSubmit) {
      onLoginSubmit(email, password);
    }
  };

  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1 justify-end"
      >
        {/* Semi-transparent Backdrop */}
        <Pressable 
          className="flex-1 bg-black/60" 
          onPress={onClose} 
        />

        {/* Bottom Sheet Card Container */}
        <View className="bg-[#161616] border-t border-white/10 rounded-t-[30px] px-6 pb-10 pt-4 shadow-2xl">
          {/* Drag Handle Decoration */}
          <View className="w-12 h-1 bg-white/20 rounded-full align-self-center self-center mb-6" />

          {/* Header */}
          <AppText className="text-white text-2xl font-outfit-bold mb-2">
            ¡Hola de nuevo!
          </AppText>
          <AppText className="text-white/60 font-outfit text-sm mb-6">
            Inicia sesión para continuar tu entrenamiento.
          </AppText>

          {/* Input Fields */}
          <View className="space-y-4 mb-6">
            <View className="mb-4">
              <AppText className="text-white/80 font-outfit-medium text-xs mb-2">
                CORREO ELECTRÓNICO
              </AppText>
              <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="ejemplo@gymflow.com"
                placeholderTextColor="rgba(255,255,255,0.3)"
                keyboardType="email-address"
                autoCapitalize="none"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-outfit text-base"
              />
            </View>

            <View className="mb-4">
              <AppText className="text-white/80 font-outfit-medium text-xs mb-2">
                CONTRASEÑA
              </AppText>
              <TextInput
                value={password}
                onChangeText={setPassword}
                onChange={undefined}
                placeholder="••••••••"
                placeholderTextColor="rgba(255,255,255,0.3)"
                secureTextEntry
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-outfit text-base"
              />
            </View>
          </View>

          {/* Action Button */}
          <AppButton 
            variant="primary" 
            onPress={handleSubmit}
            className="mt-2"
          >
            INICIAR SESIÓN
          </AppButton>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default LoginBottomSheet;
