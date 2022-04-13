import { Text, View, StyleSheet } from "react-native";
import { FC } from "react";
import { List } from 'react-native-paper';

const HomeScreen: FC = () => {
  return (
    //view container
    <View style={styles.container}>
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
      <View>
      <List.AccordionGroup>
    <List.Accordion title="Accordion 1" id="1" >
      
      <List.Item title="Item 1" />
    </List.Accordion>
    <List.Accordion title="Accordion 2" id="2">
      <List.Item title="Item 2" />
    </List.Accordion>
    <View>
      <Text>
        List.Accordion can be wrapped because implementation uses React.Context.
      </Text>
      <List.Accordion title="Accordion 3" id="3">
        <List.Item title="Item 3" />
      </List.Accordion>
    </View>
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
    alignItems: 'center'
  },
  bgBox:{
    backgroundColor: "#9A9B9A",
    width: 350,
    marginTop:100,
    marginBottom:650,
    flex:1,
    padding: 10
  }
});

export default HomeScreen;
