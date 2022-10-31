import { setStatusBarBackgroundColor, StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola Coder</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


// export default function App() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.itemContainer }>
//         <TextInput placeholder='Add Item' style={styles.inputItem} />
//         <Button title="Agregar" color={"#841584"} />
//       </View>
//       <View style={styles.container}>
//         <TextInput placeholder='Add Item' style={styles.inputItem}/>
//         <TextInput placeholder='Add Item'style={styles.inputItem}/>
//         <TextInput placeholder='Add Item'style={styles.inputItem}/>
//       </View>
//     </View>
//   );
// }


// const styles = StyleSheet.create({
// container:{
//   padding: 30,
//   marginTop: 50,
// },
// itemContainer:{
//   flexDirection: "row", 
//   justifyContent: "center", 
//   alignItems: "center",
// },
// inputItem:{
//   borderBottomColor: "black", 
//   borderBottomWidth: 10,
//   width: 200,
// }
// });
