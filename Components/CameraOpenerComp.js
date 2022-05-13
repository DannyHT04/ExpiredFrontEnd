import {React} from "react";
import { Button, View } from "react-native";

const CameraOpenerComp = ({navigation}) => {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Button title="Take Picture" onPress={() => navigation.navigate("CameraComp")}/>
    </View>
  );
}

export default CameraOpenerComp;
