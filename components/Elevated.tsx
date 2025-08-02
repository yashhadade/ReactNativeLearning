import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Elevated = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.headerText}>Elevated cards</Text>
      <ScrollView horizontal={true} style={styles.contanir}>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>me</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>to</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>Scroll</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>more...</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>more</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Elevated;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#f5f5f5',
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'Courier New',
  },
  card:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    width:100,
    height:100,
    borderRadius:10,
    margin:8,
  },
  cardElevated:{
    backgroundColor: '#ada5a5ff',
    elevation:10,
    shadowOffset:{
        width:1,
        height:1
    },
    shadowColor:"#ada5a5ff"
  },
  contanir:{
    padding:8,

  }
});
