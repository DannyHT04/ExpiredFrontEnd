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
    backgroundColor: "#4B4B4B",
    flex: 1,
  },
  SplashLogo:{
    height:175, 
    width:180,  
  },
  Container:{
    alignItems:"center", 
    paddingTop:250
  }
});

export default SplashScreen;
