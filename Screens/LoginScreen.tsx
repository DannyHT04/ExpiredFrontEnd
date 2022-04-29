import { View, Text, StyleSheet, Image, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FC, useState } from "react";
import { TextInput, Button } from "react-native-paper";
import { UserLogin, DoesUserExist } from "../Services/DataService";
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
import Logo from "../assets/Logo.png";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { setStatusBarNetworkActivityIndicatorVisible } from "expo-status-bar";
import { useToast } from "react-native-paper-toast";
import IuserData from "../interfaces/LoginInterfaces"
type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  CreateAccount: undefined;
  Profile: undefined;
  Splash: undefined;
  GroceryList: undefined;
  Footer: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

const LoginScreen: FC<Props> = ({ navigation }) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const toaster = useToast();

  const handleSubmit = async () => {
    let userInfo : IuserData = {
      Username: username,
      Password: password,
    };

    let token = await UserLogin(userInfo);
    console.log(token.status);
    if (token.status == 401) {
      Alert.alert("Unable to Login", "Username or password is incorrect");
    }
    if (token.token != null) {
      AsyncStorage.setItem("Token", token.token);
      navigation.navigate("Footer");
    }
    setPassword("");
  };

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
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.Center}>
      <View style={[styles.BoxBg]}>
        {/* <View>
      <SuccessComponent/>
      </View> */}
        <View>
          <Image
            source={Logo}
            style={styles.SplashLogo}
            accessibilityLabel="Expired Logo"
          />
        </View>
        <Text style={[styles.Fontsize]}>Login</Text>

        <View style={[styles.Mt2]}>
          <TextInput
            style={[styles.Mt1]}
            theme={{ colors: { primary: "#4B4B4B" } }}
            autoComplete="off"
            label="Username"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            autoComplete="off"
            theme={{ colors: { primary: "#4B4B4B" } }}
            style={[styles.Mt1]}
            secureTextEntry={true}
            label="Password"
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <View style={styles.Mt2}>
          <Button onPress={handleSubmit} color="#2C443A" mode="contained">
            <Text style={styles.Font}>Log In</Text>
          </Button>
          <Button
            onPress={() => {
              navigation.navigate("CreateAccount");
            }}
            style={{ marginTop: 20 }}
            color="#405CBB"
          >
            Create Account?
          </Button>

          <Button
            mode="contained"
            onPress={() => toaster.show({message:'Success!'})}
          >
            Press me
          </Button>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Center: {
    alignItems: "center",
    backgroundColor: "#2C443A",
    justifyContent: "center",
    flex: 1,
  },
  Fontsize: {
    fontSize: 30,
    marginTop: 20,
    fontFamily: "RobotoSlab_400Regular",
  },
  Mt1: {
    marginTop: 10,
    width: 300,
  },
  Mt2: {
    marginTop: 40,
  },
  BoxBg: {
    backgroundColor: "#87AF9E",
    flex: 1,
    width: 350,
    alignItems: "center",
    marginTop: 40,
    marginBottom: 40,
  },
  Font: {
    fontFamily: "RobotoSlab_400Regular",
  },
  c1: {
    color: "grey",
  },
  SplashLogo: {
    height: 101,
    width: 104,
    marginTop: 20,
  },
});

export default LoginScreen;
