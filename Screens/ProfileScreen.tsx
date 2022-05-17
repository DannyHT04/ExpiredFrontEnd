import { Text, View, StyleSheet, Image } from "react-native";
import { FC, useState, useContext, useEffect } from "react";
import { Modal, Portal, Button, IconButton, Provider, TextInput } from "react-native-paper";
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
  GetUserInfoByUsername,
  GetGroupsByUserId,
  AddGroup
} from "../Services/DataService";

import ProfileNameComponent from "../Components/ProfileNameComponent";
import ProfileGroupComponent from "../Components/ProfileGroupComponent";
import createGroup from "../interfaces/GroupInterface";

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
    // setgroupArrayId(groupData);
    let groupInfoArray = await GetGroupsByUserId(userInfoData.id)
    setgroupArrayId(groupInfoArray)
    
  };

  const [showModal, setShowModal] = useState<boolean>(false);
  const showAddModal = () => setShowModal(true);
  const hideAddModal = () => setShowModal(false);
  const [groupName, setGroupName] = useState<string>("")
  const [groupPassword, setGroupPassword] = useState<string>("")



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

  const handleCreateGroup = async () => {
    let newGroup: createGroup = {
      Id: 0,
      GroupName: groupName,
      UsersIdInGroup: userInfo.id,
      UserNameInGroup: userInfo.username,
      GroupPassword: groupPassword,
      IsGroupDeleted: false
    };
    // console.log(userInfo.id)
    // console.log(userInfo.username)
    // console.log(newGroup)
    await AddGroup(newGroup)
  }

  return (
    <SafeAreaView style={[styles.Bg, { flex: 1 }]}>
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <View style={{ flex: 1 }}>
          {/* invisible btn lol */}
          <IconButton
            icon="sort-variant"
            color="#7FC8A9"
            size={45}
          // onPress={showSortModal}
          />
        </View>

        <View style={{ alignItems: "center" }}>
          <Image source={Logo} style={{ width: 105, height: 101 }} />
        </View>

        <View style={{ flex: 1, alignItems: "flex-end" }}>
          <IconButton
            icon="plus-circle-outline"
            color="#2C443A"
            size={45}
            onPress={showAddModal}
          />
        </View>
      </View>

      <ProfileNameComponent />
      <ProfileGroupComponent />
      <View style={{ alignItems: "center", marginTop: 50 }}>
        <Button icon="logout" color="#E9E9E1" onPress={handleLogOut}>
          {" "}
          Log Out{" "}
        </Button>
      </View>

      {/* ****  ADD GROUP MODAL **** */}
      <Provider>
        <Portal>
          <Modal
            visible={showModal}
            onDismiss={hideAddModal}
            contentContainerStyle={containerStyle}
          >
            <View>

              <View style={{ alignItems: "center" }}>
                <Text style={styles.Text}>Create A New Group</Text>


                <TextInput
                  style={{ width: 300, marginTop: 20 }}
                  theme={{ colors: { primary: "#4B4B4B" } }}
                  autoComplete="off"
                  label="Group Name"
                  onChangeText={setGroupName}
                />
                <TextInput
                  style={{ width: 300, marginTop: 20 }}
                  theme={{ colors: { primary: "#4B4B4B" } }}
                  autoComplete="off"
                  label="Group Password"
                  secureTextEntry={true}
                  onChangeText={setGroupPassword}
                />


                <Button
                  style={{ marginTop: 20 }}
                  color="#505050"
                  mode="contained"
                  onPress={() => {
                    hideAddModal();
                    handleCreateGroup();
                    console.log("added");
                  }}
                >
                  Add Group
                </Button>
              </View>
            </View>
          </Modal>
        </Portal>
      </Provider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Bg: {
    backgroundColor: "#7FC8A9",
    flex: 1,
  },
  Text: {
    fontFamily: "RobotoSlab_400Regular",
    fontSize: 24,
    alignItems: "center",
    color: "#E9E9E1",
  },
});

export default ProfileScreen;
