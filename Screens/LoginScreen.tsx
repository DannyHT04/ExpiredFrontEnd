import {View, Text} from 'react-native';
import {FC} from 'react';
import HomeScreen from './HomeScreen';

const LoginScreen: FC = () => {

    return(
        <View>
            <Text>Login</Text>
            <HomeScreen />
            
        </View>
    );
}
export default LoginScreen;