import { Text, View, StyleSheet, Image } from "react-native";
import { FC, useState } from "react";
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
import { DatePickerInput } from 'react-native-paper-dates';
import DropDown from "react-native-paper-dropdown";

const HomeScreen: FC = () => {
  const [showShort, setShowSort] = useState(false);
  const [showAddItem, setShowAddItem] = useState(false);

  const [value, setValue] = useState("first");

  const showSortModal = () => setShowSort(true);
  const hideSortModal = () => setShowSort(false);
  const showAddItemModal = () => setShowAddItem(true);
  const hideAddItemModal = () => setShowAddItem(false);

  const [inputDate, setInputDate] = useState<Date | undefined>(undefined)
  const [remindDate, setRemindDate] = useState<Date | undefined>(undefined)

  const containerStyle = { backgroundColor: "#303030", padding: 20 };

  const [showDropDown, setShowDropDown] = useState(false);
  const [group, setGroup] = useState("");

  const groupList = [
    {
      label: "Group 1",
      value: "group1",
    },
    {
      label: "Group 2",
      value: "group2",
    },
    {
      label: "Group 3",
      value: "group3",
    },
  ];

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
      primary: '#4B4B4B',
    }
  };

  return (
    <Provider theme={theme}>
      <SafeAreaView style={{ backgroundColor: "#7FC8A9", flex: 1 }}>
        <View style={{ backgroundColor: "#7FC8A9", flex: 1 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
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

          <View
            style={{
              marginTop: 50,
              backgroundColor: "#7FC8A9",
              flex: 1,
              alignItems: "center",
            }}
          >
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

              <Card style={{width:350, backgroundColor:'#2C443A'}}>
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
              </Card>
            </View>

            {/* list according */}
            {/* <View style={[{ marginRight: 30, marginLeft: 30, width: 350 }]}>
              <List.AccordionGroup>
                <List.Accordion
                  theme={{
                    colors: { background: "#9A9B9A", primary: "#4B4B4B" },
                  }}
                  title="Personal Items"
                  titleStyle={{
                    color: "#E9E9E1",
                    fontFamily: "RobotoSlab_400Regular",
                  }}
                  id="1"
                >
                  <View style={{ backgroundColor: "#E9E9E1" }}>
                    <List.Item
                      title="eggs"
                      style={styles.Pill}
                      onPress={() => console.log("Me eggs")}
                    />
                    <List.Item
                      title="Steak"
                      style={styles.Pill}
                      onPress={() => console.log("Me Steak")}
                    />
                    <List.Item
                      title="Milk"
                      style={styles.Pill}
                      onPress={() => console.log("Me Milk")}
                    />
                  </View>
                </List.Accordion>
                <List.Accordion
                  theme={{
                    colors: { background: "#9A9B9A", primary: "#4B4B4B" },
                  }}
                  title="House Fridge"
                  titleStyle={{
                    color: "#E9E9E1",
                    fontFamily: "RobotoSlab_400Regular",
                  }}
                  id="2"
                >
                  <View style={{ backgroundColor: "#E9E9E1" }}>
                    <List.Item
                      title="eggs"
                      style={styles.Pill}
                      onPress={() => console.log("Me eggs")}
                    />
                    <List.Item
                      title="Steak"
                      style={styles.Pill}
                      onPress={() => console.log("Me Steak")}
                    />
                    <List.Item
                      title="Milk"
                      style={styles.Pill}
                      onPress={() => console.log("Me Milk")}
                    />
                  </View>
                </List.Accordion>
                <List.Accordion
                  theme={{
                    colors: { background: "#9A9B9A", primary: "#4B4B4B" },
                  }}
                  title="Work Fridge"
                  titleStyle={{
                    color: "#E9E9E1",
                    fontFamily: "RobotoSlab_400Regular",
                  }}
                  id="3"
                >
                  <View style={{ backgroundColor: "#E9E9E1" }}>
                    <List.Item
                      title="eggs"
                      style={styles.Pill}
                      onPress={() => console.log("Me eggs")}
                    />
                    <List.Item
                      title="Steak"
                      style={styles.Pill}
                      onPress={() => console.log("Me Steak")}
                    />
                    <List.Item
                      title="Milk"
                      style={styles.Pill}
                      onPress={() => console.log("Me Milk")}
                    />
                  </View>
                </List.Accordion>
              </List.AccordionGroup>
            </View> */}
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
              <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                <RadioButton.Item
                  label="A-Z"
                  value="first"
                  color="#E9E9E1"
                />
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

        {/* **** VIEW ADD ITEM MODAL **** */}

        <Portal>
          <Modal
            visible={showAddItem}
            onDismiss={hideAddItemModal}
            contentContainerStyle={containerStyle}
          >
            <View>
              <View style={{alignItems: 'center'}}>
                <Text style={styles.Text}>Add Item</Text>
                <TextInput
                  style={{ width: 300, marginTop: 20 }}
                  theme={{ colors: { primary: "#4B4B4B" } }}
                  autoComplete="off"
                  label="Product Name"
                />

                {/* <View style={{ width: 300, marginTop: 20 }}>
                  <DatePickerInput
                    locale="en"
                    autoComplete="off"
                    label="Expiration Date"
                    value={inputDate}
                    onChange={(d) => setInputDate(d)}
                    inputMode="start"
                  />
                </View> */}


                <TextInput
                  style={{ width: 300 }}
                  theme={{ colors: { primary: "#4B4B4B" } }}
                  autoComplete="off"
                  label="Owner"
                />

                <View style={{ width: 300, marginTop: 20 }}>
                  <DatePickerInput
                    locale="en"
                    autoComplete="off"
                    label="Set Notification"
                    value={remindDate}
                    onChange={(d) => setRemindDate(d)}
                    inputMode="start"
                  />
                </View>
                <View style={{ width: 300}}>
                <DropDown
                  label={"Select Group"}
                  mode={"outlined"}
                  visible={showDropDown}
                  showDropDown={() => setShowDropDown(true)}
                  onDismiss={() => setShowDropDown(false)}
                  value={group}
                  setValue={setGroup}
                  list={groupList}
                />
                </View>

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
    backgroundColor: "#9A9B9A",
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

export default HomeScreen;
