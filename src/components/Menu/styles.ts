import { theme } from '@/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.gray[800],
  },
  content:{
    flex: 1,
    padding: 24,
    alignItems: "center",
  },
  header:{
    flexDirection: "row",

  },
  title:{
    fontFamily: theme.fontFamily.medium,
    fontSize: theme.fontSize.xl,
    color: theme.colors.white,
    flex: 1,
    textAlign: "center",
    marginRight: 14,
  },
  options:{
    flexDirection: "row",
    gap: 16,
    marginTop: 32,
  }
});