import { View, Text, StyleSheet } from "react-native";
import { FC, useState, useContext, useEffect } from "react";
import { Modal, Portal, Button, Provider, TextInput } from "react-native-paper";
import UserContext from "../Context/UserContext";
import {
    GetUserInfoByUsername,
    UpdateUsername,
  } from "../Services/DataService";
  import { useFonts } from "@expo-google-fonts/roboto-slab";
  import AppLoading from "expo-app-loading";


const ProfileNameComponent: FC = () => {

  let {
    username,
    setUsername,
    userInfo,
    setUserInfo,
    usersGroup,
    setUsersGroup,
  } = useContext(UserContext);

  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const [newUsername, setNewUsername] = useState("");
  const containerStyle = { backgroundColor: "#2C443A", padding: 20 };
  const handleUpdateUsername = async () => {
    await UpdateUsername(userInfo.id, newUsername);
    userInfo = await GetUserInfoByUsername(newUsername);
    setUserInfo(userInfo);
  };
  return (
    <>
      <View style={{ alignItems: "flex-start", paddingTop: 50 }}>
        <Button icon="account-edit" color="#2C443A">
          {" "}
          Name{" "}
        </Button>
      </View>
      <View style={{ alignItems: "center" }}>
        <View style={styles.Pill}>
          <Text style={styles.Text} onPress={showModal}>
            {userInfo.username}
          </Text>
        </View>
      </View>

      {/* ****EDIT NAME MODAL**** */}
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
      </Provider>
    </>
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
});

export default ProfileNameComponent;
