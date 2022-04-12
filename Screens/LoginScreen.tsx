import { View, Text, StyleSheet } from "react-native";
import { FC, useState } from "react";
import { TextInput, Button } from "react-native-paper";
import {
  RobotoSlab_100Thin,
  RobotoSlab_200ExtraLight,
  RobotoSlab_300Light,
  RobotoSlab_400Regular,
  RobotoSlab_500Medium,
  RobotoSlab_600SemiBold,
  RobotoSlab_700Bold,
  RobotoSlab_800ExtraBold,
  RobotoSlab_900Black,
} from "@expo-google-fonts/roboto-slab";
import AppLoading from "expo-app-loading";
import { useFonts } from "@expo-google-fonts/roboto-slab";

const LoginScreen: FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let [fontsLoaded, error] = useFonts({
    RobotoSlab_100Thin,
    RobotoSlab_200ExtraLight,
    RobotoSlab_300Light,
    RobotoSlab_400Regular,
    RobotoSlab_500Medium,
    RobotoSlab_600SemiBold,
    RobotoSlab_700Bold,
    RobotoSlab_800ExtraBold,
    RobotoSlab_900Black,
  });
  if(!fontsLoaded){
    return <AppLoading/>
  }

  return (
    <View style={styles.Center}>
      <View style={[styles.BoxBg]}>
        <Text style={[styles.Fontsize]}>Login</Text>

        <View style={[styles.Mt2]}>
          <TextInput
            style={[styles.Mt1]}
            autoComplete="off"
            label="Username"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            autoComplete="off"
            style={[styles.Mt1]}
            label="Password"
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <View style={styles.Mt2}>
          <Button color="#505050" mode="contained">
            Log In
          </Button>
          <Button color="#405CBB">Create Account?</Button>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Center: {
    alignItems: "center",
    backgroundColor: "#4B4B4B",
    justifyContent: "center",
    flex: 1,
  },
  Fontsize: {
    fontSize: 30,
    marginTop: 60,
    fontFamily: "RobotoSlab_400Regular",
  },
  Mt1: {
    marginTop: 30,
    width: 300,
  },
  Mt2: {
    marginTop: 40,
  },
  BoxBg: {
    backgroundColor: "#9A9B9A",
    flex: 1,
    width: 350,
    alignItems: "center",
    marginTop: 40,
    marginBottom: 40,
  },
  Font:{
    fontFamily:"RobotoSlab_400Regular"
  },
  c1: {
    color: "grey",
  },
});

//   BoxBg: {
//     backgroundColor: "#9A9B9A",

//     marginLeft: 25,
//     marginTop: 60,
//   },
//   InputTxt: {
//     height: 40,
//     width:300,
//     marginTop: 40,
//     borderWidth: 1,
//     backgroundColor:"white",
//     borderColor:"#707070",
//     padding: 10,
//   },

export default LoginScreen;
