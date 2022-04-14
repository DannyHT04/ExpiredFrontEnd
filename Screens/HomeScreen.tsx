import { Text, View } from 'react-native';
import { FC } from 'react';
import { Modal, Portal, Button, Provider } from 'react-native-paper';
import ProfileModalComponent from '../Components/ProfileModalComponent';

const HomeScreen: FC = () => {
    return (
        <Provider>
        <View style={{margin:100, backgroundColor: "blue"}}>
        <Text>Home Screen </Text>
        <Text>Home Screen </Text>
        
        <Portal>
        <ProfileModalComponent />
        </Portal>
        
        </View>
        </Provider>
    );
}

export default HomeScreen;