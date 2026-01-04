import { theme } from '@/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  pressable: {},
  text:{
    color: theme.colors.white,
    fontSize: theme.fontSize.lg,
    fontFamily: theme.fontFamily.medium,
  },
  pressableSelected:{
    borderBottomWidth: 4,
    borderBottomColor: theme.colors.white,
  }
});