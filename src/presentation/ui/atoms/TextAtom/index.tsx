import { ReactNode } from 'react';
import { Text as RNText, TextProps as RNTextProps, StyleSheet } from 'react-native';

interface TextProps extends RNTextProps {
  children: ReactNode;
}

export const Text = ({ children, style, ...rest }: TextProps) => {
  return (
    <RNText style={[styles.defaultText, style]} {...rest}>
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  defaultText: {
    fontSize: 16,
    color: '#333',
  },
});
