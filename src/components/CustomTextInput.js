import { StyleSheet, Text, TouchableOpacity, View ,TextInput} from 'react-native'
import React, { useState } from 'react'
import Ionicons from "react-native-vector-icons/dist/Ionicons"
import colors from '../themes/Colors'


const CustomTextInput = ({ onChangeText,value}) => {
    
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.inputContainer}>
        <Ionicons style={styles.img} 
        name="search" size={25}  />
        <TextInput placeholder='Task ara'
        placeholderTextColor={"grey"}
        value={value}
         onChangeText={onChangeText}
         style={styles.textinput}/>
      </View>
    </TouchableOpacity>
  )
}

export default CustomTextInput

const styles = StyleSheet.create({
    container:{
        marginHorizontal:10,
        marginBottom:15,
        marginTop:10
    },
    inputContainer:{
        backgroundColor:"white",
        flexDirection:"row",
        alignItems:"center",
        borderRadius:10,
        padding:15,
        borderWidth:1,
        borderColor:"#dbd9d9"
    },
    img:{
        marginLeft:5
    },
    textinput:{
        marginLeft:10,
        flex:1,
        padding:0
    }
})