import { View, Text, StyleSheet } from "react-native";
import { FC, useState, useContext, useEffect } from "react";
import { Modal, Portal, Button, Provider, TextInput } from "react-native-paper";
import UserContext from "../Context/UserContext";
import {
  GetUserInfoByUsername,
  GetUsersFromGroup,
  GetGroupById,
} from "../Services/DataService";
import { useFonts } from "@expo-google-fonts/roboto-slab";
import AppLoading from "expo-app-loading";

const ProfileGroupComponent: FC = () => {
  let {
    username,
    setUsername,
    userInfo,
    setUserInfo,
    usersGroup,
    setUsersGroup,
    groupArrayId,
    setgroupArrayId
  } = useContext(UserContext);

  const [groupArray, setGroupArray] = useState([]);
  const hideGroupModal = () => setShowGroup(false);
  const showGroupModal = () => setShowGroup(true);
  const showConfirmModal = () => setShowConfirm(true);
  const hideConfirmModal = () => setShowConfirm(false);
  const [showGroup, setShowGroup] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);



  const containerStyle = { backgroundColor: "#2C443A", padding: 20 };

  return (
    <>
      <View style={{ alignItems: "flex-start", paddingTop: 0 }}>
        <Button icon="account-multiple-plus" color="#E9E9E1">
          {" "}
          Groups{" "}
        </Button>
      </View>
      {groupArrayId && groupArrayId != null ? (
        groupArrayId.map((groupID: any, index : any) => {
    
          return (
            <>
              <View style={{ alignItems: "center" }}>
                <View style={styles.Pill}>
                  <Text style={styles.Text} onPress={showGroupModal}>
                  {groupID}
                  </Text>
                </View>
              </View>
            </>
          );
        })
      ) : (
        <Text>Is Empty</Text>
      )}

      {/* ****VIEW GROUP MODAL**** */}

            
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

export default ProfileGroupComponent;
