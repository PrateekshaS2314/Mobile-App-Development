import { Text, View, Image, Button, TouchableOpacity, Alert, Pressable, SafeAreaView } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'


const App = () => {


  // applying style using JS object method - 2
   const style = {
    container:{
      flex:1,  // used to make it full screeenn
      backgroundColor:"rgb(122, 175, 255)",
       color:"green"
      }
   }
  return (
    // SafeAreaView is used to give some padding to out container
    // imp for ios coz they provide some space up side of the screen


    <SafeAreaView style={style.container}>
      <Text style={styles.text}>Hello User!</Text>
      <Text style={styles.text}>Welcome Back!</Text>


      {/* inline css */}
      <Image
        source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLat8bZvhXD3ChSXyzGsFVh6qgplm1KhYPKA&s" }}
        style={{ height: 200, width: 200 }}
      />


      <Button title='Press Me'>
      </Button>


      <TouchableOpacity style={{ padding: 20, backgroundColor: 'red' }}
        onPress={() => Alert.alert("You pressed me!!!")}
        onMagicTap={() => Alert.alert("Magic tap activated")}
        onLongPress={() => Alert.alert("Hey techie you did long press!")}
      >
        <Text>Press me Too</Text>
      </TouchableOpacity>


      <Pressable style={styles.button}
        onPress={() => Alert.alert('Heyy!!')}
      >
        <Text style={styles.btnTxt}>Pressable</Text>
      </Pressable>


      <Pressable>
        <Text >Hiiii</Text>
      </Pressable>


    </SafeAreaView>
  )
}
export default App


// method -3 using stylesheet


const styles = StyleSheet.create({
  container: {
    flex: 1,  // used to make it full screeenn another method you can use height and width make it to 100%
    backgroundColor: "#d4cd99ff",
    color: "White",
    // justifyContent:"center" //vertically
    //alignItems:"center" // horizontally
  },
  //  you can add more than one object in a single sheet by separsting comma.
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold"
  },
  //  we can style our buttons using stylesheet like below
  button: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#c300ff",
    height: 50,
    width: 100,
    margin: 20,
    alignSelf: "center" // it will align a single item
  },
  btnTxt: {
    color: "darkpurple",
    fontWeight: "600",
  }
});
