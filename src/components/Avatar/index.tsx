import { Image, ImageProps } from "react-native"
import { styles } from "./styles"

export default function Avatar({selected, ...rest}: AvatarProps & ImageProps){
    return(
        <Image style={styles.image} {...rest}/>
    )
}