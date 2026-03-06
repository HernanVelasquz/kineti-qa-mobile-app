import { FC } from 'react';
import { Button, ButtonProps } from 'react-native-paper';

interface AppButtomProps extends ButtonProps {
  isLoading?: boolean;
}

export const AppButtom: FC<AppButtomProps> = ({ onPress, isLoading = false, style, children, ...rest }) => {
  return (
    <Button
      mode='contained'
      onPress={onPress}
      loading={isLoading}
      style={style}
      {...rest}
    >
      {children}
    </Button>
  );
};

