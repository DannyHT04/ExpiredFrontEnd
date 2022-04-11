import { Text, View } from 'react-native';
import { FC } from 'react';
import FooterComponent from '../Components/FooterComponent';

const HomeScreen: FC = () => {
    return (
        <View>
        <Text>Create Account</Text>
        <FooterComponent />
        </View>
    );
}

export default HomeScreen;