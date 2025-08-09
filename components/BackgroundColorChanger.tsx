import { Text, StyleSheet, View, StatusBar, TouchableOpacity } from 'react-native'
import React, { Component, useState } from 'react'

export default function  BackgroundColorChanger () {
const [color, setColor] = useState("#ffffff")
  const generateColor=()=>{
    const hexRange="0123456789ABCDEF"
    let color ="#"

    for (let index = 0; index < 6; index++) {
       color+=hexRange[Math.floor(Math.random()*16)]
        
    }
    setColor(color) 
  }

    return (
      <>
      <StatusBar backgroundColor={color}/>
      <View style={[styles.container,{backgroundColor:color}]}>
        <TouchableOpacity onPress={generateColor} >
            <View style={styles.actionButton} >
                <Text style={styles.actionButtonText}>
                   Color changer
                </Text>
            </View>
        </TouchableOpacity>
      </View>
      </>
    )
  
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    actionButton:{
        borderRadius:12,
        backgroundColor:"#dd52aaff",
        padding:10
    },
    actionButtonText:{
        fontSize:24,
        color:"#FFFFFF",
       // textTransform:"uppercase"
    }
})