import { FC } from 'react';
import {
  TouchableOpacity,
  Text as RNText,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacityProps,
} from 'react-native';

interface ButtonAtomProps extends TouchableOpacityProps {
  title: string;
  onPress: () => void;
  isLoading?: boolean;
}

export const ButtonAtom: FC<ButtonAtomProps> = ({ title, onPress, isLoading = false, style, ...rest }) => {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <RNText style={styles.buttonText}>{title}</RNText>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#6200ee', // Primary color example
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 100,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
