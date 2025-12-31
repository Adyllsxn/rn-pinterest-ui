import { theme } from "@/theme";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>RN-PITERENST UI</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.Colors.black
    },
    title:{
        color: "blue",
        fontSize: theme.FontSize.normal
    }
}) 