import { Text, View, StyleSheet, Image } from 'react-native';
import { FC } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Logo from '../assets/Logo.png';

const ProfileScreen: FC = () => {
    return (
        <SafeAreaView style={styles.Bg}>
            <Image source={Logo} style={{width: 104, height: 101}}/>
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