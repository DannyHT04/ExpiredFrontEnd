import { View, Text, StyleSheet, TextInput } from "react-native";
import { FC } from "react";

const LoginScreen: FC = () => {
  return (
    <View style={styles.Bg1}>
      <View style={[styles.Padding, styles.BoxBg]}>
        <Text style={styles.Fontsize}>Login</Text>
        <TextInput style={styles.InputTxt}/>
      </View>
          
    </View>
  );
};
const styles = StyleSheet.create({
  Padding: {
    
    alignItems: "center"
  },
  Fontsize:{
      fontSize:30,
      paddingTop: 30,
  },
  Bg1:{
      backgroundColor:'#4B4B4B',
      flex:2
  },
  BoxBg:{
      backgroundColor:'#9A9B9A',
      width:360,
      height: 580,
      marginLeft:25,
      marginTop:60
  },
  InputTxt:{
     borderBottomWidth:1,
     padding:20
  }


});

export default LoginScreen;
