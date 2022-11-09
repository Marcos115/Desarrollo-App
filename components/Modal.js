// import {StyleSheet, Text, View, Pressable, Modal as NewModal} from 'react-native'
// import React from 'react'

// const Modal = (props) => {
//     const{isVisible, actionDeleteItem} = props;


//     return (
//         <NewModal animationType="fade" transparent={true} visible={isVisible}>
//             <View style={styles.centeredView}>
//                 <View style={{ backgroundColor: "white" }}>
//                     <Text>Queres eliminar este elemento?</Text>
//                     <Pressable onPress={() => actionDeleteItem()} style={{ backgroundColor: "red" }}>
//                         <Text style={styles.textStyle}>eliminar</Text>
//                     </Pressable>
//                 </View>
//             </View>
//         </NewModal>
//     )
// }

// export default Modal;

// const styles = StyleSheet.create({
// centeredView:{
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 22,
// },
// });

import { StyleSheet, Text, View, Pressable, Button, Modal as NewModal } from 'react-native'
import React from 'react'

const Modal = ({isVisible, actionDeleteItem}) => {
    // const {isVisible} = props
    return (
        <NewModal
            animationType="fade"
            transparent={true}
            visible={isVisible}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.")
                setModalVisible(!modalVisible)
            }}
        >
            <View>
                <View>
                    <Text style={styles.eliminar} >¿Desea eliminar el elemento seleccionado? </Text>
                    <Pressable>
                        <Button title="Eliminar" color="red" onPress={() => actionDeleteItem()} />
                    </Pressable>
                </View>
            </View>
        </NewModal>
    )
}

export default Modal

const styles = StyleSheet.create({
    eliminar: {
        marginLeft: 70,
        marginBottom: 15,
        marginTop: 600,
    },
})