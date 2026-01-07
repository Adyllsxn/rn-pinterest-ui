import Filters from "@/components/Filters";
import { Posts } from "@/components/Posts";
import { theme } from "@/theme";
import { utils } from "@/utils";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function HomeScreen(){
    const [filt, setfilt] = useState(utils.filter[0]);
    return(
        <View style={styles.container}>
            <Filters filters={utils.filter} filter={filt} onChange={setfilt}/>
            <Posts posts={utils.posts} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 12,
        paddingTop: 52,
        backgroundColor: theme.colors.black,
    },
    title:{
        color: theme.colors.white,
        fontSize: theme.fontSize.md,
        fontFamily: theme.fontFamily.bold,
    }
}) 