import { Image, StyleSheet, Text, View } from "react-native";
import { FC } from "react";
import { IconButton, List, Title } from "react-native-paper";
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
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { setStatusBarNetworkActivityIndicatorVisible } from "expo-status-bar";

const GroceryListScreen: FC = () => {
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
    <View style={[styles.Container]}>
      <View style={{flexDirection:'row', justifyContent: "space-evenly", marginTop:15 }}>
        <View style={{ flex: 1 }}>
          <IconButton
            icon="sort-variant"
            // color={Colors.red500}
            size={45}
            onPress={() => console.log("Pressed")}
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <Image
            source={Logo}
            style={styles.SplashLogo}
            accessibilityLabel="Expired Logo"
          />
        </View>

        <View style={{flex:1, alignItems: "flex-end"}}>
          <IconButton
            icon="plus-circle-outline"
            // color={Colors.red500}
            size={45}
            onPress={() => console.log("Pressed")}
          />
        </View>
      </View>

      <View style={{alignItems:'center', marginTop:20}}>
        <Text style={[styles.Font, styles.FontSize]}>Grocery List</Text>
      </View>


      <View style={{ marginTop: 50, backgroundColor: "#4B4B4B", flex: 1 }}>
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
              theme={{ colors: { background: "#9A9B9A", primary: "#4B4B4B" } }}
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
                  right={props => <IconButton  onPress={() => console.log("Delete")} {...props} color="#AA4040" icon="trash-can-outline" />}
                />
                <View></View>
                <List.Item
                  title="Steak"
                  style={styles.Pill}
                  onPress={() => console.log("Me Steak")}
                  right={props => <IconButton  onPress={() => console.log("Delete")} {...props} color="#AA4040" icon="trash-can-outline" />}
                />
                <List.Item
                  title="Milk"
                  style={styles.Pill}
                  onPress={() => console.log("Me Milk")}
                  right={props => <IconButton  onPress={() => console.log("Delete")} {...props} color="#AA4040" icon="trash-can-outline" />}
                />
              </View>
            </List.Accordion>
            <List.Accordion
              theme={{ colors: { background: "#9A9B9A", primary: "#4B4B4B" } }}
              title="House Fridge "
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
                  right={props => <IconButton  onPress={() => console.log("Delete")} {...props} color="#AA4040" icon="trash-can-outline" />}
                />
                <List.Item
                  title="Steak"
                  style={styles.Pill}
                  onPress={() => console.log("Me Steak")}
                  right={props => <IconButton  onPress={() => console.log("Delete")} {...props} color="#AA4040" icon="trash-can-outline" />}
                />
                <List.Item
                  title="Milk"
                  style={styles.Pill}
                  onPress={() => console.log("Me Milk")}
                  right={props => <IconButton  onPress={() => console.log("Delete")} {...props} color="#AA4040" icon="trash-can-outline" />}
                />
              </View>
            </List.Accordion>
            <List.Accordion
              theme={{ colors: { background: "#9A9B9A", primary: "#4B4B4B" } }}
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
                  right={props => <IconButton  onPress={() => console.log("Delete")} {...props} color="#AA4040" icon="trash-can-outline" />}
                />
                <List.Item
                  title="Steak"
                  style={styles.Pill}
                  onPress={() => console.log("Me Steak")}
                  right={props => <IconButton  onPress={() => console.log("Delete")} {...props} color="#AA4040" icon="trash-can-outline" />}
                />
                <List.Item
                  title="Milk"
                  style={styles.Pill}
                  onPress={() => console.log("Me Milk")}
                  right={props => <IconButton  onPress={() => console.log("Delete")} {...props} color="#AA4040" icon="trash-can-outline" />}
                />
              </View>
            </List.Accordion>
          </List.AccordionGroup>
        </View>
      </View>








    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#4B4B4B",
    flex: 1,
  },
  SplashLogo: {
    height: 101,
    width: 104,
    marginTop: 20,
  },
  Font:{
    fontFamily:"RobotoSlab_400Regular"
  },
  FontSize:{
    fontSize:30
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
});
export default GroceryListScreen;
