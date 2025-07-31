import React, { JSX, useState } from "react";
import { View, Text, SafeAreaView, StyleSheet,TouchableOpacity,useColorScheme} from "react-native";

function App():JSX.Element {
  const [isDarkMode,setIsDarMode]=useState(useColorScheme()==="dark")
  return (
    <View style={style.constiner}>
<Text style={isDarkMode?style.whiteText:style.blackText}> Hello world </Text>
    </View>
  );
}

const style= StyleSheet.create({
  constiner:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    // backgroundColor:"#f5f5f5"
  },
  whiteText:{
    color:"#f5f5f5"
  },
  blackText:{
    color:"#070707ff"
  }
})

export default App;
