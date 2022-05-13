import { React, useEffect, useRef } from "react";
import { View, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";

const CameraComp = ({navigation}) => {
  //This code block will be used to gain access to use the uers camera using the  requestCameraPermissionsAsync function provided by the camera object.
  useEffect(() => {
    __StartCamera();
  }, []);


  const __StartCamera = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status === "granted") {
      setStartCamera(true);
    }
  };

  let camera = useRef(Camera);


  const __takePicture = async () => {
    const photo = await camera.takePictureAsync();
    navigation.navigate("CameraPreview", {pic:photo.uri})
  }

  return (
    <>
      <Camera style={{flex:1, width:'100%'}} ref={(r) => {camera = r }}></Camera>

      <View
        style={{
          position: "absolute",
          bottom: 0,
          flexDirection: "row",
          flex: 1,
          width: "100%",
          padding: 20,
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            alignSelf: "center",
            flex: 1,
            alignItems: "cenrer",
          }}
        >
          <TouchableOpacity
            onPress={__takePicture}
            style={{
              width: 70,
              height: 70,
              bottom: 0,
              borderRadius: 50,
              backgroundColor: "#fff",
            }}
          />
        </View>
      </View>
    </>
  );
}

export default CameraComp;
