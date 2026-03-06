import { FC } from "react"
import { Image, ImagePropsBase } from "react-native"

interface AppImageProps extends ImagePropsBase { }

const AppImage: FC<AppImageProps> = ({ source, alt, width, height, className, ...props }) => {
    return (
        <Image source={source} alt={alt} width={width} height={height} className={className} {...props} />
    )
}

export default AppImage;