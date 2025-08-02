import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View style={styles.fancyCard}>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://i.pinimg.com/originals/3a/da/4a/3ada4a9f0a6b0271e810fc50f73cfaea.jpg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Magnetic Hill</Text>
          <Text style={styles.cardLabel}>Ladakh</Text>
          <Text style={styles.cardDescription}>
            A mysterious stretch where vehicles appear to defy gravity —
            Magnetic Hill is a must-visit destination for every biker heading to
            Ladakh.
          </Text>
          <Text style={styles.cardFotter}>Ultimate Bike Adventure</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fancyCard: {
    margin:10,
    backgroundColor: '#d9d9d9ff',
    borderRadius: 10,
  
  },
  headingText: {
    fontSize: 24,
    paddingHorizontal: 10,
    fontWeight: 'bold',
  },
  card: {
    height: 360,
    // padding: 10,
  },
  cardElevated: {
    backgroundColor: '#b8acacff',
    margin: 10,
    borderRadius: 10,
    elevation: 3,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  cardImage: {
    flex: 1,
    height: 180,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardLabel: {
    fontSize: 14,
    marginBottom: 6,
  },
  cardDescription: {
    color: '#5a5a5aff',
    fontSize: 12,
    marginBottom: 12,
    marginTop: 6,
    flexShrink: 1,
  },
  cardFotter: {
    flex:1,
    justifyContent:"flex-end"
  },
});
