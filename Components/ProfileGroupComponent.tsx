import { View, Text, StyleSheet } from "react-native";
import { FC, useState, useContext, useEffect } from "react";
import { Modal, Portal, Button, Provider, Card } from "react-native-paper";
import UserContext from "../Context/UserContext";
import {
  GetUserInfoByUsername,
  GetUsersFromGroup,
  GetGroupById,
  DeleteAGroupMember,
  GetGroupsByUserId,
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
    setgroupArrayId,
    groupInfoForModal,
    setGroupInfoForModal
  } = useContext(UserContext);

  const [groupArray, setGroupArray] = useState([]);
  const hideGroupModal = () => setShowGroup(false);
  const showGroupModal = () => setShowGroup(true);
  const showConfirmModal = () => setShowConfirm(true);
  const hideConfirmModal = () => setShowConfirm(false);
  const [showGroup, setShowGroup] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [usernameArray, setUserNameArray] = useState([]);
  const [DeleteGroupId, setDeleteGroupId] = useState<number>(0);

  const test = async () => {
    let userInfoData = await GetUserInfoByUsername(username);
    setUserInfo(userInfoData);
    // let groupData = userInfoData.groupId.split(",");
    // setgroupArrayId(groupData);
    let groupInfoArray = await GetGroupsByUserId(userInfoData.id)
    setgroupArrayId(groupInfoArray)

  };

  const handleDelete = async () => {
    console.log(DeleteGroupId, username, userInfo.id)
    DeleteAGroupMember(DeleteGroupId, username, userInfo.id.toString());
    test();
  }
  const containerStyle = { backgroundColor: "#2C443A", padding: 20 };

  return (
    <>
      <View style={{ alignItems: "flex-start", paddingTop: 0 }}>
        <Button icon="account-multiple-plus" color="#2C443A">
          {" "}
          Groups{" "}
        </Button>
      </View>
      {
        groupArrayId == "" ? (
          <View style={[styles.row]}>
            <Card style={{ width: 350, backgroundColor: '#2C443A', marginBottom: 30 }}>
              <Card.Title
                title="Create Group Instructions"
                titleStyle={{ color: "#E9E9E1", fontFamily: "RobotoSlab_400Regular" }}
              // left={LeftContent}
              />
              <Card.Content>
                <Text style={{ color: "#E9E9E1", marginBottom: 10, fontFamily: "RobotoSlab_400Regular" }}>1. Select the plus icon in the top right corner</Text>
                <Text style={{ color: "#E9E9E1", marginBottom: 10, fontFamily: "RobotoSlab_400Regular" }}>2. Insert Group Name & Group Password</Text>
                <Text style={{ color: "#E9E9E1", marginBottom: 10, fontFamily: "RobotoSlab_400Regular" }}>3. Now your group is successfully added & if you'd like to
                  view the group members just press on the group name</Text>
                <Text style={{ color: "#E9E9E1", marginBottom: 10, fontFamily: "RobotoSlab_400Regular" }}>4. If you want to share this group with others just give them the Group Name & Password</Text>
              </Card.Content>
            </Card>
          </View>
        ) : (
          // {groupArrayId && groupArrayId != null ? (
          
            groupArrayId.map((group: any, index: any) => {
              return (
                <>
                  <View style={{ alignItems: "center" }}>
                    <View style={styles.Pill}>
                      <Text style={styles.Text} onPress={() => {
                        showGroupModal();
                        setUserNameArray(group.userNameInGroup.split(","))
                        setDeleteGroupId(group.id)
                      }}>
                        {group.groupName}
                      </Text>
                    </View>
                  </View>
                </>
              );
            })
            // ) : (
            //   <Text>Is Empty</Text>
            // )}
        )
      }


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
                {
                  usernameArray && usernameArray != null ? (
                    usernameArray.map((name: any, index: any) => {
                      if (name != "") {
                        return (
                          <View style={styles.GroupMembersText}>
                            <Text style={styles.Text}>{name}</Text>
                          </View>
                        );
                      }



                    })
                  ) : (
                    <Text>Is Empty</Text>
                  )}

                {/* <View style={styles.GroupMembersText}>
                  <Text style={styles.Text}>Ryan</Text>
                </View>
                <View style={styles.GroupMembersText}>
                  <Text style={styles.Text}>Chris</Text>
                </View> */}

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
                  onPress={() => {
                    hideConfirmModal();
                    handleDelete();
                    hideGroupModal();
                  }}
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
  row: {
    flexDirection: "column",
    alignItems: "center",
  },
});

export default ProfileGroupComponent;
