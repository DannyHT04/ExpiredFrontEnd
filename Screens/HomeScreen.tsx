import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import { FC, useState, useContext, useEffect, useCallback } from "react";
import {
  IconButton,
  List,
  Modal,
  Portal,
  Button,
  Provider,
  TextInput,
  RadioButton,
  DefaultTheme,
  Card,
  Paragraph,
  Title,
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
import { DatePickerInput } from "react-native-paper-dates";
import DropDown from "react-native-paper-dropdown";
import UserContext from "../Context/UserContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  GetUserInfoByUsername,
  GetAllUserItems,
  AddItem,
  DeleteItem,
  UpdateItem,
  GetGroupsByUserId,
  GetAllGroupItems,
} from "../Services/DataService";
import iAddItem from "../interfaces/ItemInterface";
import { Select, CheckIcon, ScrollView } from "native-base";
import { NativeBaseProvider } from "native-base";

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

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const HomeScreen: FC<Props> = ({ navigation }) => {
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

  const [userGroups, setUserGroups] = useState([]);

  useEffect(() => {
    let token = AsyncStorage.getItem("Token");
    if (token == null) {
      navigation.navigate("Login");
    } else {
      // console.log(username);
      if (username != null) {
        fetchData();
      }
    }
  }, []);
  const [allPeopleItemInGroups, setAllPeopleItemInGroups]= useState<any>([]);
  
  const fetchData = async () => {
    // console.log(username);
    userInfo = await GetUserInfoByUsername(username);
    userItems = await GetAllUserItems(userInfo.id);
    let test =await GetGroupsByUserId(userInfo.id);
    setUserGroups(test);
    setStoredUser(userItems);
    setUserInfo(userInfo);
    // let test1 = await GetAllGroupItems(1)
    // console.log(test1)
    for(let i = 0; i< test.length; i++){
      
    
      let itemsGroupInfo = await GetAllGroupItems(test[i].id);
      
     
        allPeopleItemInGroups.push(itemsGroupInfo);
       
        // setAllPeopleItemInGroups(allPeopleItemInGroups);
     
      
    }
    
  };

  const [showShort, setShowSort] = useState<boolean>(false);
  const [showAddItem, setShowAddItem] = useState<boolean>(false);
  const [showItem, setShowItem] = useState<boolean>(false);
  const [itemIndex, setItemIndex] = useState<any>([]);
  const [productName, setProductName] = useState<string>("");
  const [dateOfExpiration, setDateOfExpiration] = useState<string | undefined>(
    ""
  );
  const [image, setImage] = useState<string>("");
  const [isGroceryList, setIsGroceryList] = useState<boolean>(false);
  const [isDeleted, setIsDeleted] = useState<boolean>(false);
  const [itemId, setItemId] = useState<number>(0);
  const [notificationDate, setNotificationDate] = useState<any>("");
  const [owner, setOwner] = useState<string>("");

  //modal
  const [value, setValue] = useState("first");

  const showSortModal = () => setShowSort(true);
  const hideSortModal = () => setShowSort(false);
  const showAddItemModal = () => setShowAddItem(true);
  const hideAddItemModal = () => setShowAddItem(false);
  const showItemModal = () => setShowItem(true);
  const hideItemModal = () => setShowItem(false);

  const [inputDate, setInputDate] = useState<Date | undefined>(undefined);
  const [editInputDate, setEditInputDate] = useState<Date | undefined>(
    undefined
  );
  const [remindDate, setRemindDate] = useState<Date | undefined>(undefined);
  const [editRemindDate, setEditRemindDate] = useState<Date | undefined>(
    undefined
  );

  const containerStyle = { backgroundColor: "#2C443A", padding: 20 };

  const [showDropDown, setShowDropDown] = useState(false);
  const [group, setGroup] = useState("");


  const [service, setService] = useState("");


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

  //used to change full theme color
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: "#2C443A",
    },
  };

  const handleAddItem = async () => {
    let newDate = inputDate?.toLocaleDateString().toString();
    let newItem: iAddItem = {
      Id: 0,
      UserId: userInfo.id,
      GroupId: parseInt(service),
      ProductName: productName,
      DateOfExpiration: newDate,
      NotificationDate: notificationDate,
      Owner: username,
      ProductImage: image,
      isGroceryList: false,
      isDeleted: false,
    };

    await AddItem(newItem);
    userItems = await GetAllUserItems(userInfo.id);
    await setStoredUser(userItems);
  };

  const handleDeleteItem = async () => {
    console.log("success");
    await DeleteItem(itemIndex.id);
    userItems = await GetAllUserItems(userInfo.id);
    await setStoredUser(userItems);
  };

  const handleUpdateItem = async () => {
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
    console.log("updated item");
    await UpdateItem(updateItem);
    userItems = await GetAllUserItems(userInfo.id);
    await setStoredUser(userItems);
  };

  const handleDateOfExpiration = async () => {
    let newDate = editInputDate?.toLocaleDateString().toString();
    let updateItem: iAddItem = {
      Id: itemIndex.id,
      UserId: userInfo.id,
      GroupId: itemIndex.groupId,
      ProductName: productName,
      DateOfExpiration: newDate,
      NotificationDate: notificationDate,
      Owner: username,
      ProductImage: image,
      isGroceryList: false,
      isDeleted: false,
    };
    await UpdateItem(updateItem);
  };

  return (
    <>
      <NativeBaseProvider>
        <Provider theme={theme}>
          <SafeAreaView style={{ backgroundColor: "#7FC8A9", flex: 1 }}>
            <View style={{ backgroundColor: "#7FC8A9", flex: 1 }}>
              <View
                style={{ flexDirection: "row", justifyContent: "space-evenly" }}
              >
                <View style={{ flex: 1 }}>
                  <IconButton
                    icon="sort-variant"
                    color="#2C443A"
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
                    color="#2C443A"
                    size={45}
                    onPress={showAddItemModal}
                  />
                </View>
              </View>

              <View
                style={{
                  marginTop: 50,
                  backgroundColor: "#7FC8A9",
                  flex: 1,
                  alignItems: "center",
                }}>
                <ScrollView style={{ width: "100%", height: "100%" }}>
                  <View style={[styles.row]}>
                    {/* <Text>Instructions</Text>

              <Text>1. Select the plus icon in the top right corner </Text>
              <Text>
                2. Insert Product Name, Best Used by, Owner & when you would
                like to receive notifications. Click on Add button to add your
                item
              </Text>
              <Text>
                3. Now your product is successfully entered & if you'd like to
                add to your Grocery List select the icon on
              </Text> */}

                    {/* <Card style={{width:350, backgroundColor:'#2C443A'}}>
                <Card.Title
                  title="Instructions"
                  titleStyle={{color:"#E9E9E1"}}
                  // left={LeftContent}
                />
                <Card.Content>
                  <Text style={{color:"#E9E9E1"}}>1. Select the plus icon in the top right corner</Text>
                  <Text style={{color:"#E9E9E1"}}>2. Insert Product Name, Best Used by, Owner & when you would
                like to receive notifications. Click on Add button to add your
                item</Text>
                  <Text style={{color:"#E9E9E1"}}>3. Now your product is successfully entered & if you'd like to
                add to your Grocery List select the icon on</Text>
                </Card.Content>
              </Card> */}
                  </View>

                  {/* list according */}
                  <View style={[{ marginRight: 30, marginLeft: 30, width: 350 }]}>
                    <List.AccordionGroup>
                      <List.Accordion
                        theme={{
                          colors: { background: "#2C443A", primary: "#4B4B4B" },
                        }}
                        title="Personal Items"
                        titleStyle={{
                          color: "#E9E9E1",
                          fontFamily: "RobotoSlab_400Regular",
                          fontSize: 20,
                        }}
                        id="1"
                      >
                        <View style={{ backgroundColor: "#87AF9E" }}>
                          {storedUser && storedUser != null ? (
                            storedUser.map((item: any, i: any) => {
                              return (
                                <>
                                  <View style={styles.Pill}>
                                    <Pressable
                                      key={i}
                                      onPress={() => {
                                        setItemIndex(item);
                                        showItemModal();
                                        console.log(allPeopleItemInGroups)
                                      }}
                                    >
                                      <View style={[{ flexDirection: "row" }]}>
                                        <Image
                                          source={Logo}
                                          style={{ width: 75, height: 72 }}
                                        />
                                        <View
                                          style={{
                                            justifyContent: "space-evenly",
                                            marginLeft: 20,
                                          }}
                                        >
                                          <Text style={styles.pillText}>
                                            {item.productName}
                                          </Text>
                                          <Text style={styles.pillText2}>
                                            Expiration: {item.dateOfExpiration}
                                          </Text>
                                        </View>
                                      </View>
                                    </Pressable>
                                  </View>
                                </>
                              );
                            })
                          ) : (
                            <Text>Is Empty</Text>
                          )}
                        </View>
                      </List.Accordion>
                      {userGroups && userGroups != null
                        ? userGroups.map((group: any, i: any) => {
                          return (
                            <List.Accordion
                              theme={{
                                colors: {
                                  background: "#2C443A",
                                  primary: "#4B4B4B",
                                },
                              }}
                              title={group.groupName}
                              titleStyle={{
                                color: "#E9E9E1",
                                fontFamily: "RobotoSlab_400Regular",
                                fontSize: 20,
                              }}
                              id={i + 1}
                            >
                              <View style={{ backgroundColor: "#87AF9E" }}>
                                {storedUser && storedUser != null ? (
                                  storedUser.map((item: any, i: any) => {
                                    if (item.groupId == group.id) {
                                      return (
                                        <>
                                          <View style={styles.Pill}>
                                            <Pressable
                                              key={i}
                                              onPress={() => {
                                                setItemIndex(item);
                                                showItemModal();
                                                // console.log(userGroups);
                                                console.log(allPeopleItemInGroups[0][0].groupId)
                                              }}
                                            >
                                              <View
                                                style={[{ flexDirection: "row" }]}
                                              >
                                                <Image
                                                  source={Logo}
                                                  style={{ width: 75, height: 72 }}
                                                />
                                                <View
                                                  style={{
                                                    justifyContent: "space-evenly",
                                                    marginLeft: 20,
                                                  }}
                                                >
                                                  <Text style={styles.pillText}>
                                                    {item.productName}
                                                  </Text>
                                                  <Text style={styles.pillText2}>
                                                    Expiration:{" "}
                                                    {item.dateOfExpiration}
                                                  </Text>
                                                </View>
                                              </View>
                                            </Pressable>
                                          </View>
                                        </>
                                      )
                                    }

                                    ;
                                  })
                                ) : (
                                  <Text>Is Empty</Text>
                                )}
                              </View>
                            </List.Accordion>
                          );
                        })
                        : null}

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
                        titleStyle={{ color: "white" }}
                        style={styles.Pill}
                        onPress={() => console.log("Me eggs")}
                      />
                      <List.Item
                        title="Steak"
                        titleStyle={{ color: "white" }}
                        style={styles.Pill}
                        onPress={() => console.log("Me Steak")}
                      />
                      <List.Item
                        title="Milk"
                        titleStyle={{ color: "white" }}
                        style={styles.Pill}
                        onPress={() => console.log("Me Milk")}
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
                        titleStyle={{ color: "white" }}
                        style={styles.Pill}
                        onPress={() => console.log("Me eggs")}
                      />
                      <List.Item
                        title="Steak"
                        titleStyle={{ color: "white" }}
                        style={styles.Pill}
                        onPress={() => console.log("Me Steak")}
                      />
                      <List.Item
                        title="Milk"
                        titleStyle={{ color: "white" }}
                        style={styles.Pill}
                        onPress={() => console.log("Me Milk")}
                      />
                    </View>
                  </List.Accordion> */}
                    </List.AccordionGroup>
                  </View>
                </ScrollView>
              </View>
            </View>

            <Portal>
              <Modal
                visible={showItem}
                onDismiss={hideItemModal}
                contentContainerStyle={containerStyle}
              >
                <View>
                  <View style={{ alignItems: "center" }}>
                    <Text style={styles.Text}>Edit Item</Text>
                    <Text style={styles.Text}>{itemIndex.productName}</Text>
                    <TextInput
                      style={{ width: 300, marginTop: 20 }}
                      theme={{ colors: { primary: "#4B4B4B" } }}
                      autoComplete="off"
                      label="Product Name"
                      value={itemIndex.productName}
                      onChangeText={setProductName}
                    />

                    <View style={{ width: 300, marginTop: 20 }}>
                      <DatePickerInput
                        locale="en"
                        autoComplete="off"
                        label="Expiration Date"
                        value={editInputDate}
                        onChange={(d) => {
                          setEditInputDate(d);
                        }}
                        inputMode="start"
                      />
                    </View>

                    <TextInput
                      style={{ width: 300 }}
                      theme={{ colors: { primary: "#4B4B4B" } }}
                      autoComplete="off"
                      label="Owner"
                      value={itemIndex.owner}
                      onChangeText={setOwner}
                    />

                    <View style={{ width: 300, marginTop: 20 }}>
                      <DatePickerInput
                        locale="en"
                        autoComplete="off"
                        label="Change Notification Date"
                        value={remindDate}
                        onChange={(d) => setRemindDate(d)}
                        inputMode="start"
                      />
                    </View>
                    <Button
                      style={{ marginTop: 20 }}
                      color="#505050"
                      mode="contained"
                      onPress={hideItemModal}
                    >
                      Add to Grocery List
                    </Button>

                    <Button
                      style={{ marginTop: 20 }}
                      color="#505050"
                      mode="contained"
                      onPress={() => {
                        hideItemModal();
                        handleUpdateItem();
                        handleDateOfExpiration();
                      }}
                    >
                      Save
                    </Button>
                    <Button
                      style={{ marginTop: 20 }}
                      color="red"
                      mode="contained"
                      onPress={() => {
                        hideItemModal();
                        handleDeleteItem();
                      }}
                    >
                      Delete
                    </Button>
                  </View>
                </View>
              </Modal>
            </Portal>
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
                  <RadioButton.Group
                    onValueChange={(newValue) => setValue(newValue)}
                    value={value}
                  >
                    <RadioButton.Item label="A-Z" value="first" color="#E9E9E1" />
                    <RadioButton.Item
                      label="Z-A"
                      value="second"
                      color="#E9E9E1"
                    />
                    <Text style={styles.SortText}>Best By Date</Text>
                    <RadioButton.Item
                      label="Closest to Farthest"
                      value="third"
                      color="#E9E9E1"
                    />
                    <RadioButton.Item
                      label="Farthest to Closest"
                      value="fourth"
                      color="#E9E9E1"
                    />
                  </RadioButton.Group>
                  <View style={{ alignItems: "center" }}>
                    <Button
                      style={{ marginTop: 20 }}
                      color="#505050"
                      mode="contained"
                      onPress={hideSortModal}
                    >
                      Save
                    </Button>
                  </View>
                </View>
              </Modal>
            </Portal>

            {/* ****  ADD ITEM MODAL **** */}

            <Portal>
              <Modal
                visible={showAddItem}
                onDismiss={hideAddItemModal}
                contentContainerStyle={containerStyle}
              >
                <View>
                  <View style={{ alignItems: "center" }}>
                    <Text style={styles.Text}>Add Item</Text>

                    {/* camera */}
                    <View>
                      <Button
                        icon="camera"
                        mode="contained"
                        onPress={() => navigation.navigate("CameraComp")}
                      >
                        Add Picture
                      </Button>
                    </View>

                    <TextInput
                      style={{ width: 300, marginTop: 20 }}
                      theme={{ colors: { primary: "#4B4B4B" } }}
                      autoComplete="off"
                      label="Product Name"
                      onChangeText={setProductName}
                    />

                    <View style={{ width: 300, marginTop: 20 }}>
                      <DatePickerInput
                        locale="en"
                        autoComplete="off"
                        label="Expiration Date"
                        value={inputDate}
                        onChange={(d) => {
                          setInputDate(d);
                          // console.log(inputDate)
                          // handleDateOfExpiration()
                        }}
                        inputMode="start"
                      />
                    </View>

                    <View style={{ width: 300 }}>
                      <DatePickerInput
                        locale="en"
                        autoComplete="off"
                        label="Set Notification"
                        value={remindDate}
                        onChange={(d) => setRemindDate(d)}
                        inputMode="start"
                      />
                    </View>
                    <View style={{ width: 300 }}>
                      <Select selectedValue={service} minWidth="200" accessibilityLabel="Select Group" placeholder="Select Group" _selectedItem={{
                        bg: "teal.600",
                        endIcon: <CheckIcon size="5" />
                      }} mt={1} onValueChange={itemValue => setService(itemValue)}>
                        {userGroups && userGroups != null ? (
                          userGroups.map((group: any, i: any) => {
                            return (
                              <Select.Item label={group.groupName} value={group.id} />

                            );
                          })
                        ) : (
                          <Text>No Groups Exist to Add Item</Text>
                        )}


                      </Select>
                    </View>

                    <Button
                      style={{ marginTop: 20 }}
                      color="#505050"
                      mode="contained"
                      onPress={() => {
                        hideAddItemModal();
                        handleAddItem();
                        console.log("added");
                      }}
                    >
                      Add
                    </Button>
                  </View>
                </View>
              </Modal>
            </Portal>
          </SafeAreaView>
        </Provider>
      </NativeBaseProvider>
    </>
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
  font: {
    fontFamily: "RobotoSlab_400Regular",
  },
  pillText: {
    fontFamily: "RobotoSlab_400Regular",
    color: "white",
    fontSize: 20,
  },
  pillText2: {
    fontFamily: "RobotoSlab_400Regular",
    color: "white",
    fontSize: 18,
  },
});

export default HomeScreen;
