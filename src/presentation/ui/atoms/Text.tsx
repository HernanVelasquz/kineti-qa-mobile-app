import React from 'react';
import { Text as RNText, TextProps as RNTextProps, StyleSheet } from 'react-native';

interface TextProps extends RNTextProps {
  children: React.ReactNode;
  // You can add more custom props or variants here
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
    color: '#333', // Default text color
  },
});
