import { View, ImageBackground, TouchableOpacity, Text } from "react-native";

const CameraPreview = ({ navigation, route }) => {

  const reTake = () =>{
    navigation.navigate("CameraComp")
  }

  const saveImage = async () =>{
    //we are going to start off by getting the file type using a split.
    let fileType = route.params.pic.split(".")[1];
    //using FormData to be able to send out data over to the api correctly.
    let formData = new FormData();
    //Getting the file name using a regex (regular expression)
    let fileName = route.params.pic.replace(/^.*[\\\/]/, "");
    formData.append('photo', {uri:route.params.pic, name:fileName, type:`image/${fileType}`})
    //formData.append('photo', {uri: pictureURL, name:fileName, type:`image/${fileType}`})
    let res = await fetch("url", {
      method:"POST",
      headers: {
        'Accept':'application/json'
      },
      body:formData
    })
    let photoUrl = await res.text();
  }

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={{ height: 800, width: 500 }}
        source={{ uri: route.params.pic }}
      >
        <View style={{ flex: 1, flexDirection: "row" }}>
          <TouchableOpacity
            style={{ flex: 1, justifyContent: "flex-end", marginBottom: 100 }}
            onPress={() => {reTake}}
          >
            <Text
              style={{
                backgroundColor: "blue",
                color: "white",
                alignSelf: "center",
                padding: 10,
              }}
            >
              Re-Take
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, justifyContent: "flex-end", marginBottom: 100 }}
            onPress={() => {saveImage}}
          >
            <Text
              style={{
                backgroundColor: "black",
                color: "white",
                alignSelf: "center",
                padding: 10,
              }}
            >
              Save Photo
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default CameraPreview;
