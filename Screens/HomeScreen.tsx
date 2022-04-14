import { Text, View, StyleSheet } from "react-native";
import { FC } from "react";
import { List } from "react-native-paper";
import { Colors } from "react-native/Libraries/NewAppScreen";

const HomeScreen: FC = () => {
  return (
    //view container
    <View style={{ paddingTop: 200, backgroundColor: "#4B4B4B", flex: 1 }}>
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
      <View style={[{marginLeft: 10, marginRight: 10}]}>
      <List.AccordionGroup >
        <List.Accordion theme={{colors:{background:"#E9E9E1", primary:'#4B4B4B'}}} title="Personal Items" id="1"
        >
         
          <View style={{ backgroundColor: "#E9E9E1"}}>
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
        <List.Accordion theme={{colors:{background:"#E9E9E1", primary:'#4B4B4B'}}} title="House Fridge " id="2">
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
        <List.Accordion theme={{colors:{background:"#E9E9E1", primary:'#4B4B4B'}}} title="Work Fridge" id="3">
          <View style={{ backgroundColor: "white" }}>
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
      </View>
    </View>
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
    marginLeft: 10,
    marginBottom: 10,
    width: 350,
  },
});

export default HomeScreen;
