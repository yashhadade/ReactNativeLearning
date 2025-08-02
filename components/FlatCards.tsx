import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const FlatCards = () => {
  return (
    <View style={style.FlatCards}>
      <Text style={style.headingText}>FlatCards</Text>
      <View style={style.threemainCard}>
        <View style={[style.card, style.cardOne]}>
          <Text>Red</Text>
        </View>
        <View style={[style.card, style.cardTwo]}>
          <Text>green</Text>
        </View>
        <View style={[style.card, style.cardThree]}>
          <Text>Yellow</Text>
        </View>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  headingText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#5d5858ff',
    paddingHorizontal: 8,
  },
  FlatCards: {
    padding: 10,
    backgroundColor: '#f7a7a7ff',
    borderRadius:10
  },
  threemainCard: {
    // flex:1,
    flexDirection: 'row',
    // gap:3
    justifyContent: 'space-around',
  },
  card: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems:"center",
    fontSize:25,
    borderRadius:6
  },
  cardOne: {
    backgroundColor:"#eb3232ff"
  },
  cardTwo: {
    backgroundColor:"#4edd31ff"
  },
  cardThree: {
    backgroundColor:"#ebd932ff"
  },
});
export default FlatCards;
