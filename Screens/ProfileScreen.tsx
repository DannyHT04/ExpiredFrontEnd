import { Text, View, StyleSheet, Image } from 'react-native';
import { FC } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Logo from '../assets/Logo.png';

const ProfileScreen: FC = () => {
    return (
        <SafeAreaView style={styles.Bg}>
            <Text>Create Account test</Text>
            <Image source={Logo} style={{width: 104, height: 100}}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    Bg: {
        backgroundColor: "#4B4B4B",
        flex: 1,
        alignItems: "center"
    }

})

export default ProfileScreen;