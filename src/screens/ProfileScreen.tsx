import { theme } from "@/theme";
import { FontFamily } from "@/theme/fontFamily";
import { StyleSheet, Text, View } from "react-native";

export default function ProfileScreen(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Profile</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.colors.black,
    },
    title:{
        color: theme.colors.white,
        fontSize: theme.fontSize.sm,
        fontFamily: theme.fontFamily.bold,
    }
}) 