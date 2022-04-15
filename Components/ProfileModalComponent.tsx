// import * as React from 'react';
// import { Modal, Portal, Text, Button, Provider } from 'react-native-paper';

// const ProfileModalComponent = () => {
//   const [visible, setVisible] = React.useState(false);

//   const showModal = () => setVisible(true);
//   const hideModal = () => setVisible(false);
//   const containerStyle = {backgroundColor: '#303030', padding: 20};

//   return (
//     <Provider>
//       <Portal>
//         <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
//           <Text style={{color: "white"}}>Edit Name:</Text>
//         </Modal>
//       </Portal>
//       <Button style={{marginTop: 30}} onPress={showModal}>
//         Show
//       </Button>
//     </Provider>
//   );
// };

// export default ProfileModalComponent;