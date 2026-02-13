import { FC } from "react"
import { Image, ImagePropsBase } from "react-native"

interface ImageAtomProps extends ImagePropsBase { }

const ImageAtom: FC<ImageAtomProps> = ({ source, alt, width, height, className, ...props }) => {
    return (
        <Image source={source} alt={alt} width={width} height={height} className={className} {...props} />
    )
}

export default ImageAtom;