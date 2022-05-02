import { Image, StyleSheet, Text, View } from "react-native";
import { FC } from "react";
import Logo from '../assets/Logo.png';

const SplashScreen: FC = () => {
  return( 
  
  <View style={styles.Bg}>
      <View style={styles.Container}>
           <Image source={Logo}style={styles.SplashLogo} accessibilityLabel="Expired Logo"/>
      </View>
     
  </View>
  )
};

const styles = StyleSheet.create({
  Bg: {
    backgroundColor: "#2C443A",
    flex: 1,
  },
  SplashLogo:{
    height:175, 
    width:182,  
  },
  Container:{
    alignItems:"center", 
    paddingTop:250
  }
});

export default SplashScreen;
