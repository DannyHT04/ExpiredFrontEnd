import { Text, View, StyleSheet, Image } from 'react-native';
import { FC } from 'react';
import { Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import Logo from '../assets/Logo.png';
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


const ProfileScreen: FC = () => {
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
        <SafeAreaView style={styles.Bg}>
            <View style={{ alignItems: "center" }}>
                <Image source={Logo} style={{ width: 104, height: 101 }} />
            </View>

            <View style={{ alignItems: "flex-start", paddingTop: 100 }}>
                <Button icon="account-edit" color="#E9E9E1"> Name </Button>
                <View style={styles.Pill}>
                    <Text style={styles.Text} onPress={() => console.log('Edit Name')}>Bobby</Text>
                </View>
                <Button icon="account-multiple-plus" color="#E9E9E1"> Groups </Button>
                <View style={styles.Pill}>
                    <Text style={styles.Text} onPress={() => console.log('View Group')}>Group 1</Text>
                </View>
                <View style={styles.Pill}>
                    <Text style={styles.Text}>Group 2</Text>
                </View>
            </View>
            <View style={{ alignItems: "center", marginTop: 50 }}>
                <Button icon="logout" color="#E9E9E1" onPress={() => console.log('Log Out')}> Log Out </Button>
            </View>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    Bg: {
        backgroundColor: "#4B4B4B",
        flex: 1
    },
    Text: {
        fontFamily: "RobotoSlab_400Regular",
        fontSize: 24,
        alignItems: "center",
        color: "#E9E9E1",

    },
    Pill: {
        padding: 15, backgroundColor: "#9A9B9A", borderRadius: 25, marginLeft: 30, marginBottom: 10, width: 370
    }

})

export default ProfileScreen;