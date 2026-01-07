import { theme } from '@/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container:{
    padding: 5,
  },
  image:{
    borderRadius: 22
  },
  title:{
    fontSize: theme.fontSize.md,
    color: theme.colors.white,
    fontFamily: theme.fontFamily.bold,
  },
  footer:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 7
  }
});