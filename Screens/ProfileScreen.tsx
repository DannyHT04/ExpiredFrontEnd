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
  GetUserInfoByUsername,
  UpdateUsername,
  GetUsersFromGroup,
  GetGroupById,
} from "../Services/DataService";

import ProfileNameComponent from "../Components/ProfileNameComponent";

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
    usersGroup,
    setUsersGroup,
  } = useContext(UserContext);
  const [groupArray, setGroupArray] = useState([]);

  useEffect(() => {
    let token = AsyncStorage.getItem("Token");
    if (token == null) {
      navigation.navigate("Login");
    } else {
      if (username != null) {
        // test();
        // const fetchData = async () => {};
        // fetchData().catch(console.error);
      }
    }
  }, []);
  const test = async () => {
    let userInfoData = await GetUserInfoByUsername(username);
    setUserInfo(userInfoData);
    let groupData = userInfo.groupId.split(",");
    setGroupArray(groupData);
  };

  // const [names, setNames] = useState("");
  // // const getNames = async (groupID: string) => {
  // const getNames = async (groupID: string) => {
  //   let groupInfo = await GetGroupById(parseInt(groupID));
  //   console.log(groupInfo);
  //   setNames(groupInfo.groupName)
  // };

  // const handleUpdateUsername = async () => {
  //   await UpdateUsername(userInfo.id, newUsername);
  //   userInfo = await GetUserInfoByUsername(newUsername);
  //   setUserInfo(userInfo);
  // };

  const [visible, setVisible] = useState(false);
  const [showGroup, setShowGroup] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  // const showModal = () => setVisible(true);
  // const hideModal = () => setVisible(false);
  const hideGroupModal = () => setShowGroup(false);
  const showGroupModal = () => setShowGroup(true);
  const showConfirmModal = () => setShowConfirm(true);
  const hideConfirmModal = () => setShowConfirm(false);
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
    
      <View style={{ alignItems: "flex-start", paddingTop: 0 }}>
        <Button icon="account-multiple-plus" color="#E9E9E1">
          {" "}
          Groups{" "}
        </Button>
      </View>
      {/* <View style={{ alignItems: "center" }}>
        <View style={styles.Pill}>
          <Text style={styles.Text} onPress={showGroupModal}>
            Group 1
          </Text>
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        <View style={styles.Pill}>
          <Text style={styles.Text}>Group 2</Text>
        </View>
      </View> */}
     

      <View style={{ alignItems: "center", marginTop: 50 }}>
        <Button icon="logout" color="#E9E9E1" onPress={handleLogOut}>
          {" "}
          Log Out{" "}
        </Button>
      </View>

      {/* ****EDIT NAME MODAL****
      <Provider>
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}
          >
            <View>
              <View style={{ alignItems: "center" }}>
                <Text style={styles.Text}>Edit Name</Text>
                <TextInput
                  style={{ width: 300, marginTop: 20 }}
                  theme={{ colors: { primary: "#4B4B4B" } }}
                  autoComplete="off"
                  label="Type New Name"
                  value={newUsername}
                  onChangeText={setNewUsername}
                />
                <Button
                  style={{ marginTop: 20 }}
                  color="#505050"
                  mode="contained"
                  onPress={() => {
                    hideModal();
                    handleUpdateUsername();
                  }}
                >
                  Save
                </Button>
              </View>
            </View>
          </Modal>
        </Portal>
      </Provider> */}

      {/* ****VIEW GROUP MODAL**** */}

      {groupArray && groupArray != null ? (
        // groupArray.map((groupID: string, index: any) => {
        groupArray.map( (groupID, index) => {
          // console.log(Object.values(groupInfo));
          // let name = await groupInfo.groupName;
          // getNames(groupID);
          // console.log(groupInfo);
          //   let usersInGroup = GetUsersFromGroup(groupArray[index]);
          return (
            <>
              <View style={{ alignItems: "center" }}>
                <View style={styles.Pill}>
                  <Text style={styles.Text} onPress={showGroupModal}>
                    
                  </Text>
                </View>
              </View>
            </>
          );
        })
      ) : (
        <Text>Is Empty</Text>
      )}

      <Provider>
        <Portal>
          <Modal
            visible={showGroup}
            onDismiss={hideGroupModal}
            contentContainerStyle={containerStyle}
          >
            <View>
              <View style={{ alignItems: "center" }}>
                <Text style={styles.Text}>Group Members</Text>

                <View style={styles.GroupMembersText}>
                  <Text style={styles.Text}>Bobby</Text>
                </View>
                <View style={styles.GroupMembersText}>
                  <Text style={styles.Text}>Ryan</Text>
                </View>
                <View style={styles.GroupMembersText}>
                  <Text style={styles.Text}>Chris</Text>
                </View>

                <Button
                  style={{ marginTop: 20 }}
                  color="#A15567"
                  mode="contained"
                  onPress={showConfirmModal}
                >
                  Leave Group
                </Button>
              </View>
            </View>
          </Modal>
        </Portal>
      </Provider>

      {/* **** LEAVE GROUP MODAL **** */}
      <Provider>
        <Portal>
          <Modal visible={showConfirm} contentContainerStyle={containerStyle}>
            <View>
              <View style={{ alignItems: "center" }}>
                <Text style={styles.Text}>Are you sure you want to leave?</Text>
                <Button
                  style={{ marginTop: 20, width: 140 }}
                  color="#A15567"
                  mode="contained"
                  onPress={hideConfirmModal}
                >
                  Leave Group
                </Button>
                <Button
                  style={{ marginTop: 5, width: 140 }}
                  color="#55A15D"
                  mode="contained"
                  onPress={hideConfirmModal}
                >
                  Don't Leave
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
  Pill: {
    padding: 15,
    backgroundColor: "#2C443A",
    borderRadius: 25,
    // marginLeft: 30,
    marginBottom: 10,
    width: 350,
    justifyContent: "center",
  },
  GroupMembersText: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#87AF9E",
    // borderRadius: 25,
    // marginLeft: 30,
    // marginBottom: 10,
    width: 300,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProfileScreen;
