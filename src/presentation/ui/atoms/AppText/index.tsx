import { FC, ReactNode } from 'react';
import { Text, TextProps } from 'react-native'


export interface AppTextProps extends TextProps {
  children?: ReactNode;
}

const AppText: FC<AppTextProps> = ({ children, style, ...rest }) => {
  return (
    <Text style={style} {...rest}>{children}</Text>
  )
}

export default AppText;