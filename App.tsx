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
import FlatCards from './components/FlatCards';

function App(): JSX.Element {
  const paddingTop = Platform.OS === 'android' ? StatusBar.currentHeight || 0 : 0;
  const [isDarkMode, setIsDarMode] = useState(useColorScheme() === 'dark');
  return (
    <SafeAreaView style={[{paddingTop}]}>
      <ScrollView>
      <FlatCards/>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
