import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { PropsWithChildren, useState } from 'react';
import DiceOne from '../asset/One.png';
import DiceTwo from '../asset/Two.png';
import DiceThree from '../asset/Three.png';
import DiceFour from '../asset/Four.png';
import DiceFive from '../asset/Five.png';
import DiceSix from '../asset/Six.png';
import { trigger } from "react-native-haptic-feedback";
import Sound from 'react-native-sound';
type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>;

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};
const DiceImage = ({ imageUrl }: DiceProps) => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  );
};

const Dice = () => {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne);
const playDiceSound = () => {
    const diceSound = new Sound('dice_roll.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('Failed to load sound', error);
        return;
      }
      diceSound.play(() => {
        diceSound.release(); // free memory after playing
      });
    });
  };
  const rollDice = () => {
    const diceImages = [DiceOne, DiceTwo, DiceThree, DiceFour, DiceFive, DiceSix];
    const randomIndex = Math.floor(Math.random() * diceImages.length);
    setDiceImage(diceImages[randomIndex]);
    trigger("notificationSuccess", options);
    playDiceSound()
  };
  return (
    <View style={styles.container}>
      <DiceImage imageUrl={diceImage} />
      <TouchableOpacity onPress={rollDice}>
        <Text 
        style={styles.rollDiceBtnText}>Roll Dice</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Dice;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
    margin:10
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});
