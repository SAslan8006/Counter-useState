import { Button, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React,{useState} from 'react';

function MyCustomButton(props){
  return  ( 
  <TouchableOpacity style={[styles.button,props.style]} onPress={props.onPress}>
    <Text style={styles.buttonText}>{props.title}</Text>
  </TouchableOpacity>
  );
}
export default function App() {
  const [count,setCount]=useState(0)
  const handleIncrement=()=>{
    setCount(count+1);
  }
  const handleDecrement=()=>{
    setCount(count-1);
  }
  return (
    <SafeAreaView style={styles.container}>
      {/* <Image style={styles.image} source={require('./assets/icon.png')} /> */}
      <Image style={styles.image} source={{uri:"https://wallpapercave.com/wp/wp4923981.jpg"}} />

      <Text style={styles.text}>Conter: {count}</Text>
      <Text style={styles.subtitle}>Click buttons to change the counter</Text>
      {/* <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Increment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button,{marginStart:12}]}>
            <Text style={styles.buttonText}>Decrement</Text>
        </TouchableOpacity>
      </View> */}
      <View style={styles.buttonContainer}>
        <MyCustomButton title="Increment +" onPress={handleIncrement} />
        <MyCustomButton  title="Decrement -" style={{backgroundColor:"pink",marginStart:12}} onPress={handleDecrement} />
      </View>
      {/* <View style={styles.button}>
        <Button title="Increment"/>
        <Button title="Decrement"/>
      </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin:16,
  },
  text:{
    fontSize:30,
    marginTop:16,
  },
  image:{
    height:180,
    borderRadius:12,
  },
  subtitle:{
    fontSize:20,
    color:"gray",
    marginTop:4,
  },
  buttonContainer:{
    marginTop:16,
    flexDirection:'row',
  },
  button:{
    backgroundColor:"lightblue",
    borderRadius:12,
    padding:12,
    marginLeft:12,
    alignItems:'center',
    flex:1,
  },
  buttonText:{
    fontSize:20,
    color:'black'
  }
});
