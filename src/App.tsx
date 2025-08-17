import React, { JSX, useState } from 'react';
import {
  View,
  Text,
  // SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
  SafeAreaView,
  Platform,
  StatusBar,
  ScrollView,
} from 'react-native';
import FlatCards from '../components/FlatCards';
import Elevated from '../components/Elevated';
import FancyCard from '../components/FancyCard';
import ActionCards from '../components/ActionCards';
import Contactlist from '../components/contactlist';
import FormValidation from '../components/FormValidation';
import BackgroundColorChanger from '../components/BackgroundColorChanger';
import Dice from '../components/Dice';
import CurrencyCalculeter from '../components/CurrencyCalculeter';
import TickTakTo from '../components/TickTakTo';

//navigation
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"


//screen
import Home from './screens/Home';
import Details from './screens/Details';

export type RootStackParamList={
  Home:undefined;
  Details:{product:Product}
}
const Stack=createNativeStackNavigator<RootStackParamList>()
function App(): JSX.Element {
  const paddingTop =
    Platform.OS === 'android' ? StatusBar.currentHeight || 0 : 0;
  const [isDarkMode, setIsDarMode] = useState(useColorScheme() === 'dark');
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
<Stack.Screen 
name="Home"
component={Home}
options={{
  title:"Trending Products"
}}
/>
<Stack.Screen 
name="Details"
component={Details}
options={{
  title:"Product Details"
}}
/>
      </Stack.Navigator>
      {/* <Text style={{color:"#fff"}}>Hello</Text> */}
      {/* <ScrollView> */}
        {/* <TickTakTo/>
        <CurrencyCalculeter/>
        <Dice/>
        <BackgroundColorChanger/>
        <FormValidation/>
        <FlatCards />
        <Elevated />
        <FancyCard />
         <Contactlist/>
        <ActionCards/> */}
      {/* </ScrollView> */}
    </NavigationContainer>
  );
}

export default App;
