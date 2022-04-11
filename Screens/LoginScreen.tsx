import { View, Text, StyleSheet } from "react-native";
import { FC, useState } from "react";
import { TextInput, Button } from "react-native-paper";
const LoginScreen: FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.Bg1}>
      <View style={[styles.Center, styles.BoxBg]}>
        <Text style={styles.Fontsize}>Login</Text>
      </View>
      <View style={[styles.Mt3, styles.BoxBg]}>
        <View>
          <TextInput
            label="Username"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            label="Password"
            value={password}
            onChangeText={setPassword}
          />
        </View>
      </View>
      <View style={styles.Mt1}>
        <Button mode="contained">Log In</Button>
        <Button>Create Account?</Button>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Center: {
    alignItems: "center",
  },
  Fontsize: {
    fontSize: 30,
    marginTop: 60,
  },
  Bg1: {
    backgroundColor: "#4B4B4B",
    flex: 2,
  },
  Mt1: {
    marginTop: 30,
  },
  Mt2: {
    marginTop: 30,
  },
  Mt3: {
    marginTop: 40,
  },
  BoxBg: {
    backgroundColor: "#9A9B9A",
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
