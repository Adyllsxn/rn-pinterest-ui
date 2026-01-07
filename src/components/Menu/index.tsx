import { View, Text } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { styles } from "./styles";
import { forwardRef } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { theme } from "@/theme";
import { MenuButton } from "../MenuButton";

export const Menu = forwardRef<BottomSheet, MenuProps>(({ onClose }, ref) => {
  return (
    <BottomSheet
      ref={ref}
      index={0}
      snapPoints={[0.01, 230]}
      backgroundStyle={styles.container}
      handleComponent={() => null}
    >
      <BottomSheetView>
        <View style={styles.content}>
          <View style={styles.header}>
            <FontAwesome
              name="close"
              size={24}
              color={theme.colors.white}
              style={{ marginRight: 34 }}
              onPress={onClose}
            />
            <Text style={styles.title}>Pintereste Menu</Text>
          </View>
          <View style={styles.options}>
            <MenuButton title="Home" icon="home"/>
            <MenuButton title="Paste" icon="paste" />
            <MenuButton title="Folder" icon="folder" />
          </View>
        </View>
      </BottomSheetView>
    </BottomSheet>
  );
});
