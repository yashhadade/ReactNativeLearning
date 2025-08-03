import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function contactlist() {
  const users = [
    {
      uid: 1,
      name: "Alice Johnson",
      status: "Active",
      imageUrl: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      uid: 2,
      name: "Bob Smith",
      status: "Inactive",
      imageUrl: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
      uid: 3,
      name: "Carol Williams",
      status: "Active",
      imageUrl: "https://randomuser.me/api/portraits/women/3.jpg"
    },
    {
      uid: 4,
      name: "David Brown",
      status: "Pending",
      imageUrl: "https://randomuser.me/api/portraits/men/4.jpg"
    },
    {
      uid: 5,
      name: "Eve Davis",
      status: "Active",
      imageUrl: "https://randomuser.me/api/portraits/women/5.jpg"
    },
  ];

  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView style={styles.container}>
        {
          users.map(({ uid, status, name, imageUrl }) => (
            <View key={uid} style={styles.userCard}>
              <Image source={{ uri: imageUrl }} style={styles.userImage} />
              <View style={styles.textContainer}>
                <Text style={styles.userName}>{name}</Text>
                <Text style={styles.userStatus}>{status}</Text>
              </View>
            </View>
          ))
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize:24,
    fontWeight:"bold",
    paddingHorizontal:8
  },
  container: {
    paddingHorizontal:16,
    marginBottom:4
  },
  userCard: {
    flex:1,
    flexDirection:"row",
    alignItems:"center",
    marginBottom:3,
    backgroundColor:"#438c9bff",
    padding:4,
    borderRadius:8
  },
  userImage: {
   width:60,
   height:60,
   borderRadius:60/2,
   marginRight:14
  },
  textContainer: {
   
  },
  userName: {
   fontSize:16,
   fontWeight:"600",
   color:"#FFF"
  },
  userStatus: {
   fontSize:12,
   color:"#f5f5f5"
  }
});
