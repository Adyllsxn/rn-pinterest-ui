import {Pressable, PressableProps, Text} from "react-native";
import { styles } from "./styles";

export default function Filter({filter, selected, ...rest}: PressableProps & FilterProps){
    return(
        <Pressable style={[styles.pressable, selected && styles.pressableSelected]} {...rest}>
            <Text style={styles.text}>
                {filter}
            </Text>
        </Pressable>
    )
}