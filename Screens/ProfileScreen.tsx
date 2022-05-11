import { Text, View, StyleSheet, Image } from "react-native";
import { FC, useState, useContext, useEffect } from "react";
import { Modal, Portal, Button, Provider, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "../assets/Logo.png";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
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
import UserContext from "../Context/UserContext";
import {
  GetUserInfoByUsername
} from "../Services/DataService";

import ProfileNameComponent from "../Components/ProfileNameComponent";
import ProfileGroupComponent from "../Components/ProfileGroupComponent";

type Props = NativeStackScreenProps<RootStackParamList, "Profile">;
type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  CreateAccount: undefined;
  Profile: undefined;
  Splash: undefined;
  GroceryList: undefined;
  Footer: undefined;
};

const ProfileScreen: FC<Props> = ({ navigation }) => {
  // const ProfileScreen = ({ navigation }) => {
  let {
    username,
    setUsername,
    userInfo,
    setUserInfo,
    setgroupArrayId,
    groupArrayId

  } = useContext(UserContext);
  // const [groupArray, setGroupArray] = useState([]);

  useEffect(() => {
    let token = AsyncStorage.getItem("Token");
    if (token == null) {
      navigation.navigate("Login");
    } else {
      if (username != null) {
        test();
        // const fetchData = async () => {};
        // fetchData().catch(console.error);
      }
    }
  }, []);
  const test = async () => {
    let userInfoData = await GetUserInfoByUsername(username);
    setUserInfo(userInfoData);
    let groupData = userInfo.groupId.split(",");
    setgroupArrayId(groupData);
    
  };



  const [visible, setVisible] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const containerStyle = { backgroundColor: "#2C443A", padding: 20 };
  // const [newUsername, setNewUsername] = useState("");

  const handleLogOut = () => {
    AsyncStorage.clear();
    navigation.navigate("Login");
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
    <SafeAreaView style={styles.Bg}>
      <View style={{ alignItems: "center" }}>
        <Image source={Logo} style={{ width: 105, height: 101 }} />
      </View>

      <ProfileNameComponent/>
      <ProfileGroupComponent/>
      <View style={{ alignItems: "center", marginTop: 50 }}>
        <Button icon="logout" color="#E9E9E1" onPress={handleLogOut}>
          {" "}
          Log Out{" "}
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Bg: {
    backgroundColor: "#7FC8A9",
    flex: 1,
  },
});

export default ProfileScreen;
