import { theme } from '@/theme';
import { useEffect } from 'react';
import { StyleSheet, useWindowDimensions, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSequence, withTiming } from 'react-native-reanimated';

export function SplashScreen() {

  const logoScale = useSharedValue(1)
  const logoPositionY = useSharedValue(0)
  const dimessions = useWindowDimensions()
  
  const logoAnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      {scale: logoScale.value},
      {translateY: logoPositionY.value}
    ]
  }))

  function LogoAnimation(){
    logoScale.value = withSequence(
      withTiming(0.7),
      withTiming(1.4),
      withTiming(1, undefined, (finished) =>{
        if(finished){
          logoPositionY.value = withSequence(
            withTiming(50),
            withTiming(-dimessions.height, {duration: 400})
          )
        }
      })
    )
  }

  useEffect(() =>{
    LogoAnimation()
  }, [])

  return (
    <View style={styles.container}>
      <Animated.Image source={require("@/assets/logo.png")} style={[styles.logo, logoAnimatedStyle]}/>
    </View>
  );
}



export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.black,
    justifyContent: "center",
    alignItems: "center"
  },
  logo:{
    width: 204,
    height: 204,
  }
});