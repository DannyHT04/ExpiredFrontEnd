import { Text, View, StyleSheet } from "react-native";
import { FC } from "react";

const HomeScreen: FC = () => {
  return (
    //view container
    <View style={styles.container}>
      <View style={styles.row}>
        <Text>Instructions</Text>

        <Text>1. Select the plus icon in the top right corner </Text>
        <Text>
          2. Insert Product Name, Best Used by, Owner & if you'd like to change
          your notification. Select Add
        </Text>
        <Text>
          3. Now your product is successfully entered & if you'd like to add to
          your Grocery List select the icon on
        </Text>
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
    backgroundColor: "white",
  },
  row: {
    flex: 1,
    flexDirection: "column",
  },
  bgBox:{
    backgroundColor: "grey"
  }
});

export default HomeScreen;
