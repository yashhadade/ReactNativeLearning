import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native';
import React from 'react';

export default function ActionCards() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View style={styles.maincontiner}>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.cards, styles.elevatedCard]}>
        <View style={styles.headingConainer}>
          <Text style={styles.headerText}>
            what's new in javaScript 21-ES12{' '}
          </Text>
        </View>
        <TouchableOpacity onPress={()=>{openWebsite("https://search.brave.com/search?q=intersepter+650&summary=1&conversation=403f4864b7296f92ec1ec8")}}>
        <Image
          source={{
            uri: 'https://royalenfield.pl/_astro/gallery-5.Dujy9A46_Z1RVjS3.jpg',
          }}
          style={styles.cardImage}
        />
        </TouchableOpacity>
        <View style={styles.bodyConatiner}>
          <Text numberOfLines={2}>
            The Royal Enfield Interceptor 650 is a naked middleweight retro
            motorbike with a 649cc engine that makes 47bhp, making it A2
            compliant. It was launched in 2017 and was debuted at EICMA, Milan
            by Royal Enfield CEO Siddhartha Lal and President, Rudratej Singh.
            The Interceptor 650 is a retro-cruiser with relaxed ergonomics,
            while the Continental GT is a café-racer. Both models are sold in
            India
          </Text>
        </View>
         <View style={styles.footerConatiner}>
          <TouchableOpacity onPress={()=>{openWebsite("https://search.brave.com/search?q=intersepter+650&summary=1&conversation=403f4864b7296f92ec1ec8")}}><Text style={styles.socialLink}>Read more</Text></TouchableOpacity>
          <TouchableOpacity onPress={()=>{openWebsite("https://www.instagram.com/yashh.04?igsh=ejQ3eXRzb3Juc3F3")}}><Text style={styles.socialLink}>Follow me</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  maincontiner: {
    backgroundColor: '#acababff',
    margin: 10,
    borderRadius: 10,
  },

  headingText: { 
    fontSize:24,
    fontWeight:"bold",
    paddingHorizontal:8
},
  cards: {
    width:350,
    height:340,
    borderRadius:6,
    marginVertical:12,
    marginHorizontal:16
  },
  elevatedCard: {
    backgroundColor:"#e6a742ff",
    elevation:3,
    shadowOffset:{
        width:1,
        height:1
    },
    shadowColor:"#cfa156ff",
    shadowOpacity:0.4,
    borderRadius:10
  },
  headerText: {
   color:"#ffffff",
   fontSize:16,
   fontWeight:"600"
  },
  headingConainer: {
    height:40,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center"
  },
  cardImage: {
    height: 190,
    // borderRadius:10,
  },
  bodyConatiner: {
    padding:10,

  },
  footerConatiner:{
    padding:8,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:'space-evenly'
  },
  socialLink:{
    fontSize:16,
    color:"#000000",
    backgroundColor:"#ffffff",
    padding:5,
    borderRadius:6,
    elevation:3,
    textDecorationLine:"underline"
  },
});
