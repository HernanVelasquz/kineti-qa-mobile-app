import { Link } from '@react-navigation/native';
import { AppStackParamList } from '@/presentation/navigation/types';

interface AppLinkProps {
    title: string;
    onPress?: () => void;
    className?: string;
    screen: keyof AppStackParamList;
}



const AppLink = ({ title, onPress, className, screen }: AppLinkProps) => {
    return <Link<AppStackParamList> screen={screen} onPress={onPress} className={className}>
        {title}
    </Link>
}

export default AppLink;
