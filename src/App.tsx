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

function App(): JSX.Element {
  const paddingTop =
    Platform.OS === 'android' ? StatusBar.currentHeight || 0 : 0;
  const [isDarkMode, setIsDarMode] = useState(useColorScheme() === 'dark');
  return (
    <SafeAreaView style={[{ paddingTop }]}>
      <ScrollView>
        <TickTakTo/>
        <CurrencyCalculeter/>
        <Dice/>
        <BackgroundColorChanger/>
        <FormValidation/>
        <FlatCards />
        <Elevated />
        <FancyCard />
         <Contactlist/>
        <ActionCards/>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
