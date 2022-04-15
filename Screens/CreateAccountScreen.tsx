import { StyleSheet, Text, View, Image, Alert } from "react-native";
import { FC, useState } from "react";
import { Button, TextInput } from "react-native-paper";
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
import Logo from '../assets/Logo.png'
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { DoesUserExist } from "../Services/DataService";

type RootStackParamList = {
    Home: undefined;
    Login: undefined;
    CreateAccount: undefined;
    Profile: undefined;
    Splash: undefined;
    GroceryList: undefined;
    Footer: undefined;
  };
  type Props = NativeStackScreenProps<RootStackParamList, "CreateAccount">;

const CreateAccountScreen: FC <Props> = ({navigation}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");

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
  const handleSubmit = async () => {
    let result = await DoesUserExist(username);
    console.log(result);
    if(result = false){
      let userData ={
        Id: 0,
        firstname,
        lastname,
        username,
        email,
        
      }
    }else{
      console.log("Already exist")
      Alert.alert(
        "Unable to Create Account",
        "The username is already taken");
    }
  }
  

  return (
    <View style={styles.Center}>
      <View style={[styles.BoxBg]}>
        <View>
          <Image
            source={Logo}
            style={styles.SplashLogo}
            accessibilityLabel="Expired Logo"
          />
        </View>
        <Text style={[styles.Fontsize]}>Create Account</Text>
        <View>
          <TextInput
            style={[styles.Mt1, styles.textInputSizng]}
            autoComplete="off"
            label="First Name"
            theme={{ colors: { primary: "#4B4B4B" } }}
            value={firstname}
            onChangeText={setFirstName}
          />
          <TextInput
            style={[styles.Mt1, styles.textInputSizng]}
            theme={{ colors: { primary: "#4B4B4B" } }}
            autoComplete="off"
            label="Last Name"
            value={lastname}
            onChangeText={setLastName}
          />
          <TextInput
            style={[styles.Mt1, styles.textInputSizng]}
            theme={{ colors: { primary: "#4B4B4B" } }}
            autoComplete="off"
            label="Email"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View>
          <TextInput
            style={[styles.Mt1, styles.textInputSizng]}
            theme={{ colors: { primary: "#4B4B4B" } }}
            autoComplete="off"
            label="Username"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            autoComplete="off"
            theme={{ colors: { primary: "#4B4B4B" } }}
            style={[styles.Mt1, styles.textInputSizng]}
            label="Password"
            secureTextEntry = {true}
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <View style={styles.Mt2}>
          <Button color="#505050" mode="contained">
            <Text style={styles.Font} onPress={handleSubmit}>Create</Text>
          </Button>
        </View>
        <View>
          <Button onPress={() => {
            navigation.navigate('Login')
          }}  color="#405CBB">
            Already have an account?
          </Button>
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
    marginTop: 20,
    fontFamily: "RobotoSlab_400Regular",
  },
  Mt1: {
    marginTop: 20,
    width: 300,
  },
  Mt2: {
    marginTop: 20,
  },
  BoxBg: {
    backgroundColor: "#9A9B9A",
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
  textInputSizng: {
    height: 43,
  },
  SplashLogo: {
    height: 90,
    width: 93,
    marginTop: 20,
  },
});

export default CreateAccountScreen;
