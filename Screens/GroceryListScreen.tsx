import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { FC, useContext, useEffect, useState } from "react";
import {
  IconButton,
  List,
  Modal,
  Portal,
  Button,
  Provider,
  TextInput,
} from "react-native-paper";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Logo from "../assets/Logo.png";
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
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import UserContext from "../Context/UserContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GetGroceryListByUserId, GetUserInfoByUsername, UpdateItem } from "../Services/DataService";
import iAddItem from "../interfaces/ItemInterface";

type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  CreateAccount: undefined;
  Profile: undefined;
  Splash: undefined;
  GroceryList: undefined;
  Footer: undefined;
  CameraOpenerComp: undefined;
  CameraComp: undefined;
  CameraPreview: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, "GroceryList">;

const GroceryListScreen: FC<Props> = ({ navigation }) => {

  let {
    username,
    setUsername,
    storedUser,
    setStoredUser,
    userInfo,
    setUserInfo,
    userItems,
    setUserItems,
  } = useContext(UserContext);

  useEffect(() => {
    let token = AsyncStorage.getItem("Token");
    if (token == null) {
      navigation.navigate("Login");
    } else {
      if (username != null) {
        fetchData();
      }
    }
  }, []);

  const [userItemInGrocery, setUserItemInGrocery] = useState<any>([]);

  const fetchData = async () => {
    userInfo = await GetUserInfoByUsername(username);
    let userItemsInGroceryList = await GetGroceryListByUserId(userInfo.id);
    setUserItemInGrocery(userItemsInGroceryList);
  
   
  };

  const [itemIndex, setItemIndex] = useState<any>([]);
  const [productName, setProductName] = useState<string>("");
  const [dateOfExpiration, setDateOfExpiration] = useState<string | undefined>("");
  const [notificationDate, setNotificationDate] = useState<any>("");
  const [image, setImage] = useState<string>("");


  const [showShort, setShowSort] = useState(false);
  const [showAddItem, setShowAddItem] = useState(false);

  const showSortModal = () => setShowSort(true);
  const hideSortModal = () => setShowSort(false);
  const showAddItemModal = () => setShowAddItem(true);
  const hideAddItemModal = () => setShowAddItem(false);

  const containerStyle = { backgroundColor: "#2C443A", padding: 20 };

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


  const handleDeleteFromGroceryList = async (itemIndex : any) => {
    let updateItem: iAddItem = {
      Id: itemIndex.id,
      UserId: userInfo.id,
      GroupId: itemIndex.groupId,
      ProductName: productName,
      DateOfExpiration: dateOfExpiration,
      NotificationDate: notificationDate,
      Owner: username,
      ProductImage: image,
      isGroceryList: false,
      isDeleted: false,
    };
    await UpdateItem(updateItem);
    console.log("trigger")
    fetchData();
    // userInfo = await GetUserInfoByUsername(username);
    // setUserItemInGrocery(await GetGroceryListByUserId(userInfo.id));
  }

  return (
    <Provider>
      <SafeAreaView style={{ backgroundColor: "#7FC8A9", flex: 1 }}>
        <View style={{ backgroundColor: "#7FC8A9", flex: 1 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
            <View style={{ flex: 1 }}>
              <IconButton
                icon="sort-variant"
                color='#2C443A'
                size={45}
                onPress={showSortModal}
              />
            </View>

            <View style={{ alignItems: "center" }}>
              <Image
                source={Logo}
                style={[styles.LogoStyle]}
                accessibilityLabel="Expired Logo"
              />
            </View>

            <View style={{ flex: 1, alignItems: "flex-end" }}>
              <IconButton
                icon="plus-circle-outline"
                color='#2C443A'
                size={45}
                onPress={showAddItemModal}
              />
            </View>
          </View>


          <View style={{ marginTop: 50, backgroundColor: "#7FC8A9", flex: 1, alignItems: 'center' }}>
            {/* <View style={[styles.row, styles.bgBox]}>
        <Text>Instructions</Text>

        <Text>1. Select the plus icon in the top right corner </Text>
        <Text>
          2. Insert Product Name, Best Used by, Owner & when you would like to receive notifications. Click on Add button to add your item
        </Text>
        <Text>
          3. Now your product is successfully entered & if you'd like to add to
          your Grocery List select the icon on
        </Text>
      </View> */}

            {/* list according */}
            <View style={[{ marginRight: 30, marginLeft: 30, width: 350 }]}>
              <List.AccordionGroup>
                <List.Accordion
                  theme={{
                    colors: { background: "#2C443A", primary: "#87AF9E" },
                  }}
                  title="Grocery List Items"
                  titleStyle={{
                    color: "#E9E9E1",
                    fontFamily: "RobotoSlab_400Regular",
                    fontSize: 20
                  }}
                  id="1">
                  <ScrollView style={{ height: "75%" }}>
                    <View style={{ backgroundColor: "#87AF9E" }}>
                      {storedUser && storedUser != null ? (
                        userItemInGrocery.map((item: any, i: any) => {
                          return (
                            <List.Item
                              title={item.productName}
                              titleStyle={{
                                fontFamily: "RobotoSlab_400Regular",
                                color: "white",
                                fontSize: 20,
                              }}
                              style={styles.Pill}
                              onPress={() => console.log("Me eggs")}
                              right={props => <IconButton onPress={  ()  => {handleDeleteFromGroceryList(item)}} {...props} color="#AA4040" icon="trash-can-outline" />}

                            />
                          )
                        })
                      ) : (
                        <Text>Please add items for Grocery List to display</Text>
                      )
                      }
                    </View>
                  </ScrollView>
                </List.Accordion>

                {/* <List.Accordion
                theme={{
                  colors: { background: "#2C443A", primary: "#4B4B4B" },
                }}
                title="House Fridge"
                titleStyle={{
                  color: "#E9E9E1",
                  fontFamily: "RobotoSlab_400Regular",
                  fontSize: 20,
                }}
                id="2"
              >
                <View style={{ backgroundColor: "#87AF9E" }}>
                  <List.Item
                    title="eggs"
                    titleStyle={{fontFamily: "RobotoSlab_400Regular",
                    color: "white",
                    fontSize: 20, }}
                    style={styles.Pill}
                    onPress={() => console.log("Me eggs")}
                    right={props => <IconButton onPress={() => console.log("Delete")} {...props} color="#AA4040" icon="trash-can-outline" /> }
                  />
                  <List.Item
                    title="Steak"
                    titleStyle={{fontFamily: "RobotoSlab_400Regular",
                    color: "white",
                    fontSize: 20, }}
                    style={styles.Pill}
                    onPress={() => console.log("Me Steak")}
                    right={props => <IconButton onPress={() => console.log("Delete")} {...props} color="#AA4040" icon="trash-can-outline" /> }
                  />
                  <List.Item
                    title="Milk"
                    titleStyle={{fontFamily: "RobotoSlab_400Regular",
                    color: "white",
                    fontSize: 20, }}
                    style={styles.Pill}
                    onPress={() => console.log("Me Milk")}
                    right={props => <IconButton onPress={() => console.log("Delete")} {...props} color="#AA4040" icon="trash-can-outline" /> }
                  />
                </View>
              </List.Accordion> */}
                {/* <List.Accordion
                theme={{
                  colors: { background: "#2C443A", primary: "#4B4B4B" },
                }}
                title="Work Fridge"
                titleStyle={{
                  color: "#E9E9E1",
                  fontFamily: "RobotoSlab_400Regular",
                  fontSize: 20,
                }}
                id="3"
              >
                <View style={{ backgroundColor: "#87AF9E" }}>
                  <List.Item
                    title="eggs"
                    titleStyle={{fontFamily: "RobotoSlab_400Regular",
                    color: "white",
                    fontSize: 20, }}
                    style={styles.Pill}
                    onPress={() => console.log("Me eggs")}
                    right={props => <IconButton onPress={() => console.log("Delete")} {...props} color="#AA4040" icon="trash-can-outline" /> }
                  />
                  <List.Item
                    title="Steak"
                    titleStyle={{fontFamily: "RobotoSlab_400Regular",
                    color: "white",
                    fontSize: 20, }}
                    style={styles.Pill}
                    onPress={() => console.log("Me Steak")}
                    right={props => <IconButton onPress={() => console.log("Delete")} {...props} color="#AA4040" icon="trash-can-outline" /> }
                  />
                  <List.Item
                    title="Milk"
                    titleStyle={{color:'white'}}
                    style={styles.Pill}
                    onPress={() => console.log("Me Milk")}
                    right={props => <IconButton onPress={() => console.log("Delete")} {...props} color="#AA4040" icon="trash-can-outline" /> }
                  />
                </View>
              </List.Accordion> */}
              </List.AccordionGroup>
            </View>
          </View>
        </View>

        {/* **** VIEW SORT MODAL **** */}

        <Portal>
          <Modal
            visible={showShort}
            onDismiss={hideSortModal}
            contentContainerStyle={containerStyle}
          >
            <View>
              <View style={{ alignItems: "center" }}>
                <Text style={styles.Text}>Sort Grocery Items</Text>
              </View>
              <Text style={styles.SortText}> Item Name</Text>
              <Button
                style={{ marginTop: 20 }}
                color="#505050"
                mode="contained"
                onPress={hideSortModal}
              >
                Save
              </Button>

            </View>
          </Modal>
        </Portal>


        {/* **** VIEW ADD ITEM MODAL **** */}

        <Portal>
          <Modal
            visible={showAddItem}
            onDismiss={hideAddItemModal}
            contentContainerStyle={containerStyle}
          >
            <View>
              <View style={{ alignItems: "center" }}>
                <Text style={styles.Text}>Add Item To Grocery List</Text>
                <TextInput
                  style={{ width: 300, marginTop: 20 }}
                  theme={{ colors: { primary: "#4B4B4B" } }}
                  autoComplete="off"
                  label="Enter Item Name"
                />
                <Button
                  style={{ marginTop: 20 }}
                  color="#505050"
                  mode="contained"
                  onPress={hideAddItemModal}
                >
                  Add
                </Button>
              </View>
            </View>
          </Modal>
        </Portal>

      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    //Flex will determine how much of the screen to fill the container. also based on the number of container
    flex: 1,
    alignItems: "center", //This gets centered in the secondary axis
    justifyContent: "center", //This get center along the main axis
    backgroundColor: "#4B4B4B",
  },
  row: {
    flexDirection: "column",
    alignItems: "center",
  },
  bgBox: {
    backgroundColor: "#9A9B9A",
    width: 350,
    marginTop: 100,
    marginBottom: 650,
    flex: 1,
    padding: 10,
  },
  testing: {
    marginLeft: 100,
    marginRight: 100,
  },
  Pill: {
    padding: 8,
    backgroundColor: "#2C443A",
    borderRadius: 25,
    marginTop: 5,
    marginLeft: 20,
    marginBottom: 10,
    width: 300,
  },
  LogoStyle: {
    height: 101,
    width: 105,
  },
  Text: {
    fontFamily: "RobotoSlab_400Regular",
    fontSize: 24,
    alignItems: "center",
    color: "#E9E9E1",
  },
  SortText: {
    fontFamily: "RobotoSlab_400Regular",
    fontSize: 18,
    alignItems: "center",
    color: "#E9E9E1",
  },
});

export default GroceryListScreen;
