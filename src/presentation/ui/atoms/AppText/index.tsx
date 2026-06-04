import { FC, ReactNode } from 'react';
import { Text, TextProps } from 'react-native';

export interface AppTextProps extends TextProps {
  children?: ReactNode;
  className?: string;
}

const AppText: FC<AppTextProps> = ({ children, style, className = '', ...rest }) => {
  return (
    <Text style={style} className={className} {...rest}>
      {children}
    </Text>
  );
};

export default AppText;